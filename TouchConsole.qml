import QtQuick
import "I18n.js" as I18n
import QtQuick.Controls as Controls
import QtQuick.Layouts
import Quickshell
import Quickshell.Io
import Quickshell.Wayland
import Quickshell.Hyprland
import Quickshell.Services.Mpris

Item {
    id: root
    StickyNotes { id: stickyNotes; output: root.targetOutput; language: root.language; suppressed: root.menuOpen || root.compact }
    property var preferences: ({history:{},language:"auto"})
    readonly property string language: preferences.language==="auto" ? (Qt.locale().name.indexOf("zh")===0?(Qt.locale().name.indexOf("TW")>=0?"zh_TW":"zh_CN"):"en") : (preferences.language||"en")
    function tr(key){return I18n.text(language,key)}
    property var menuEntries:[]
    property var dataQueue:[]
    property string lastApp:""
    function updateData(args) {
        if(dataProcess.running){dataQueue=dataQueue.concat([args]);return}
        dataProcess.command=["python3",Qt.resolvedUrl("data.py").toString().replace("file://","")].concat(args);dataProcess.running=true
    }
    function recordApp(id){if(id)updateData(["record",id])}
    function trackActive(){
        var w=ToplevelManager.activeToplevel
        if(!w||w.title==="Vowise Floating Widget")return
        var key=w.appId.toLowerCase()
        var entry=DesktopEntries.applications.values.find(function(e){return e.id.toLowerCase()===key||e.startupClass.toLowerCase()===key})
        if(entry&&entry.id!==lastApp){lastApp=entry.id;recordApp(entry.id)}
    }
    function sortedApps(){return DesktopEntries.applications.values.filter(function(e){return !e.noDisplay&&["avahi-discover", "bssh", "btop", "bvnc", "cmake-gui", "cups", "dropbox", "electron34", "electron36", "electron37", "fcitx5-configtool", "fcitx5-wayland-launcher", "foot-server", "footclient", "hermes", "java-java-openjdk", "jconsole-java-openjdk", "jshell-java-openjdk", "kbd-layout-viewer5", "kcm_fcitx5", "kcm_kaccounts", "kvantummanager", "libreoffice-base", "libreoffice-draw", "libreoffice-math", "libreoffice-startcenter", "libreoffice-xsltfilter", "limine-snapper-restore", "lstopo", "org.fcitx.Fcitx5", "org.fcitx.fcitx5-config-qt", "org.fcitx.fcitx5-migrator", "org.fcitx.fcitx5-qt5-gui-wrapper", "org.fcitx.fcitx5-qt6-gui-wrapper", "qv4l2", "qvidcap", "uuctl", "xgps", "xgpsspeed"].indexOf(e.id)<0}).sort(function(a,b){return ((preferences.history||{})[b.id]||0)-((preferences.history||{})[a.id]||0)||a.name.localeCompare(b.name)})}
    function launchEntry(e){recordApp(e.id);menuOpen=false;Quickshell.execDetached(["uwsm-app","--","gtk-launch",e.id+".desktop"])}
    function cycleLanguage(){var langs=["en","zh_CN","zh_TW"];updateData(["language",langs[(langs.indexOf(language)+1)%langs.length]])}
    Process {
        id:dataProcess
        stdout:StdioCollector {onStreamFinished:{try{root.preferences=JSON.parse(text)}catch(e){}}}
        onExited:if(root.dataQueue.length){var args=root.dataQueue[0];root.dataQueue=root.dataQueue.slice(1);root.updateData(args)}
    }
    Component.onCompleted:{root.updateData(["read"]);Qt.callLater(root.trackActive)}
    Connections {target:ToplevelManager;function onActiveToplevelChanged(){root.trackActive()}}
    property bool menuOpen:false
    onMenuOpenChanged:if(menuOpen){menuEntries=sortedApps()}
    onCompactChanged:if(compact)menuOpen=false
    readonly property var workspaceIds: {
        var ids=(stats.config&&Array.isArray(stats.config.workspaces)?stats.config.workspaces:[1,2,3,4,5,6]).slice()
        Hyprland.workspaces.values.forEach(function(ws){if(ws.id>0&&ids.indexOf(ws.id)<0)ids.push(ws.id)})
        return ids.sort(function(a,b){return a-b})
    }
    property var stats: ({spanning:false,temperature:"—",battery:"—",volume:"—"})
    readonly property bool compact: stats.spanning
    readonly property string helper: Qt.resolvedUrl("backend.py").toString().replace("file://","")
    readonly property var settings: stats.config||({})
    readonly property string targetOutput: settings.output|| (Quickshell.screens.length?Quickshell.screens[Quickshell.screens.length-1].name:"")
    readonly property bool spanAvailable: !!settings.spanCommand
    property var player: Mpris.players.values.length ? (Mpris.players.values.find(function(p){return p.isPlaying})||Mpris.players.values[0]) : null
    property var pendingActions: []
    function act(args) {
        if(action.running) {
            pendingActions=pendingActions.filter(function(a){return a[0]!==args[0]}).concat([args]);return
        }
        action.command=["python3",helper].concat(args);action.running=true
    }
    function workspace(n) {
        var ws=Hyprland.workspaces.values
        for(var i=0;i<ws.length;i++) if(ws[i].id===n) return ws[i]
        return null
    }
    function appNames(clients) {
        var aliases={"com.vowise.mobile":"Vowise","google-chrome":"Chrome","chatgpt":"ChatGPT","mattermost-desktop":"Mattermost","antigravity":"Antigravity","org.gnome.Nautilus":root.tr("files"),"foot":root.tr("terminal")}
        var names=[]
        clients.forEach(function(w) {
            var key=w.lastIpcObject.class||w.lastIpcObject.initialClass||""
            var name=key.startsWith("chrome-127.0.0.1__")?"Memo":(aliases[key]||key.split(".").pop()||root.tr("app"))
            if(names.indexOf(name)<0)names.push(name)
        })
        return names.join(" · ")
    }
    function windows(ws) {
        if(!ws) return []
        return ws.toplevels.values.filter(function(w) { return w.title!=="Vowise Floating Widget" && !w.lastIpcObject.hidden })
    }
    Process { id:action; onExited: { if(root.pendingActions.length) { var next=root.pendingActions[0];root.pendingActions=root.pendingActions.slice(1);root.act(next) } else if(!status.running) status.running=true } }
    Process {
        id:status; command:["python3",root.helper,"status"];running:true
        stdout:StdioCollector { onStreamFinished: { try { var next=JSON.parse(text);root.stats=next }catch(e){} } }
    }
    Timer { interval:5000;running:true;repeat:true;onTriggered: {if(!status.running&&!action.running)status.running=true} }
    Variants {
        model:Quickshell.screens
        delegate:PanelWindow {
            id:panel
            required property var modelData
            screen:modelData
            visible:modelData.name===root.targetOutput
            anchors { bottom:!root.compact;right:true;left:!root.compact }
            implicitWidth:root.compact?56:0
            implicitHeight:root.compact?56:120
            color:"transparent"
            exclusionMode:root.stats.spanning?ExclusionMode.Ignore:ExclusionMode.Auto
            WlrLayershell.namespace:"touch-console-plugin"
            WlrLayershell.layer:WlrLayer.Overlay
            WlrLayershell.keyboardFocus:WlrKeyboardFocus.None
            Rectangle {
                anchors.fill:parent;anchors.margins:root.compact?4:8
                radius:root.compact?14:20
                color:"#f51b2427";border.width:1;border.color:"#425354"
                TouchButton {
                    visible:root.compact
                    anchors.centerIn:parent;width:44;height:44
                    label:"↙";labelSize:24;accent:true
                    Accessible.name:root.tr("restore")
                    onClicked:root.act(["restore"])
                }
                RowLayout {
                    visible:!root.compact
                    anchors.fill:parent;anchors.margins:8;spacing:8
                    Row {
                        Layout.preferredWidth:130;spacing:6
                        Column {
                            width:80;spacing:5
                            Repeater {
                                model:[{label:"CPU",value:root.stats.cpu||"—"},{label:root.tr("memory"),value:root.stats.memory||"—"},{label:root.tr("temperature"),value:root.stats.temperature},{label:root.tr("fan"),value:root.stats.fan||"—",fan:true}]
                                delegate:Row {
                                    required property var modelData
                                    Text {width:25;text:modelData.label;color:"#91aaa1";font.pixelSize:10}
                                    Column {width:55;spacing:0
                                        Text {width:55;text:modelData.fan?String(modelData.value).replace(/\s*RPM/i,""):modelData.value;color:"#dbf4e6";font.pixelSize:10;horizontalAlignment:Text.AlignRight}
                                        Text {visible:!!modelData.fan&&String(modelData.value).indexOf("RPM")>=0;width:55;text:"RPM";color:"#91aaa1";font.pixelSize:8;horizontalAlignment:Text.AlignRight}
                                    }
                                }
                            }
                        }
                        Column {
                            width:44;spacing:4
                            Repeater {
                                model:[{name:root.tr("saver"),mode:"power-saver"},{name:root.tr("balanced"),mode:"balanced"},{name:root.tr("performance"),mode:"performance"}]
                                delegate:TouchButton {
                                    required property var modelData
                                    width:44;height:23;radius:7;label:modelData.name;labelSize:10
                                    accent:root.stats.powerProfile===modelData.mode
                                    onClicked:root.act(["profile",modelData.mode])
                                }
                            }
                        }
                    }
                    Rectangle {Layout.preferredWidth:1;Layout.fillHeight:true;Layout.topMargin:5;Layout.bottomMargin:5;color:"#364647"}
                    RowLayout {
                        Layout.fillWidth:true;spacing:6
                        TouchButton {Layout.preferredWidth:28;height:64;label:"‹";labelSize:24;visible:workspaceList.contentWidth>workspaceList.width;enabled:!workspaceList.atXBeginning;opacity:enabled?1:.3;onClicked:workspaceList.contentX=Math.max(0,workspaceList.contentX-204)}
                        ListView {
                            id:workspaceList
                            Layout.fillWidth:true;Layout.preferredHeight:76
                            orientation:ListView.Horizontal;spacing:8;clip:true
                            boundsBehavior:Flickable.StopAtBounds
                            snapMode:ListView.SnapToItem
                            model:root.workspaceIds
                            onModelChanged: Qt.callLater(function() {
                                if(Hyprland.focusedWorkspace) {
                                    var index=root.workspaceIds.indexOf(Hyprland.focusedWorkspace.id)
                                    if(index>=0)workspaceList.positionViewAtIndex(index,ListView.Contain)
                                }
                            })
                            delegate:WorkspaceCard {required property int modelData;number:modelData;width:94;height:72}
                            Connections {
                                target:Hyprland
                                function onFocusedWorkspaceChanged() {
                                    if(Hyprland.focusedWorkspace) {
                                        var index=root.workspaceIds.indexOf(Hyprland.focusedWorkspace.id)
                                        if(index>=0)workspaceList.positionViewAtIndex(index,ListView.Contain)
                                    }
                                }
                            }
                        }
                        TouchButton {Layout.preferredWidth:28;height:64;label:"›";labelSize:24;visible:workspaceList.contentWidth>workspaceList.width;enabled:!workspaceList.atXEnd;opacity:enabled?1:.3;onClicked:workspaceList.contentX=Math.min(Math.max(0,workspaceList.contentWidth-workspaceList.width),workspaceList.contentX+204)}
                    }
                    Rectangle {Layout.preferredWidth:1;Layout.fillHeight:true;Layout.topMargin:5;Layout.bottomMargin:5;color:"#364647"}
                    Column {
                        Layout.preferredWidth:284;spacing:4
                        Row {
                            spacing:8
                            LevelControl {width:246;height:26;caption:root.tr("brightness");reading:root.stats.brightnessPercent===undefined?100:root.stats.brightnessPercent;minimum:5;tint:"#e8c68e";enabled:root.stats.brightnessPercent!==null;onCommitted:value=>root.act(["brightness",value+"%"])}
                            ScreenOffButton {width:30;height:26;onClicked:{root.menuOpen=false;root.act(["screen-off"])}}
                        }
                        Row {
                            spacing:8
                            LevelControl {width:246;height:26;caption:root.tr("volume");reading:root.stats.volumePercent||0;tint:"#b8dacb";onCommitted:value=>root.act(["volume",value+"%"])}
                            MuteButton {width:30;height:26;onClicked:root.act(["mute"])}
                        }
                        Item {
                            width:284;height:28
                            TouchButton {x:0;width:54;height:28;label:"＋ Memo";labelSize:10;onClicked:{root.menuOpen=false;stickyNotes.run({op:"add"})}}
                            Row {
                                x:68;width:146;spacing:5
                                TrackButton {nextTrack:false;enabled:root.player!==null&&root.player.canGoPrevious;opacity:enabled?1:.35;onClicked:root.player.previous()}
                                TouchButton {width:80;height:28;radius:8;label:root.player&&root.player.isPlaying?"Ⅱ":"▶";accent:true;enabled:root.player!==null;opacity:enabled?1:.4;onClicked:root.player.togglePlaying()}
                                TrackButton {nextTrack:true;enabled:root.player!==null&&root.player.canGoNext;opacity:enabled?1:.35;onClicked:root.player.next()}
                            }
                            TouchButton {x:218;width:30;height:28;label:"↕";labelSize:19;Accessible.name:root.tr("span");visible:root.spanAvailable;onClicked:root.act(["span"])}
                            TouchButton {x:254;width:30;height:28;label:"☰";labelSize:17;accent:root.menuOpen;onClicked:root.menuOpen=!root.menuOpen}
                        }
                    }

                }
            }
        }
    }
    Variants {
        model:Quickshell.screens
        delegate:PanelWindow {
            required property var modelData
            screen:modelData
            visible:root.menuOpen&&!root.compact&&modelData.name===root.targetOutput
            anchors {bottom:true;right:true;left:true}
            margins {bottom:120;right:12;left:12}
            implicitHeight:184
            exclusionMode:ExclusionMode.Ignore;color:"transparent"
            WlrLayershell.namespace:"touch-console-plugin-menu"
            WlrLayershell.layer:WlrLayer.Overlay
            WlrLayershell.keyboardFocus:WlrKeyboardFocus.OnDemand
            Rectangle {
                anchors.fill:parent;radius:18;color:"#fc1b2427";border.color:"#52665d";border.width:1
                Column {
                    anchors.fill:parent;anchors.margins:12;spacing:8
                    Row {
                        width:parent.width;spacing:8
                        Text {width:parent.width-504;height:28;verticalAlignment:Text.AlignVCenter;text:root.tr("menu");color:"#d6e9dd";font.pixelSize:12}
                        TouchButton {width:76;height:28;label:root.tr("browser");onClicked:{root.menuOpen=false;root.act(["browser"])}}
                        TouchButton {width:64;height:28;label:root.tr("files");onClicked:{root.menuOpen=false;root.act(["files"])}}
                        TouchButton {width:64;height:28;label:root.tr("terminal");onClicked:{root.menuOpen=false;Quickshell.execDetached(["omarchy","launch","terminal"])}}
                        TouchButton {width:76;height:28;label:root.tr("monitor");onClicked:{root.menuOpen=false;Quickshell.execDetached(["omarchy","launch","terminal","btop"])}}
                        TouchButton {width:76;height:28;label:root.tr("night");onClicked:Quickshell.execDetached(["omarchy","toggle","nightlight"])}
                        TouchButton {width:52;height:28;label:root.language==="en"?"EN":root.language==="zh_CN"?"简中":"繁中";onClicked:root.cycleLanguage()}
                        TouchButton {width:40;height:28;label:"×";onClicked:root.menuOpen=false}
                    }
                    GridView {
                        width:parent.width;height:120;clip:true;cellWidth:width/Math.max(1,Math.floor(width/108));cellHeight:40
                        boundsBehavior:Flickable.StopAtBounds
                        model:root.menuEntries
                        Controls.ScrollBar.vertical:Controls.ScrollBar {policy:Controls.ScrollBar.AlwaysOn}
                        delegate:Rectangle {
                            required property var modelData
                            width:104;height:36;radius:7;color:appTap.pressed?"#506e60":"#2c3a3e"
                            Image {x:6;y:8;width:20;height:20;source:Quickshell.iconPath(modelData.icon,true);sourceSize.width:32;sourceSize.height:32}
                            Text {x:31;y:2;width:69;height:32;text:modelData.name;wrapMode:Text.Wrap;maximumLineCount:2;elide:Text.ElideRight;verticalAlignment:Text.AlignVCenter;color:"#deebe3";font.pixelSize:10}
                            TapHandler {id:appTap;gesturePolicy:TapHandler.DragThreshold;onTapped:root.launchEntry(modelData)}
                        }
                    }
                }
            }
        }
    }
    component ScreenOffButton:Rectangle {
        id:screenButton
        signal clicked()
        radius:8;color:screenTap.pressed?"#74664d":"#303e42";border.color:"#46575a"
        Accessible.name:root.tr("screenOff")
        Rectangle {anchors.centerIn:parent;anchors.verticalCenterOffset:-2;width:16;height:10;radius:2;color:"transparent";border.width:1.4;border.color:"#e8c68e"}
        Rectangle {anchors.horizontalCenter:parent.horizontalCenter;y:parent.height/2+3;width:2;height:4;color:"#e8c68e"}
        Rectangle {anchors.horizontalCenter:parent.horizontalCenter;y:parent.height/2+7;width:9;height:1.4;color:"#e8c68e"}
        TapHandler {id:screenTap;onTapped:screenButton.clicked()}
    }
    component MuteButton:Rectangle {
        id:muteButton
        signal clicked()
        radius:9;color:root.stats.muted?"#a77564":"#303e42";border.color:"#46575a"
        Accessible.name:root.tr(root.stats.muted?"unmute":"mute")
        Canvas {
            id:muteCanvas;anchors.centerIn:parent;width:18;height:16
            onPaint:{var c=getContext("2d");c.reset();c.fillStyle="#e1ebe5";c.strokeStyle="#e1ebe5";c.lineWidth=1.6;c.fillRect(1,5,4,6);c.beginPath();c.moveTo(4,5);c.lineTo(9,1);c.lineTo(9,15);c.lineTo(4,11);c.closePath();c.fill();c.beginPath();if(root.stats.muted){c.moveTo(12,5);c.lineTo(17,11);c.moveTo(17,5);c.lineTo(12,11)}else{c.arc(9,8,6,-.8,.8)}c.stroke()}
            Connections {target:root;function onStatsChanged(){muteCanvas.requestPaint()}}
        }
        TapHandler {onTapped:muteButton.clicked()}
    }
    component TrackButton:Rectangle {
        property bool nextTrack:false
        signal clicked()
        width:28;height:28;radius:9;color:trackTap.pressed?"#668d84":"#303e42";border.color:"#46575a";border.width:1
        Canvas {
            anchors.centerIn:parent;width:14;height:12
            onPaint:{
                var c=getContext("2d");c.reset();c.fillStyle="#dce8e0"
                if(parent.nextTrack){c.fillRect(12,1,2,10);c.beginPath();c.moveTo(1,1);c.lineTo(10,6);c.lineTo(1,11)}
                else{c.fillRect(0,1,2,10);c.beginPath();c.moveTo(13,1);c.lineTo(4,6);c.lineTo(13,11)}
                c.closePath();c.fill()
            }
        }
        TapHandler {id:trackTap;onTapped:parent.clicked()}
    }
    component LevelControl:Item {
        id:level
        property string caption
        property real reading:0
        property real minimum:0
        property color tint
        signal committed(int value)
        Text {anchors.left:parent.left;anchors.verticalCenter:parent.verticalCenter;width:66;elide:Text.ElideRight;text:level.caption;color:"#a9bdb3";font.pixelSize:9}
        Controls.Slider {
            id:slider;anchors.left:parent.left;anchors.leftMargin:68;anchors.right:parent.right;anchors.rightMargin:32;height:parent.height;from:level.minimum;to:100;stepSize:1
            Binding {target:slider;property:"value";value:level.reading;when:!slider.pressed}
            onMoved:if(!liveUpdate.running)liveUpdate.start()
            onPressedChanged:if(!pressed) {liveUpdate.stop();level.committed(Math.round(value))}
            Timer {id:liveUpdate;interval:90;repeat:false;onTriggered:level.committed(Math.round(slider.value))}
            background:Rectangle {
                x:slider.leftPadding;y:(slider.height-height)/2;width:slider.availableWidth;height:10;radius:5;color:"#35474a"
                Rectangle {width:Math.max(10,slider.visualPosition*parent.width);height:parent.height;radius:5;color:level.tint}
            }
            handle:Rectangle {
                x:slider.leftPadding+slider.visualPosition*(slider.availableWidth-width);y:(slider.height-height)/2
                width:20;height:20;radius:10;color:slider.pressed?"#ffffff":level.tint;border.width:2;border.color:"#22352e"
            }
        }
        Text {anchors.right:parent.right;anchors.verticalCenter:parent.verticalCenter;text:Math.round(slider.value)+"%";color:level.tint;font.pixelSize:10}
    }
    component WorkspaceCard:Rectangle {
        id:card
        property int number:1
        readonly property var ws:root.workspace(number)
        readonly property var clients:root.windows(ws)
        readonly property bool selected:ws?ws.active:false
        readonly property var monitorInfo:ws&&ws.monitor?ws.monitor.lastIpcObject:({})
        readonly property real sourceWidth:monitorInfo.width?monitorInfo.width/monitorInfo.scale:1280
        readonly property real sourceHeight:monitorInfo.height?monitorInfo.height/monitorInfo.scale:720
        radius:11;color:selected?"#314a43":"#263237";border.width:selected?2:1;border.color:selected?"#b7ddc8":"#3d4c50"
        Rectangle {
            id:preview
            anchors.left:parent.left;anchors.right:parent.right;anchors.top:parent.top
            anchors.margins:3;height:card.height-20
            color:"#121c20";radius:6;clip:true
            Text {anchors.centerIn:parent;text:root.tr("emptyWorkspace");color:"#627a79";font.pixelSize:11;visible:card.clients.length===0}
            Repeater {
                model:card.clients
                delegate:Rectangle {
                    id:mini
                    required property var modelData
                    readonly property var info:modelData.lastIpcObject
                    x:info.at?Math.max(0,(info.at[0]-(card.monitorInfo.x||0))/card.sourceWidth*preview.width):0
                    y:info.at?Math.max(0,(info.at[1]-(card.monitorInfo.y||0))/card.sourceHeight*preview.height):0
                    width:info.size?Math.min(preview.width,info.size[0]/card.sourceWidth*preview.width):preview.width
                    height:info.size?Math.min(preview.height,info.size[1]/card.sourceHeight*preview.height):preview.height
                    color:"#3d4c50";border.color:"#77908c";border.width:1
                    ScreencopyView {
                        id:capture
                        anchors.fill:parent;anchors.margins:1
                        captureSource:mini.modelData.wayland
                        live:false;paintCursor:false
                        constraintSize:Qt.size(width*2,height*2)
                        
                    }
                    Text {anchors.centerIn:parent;width:parent.width-4;elide:Text.ElideRight;horizontalAlignment:Text.AlignHCenter;text:mini.modelData.title;color:"#d4dfdc";font.pixelSize:8;visible:!capture.hasContent}
                    Timer {interval:!capture.hasContent?1200:card.selected?4000:15000+card.number*120;running:card.visible&&!root.compact;repeat:true;onTriggered:capture.captureFrame()}
                }
            }
        }
        Text {anchors.left:parent.left;anchors.leftMargin:9;anchors.bottom:parent.bottom;anchors.bottomMargin:3;text:String(card.number);font.pixelSize:9;font.weight:Font.DemiBold;color:card.selected?"#dbf4e6":"#adbeb9"}
        Text {anchors.left:parent.left;anchors.leftMargin:20;anchors.right:parent.right;anchors.rightMargin:4;anchors.bottom:parent.bottom;anchors.bottomMargin:2;height:14;text:card.clients.length?root.appNames(card.clients):root.tr("empty");font.pixelSize:8;minimumPixelSize:7;fontSizeMode:Text.Fit;wrapMode:Text.NoWrap;maximumLineCount:1;elide:Text.ElideRight;verticalAlignment:Text.AlignVCenter;color:"#bbcec5"}

        TapHandler {gesturePolicy:TapHandler.DragThreshold;onTapped:root.act(["workspace",String(card.number)])}
    }
    component TouchButton:Rectangle {
        id:button
        property string label:""
        property bool accent:false
        property int labelSize:12
        signal clicked()
        radius:10;color:tap.pressed?"#668d84":accent?"#b8dacb":"#303e42"
        border.width:1;border.color:accent?"#c4ead9":"#46575a"
        Text {anchors.centerIn:parent;text:button.label;font.family:"Noto Sans CJK SC";width:button.width-6;horizontalAlignment:Text.AlignHCenter;minimumPixelSize:8;fontSizeMode:Text.Fit;elide:Text.ElideRight;font.pixelSize:button.labelSize;font.weight:Font.Medium;color:button.accent?"#19392d":"#e2e9e2"}
        TapHandler {id:tap;gesturePolicy:TapHandler.ReleaseWithinBounds;onTapped:button.clicked()}
    }
}
