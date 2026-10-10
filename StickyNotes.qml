import QtQuick
import QtQuick.Controls as C
import Quickshell
import Quickshell.Io
import Quickshell.Wayland
import "I18n.js" as I18n

Item {
    id: notes
    required property string output
    property string language: "en"
    property bool suppressed: false
    property var items: []
    property var queue: []
    property var request: ({op:"read"})
    property string editing: ""
    property string contextId: ""
    property real contextX: 0
    property real contextY: 0
    readonly property var palette: ["#eedda7","#bddbc5","#c9d2ed","#efc7cf","#e7d4bb","#d6d9db"]
    function context(n,x,y) {contextId=n.id;contextX=x;contextY=y;dismissTimer.restart()}
    onSuppressedChanged: if(suppressed)contextId=""
    Timer {id:dismissTimer;interval:12000;onTriggered:notes.contextId=""}
    property bool preview: false
    property bool loading: false
    readonly property var archived: items.filter(n=>n.archived)
    property string saveState: ""
    readonly property var lower: Quickshell.screens.find(s=>s.name===output)||null
    readonly property var main: Quickshell.screens.find(s=>s.name!==output)||lower
    function tr(k) { return I18n.text(language,k) }
    function run(req) {
        if (io.running) { queue=queue.concat([req]); return }
        request=req; io.running=true
    }
    function openNote(n) {
        Quickshell.execDetached(["python3",Qt.resolvedUrl("memo-editor.py").toString().replace("file://",""),n.id,language,main?main.name:""])
    }
    Process {
        id: io
        command:["python3",Qt.resolvedUrl("notes.py").toString().replace("file://","")]
        stdinEnabled:true
        onStarted:write(JSON.stringify(notes.request)+"\n")
        stdout:StdioCollector { onStreamFinished: {
            try {
                var result=JSON.parse(text);if(JSON.stringify(result)!==JSON.stringify(notes.items))notes.items=result
                if(notes.request.op==="add") notes.openNote(notes.items[notes.items.length-1])
                if(notes.request.op==="edit") notes.saveState=notes.tr("noteSaved")
            } catch(e) {notes.saveState=notes.tr("noteError")}
        } }
        onExited:(code,status)=>{
            if(code!==0) notes.saveState=notes.tr("noteError")
            if(notes.queue.length) {var next=notes.queue[0];notes.queue=notes.queue.slice(1);notes.run(next)}
        }
    }
    Component.onCompleted:run({op:"read"})
    Timer {interval:2000;running:true;repeat:true;onTriggered:if(!io.running)notes.run({op:"read"})}
    Variants {
        model:notes.items.filter(n=>!n.archived)
        delegate:PanelWindow {
            id:card
            required property var modelData
            property real posX:modelData.x
            property real posY:modelData.y
            property real startX:0
            property real startY:0
            screen:notes.lower;visible:!!notes.lower&&!notes.suppressed
            anchors {top:true;left:true}
            margins.left:Math.max(0,Math.min(posX,(notes.lower?notes.lower.width:1152)-implicitWidth))
            margins.top:Math.max(0,Math.min(posY,(notes.lower?notes.lower.height:309)-120-implicitHeight))
            implicitWidth:190;implicitHeight:146;color:"transparent";exclusionMode:ExclusionMode.Ignore
            WlrLayershell.namespace:"touch-note";WlrLayershell.layer:WlrLayer.Overlay
            Rectangle {
                anchors.fill:parent;radius:12;color:["#eedda7","#bddbc5","#c9d2ed","#efc7cf","#e7d4bb","#d6d9db"][card.modelData.color%6]
                Rectangle {
                    id:grip;anchors {left:parent.left;right:parent.right;top:parent.top}height:card.modelData.title?28:0;visible:height>0;color:"#10000000";radius:12
                    Text {anchors.centerIn:parent;width:parent.width-20;elide:Text.ElideRight;horizontalAlignment:Text.AlignLeft;text:card.modelData.title||"";color:"#55513f";font.pixelSize:11}

                }
                Text {
                    anchors {top:grip.bottom;left:parent.left;right:parent.right;bottom:parent.bottom;margins:12}
                    textFormat:Text.MarkdownText;text:card.modelData.text||notes.tr("noteHint");color:"#343a31";font.pixelSize:13;wrapMode:Text.Wrap;clip:true

                }
                DragHandler {
                    target:null;acceptedButtons:Qt.LeftButton
                    onActiveChanged:{if(active){notes.contextId="";card.startX=card.margins.left;card.startY=card.margins.top}else{notes.run({op:"move",id:card.modelData.id,x:card.margins.left,y:card.margins.top})}}
                    onTranslationChanged:if(active){card.posX=card.startX+translation.x;card.posY=card.startY+translation.y}
                }
                TapHandler {
                    acceptedButtons:Qt.LeftButton
                    property bool held:false
                    onPressedChanged:if(pressed)held=false
                    longPressThreshold:0.9
                    onTapped:if(!held){notes.contextId="";notes.openNote(card.modelData)}
                    onLongPressed:{held=true;notes.context(card.modelData,card.margins.left+20,card.margins.top+15)}
                }
                TapHandler {acceptedDevices:PointerDevice.Mouse | PointerDevice.TouchPad;acceptedButtons:Qt.RightButton;onTapped:notes.context(card.modelData,card.margins.left+20,card.margins.top+15)}

            }
        }
    }
    PanelWindow {
        screen:notes.lower;visible:!!notes.lower&&notes.contextId!==""&&!notes.suppressed
        anchors {top:true;left:true}
        margins.left:Math.min(notes.contextX,(notes.lower?notes.lower.width:1152)-224)
        margins.top:Math.min(notes.contextY,(notes.lower?notes.lower.height:309)-120-112)
        implicitWidth:224;implicitHeight:112;color:"transparent";exclusionMode:ExclusionMode.Ignore
        WlrLayershell.namespace:"touch-note-menu";WlrLayershell.layer:WlrLayer.Overlay
        WlrLayershell.keyboardFocus:WlrKeyboardFocus.OnDemand
        Rectangle {
            anchors.fill:parent;radius:12;color:"#273632";border.color:"#587466"
            Text {x:12;y:10;text:notes.tr("noteColor");font.pixelSize:11;color:"#d8e6dd"}
            Text {x:195;y:7;text:"×";font.pixelSize:20;color:"#d8e6dd";TapHandler {onTapped:notes.contextId=""}}
            Row {x:12;y:34;spacing:8
                Repeater {model:notes.palette;delegate:Rectangle {
                    required property string modelData
                    required property int index
                    width:26;height:26;radius:13;color:modelData
                    TapHandler {onTapped:{notes.run({op:"color",id:notes.contextId,color:index});notes.contextId=""}}
                }}
            }
            Row {x:12;y:71;spacing:8
                Repeater {model:[notes.tr("noteEdit"),notes.tr("noteArchive")];delegate:Rectangle {
                    required property string modelData
                    required property int index
                    width:96;height:29;radius:7;color:"#3c5047"
                    Text {anchors.centerIn:parent;text:modelData;color:"#e3ece7";font.pixelSize:11}
                    TapHandler {onTapped:{var id=notes.contextId;notes.contextId="";if(index===0){var n=notes.items.find(n=>n.id===id);if(n)notes.openNote(n)}else notes.run({op:"archive",id:id})}}
                }}
            }
        }
    }
}
