"""Exercise the actual card handlers with Qt's isolated synthetic input."""
import pathlib, subprocess, tempfile, os, unittest
class TouchHandlersTest(unittest.TestCase):
    def test_touch_and_mouse_are_distinct(self):
        runner=pathlib.Path('/usr/lib/qt6/bin/qmltestrunner')
        if not runner.exists(): self.skipTest('Qt Quick Test not installed')
        source=(pathlib.Path(__file__).resolve().parents[1]/'StickyNotes.qml').read_text()
        start=source.index('                TapHandler {\n                    acceptedButtons:Qt.LeftButton')
        end=source.index('\n\n            }',start)
        handlers=source[start:end]
        fixture='''import QtQuick
import QtTest
Item {
 id:notes;width:300;height:200
 property string contextId:""
 property int opens:0
 property int menus:0
 function openNote(n){opens++}
 function context(n,x,y){contextId=n.id;menus++}
 Rectangle {id:card;width:200;height:146
 property var modelData:({id:"test"})
 property var margins:({left:0,top:0})
 HANDLERS
 }
 TestCase {
 name:"MemoPointerRouting";when:windowShown
 function init(){notes.contextId="";notes.opens=0;notes.menus=0}
 function test_touchTap(){var t=touchEvent(card);t.press(0,card,40,40).commit();wait(30);t.release(0,card,40,40).commit();tryCompare(notes,"opens",1);compare(notes.menus,0)}
 function test_mouseLeft(){mouseClick(card,40,40,Qt.LeftButton);compare(notes.opens,1);compare(notes.menus,0)}
 function test_mouseRight(){mouseClick(card,40,40,Qt.RightButton);compare(notes.menus,1);compare(notes.opens,0)}
 function test_touchHold(){var t=touchEvent(card);t.press(0,card,40,40).commit();wait(1050);t.release(0,card,40,40).commit();tryCompare(notes,"menus",1);compare(notes.opens,0)}
 }
}'''.replace('HANDLERS',handlers)
        with tempfile.TemporaryDirectory() as folder:
            pathlib.Path(folder,'tst_touch.qml').write_text(fixture)
            result=subprocess.run([str(runner),'-input',folder],env=dict(os.environ,QT_QPA_PLATFORM='offscreen'),capture_output=True,text=True,timeout=20)
            self.assertEqual(result.returncode,0,result.stdout+result.stderr)
