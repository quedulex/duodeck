import { Crepe } from '@milkdown/crepe';
import { editorViewCtx } from '@milkdown/kit/core';
import { blockServiceInstance } from '@milkdown/kit/plugin/block';
import { language, zh, t, localize } from './locale.js';
import '@milkdown/crepe/theme/common/style.css';
import '@milkdown/crepe/theme/frame.css';
import './style.css';
const base=location.pathname.replace(/[^/]*$/,'');
document.documentElement.lang=language==='zh_TW'?'zh-Hant':language==='zh_CN'?'zh-Hans':'en';
const colors=['#eedda7','#bddbc5','#c9d2ed','#efc7cf','#e7d4bb','#d6d9db'];
let note,crepe,timer,saving=Promise.resolve(),dirty=false,loading=false,colorDirty=false;
const $=s=>document.querySelector(s);
async function api(op,data={}) {const r=await fetch(base+'api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({op,...data})});if(!r.ok)throw Error('Save failed');return r.json();}
function status(text){$('#status').textContent=text;$('#status').hidden=!/失败|失敗|failed|F11/.test(text)}
function changed(){if(loading||closing)return;dirty=true;status(t('保存中…','Saving…'));clearTimeout(timer);timer=setTimeout(save,350)}
async function save(){clearTimeout(timer);if(!dirty)return saving;dirty=false;const data={id:note.id,text:crepe.getMarkdown(),title:$('#title').value,...(colorDirty?{color:note.color}:{})};colorDirty=false;saving=saving.catch(()=>{}).then(()=>api('edit',data)).then(()=>status(t('已保存到本机','Saved locally'))).catch(()=>{dirty=true;if('color' in data)colorDirty=true;status(t('保存失败 · 点击重试','Save failed · click to retry'))});return saving;}
async function load(id){await save();if(dirty)throw Error('Unsaved note');loading=true;const all=await api('read');note=all.find(n=>n.id===id);if(!note)throw Error('Note not found');if(crepe)await crepe.destroy();$('#editor').replaceChildren();$('#title').value=note.title||'';applyColor();crepe=new Crepe({root:$('#editor'),defaultValue:note.text||'',features:{[Crepe.Feature.AI]:false,[Crepe.Feature.TopBar]:false,[Crepe.Feature.Placeholder]:false},featureConfigs:{[Crepe.Feature.CodeMirror]:{searchPlaceholder:t('搜索语言','Search language'),noResultText:t('没有结果','No results'),copyText:t('复制','Copy'),previewLabel:t('预览','Preview'),previewLoading:t('加载中…','Loading…'),previewToggleText:preview=>preview?t('编辑','Edit'):t('隐藏','Hide')},[Crepe.Feature.Toolbar]:{boldLabel:t('加粗','Bold'),italicLabel:t('斜体','Italic'),codeLabel:t('行内代码','Inline code'),linkLabel:t('链接','Link'),strikethroughLabel:t('删除线','Strikethrough'),latexLabel:t('公式','Math')},[Crepe.Feature.LinkTooltip]:{inputPlaceholder:t('粘贴链接…','Paste link…')},[Crepe.Feature.ImageBlock]:{inlineUploadButton:t('上传','Upload'),inlineUploadPlaceholderText:t('粘贴图片链接','Paste image URL'),blockUploadButton:t('上传图片','Upload image'),blockConfirmButton:t('确认','Confirm'),blockCaptionPlaceholderText:t('图片说明','Image caption'),blockUploadPlaceholderText:t('粘贴图片链接','Paste image URL')},[Crepe.Feature.BlockEdit]:zh?localize({textGroup:{label:'正文',text:{label:'正文'},h1:{label:'一级标题'},h2:{label:'二级标题'},h3:{label:'三级标题'},h4:{label:'四级标题'},h5:{label:'五级标题'},h6:{label:'六级标题'},quote:{label:'引用'},divider:{label:'分隔线'}},listGroup:{label:'列表',bulletList:{label:'无序列表'},orderedList:{label:'有序列表'},taskList:{label:'待办清单'}},advancedGroup:{label:'更多',image:{label:'图片'},codeBlock:{label:'代码块'},table:{label:'表格'},math:{label:'公式'}}}):{},[Crepe.Feature.Placeholder]:{text:t('输入 / 打开菜单，或输入 # 空格创建标题','Type / for blocks, or # space for a heading')}}});crepe.on(listener=>listener.markdownUpdated(()=>changed()));await crepe.create();loading=false;document.body.classList.remove('writing');updateTitleCue();status(t('已保存到本机','Saved locally'));}
function applyColor(){document.documentElement.style.setProperty('--memo',colors[note.color%colors.length]);document.querySelectorAll('.swatch').forEach((e,i)=>e.setAttribute('aria-pressed',String(i===note.color)))}
$('#title').placeholder='';$('#title').setAttribute('aria-label',t('标题','Title'));$('#title-cue').title=t('标题','Title');$('#title').addEventListener('input',changed);

$('#done').textContent=t('关闭','Close');$('#export').textContent=t('导出 Markdown','Export Markdown');$('#archive').textContent=t('存档','Archive');$('#restore').textContent=t('恢复存档','Restore archive');
colors.forEach((color,i)=>{let b=document.createElement('button');b.className='swatch';b.style.background=color;b.title=t('便签颜色 ','Note color ')+(i+1);b.setAttribute('aria-label',b.title);b.onclick=()=>{note.color=i;colorDirty=true;applyColor();changed();$('#colors').hidden=true;$('#palette').setAttribute('aria-expanded','false')};$('#colors').append(b)});
$('#status').onclick=save;
let closing=false;
async function closeEditor(){if(closing)return;closing=true;try{dirty=true;await save();if(dirty)return;await api('close')}catch{status(t('关闭失败 · 请重试','Close failed · retry'))}finally{closing=false}}
$('#done').onclick=closeEditor;
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!event.isComposing&&event.keyCode!==229){event.preventDefault();event.stopImmediatePropagation();closeEditor()}},true);
$('#archive').onclick=async()=>{dirty=true;await save();if(!dirty){await api('archive',{id:note.id});await api('close');window.close()}};
$('#export').onclick=()=>{note.title=$('#title').value;const blob=new Blob([(note.title?'# '+note.title+'\n\n':'')+crepe.getMarkdown()],{type:'text/markdown;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(note.title||'Memo').replace(/[\/\\:*?"<>|]/g,'_')+'.md';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
$('#restore').onclick=async()=>{const list=(await api('read')).filter(n=>n.archived);$('#archive-list').replaceChildren();for(const n of list){const b=document.createElement('button');b.textContent=n.title||n.text.split('\n')[0]||t('无标题','Untitled');b.onclick=async()=>{await api('restore',{id:n.id});await api('select',{id:n.id});selected={id:n.id};$('#archives').close();await load(n.id)};$('#archive-list').append(b)}if(!list.length)$('#archive-list').textContent=t('没有已存档便签','No archived notes');$('#archives').showModal()};
$('#dismiss').onclick=()=>$('#archives').close();
window.addEventListener('beforeunload',event=>{if(dirty){save();event.preventDefault();event.returnValue=''}});
window.addEventListener('pagehide',()=>{if(dirty&&crepe)navigator.sendBeacon(base+'api',JSON.stringify({op:'edit',id:note.id,text:crepe.getMarkdown(),title:$('#title').value,...(colorDirty?{color:note.color}:{})}))});
let selected=await api('selection');await load(selected.id);
setInterval(async()=>{try{const next=await api('selection');if(next.id!==selected.id){selected=next;await load(next.id)}}catch{}},1500);

$('#palette').textContent=t('便签颜色','Note color');$('#palette').title=t('便签颜色','Note color');$('#palette').setAttribute('aria-label',$('#palette').title);
$('#palette').onclick=()=>{const hidden=!$('#colors').hidden;$('#colors').hidden=hidden;$('#palette').setAttribute('aria-expanded',String(!hidden))};
$('#more').title=t('更多','More');$('#more').setAttribute('aria-label',$('#more').title);
function hideMenu(){$('#more-menu').hidden=true;$('#more').setAttribute('aria-expanded','false');$('#colors').hidden=true;$('#palette').setAttribute('aria-expanded','false')}
$('#more').onclick=()=>{const hidden=!$('#more-menu').hidden;$('#more-menu').hidden=hidden;$('#more').setAttribute('aria-expanded',String(!hidden))};
document.addEventListener('click',e=>{if(!$('#more-wrap').contains(e.target))hideMenu()});
$('#fullscreen').title=t('全屏 / 恢复','Fullscreen / restore');$('#fullscreen').setAttribute('aria-label',$('#fullscreen').title);
$('#fullscreen').onclick=async()=>{try{const result=await api('fullscreen');$('#fullscreen').textContent=result.fullscreen?'⊡':'⛶'}catch{status(t('请按 F11 全屏','Press F11 for fullscreen'))}};

document.addEventListener('fullscreenchange',()=>{$('#fullscreen').textContent=document.fullscreenElement?'⊡':'⛶'});

function updateTitleCue(){document.querySelector('#title-wrap').classList.toggle('has-title',!!$('#title').value.trim())}
$('#title').addEventListener('input',updateTitleCue);
$('#title-cue').onclick=()=>$('#title').focus();
function startWriting(event){
    if(!event.target.closest('#title,.ProseMirror,.cm-editor'))return;
    document.body.classList.add('writing');hideMenu();
}
document.addEventListener('beforeinput',startWriting,true);
document.addEventListener('compositionstart',startWriting,true);
document.addEventListener('keydown',event=>{
    if(event.key==='Tab')document.body.classList.remove('writing');
    if(event.key==='Escape'||event.ctrlKey||event.metaKey||event.altKey)return;
    if(event.key.length===1||['Enter','Backspace','Delete'].includes(event.key))startWriting(event);
},true);
let lastPointer=null,handleFrame=0;
function reveal(event){
    document.body.classList.remove('writing');
    if(!crepe||loading||handleFrame)return;
    const pointerY=event.clientY;
    handleFrame=requestAnimationFrame(()=>{
        handleFrame=0;
        try {crepe.editor.action(ctx=>{
            const view=ctx.get(editorViewCtx),rect=view.dom.getBoundingClientRect();
            let y=pointerY;
            const child=document.elementFromPoint(rect.left+rect.width/2,y);
            if(y<rect.top||y>rect.bottom||!child||child===view.dom||!view.dom.contains(child)){
                const caret=view.coordsAtPos(view.state.selection.from);y=(caret.top+caret.bottom)/2;
            }
            ctx.get(blockServiceInstance.key).mousemoveCallback(view,new MouseEvent('mousemove',{clientX:rect.left+rect.width/2,clientY:y}));
        })}catch{}
    });
}
document.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch')return;
    if(lastPointer&&Math.hypot(event.clientX-lastPointer.x,event.clientY-lastPointer.y)<2)return;
    lastPointer={x:event.clientX,y:event.clientY};reveal(event);
});
document.addEventListener('pointerdown',event=>{if(event.pointerType==='touch')reveal(event)});
