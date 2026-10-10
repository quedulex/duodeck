import{n as e}from"./chunk-rolldown-runtime-8BhlS34s.js";import{a as t,c as n}from"./chunk-vendor-CcV67o36.js";import{r,t as i}from"./chunk-vendor-C8evF_bn.js";import{a,s as o,t as s}from"./chunk-vendor-D83fT84r.js";import{c,l,n as u,s as d,t as f,u as ee}from"./chunk-vendor-CP-K-J9O.js";import{b as te,y as ne}from"./chunk-vendor-D2haZTu-.js";import{n as re,t as ie}from"./chunk-vendor-DFL5eE5J.js";import{n as ae,t as oe}from"./chunk-vendor-C79BbUzF.js";import{c as se,i as ce,s as le}from"./chunk-vendor-Dth-r9Bt.js";import{c as ue,d as de,l as fe,m as p,u as m,w as pe}from"./chunk-vendor-DH0A-zt7.js";import{_ as me,c as he,m as ge,s as _e}from"./chunk-vendor-8BlmrGRM.js";import{T as ve,d as ye,h as be,m as xe,w as Se}from"./chunk-vendor-CL6WQ0og.js";import{c as Ce,d as we,h as Te,n as Ee,r as De,t as Oe,u as ke}from"./chunk-vendor-BOrBcE_a.js";import{n as Ae,r as je,t as Me}from"./chunk-vendor-DP2KwbYl.js";import{$ as Ne,B as Pe,F as h,L as Fe,O as Ie,R as Le,S as g,T as Re,a as ze,b as Be,d as Ve,et as He,f as Ue,g as We,h as Ge,k as Ke,l as qe,m as Je,n as Ye,o as Xe,r as Ze,s as Qe,tt as $e,u as et,v as tt,w as nt,y as rt,z as _}from"./chunk-vendor-B5aTy28_.js";import{$ as it,At as at,B as ot,C as st,Ct as ct,Dt as lt,Et as ut,F as dt,Ft as ft,G as pt,H as v,I as mt,J as ht,K as gt,M as _t,Mt as vt,N as yt,Nt as bt,Ot as xt,Pt as St,Q as Ct,R as wt,St as Tt,T as Et,Tt as Dt,U as Ot,V as kt,W as At,Z as jt,_ as Mt,a as Nt,c as Pt,ct as Ft,dt as It,et as Lt,f as Rt,ft as zt,g as Bt,gt as Vt,ht as Ht,it as Ut,kt as Wt,l as Gt,lt as Kt,m as qt,mt as Jt,n as Yt,nt as Xt,ot as Zt,pt as y,q as b,r as Qt,rt as $t,s as en,st as x,tt as tn,u as nn,ut as rn,xt as an,yt as on,z as S}from"./chunk-vendor-CFRp1lXD.js";import{A as sn,C as cn,D as ln,E as un,M as dn,N as fn,O as pn,S as mn,T as hn,_ as gn,a as _n,b as vn,c as yn,d as bn,f as xn,g as Sn,h as Cn,i as wn,j as Tn,k as En,l as Dn,m as On,n as kn,o as An,p as jn,r as Mn,s as Nn,t as Pn,u as Fn,v as In,w as Ln,x as Rn,y as zn}from"./chunk-vendor-S0vlhQSQ.js";import{d as C,m as Bn}from"./chunk-vendor-CztKv-W9.js";import{a as Vn,c as Hn,d as Un,f as Wn,l as Gn,o as w,r as T,t as Kn,u as qn}from"./chunk-vendor-D362ypqx.js";import{t as Jn}from"./chunk-vendor-eRPQlxvV.js";import{m as Yn,p as Xn,u as Zn}from"./chunk-vendor-p4bdhb3i.js";import{n as Qn,t as $n}from"./chunk-vendor-DqB2Uxa_.js";import{n as er,t as tr}from"./chunk-vendor-Bfte_T5U.js";function nr(e){return e.get(`CrepeCtx`)}function rr(e){return e.use(`FeaturesCtx`)}function E(e){return t=>{rr(t).update(t=>t.includes(e)?t:[...t,e])}}function ir(e,t){let n=e.get(_),r=e.get($e),{state:i}=n,a=r(i.doc),o=``;if(!i.selection.empty){let{from:e,to:t}=i.selection,n=i.doc.slice(e,t),{schema:a}=i.doc.type,s=a.topNodeType.createAndFill(null,n.content);if(!s){let e=a.nodes.paragraph?.createAndFill(null,n.content);e&&(s=a.topNodeType.createAndFill(null,e))}o=s?r(s):i.doc.textBetween(e,t)}return{document:a,selection:o,instruction:t}}function ar(e,t){let n=e.get(Vi.key);try{n.onError(t)}catch(e){console.error(`[milkdown/ai] onError handler failed:`,e)}}function or(e){let t=e.get(k.key);e.set(k.key,{...t,abortController:null,label:``})}async function sr(e,t,n,r){try{let i=t(n,r.signal),a=e.get(h);for await(let e of i){if(r.signal.aborted)break;a.call(Dt.key,e)}if(r.signal.aborted)return;let o=e.get(Vi.key);if(o.diffReviewOnEnd){let t=e.get(k.key);e.set(k.key,{...t,diffOwnedByAI:!0})}let s=a.call(ct.key,{diffReview:o.diffReviewOnEnd});if(o.diffReviewOnEnd&&!s){let t=e.get(k.key);e.set(k.key,{...t,diffOwnedByAI:!1})}}catch(t){if(r.signal.aborted)return;ar(e,se(t)),e.get(h).call(Tt.key,{keep:!1})}finally{e.get(k.key).abortController===r&&or(e)}}function cr(e,t){e.innerHTML=ee.sanitize(t.trim())}function lr(e){let t=document.createElement(`span`);return t.className=`${sa}-icon`,cr(t,e),t}function ur(){if(typeof navigator>`u`)return`⌘`;let e=navigator,t=e.userAgentData?.platform??e.platform??e.userAgent??``;return/mac|iphone|ipad|ipod/i.test(t)?`⌘`:`Ctrl`}function dr(e){let{config:t,enterKeyIcon:n}=e;return{retryLabel:t?.retryLabel??ua,rejectAllLabel:t?.rejectAllLabel??da,acceptAllLabel:t?.acceptAllLabel??fa,retryIcon:t?.retryIcon??Ei,rejectIcon:t?.rejectIcon??ti,acceptIcon:t?.acceptIcon??ii,enterKeyIcon:n??li,modSymbol:t?.modSymbol??pa}}function fr(e={}){let t=dr(e);return ke(e=>new m({key:la,view(n){return new ca(e,n,t)},props:{handleKeyDown(t,n){return n.key!==`Enter`||!(n.metaKey||n.ctrlKey)||!ft.getState(t.state)?.active||!e.get(k.key).diffOwnedByAI?!1:(n.preventDefault(),e.get(h).call(at.key),!0)}}}))}function pr(e){let t={addItem:(n,r)=>(e.items.set(n,r),t),removeItem:n=>(e.items.delete(n),t),getItem:t=>e.items.get(t),clear:()=>(e.items.clear(),t)};return t}function mr(e){e.addItem(`improve`,{icon:Hr,label:`Improve writing`,streamingLabel:`Improving writing`,prompt:`Improve the writing while preserving the original meaning.`}).addItem(`grammar`,{icon:ui,label:`Fix grammar & spelling`,streamingLabel:`Fixing grammar & spelling`,prompt:`Fix any grammar and spelling errors without changing the meaning.`}).addItem(`shorter`,{icon:Ai,label:`Make shorter`,streamingLabel:`Making shorter`,prompt:`Make this shorter while preserving the key information.`}).addItem(`longer`,{icon:bi,label:`Make longer`,streamingLabel:`Expanding`,prompt:`Expand this with more detail and examples.`}),e.addSubmenu(`tone`,{icon:ci,label:`Change tone…`,title:`Change tone`,searchPlaceholder:`Search tones…`},e=>{for(let[t,n]of[[`professional`,`Professional`],[`casual`,`Casual`],[`confident`,`Confident`],[`friendly`,`Friendly`],[`direct`,`Direct`],[`formal`,`Formal`]])e.addItem(t,{icon:ci,label:n,streamingLabel:`Adjusting tone`,prompt:`Rewrite this in a ${n.toLowerCase()} tone.`})}),e.addSubmenu(`translate`,{icon:Fi,label:`Translate…`,title:`Translate`,searchPlaceholder:`Search languages…`},e=>{for(let[t,n,r]of[[`english`,`English`,`English`],[`chinese`,`Chinese`,`Chinese (Simplified)`],[`japanese`,`Japanese`,`Japanese`],[`korean`,`Korean`,`Korean`],[`spanish`,`Spanish`,`Spanish`],[`french`,`French`,`French`],[`german`,`German`,`German`]])e.addItem(t,{icon:Fi,label:n,streamingLabel:`Translating to ${n}`,prompt:`Translate this to ${r}.`})})}function hr(e,t){let n=t.trim();if(!n)return[e];let r=e.toLowerCase(),i=n.toLowerCase(),a=r.indexOf(i);return a===-1?[e]:[e.slice(0,a),w(`mark`,null,e.slice(a,a+n.length)),e.slice(a+n.length)]}function gr(e){return{aiIcon:e?.aiIcon??Hr,sendIcon:e?.sendIcon??Oi,sendPromptIcon:e?.sendPromptIcon??ki,enterKeyIcon:e?.enterKeyIcon??li,chevronLeftIcon:e?.chevronLeftIcon??$r,chevronRightIcon:e?.chevronRightIcon??ei,suggestionsHeaderLabel:e?.suggestionsHeaderLabel??Pa,sendAsPromptHeaderLabel:e?.sendAsPromptHeaderLabel??Fa,sendAsPromptLabel:e?.sendAsPromptLabel??Ia,submitButtonLabel:e?.submitButtonLabel??La,listboxLabel:e?.listboxLabel??Ra}}function _r(e){var t;let n=new ya;return mr(n),(t=e?.buildAISuggestions)==null||t.call(e,n),{placeholder:e?.instructionPlaceholder??za,chrome:gr(e),suggestions:n.build()}}function vr(e){return t=>{let n=_r(e),r=null;t.update(Ma.key,e=>({...e,show:(e,t)=>{r?.show(e,t)}})),t.set(Na.key,{view:e=>(r=new ja(t,e,n),r)})}}function yr(e={}){let{config:t}=e,n=t?.fallbackLabel??Qa,r=t?.cancelHint??$a;return ke(e=>{let t=null;function i(){return t?t.setLabel(e):t=new to(e,n,r),t}function a(){t&&=(t.destroy(),null)}function o(e,t){let n=Math.min(t,e.content.size),r=Me.widget(n,i().dom,{side:1,key:`ai-streaming-indicator`});return Ae.create(e,[r])}return new m({key:eo,state:{init:()=>Ae.empty,apply(e,t,n,r){let i=Wt.getState(r);return!i?.active||i.insertEndPos==null?(a(),Ae.empty):e.getMeta(Wt)||e.docChanged?o(r.doc,i.insertEndPos):t.map(e.mapping,e.doc)}},view(){return{destroy(){a()}}},props:{decorations(e){return eo.getState(e)??Ae.empty},handleKeyDown(t,n){if(n.key!==`Escape`)return!1;let r=e.get(h);return e.get(k.key).abortController?(n.preventDefault(),r.call(Ui.key,{keep:!0}),!0):Wt.getState(t.state)?.active?(n.preventDefault(),r.call(Tt.key,{keep:!0}),!0):!1}}})})}function br(e){return e.$from.parent.type.name===`code_block`}function xr(e){return e.$from.node(e.$from.depth-1)?.type?.name===`list_item`}function Sr(e,t,n){var r;let i=n&&rr(n).get(),a=i?.includes(O.Latex),o=i?.includes(O.ImageBlock),s=i?.includes(O.Table),c=new po;if(t?.textGroup!==null){let e=c.addGroup(`text`,t?.textGroup?.label??`Text`);t?.textGroup?.text!==null&&e.addItem(`text`,{label:t?.textGroup?.text?.label??`Text`,icon:t?.textGroup?.text?.icon??Ni,onRun:e=>{let t=e.get(h),n=Ut.type(e);t.call(v.key),t.call(x.key,{nodeType:n})}}),t?.textGroup?.h1!==null&&e.addItem(`h1`,{label:t?.textGroup?.h1?.label??`Heading 1`,icon:t?.textGroup?.h1?.icon??di,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:1}})}}),t?.textGroup?.h2!==null&&e.addItem(`h2`,{label:t?.textGroup?.h2?.label??`Heading 2`,icon:t?.textGroup?.h2?.icon??fi,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:2}})}}),t?.textGroup?.h3!==null&&e.addItem(`h3`,{label:t?.textGroup?.h3?.label??`Heading 3`,icon:t?.textGroup?.h3?.icon??pi,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:3}})}}),t?.textGroup?.h4!==null&&e.addItem(`h4`,{label:t?.textGroup?.h4?.label??`Heading 4`,icon:t?.textGroup?.h4?.icon??mi,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:4}})}}),t?.textGroup?.h5!==null&&e.addItem(`h5`,{label:t?.textGroup?.h5?.label??`Heading 5`,icon:t?.textGroup?.h5?.icon??hi,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:5}})}}),t?.textGroup?.h6!==null&&e.addItem(`h6`,{label:t?.textGroup?.h6?.label??`Heading 6`,icon:t?.textGroup?.h6?.icon??gi,onRun:e=>{let t=e.get(h),n=b.type(e);t.call(v.key),t.call(x.key,{nodeType:n,attrs:{level:6}})}}),t?.textGroup?.quote!==null&&e.addItem(`quote`,{label:t?.textGroup?.quote?.label??`Quote`,icon:t?.textGroup?.quote?.icon??wi,onRun:e=>{let t=e.get(h),n=ot.type(e);t.call(v.key),t.call(y.key,{nodeType:n})}}),t?.textGroup?.divider!==null&&e.addItem(`divider`,{label:t?.textGroup?.divider?.label??`Divider`,icon:t?.textGroup?.divider?.icon??oi,onRun:e=>{let t=e.get(h),n=ht.type(e);t.call(v.key),t.call(S.key,{nodeType:n})}})}if(t?.listGroup!==null){let e=c.addGroup(`list`,t?.listGroup?.label??`List`);t?.listGroup?.bulletList!==null&&e.addItem(`bullet-list`,{label:t?.listGroup?.bulletList?.label??`Bullet List`,icon:t?.listGroup?.bulletList?.icon??Jr,onRun:e=>{let t=e.get(h),n=kt.type(e);t.call(v.key),t.call(y.key,{nodeType:n})}}),t?.listGroup?.orderedList!==null&&e.addItem(`ordered-list`,{label:t?.listGroup?.orderedList?.label??`Ordered List`,icon:t?.listGroup?.orderedList?.icon??Si,onRun:e=>{let t=e.get(h),n=$t.type(e);t.call(v.key),t.call(y.key,{nodeType:n})}}),t?.listGroup?.taskList!==null&&e.addItem(`task-list`,{label:t?.listGroup?.taskList?.label??`Task List`,icon:t?.listGroup?.taskList?.icon??Pi,onRun:e=>{let t=e.get(h),n=Xt.type(e);t.call(v.key),t.call(y.key,{nodeType:n,attrs:{checked:!1}})}})}if(t?.advancedGroup!==null){let e=c.addGroup(`advanced`,t?.advancedGroup?.label??`Advanced`);t?.advancedGroup?.image!==null&&o&&e.addItem(`image`,{label:t?.advancedGroup?.image?.label??`Image`,icon:t?.advancedGroup?.image?.icon??_i,onRun:e=>{let t=e.get(h),n=Be.type(e);t.call(v.key),t.call(S.key,{nodeType:n})}}),t?.advancedGroup?.codeBlock!==null&&e.addItem(`code`,{label:t?.advancedGroup?.codeBlock?.label??`Code`,icon:t?.advancedGroup?.codeBlock?.icon??ni,onRun:e=>{let t=e.get(h),n=Ot.type(e);t.call(v.key),t.call(x.key,{nodeType:n})}}),t?.advancedGroup?.table!==null&&s&&e.addItem(`table`,{label:t?.advancedGroup?.table?.label??`Table`,icon:t?.advancedGroup?.table?.icon??Mi,onRun:e=>{let t=e.get(h),n=e.get(_);t.call(v.key);let{from:r}=n.state.selection;t.call(S.key,{nodeType:st(e,3,3)}),t.call(Zt.key,{pos:r})}}),t?.advancedGroup?.math!==null&&a&&e.addItem(`math`,{label:t?.advancedGroup?.math?.label??`Math`,icon:t?.advancedGroup?.math?.icon??Ii,onRun:e=>{let t=e.get(h),n=Ot.type(e);t.call(v.key),t.call(S.key,{nodeType:n,attrs:{language:`LaTeX`}})}})}(r=t?.buildMenu)==null||r.call(t,c);let l=c.build();e&&(l=l.map(t=>{let n=t.items.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));return{...t,items:n}}).filter(e=>e.items.length>0));let u=l.flatMap(e=>e.items);return u.forEach((e,t)=>{Object.assign(e,{index:t})}),l.reduce((e,t)=>{let n=e+t.items.length;return Object.assign(t,{range:[e,n]}),n},0),{groups:l,size:u.length}}function Cr(e,t){e.set(So.key,{view:n=>new wo(e,n,t)})}function wr(e){if(!(e instanceof p))return!1;let{$head:t}=e,n=t.parent;return t.parentOffset===n.content.size}function Tr(e,t){e.set(Vt.key,{filterNodes:e=>!be(e=>[`table`,`blockquote`,`math_inline`].includes(e.type.name))(e)}),e.set(Ht.key,{view:()=>new Po(e,t)})}function Er(e){return o(e,`math`,(e,t,n)=>{let{value:r}=e,i={type:`code`,lang:`LaTeX`,value:r};n.children.splice(t,1,i)})}function Dr(e,t){return er.renderToString(e,{...t,throwOnError:!1,displayMode:!0})}function Or(e,t){e.set(Xe.key,{renderLabel:({label:e,listType:n,checked:r})=>r==null?n===`bullet`?t?.bulletIcon??qr:e:r?t?.checkBoxCheckedIcon??Xr:t?.checkBoxUncheckedIcon??Zr})}function kr(e){return e.childCount<=1&&!e.firstChild?.content.size}function Ar(e,t){let{selection:n}=e;if(!n.empty)return null;let r=n.$anchor,i=r.parent;if(i.content.size>0||be(e=>e.type.name===`table`)(r))return null;let a=r.before();return Me.node(a,a+i.nodeSize,{class:`crepe-placeholder`,"data-placeholder":t})}function jr(e,t){return{slice:e,entry:t}}function Mr(e){if(e===` `||e.toLowerCase()===`space`)return{display:`Space`,aria:` `};if(e.length===1){let t=e.toUpperCase();return{display:t,aria:t}}return{display:e,aria:e}}function Nr(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1]??``,i=n.slice(0,-1),a=!1,o=!1,s=!1,c=!1;for(let e of i)switch(e.toLowerCase()){case`mod`:t?a=!0:o=!0;break;case`meta`:case`cmd`:case`m`:a=!0;break;case`ctrl`:case`control`:case`c`:o=!0;break;case`alt`:case`option`:case`a`:s=!0;break;case`shift`:case`s`:c=!0}let l=Mr(r);return{display:t?[o&&`⌃`,s&&`⌥`,c&&`⇧`,a&&`⌘`,l.display].filter(Boolean).join(``):[o&&`Ctrl`,s&&`Alt`,c&&`Shift`,a&&`Meta`,l.display].filter(Boolean).join(`+`),aria:[a&&`Meta`,o&&`Control`,s&&`Alt`,c&&`Shift`,l.aria].filter(Boolean).join(`+`)}}function Pr(e,t){if(!e.isInjected(t.slice))return;let n=e.get(t.slice)[t.entry],r=n?[n.shortcuts].flat()[0]:void 0;if(r)return Nr(r,ye.mac)}function Fr(e,t){var n;let r=new po;r.addGroup(`formatting`,`Formatting`).addItem(`bold`,{icon:e?.boldIcon??Kr,label:e?.boldLabel??`Bold`,keymap:jr(Ft.key,`ToggleBold`),active:e=>e.get(h).call(it.key,Kt.type(e)),onRun:e=>{e.get(h).call(zt.key)}}).addItem(`italic`,{icon:e?.italicIcon??vi,label:e?.italicLabel??`Italic`,keymap:jr(pt.key,`ToggleEmphasis`),active:e=>e.get(h).call(it.key,gt.type(e)),onRun:e=>{e.get(h).call(rn.key)}}).addItem(`strikethrough`,{icon:e?.strikethroughIcon??ji,label:e?.strikethroughLabel??`Strikethrough`,keymap:jr(_t.key,`ToggleStrikethrough`),active:e=>e.get(h).call(it.key,yt.type(e)),onRun:e=>{e.get(h).call(dt.key)}});let i=r.addGroup(`function`,`Function`);i.addItem(`code`,{icon:e?.codeIcon??ni,label:e?.codeLabel??`Inline code`,keymap:jr(jt.key,`ToggleInlineCode`),active:e=>e.get(h).call(it.key,Ct.type(e)),onRun:e=>{e.get(h).call(It.key)}});let a=t&&rr(t).get();if(a?.includes(O.Latex)&&i.addItem(`latex`,{icon:e?.latexIcon??Ii,label:e?.latexLabel??`Inline math`,active:e=>{let t=e.get(h),n=e.get(He).nodes[Bo];return t.call(Lt.key,n)},onRun:e=>{e.get(h).call(Vo)}}),i.addItem(`link`,{icon:e?.linkIcon??yi,label:e?.linkLabel??`Link`,active:e=>e.get(h).call(it.key,tn.type(e)),onRun:e=>{e.get(h).call(Ve.key)}}),t&&a?.includes(O.AI)){let n=t.get(Vi.key);n.provider&&i.addItem(`ai`,{icon:e?.aiIcon??n.aiIcon??Hr,label:e?.aiLabel??`Ask AI`,active:()=>!1,onRun:e=>{let t=e.get(Ma.key),{from:n,to:r}=e.get(_).state.selection;t.show(n,r)}})}(n=e?.buildToolbar)==null||n.call(e,r);let o=r.build();if(t)for(let e of o)for(let n of e.items){if(!n.keymap)continue;let e=Pr(t,n.keymap);e&&(n.shortcut??=e.display,n.ariaKeyshortcuts??=e.aria)}return o}function Ir(e,t){let n=t??Ds,{$from:r}=e.get(_).state.selection,i=r.parent,a=n.find(e=>e.level===null)??n[0];if(i.type===b.type(e)){let e=i.attrs.level;return n.find(t=>t.level===e)??a}return a}function Lr(e,t){let n=e.get(h);if(t==null){let t=Ut.type(e);n.call(x.key,{nodeType:t})}else{let r=b.type(e);n.call(x.key,{nodeType:r,attrs:{level:t}})}}function D(e,t){if(e.get(h).call(it.key,t))return!0;let{state:n}=e.get(_);if(n.storedMarks)return n.storedMarks.some(e=>e.type===t);if(n.selection instanceof p){let{$cursor:e}=n.selection;if(e)return e.marks().some(e=>e.type===t)}return!1}function Rr(e,t){let n=e??Ds;return{icon:``,active:()=>!1,selector:{chevronIcon:t??Qr,activeLabel:e=>Ir(e,n).label,options:n.map(e=>({label:e.label,onSelect:t=>Lr(t,e.level)}))}}}function zr(e,t){var n;let r=t&&rr(t).get(),i=r?.includes(O.Latex),a=r?.includes(O.ImageBlock),o=r?.includes(O.Table),s=new po;s.addGroup(`heading`,`Heading`).addItem(`heading-selector`,{...Rr(e?.headingOptions,e?.chevronDownIcon)}),s.addGroup(`formatting`,`Formatting`).addItem(`bold`,{icon:e?.boldIcon??Kr,active:e=>D(e,Kt.type(e)),onRun:e=>{e.get(h).call(zt.key)}}).addItem(`italic`,{icon:e?.italicIcon??vi,active:e=>D(e,gt.type(e)),onRun:e=>{e.get(h).call(rn.key)}}).addItem(`strikethrough`,{icon:e?.strikethroughIcon??ji,active:e=>D(e,yt.type(e)),onRun:e=>{e.get(h).call(dt.key)}}).addItem(`code`,{icon:e?.codeIcon??ni,active:e=>D(e,Ct.type(e)),onRun:e=>{let t=e.get(_),{state:n}=t;if(n.selection.empty){let r=Ct.type(e);D(e,r)?t.dispatch(n.tr.removeStoredMark(r)):t.dispatch(n.tr.addStoredMark(r.create()))}else e.get(h).call(It.key)}}),s.addGroup(`list`,`List`).addItem(`bullet-list`,{icon:e?.bulletListIcon??Jr,active:()=>!1,onRun:e=>{let t=e.get(h),n=kt.type(e);t.call(y.key,{nodeType:n})}}).addItem(`ordered-list`,{icon:e?.orderedListIcon??Si,active:()=>!1,onRun:e=>{let t=e.get(h),n=$t.type(e);t.call(y.key,{nodeType:n})}}).addItem(`task-list`,{icon:e?.taskListIcon??Pi,active:()=>!1,onRun:e=>{let t=e.get(h),n=Xt.type(e);t.call(y.key,{nodeType:n,attrs:{checked:!1}})}});let c=s.addGroup(`insert`,`Insert`);c.addItem(`link`,{icon:e?.linkIcon??yi,active:e=>D(e,tn.type(e)),onRun:e=>{let t=e.get(_),{state:n}=t,r=tn.type(e);n.selection.empty&&D(e,r)?t.dispatch(n.tr.removeStoredMark(r)):e.get(h).call(Ve.key)}}),a&&c.addItem(`image`,{icon:e?.imageIcon??_i,active:()=>!1,onRun:e=>{let t=e.get(h),n=Be.type(e);t.call(S.key,{nodeType:n})}}),o&&c.addItem(`table`,{icon:e?.tableIcon??Mi,active:()=>!1,onRun:e=>{let t=e.get(h),{from:n}=e.get(_).state.selection;t.call(S.key,{nodeType:st(e,3,3)}),t.call(Zt.key,{pos:n})}});let l=s.addGroup(`block`,`Block`);return l.addItem(`code-block`,{icon:e?.codeBlockIcon??ri,active:()=>!1,onRun:e=>{let t=e.get(h),n=Ot.type(e);t.call(x.key,{nodeType:n})}}),i&&l.addItem(`math`,{icon:e?.mathIcon??Ii,active:()=>!1,onRun:e=>{let t=e.get(h),n=Ot.type(e);t.call(S.key,{nodeType:n,attrs:{language:`LaTeX`}})}}),s.addGroup(`more`,`More`).addItem(`quote`,{icon:e?.quoteIcon??wi,active:()=>!1,onRun:e=>{let t=e.get(h),n=ot.type(e);t.call(y.key,{nodeType:n})}}).addItem(`hr`,{icon:e?.hrIcon??oi,active:()=>!1,onRun:e=>{let t=e.get(h),n=ht.type(e);t.call(S.key,{nodeType:n})}}),(n=e?.buildTopBar)==null||n.call(e,s),s.build()}function Br(e,t,n){switch(e){case O.CodeMirror:return Io(t,n);case O.ListItem:return us(t,n);case O.LinkTooltip:return ls(t,n);case O.ImageBlock:return Ro(t,n);case O.Cursor:return Lo(t,n);case O.BlockEdit:return Fo(t,n);case O.Placeholder:return ps(t,n);case O.Toolbar:return Es(t,n);case O.Table:return ms(t,n);case O.Latex:return cs(t,n);case O.TopBar:return Vs(t,n);case O.AI:return io(t,n)}}var O,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,k,Hi,Ui,Wi,Gi,A,j,M,Ki,qi,Ji,Yi,Xi,Zi,Qi,N,$i,P,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,F,ga,_a,I,va,ya,ba,xa,Sa,L,R,z,Ca,B,wa,Ta,Ea,Da,Oa,V,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,H,U,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,W,_o,G,vo,yo,bo,K,xo,So,Co,wo,To,Eo,Do,q,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,J,Y,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,X,vs,ys,Z,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Q,Ws,Gs,$,Ks,qs,Js,Ys,Xs=e((()=>{t(),ie(),oe(),fn(),dn(),Tn(),sn(),En(),pn(),ln(),un(),l(),hn(),Ln(),s(),cn(),mn(),Rn(),vn(),zn(),In(),gn(),Yn(),ne(),Sn(),u(),Cn(),Qn(),On(),tr(),jn(),xn(),bn(),Fn(),i(),a(),Dn(),yn(),Nn(),c(),An(),_n(),wn(),Mn(),kn(),Pn(),O=(e=>(e.CodeMirror=`code-mirror`,e.ListItem=`list-item`,e.LinkTooltip=`link-tooltip`,e.Cursor=`cursor`,e.ImageBlock=`image-block`,e.BlockEdit=`block-edit`,e.Toolbar=`toolbar`,e.Placeholder=`placeholder`,e.Table=`table`,e.Latex=`latex`,e.TopBar=`top-bar`,e.AI=`ai`,e))(O||{}),Vr={cursor:!0,"list-item":!0,"link-tooltip":!0,"image-block":!0,"block-edit":!0,placeholder:!0,toolbar:!0,"code-mirror":!0,table:!0,latex:!0,"top-bar":!1,ai:!1},Hr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 14l1.25-2.75L23 19l-2.75-1.25L19 15l-1.25 2.75L15 19l2.75 1.25zM9 20l3-6.5L18 10l-6-3.5L9 0L6 6.5L0 10l6 3.5z"
      transform="translate(3 3) scale(0.75)"
    />
  </svg>
`,Ur=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25ZM8.25 16.625C8.0375 16.625 7.85942 16.5531 7.71575 16.4093C7.57192 16.2654 7.5 16.0872 7.5 15.8748C7.5 15.6621 7.57192 15.484 7.71575 15.3405C7.85942 15.1968 8.0375 15.125 8.25 15.125H15.75C15.9625 15.125 16.1406 15.1969 16.2843 15.3408C16.4281 15.4846 16.5 15.6628 16.5 15.8753C16.5 16.0879 16.4281 16.266 16.2843 16.4095C16.1406 16.5532 15.9625 16.625 15.75 16.625H8.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM8.25 8.875C8.0375 8.875 7.85942 8.80308 7.71575 8.65925C7.57192 8.51542 7.5 8.33725 7.5 8.12475C7.5 7.91208 7.57192 7.734 7.71575 7.5905C7.85942 7.44683 8.0375 7.375 8.25 7.375H15.75C15.9625 7.375 16.1406 7.44692 16.2843 7.59075C16.4281 7.73458 16.5 7.91275 16.5 8.12525C16.5 8.33792 16.4281 8.516 16.2843 8.6595C16.1406 8.80317 15.9625 8.875 15.75 8.875H8.25ZM4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25Z"
    />
  </svg>
`,Wr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25ZM4.25 16.625C4.0375 16.625 3.85942 16.5531 3.71575 16.4093C3.57192 16.2654 3.5 16.0872 3.5 15.8748C3.5 15.6621 3.57192 15.484 3.71575 15.3405C3.85942 15.1968 4.0375 15.125 4.25 15.125H13.75C13.9625 15.125 14.1406 15.1969 14.2843 15.3408C14.4281 15.4846 14.5 15.6628 14.5 15.8753C14.5 16.0879 14.4281 16.266 14.2843 16.4095C14.1406 16.5532 13.9625 16.625 13.75 16.625H4.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM4.25 8.875C4.0375 8.875 3.85942 8.80308 3.71575 8.65925C3.57192 8.51542 3.5 8.33725 3.5 8.12475C3.5 7.91208 3.57192 7.734 3.71575 7.5905C3.85942 7.44683 4.0375 7.375 4.25 7.375H13.75C13.9625 7.375 14.1406 7.44692 14.2843 7.59075C14.4281 7.73458 14.5 7.91275 14.5 8.12525C14.5 8.33792 14.4281 8.516 14.2843 8.6595C14.1406 8.80317 13.9625 8.875 13.75 8.875H4.25ZM4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25Z"
    />
  </svg>
`,Gr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25ZM10.25 8.875C10.0375 8.875 9.85942 8.80308 9.71575 8.65925C9.57192 8.51542 9.5 8.33725 9.5 8.12475C9.5 7.91208 9.57192 7.734 9.71575 7.5905C9.85942 7.44683 10.0375 7.375 10.25 7.375H19.75C19.9625 7.375 20.1406 7.44692 20.2843 7.59075C20.4281 7.73458 20.5 7.91275 20.5 8.12525C20.5 8.33792 20.4281 8.516 20.2843 8.6595C20.1406 8.80317 19.9625 8.875 19.75 8.875H10.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM10.25 16.625C10.0375 16.625 9.85942 16.5531 9.71575 16.4093C9.57192 16.2654 9.5 16.0872 9.5 15.8748C9.5 15.6621 9.57192 15.484 9.71575 15.3405C9.85942 15.1968 10.0375 15.125 10.25 15.125H19.75C19.9625 15.125 20.1406 15.1969 20.2843 15.3408C20.4281 15.4846 20.5 15.6628 20.5 15.8753C20.5 16.0879 20.4281 16.266 20.2843 16.4095C20.1406 16.5532 19.9625 16.625 19.75 16.625H10.25ZM4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25Z"
    />
  </svg>
`,Kr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M8.85758 18.625C8.4358 18.625 8.07715 18.4772 7.78163 18.1817C7.48613 17.8862 7.33838 17.5275 7.33838 17.1058V6.8942C7.33838 6.47242 7.48613 6.11377 7.78163 5.81825C8.07715 5.52275 8.4358 5.375 8.85758 5.375H12.1999C13.2191 5.375 14.1406 5.69231 14.9643 6.32693C15.788 6.96154 16.1999 7.81603 16.1999 8.89038C16.1999 9.63779 16.0194 10.2471 15.6585 10.7183C15.2976 11.1894 14.9088 11.5314 14.4922 11.7442C15.005 11.9211 15.4947 12.2708 15.9614 12.7933C16.428 13.3157 16.6614 14.0192 16.6614 14.9038C16.6614 16.182 16.1902 17.1217 15.2479 17.723C14.3056 18.3243 13.3563 18.625 12.3999 18.625H8.85758ZM9.4883 16.6327H12.3191C13.1063 16.6327 13.6627 16.4141 13.9884 15.9769C14.314 15.5397 14.4768 15.1205 14.4768 14.7192C14.4768 14.3179 14.314 13.8987 13.9884 13.4615C13.6627 13.0243 13.0909 12.8057 12.273 12.8057H9.4883V16.6327ZM9.4883 10.875H12.0826C12.6903 10.875 13.172 10.7013 13.5278 10.3539C13.8836 10.0064 14.0615 9.59037 14.0615 9.10575C14.0615 8.59035 13.8733 8.16918 13.497 7.84225C13.1207 7.51533 12.6595 7.35188 12.1133 7.35188H9.4883V10.875Z"
    />
  </svg>
`,qr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_952_6527)">
      <circle cx="12" cy="12" r="3" />
    </g>
    <defs>
      <clipPath id="clip0_952_6527">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Jr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8070)">
      <path
        d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19ZM8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM7 6C7 6.55 7.45 7 8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8070">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Yr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12z"
    />
  </svg>
`,Xr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1803_1151)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.71 16.29C10.32 16.68 9.69 16.68 9.3 16.29L5.71 12.7C5.32 12.31 5.32 11.68 5.71 11.29C6.1 10.9 6.73 10.9 7.12 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.71 16.29Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1803_1151">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Zr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1803_535)">
      <path
        d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1803_535">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Qr=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
`,$r=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
`,ei=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
`,ti=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1098_15553)">
      <path
        d="M18.3007 5.70973C17.9107 5.31973 17.2807 5.31973 16.8907 5.70973L12.0007 10.5897L7.1107 5.69973C6.7207 5.30973 6.0907 5.30973 5.7007 5.69973C5.3107 6.08973 5.3107 6.71973 5.7007 7.10973L10.5907 11.9997L5.7007 16.8897C5.3107 17.2797 5.3107 17.9097 5.7007 18.2997C6.0907 18.6897 6.7207 18.6897 7.1107 18.2997L12.0007 13.4097L16.8907 18.2997C17.2807 18.6897 17.9107 18.6897 18.3007 18.2997C18.6907 17.9097 18.6907 17.2797 18.3007 16.8897L13.4107 11.9997L18.3007 7.10973C18.6807 6.72973 18.6807 6.08973 18.3007 5.70973Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1098_15553">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ni=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8081)">
      <path
        d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8081">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ri=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"
    />
  </svg>
`,ii=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_1013_1606)">
      <path
        d="M9.00012 16.1998L5.50012 12.6998C5.11012 12.3098 4.49012 12.3098 4.10012 12.6998C3.71012 13.0898 3.71012 13.7098 4.10012 14.0998L8.29012 18.2898C8.68012 18.6798 9.31012 18.6798 9.70012 18.2898L20.3001 7.69982C20.6901 7.30982 20.6901 6.68982 20.3001 6.29982C19.9101 5.90982 19.2901 5.90982 18.9001 6.29982L9.00012 16.1998Z"
        fill="#817567"
      />
    </g>
    <defs>
      <clipPath id="clip0_1013_1606">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ai=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="none"
  >
    <path
      d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
    />
  </svg>
`,oi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7900)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7900">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,si=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.5 9.83366C3.35833 9.83366 3.23961 9.78571 3.14383 9.68983C3.04794 9.59394 3 9.47516 3 9.33349C3 9.19171 3.04794 9.07299 3.14383 8.97733C3.23961 8.88155 3.35833 8.83366 3.5 8.83366H12.5C12.6417 8.83366 12.7604 8.8816 12.8562 8.97749C12.9521 9.07338 13 9.19216 13 9.33383C13 9.4756 12.9521 9.59433 12.8562 9.68999C12.7604 9.78577 12.6417 9.83366 12.5 9.83366H3.5ZM3.5 7.16699C3.35833 7.16699 3.23961 7.11905 3.14383 7.02316C3.04794 6.92727 3 6.80849 3 6.66683C3 6.52505 3.04794 6.40633 3.14383 6.31066C3.23961 6.21488 3.35833 6.16699 3.5 6.16699H12.5C12.6417 6.16699 12.7604 6.21494 12.8562 6.31083C12.9521 6.40671 13 6.52549 13 6.66716C13 6.80894 12.9521 6.92766 12.8562 7.02333C12.7604 7.1191 12.6417 7.16699 12.5 7.16699H3.5Z"
    />
  </svg>
`,ci=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1013_1585)">
      <path
        d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1013_1585">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,li=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9 16l-5-5l5-5l1.4 1.4L7.825 10H18V6h2v6H7.825l2.575 2.6z"
    />
  </svg>
`,ui=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9.55 17.575L4.225 12.25l1.4-1.425L9.55 14.75l8.825-8.825l1.4 1.425z"
    />
  </svg>
`,di=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5553)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 17H14V7H10V9H12V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5553">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,fi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5559)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H13C14.1 13 15 12.11 15 11V9C15 7.89 14.1 7 13 7H9V9H13V11H11C9.9 11 9 11.89 9 13V17H15V15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5559">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,pi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5565)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13.5C15 12.67 14.33 12 13.5 12C14.33 12 15 11.33 15 10.5V9C15 7.89 14.1 7 13 7H9V9H13V11H11V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5565">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,mi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7757)">
      <path
        d="M19.04 3H5.04004C3.94004 3 3.04004 3.9 3.04004 5V19C3.04004 20.1 3.94004 21 5.04004 21H19.04C20.14 21 21.04 20.1 21.04 19V5C21.04 3.9 20.14 3 19.04 3ZM19.04 19H5.04004V5H19.04V19ZM13.04 17H15.04V7H13.04V11H11.04V7H9.04004V13H13.04V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7757">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,hi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7760)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H9V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7760">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,gi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7763)">
      <path
        d="M11 17H13C14.1 17 15 16.11 15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H11C9.9 7 9 7.89 9 9V15C9 16.11 9.9 17 11 17ZM11 13H13V15H11V13ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7763">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,_i=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8075)">
      <path
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8075">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,vi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M6.29811 18.625C6.04505 18.625 5.83115 18.5375 5.65641 18.3626C5.48166 18.1877 5.39429 17.9736 5.39429 17.7203C5.39429 17.467 5.48166 17.2532 5.65641 17.0788C5.83115 16.9045 6.04505 16.8173 6.29811 16.8173H9.21159L12.452 7.18265H9.53851C9.28545 7.18265 9.07155 7.0952 8.89681 6.9203C8.72206 6.7454 8.63469 6.5313 8.63469 6.278C8.63469 6.02472 8.72206 5.81089 8.89681 5.63652C9.07155 5.46217 9.28545 5.375 9.53851 5.375H16.8847C17.1377 5.375 17.3516 5.46245 17.5264 5.63735C17.7011 5.81225 17.7885 6.02634 17.7885 6.27962C17.7885 6.53293 17.7011 6.74676 17.5264 6.92113C17.3516 7.09548 17.1377 7.18265 16.8847 7.18265H14.2789L11.0385 16.8173H13.6443C13.8973 16.8173 14.1112 16.9048 14.286 17.0797C14.4607 17.2546 14.5481 17.4687 14.5481 17.722C14.5481 17.9752 14.4607 18.1891 14.286 18.3634C14.1112 18.5378 13.8973 18.625 13.6443 18.625H6.29811Z"
    />
  </svg>
`,yi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M17.0385 19.5003V16.5388H14.0769V15.0388H17.0385V12.0773H18.5384V15.0388H21.5V16.5388H18.5384V19.5003H17.0385ZM10.8077 16.5388H7.03845C5.78282 16.5388 4.7125 16.0963 3.8275 15.2114C2.9425 14.3266 2.5 13.2564 2.5 12.0009C2.5 10.7454 2.9425 9.67504 3.8275 8.78979C4.7125 7.90454 5.78282 7.46191 7.03845 7.46191H10.8077V8.96186H7.03845C6.1987 8.96186 5.48235 9.25834 4.8894 9.85129C4.29645 10.4442 3.99998 11.1606 3.99998 12.0003C3.99998 12.8401 4.29645 13.5564 4.8894 14.1494C5.48235 14.7423 6.1987 15.0388 7.03845 15.0388H10.8077V16.5388ZM8.25 12.7503V11.2504H15.75V12.7503H8.25ZM21.5 12.0003H20C20 11.1606 19.7035 10.4442 19.1106 9.85129C18.5176 9.25834 17.8013 8.96186 16.9615 8.96186H13.1923V7.46191H16.9615C18.2171 7.46191 19.2875 7.90441 20.1725 8.78939C21.0575 9.67439 21.5 10.7447 21.5 12.0003Z"
    />
  </svg>
`,bi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3 18v-2h13v2zm0-5v-2h18v2zm0-5V6h18v2zm15 13v-3h-3v-2h3v-3h2v3h3v2h-3v3z"
    />
  </svg>
`,xi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_971_7680)">
      <path
        d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_971_7680">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Si=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8067)">
      <path
        d="M8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17ZM20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11ZM4.5 16H2.5C2.22 16 2 16.22 2 16.5C2 16.78 2.22 17 2.5 17H4V17.5H3.5C3.22 17.5 3 17.72 3 18C3 18.28 3.22 18.5 3.5 18.5H4V19H2.5C2.22 19 2 19.22 2 19.5C2 19.78 2.22 20 2.5 20H4.5C4.78 20 5 19.78 5 19.5V16.5C5 16.22 4.78 16 4.5 16ZM2.5 5H3V7.5C3 7.78 3.22 8 3.5 8C3.78 8 4 7.78 4 7.5V4.5C4 4.22 3.78 4 3.5 4H2.5C2.22 4 2 4.22 2 4.5C2 4.78 2.22 5 2.5 5ZM4.5 10H2.5C2.22 10 2 10.22 2 10.5C2 10.78 2.22 11 2.5 11H3.8L2.12 12.96C2.04 13.05 2 13.17 2 13.28V13.5C2 13.78 2.22 14 2.5 14H4.5C4.78 14 5 13.78 5 13.5C5 13.22 4.78 13 4.5 13H3.2L4.88 11.04C4.96 10.95 5 10.83 5 10.72V10.5C5 10.22 4.78 10 4.5 10Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8067">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Ci=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_971_7676)">
      <path
        d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_971_7676">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,wi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7897)">
      <path
        d="M7.17 17C7.68 17 8.15 16.71 8.37 16.26L9.79 13.42C9.93 13.14 10 12.84 10 12.53V8C10 7.45 9.55 7 9 7H5C4.45 7 4 7.45 4 8V12C4 12.55 4.45 13 5 13H7L5.97 15.06C5.52 15.95 6.17 17 7.17 17ZM17.17 17C17.68 17 18.15 16.71 18.37 16.26L19.79 13.42C19.93 13.14 20 12.84 20 12.53V8C20 7.45 19.55 7 19 7H15C14.45 7 14 7.45 14 8V12C14 12.55 14.45 13 15 13H17L15.97 15.06C15.52 15.95 16.17 17 17.17 17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7897">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Ti=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M7.30775 20.4997C6.81058 20.4997 6.385 20.3227 6.031 19.9687C5.677 19.6147 5.5 19.1892 5.5 18.692V5.99973H5.25C5.0375 5.99973 4.85942 5.92782 4.71575 5.78398C4.57192 5.64015 4.5 5.46198 4.5 5.24948C4.5 5.03682 4.57192 4.85873 4.71575 4.71523C4.85942 4.57157 5.0375 4.49973 5.25 4.49973H9C9 4.2549 9.08625 4.04624 9.25875 3.87374C9.43108 3.7014 9.63967 3.61523 9.8845 3.61523H14.1155C14.3603 3.61523 14.5689 3.7014 14.7413 3.87374C14.9138 4.04624 15 4.2549 15 4.49973H18.75C18.9625 4.49973 19.1406 4.57165 19.2843 4.71548C19.4281 4.85932 19.5 5.03748 19.5 5.24998C19.5 5.46265 19.4281 5.64073 19.2843 5.78423C19.1406 5.9279 18.9625 5.99973 18.75 5.99973H18.5V18.692C18.5 19.1892 18.323 19.6147 17.969 19.9687C17.615 20.3227 17.1894 20.4997 16.6923 20.4997H7.30775ZM17 5.99973H7V18.692C7 18.7818 7.02883 18.8556 7.0865 18.9132C7.14417 18.9709 7.21792 18.9997 7.30775 18.9997H16.6923C16.7821 18.9997 16.8558 18.9709 16.9135 18.9132C16.9712 18.8556 17 18.7818 17 18.692V5.99973ZM10.1543 16.9997C10.3668 16.9997 10.5448 16.9279 10.6885 16.7842C10.832 16.6404 10.9037 16.4622 10.9037 16.2497V8.74973C10.9037 8.53723 10.8318 8.35907 10.688 8.21523C10.5443 8.07157 10.3662 7.99973 10.1535 7.99973C9.941 7.99973 9.76292 8.07157 9.61925 8.21523C9.47575 8.35907 9.404 8.53723 9.404 8.74973V16.2497C9.404 16.4622 9.47583 16.6404 9.6195 16.7842C9.76333 16.9279 9.94158 16.9997 10.1543 16.9997ZM13.8465 16.9997C14.059 16.9997 14.2371 16.9279 14.3807 16.7842C14.5243 16.6404 14.596 16.4622 14.596 16.2497V8.74973C14.596 8.53723 14.5242 8.35907 14.3805 8.21523C14.2367 8.07157 14.0584 7.99973 13.8458 7.99973C13.6333 7.99973 13.4552 8.07157 13.3115 8.21523C13.168 8.35907 13.0962 8.53723 13.0962 8.74973V16.2497C13.0962 16.4622 13.1682 16.6404 13.312 16.7842C13.4557 16.9279 13.6338 16.9997 13.8465 16.9997Z"
    />
  </svg>
`,Ei=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.713T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"
    />
  </svg>
`,Di=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
`,Oi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"
    />
  </svg>
`,ki=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3 20v-6l8-2l-8-2V4l19 8z"
    />
  </svg>
`,Ai=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 13v-2h14v2z"
    />
  </svg>
`,ji=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M3.25 13.7404C3.0375 13.7404 2.85938 13.6684 2.71563 13.5246C2.57188 13.3808 2.5 13.2026 2.5 12.99C2.5 12.7774 2.57188 12.5993 2.71563 12.4558C2.85938 12.3122 3.0375 12.2404 3.25 12.2404H20.75C20.9625 12.2404 21.1406 12.3123 21.2843 12.4561C21.4281 12.5999 21.5 12.7781 21.5 12.9907C21.5 13.2033 21.4281 13.3814 21.2843 13.525C21.1406 13.6686 20.9625 13.7404 20.75 13.7404H3.25ZM10.9423 10.2596V6.62495H6.5673C6.2735 6.62495 6.02377 6.52201 5.8181 6.31613C5.61245 6.11026 5.50963 5.86027 5.50963 5.56615C5.50963 5.27205 5.61245 5.02083 5.8181 4.8125C6.02377 4.60417 6.2735 4.5 6.5673 4.5H17.4423C17.7361 4.5 17.9858 4.60294 18.1915 4.80883C18.3971 5.01471 18.5 5.2647 18.5 5.5588C18.5 5.85292 18.3971 6.10413 18.1915 6.31245C17.9858 6.52078 17.7361 6.62495 17.4423 6.62495H13.0673V10.2596H10.9423ZM10.9423 15.7211H13.0673V18.4423C13.0673 18.7361 12.9643 18.9858 12.7584 19.1915C12.5526 19.3971 12.3026 19.5 12.0085 19.5C11.7144 19.5 11.4631 19.3962 11.2548 19.1887C11.0465 18.9811 10.9423 18.7291 10.9423 18.4327V15.7211Z"
    />
  </svg>
`,Mi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8078)">
      <path
        d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8078">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Ni=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5547)">
      <path
        d="M5 5.5C5 6.33 5.67 7 6.5 7H10.5V17.5C10.5 18.33 11.17 19 12 19C12.83 19 13.5 18.33 13.5 17.5V7H17.5C18.33 7 19 6.33 19 5.5C19 4.67 18.33 4 17.5 4H6.5C5.67 4 5 4.67 5 5.5Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5547">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Pi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M5.66936 16.3389L9.39244 12.6158C9.54115 12.4671 9.71679 12.3937 9.91936 12.3957C10.1219 12.3976 10.2975 12.4761 10.4463 12.6312C10.5847 12.7823 10.654 12.9585 10.654 13.1599C10.654 13.3613 10.5847 13.5363 10.4463 13.6851L6.32704 17.8197C6.14627 18.0004 5.93538 18.0908 5.69436 18.0908C5.45333 18.0908 5.24243 18.0004 5.06166 17.8197L3.01744 15.7754C2.87899 15.637 2.81136 15.4629 2.81456 15.2533C2.81776 15.0437 2.88859 14.8697 3.02706 14.7312C3.16551 14.5928 3.34008 14.5235 3.55076 14.5235C3.76144 14.5235 3.93494 14.5928 4.07126 14.7312L5.66936 16.3389ZM5.66936 8.72359L9.39244 5.00049C9.54115 4.85177 9.71679 4.77838 9.91936 4.78031C10.1219 4.78223 10.2975 4.86075 10.4463 5.01586C10.5847 5.16691 10.654 5.34314 10.654 5.54454C10.654 5.74592 10.5847 5.92097 10.4463 6.06969L6.32704 10.2043C6.14627 10.3851 5.93538 10.4755 5.69436 10.4755C5.45333 10.4755 5.24243 10.3851 5.06166 10.2043L3.01744 8.16009C2.87899 8.02162 2.81136 7.84759 2.81456 7.63799C2.81776 7.42837 2.88859 7.25433 3.02706 7.11586C3.16551 6.97741 3.34008 6.90819 3.55076 6.90819C3.76144 6.90819 3.93494 6.97741 4.07126 7.11586L5.66936 8.72359ZM13.7597 16.5581C13.5472 16.5581 13.3691 16.4862 13.2253 16.3424C13.0816 16.1986 13.0097 16.0204 13.0097 15.8078C13.0097 15.5952 13.0816 15.4171 13.2253 15.2735C13.3691 15.13 13.5472 15.0582 13.7597 15.0582H20.7597C20.9722 15.0582 21.1503 15.1301 21.2941 15.2739C21.4378 15.4177 21.5097 15.5959 21.5097 15.8085C21.5097 16.0211 21.4378 16.1992 21.2941 16.3427C21.1503 16.4863 20.9722 16.5581 20.7597 16.5581H13.7597ZM13.7597 8.94276C13.5472 8.94276 13.3691 8.87085 13.2253 8.72704C13.0816 8.58324 13.0097 8.40504 13.0097 8.19244C13.0097 7.97985 13.0816 7.80177 13.2253 7.65819C13.3691 7.5146 13.5472 7.44281 13.7597 7.44281H20.7597C20.9722 7.44281 21.1503 7.51471 21.2941 7.65851C21.4378 7.80233 21.5097 7.98053 21.5097 8.19311C21.5097 8.40571 21.4378 8.5838 21.2941 8.72739C21.1503 8.87097 20.9722 8.94276 20.7597 8.94276H13.7597Z"
    />
  </svg>
`,Fi=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m12.9 16l-2.55-2.5l.05-.05q1.45-1.6 2.262-3.117T13.95 7H16V5h-6V3H8v2H2v2h9.1q-.5 1.2-1.225 2.387T8 11.7q-.6-.6-1.187-1.412T5.85 8.6H3.85q.5 1.4 1.3 2.7T6.95 13.7L2.85 17.75L4.25 19.15L8 15.4L10.55 17.95zM18.5 22h-2L21 10h2l4.5 12h-2l-1.05-3h-4.9zm1.6-5h3.6l-1.8-5.1z"
    />
  </svg>
`,Ii=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 19v-.808L13.096 12L7 5.808V5h10v1.25H9.102L14.727 12l-5.625 5.77H17V19z"
    />
  </svg>
`,Li=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
  >
    <path
      d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
    />
  </svg>
`,Ri={[O.CodeMirror]:{theme:ae,languages:re,expandIcon:Qr,searchIcon:Di,clearSearchIcon:ti,searchPlaceholder:`Search language`,noResultText:`No result`,previewToggleIcon:e=>e?ci:Li}},zi=ce([],`FeaturesCtx`),Bi=ce({},`CrepeCtx`),Vi=Ee({provider:void 0,buildContext:void 0,diffReviewOnEnd:!0,onError:e=>{console.error(`[milkdown/ai] [${e.code}]`,e)},aiIcon:void 0},`aiProviderConfig`),k=Ee({abortController:null,label:``,lastInstruction:``,lastLabel:void 0,lastFrom:-1,lastTo:-1,diffOwnedByAI:!1},`aiSession`),Hi=Oe(`RunAI`,e=>t=>(n,r)=>{if(!t?.instruction)return!1;let i=e.get(Vi.key);if(!i.provider||e.get(k.key).abortController||Wt.getState(n)?.active||ft.getState(n)?.active)return!1;if(!r)return!0;let a=new AbortController,{from:o,to:s}=n.selection;e.set(k.key,{abortController:a,label:t.label??``,lastInstruction:t.instruction,lastLabel:t.label,lastFrom:o,lastTo:s,diffOwnedByAI:!1});let c=e.get(h),l=n.selection.empty?`cursor`:`selection`;if(!c.call(ut.key,{insertAt:l}))return or(e),!1;let u;try{u=(i.buildContext??ir)(e,t.instruction)}catch(t){return ar(e,le(t)),c.call(Tt.key,{keep:!1}),or(e),!1}return sr(e,i.provider,u,a),!0}),Ui=Oe(`AbortAI`,e=>t=>(n,r)=>{let i=e.get(k.key);return r?i.abortController?(i.abortController.abort(),or(e),Wt.getState(n)?.active&&e.get(h).call(Tt.key,t),!0):!1:!!i.abortController}),Wi=e=>{throw TypeError(e)},Gi=(e,t,n)=>t.has(e)||Wi(`Cannot `+n),A=(e,t,n)=>(Gi(e,t,`read from private field`),n?n.call(e):t.get(e)),j=(e,t,n)=>t.has(e)?Wi(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),M=(e,t,n,r)=>(Gi(e,t,`write to private field`),t.set(e,n),n),Ki=(e,t,n)=>(Gi(e,t,`access private method`),n),sa=`milkdown-ai-diff-actions`,ca=class{constructor(e,t,n){this.ctx=e,j(this,P),j(this,qi),j(this,Ji),j(this,Yi),j(this,Xi),j(this,Zi,!1),j(this,Qi,!1),j(this,N,null),j(this,$i,!1),j(this,ra,()=>{let e=this.ctx.get(k.key);if(!e.lastInstruction||!A(this,$i)||!Ki(this,P,ia).call(this))return;let t=this.ctx.get(h);t.call(vt.key);let n=this.ctx.get(_),{doc:r}=n.state,i=Math.min(Math.max(e.lastFrom,0),r.content.size),a=Math.min(Math.max(e.lastTo,0),r.content.size);n.dispatch(n.state.tr.setSelection(p.create(n.state.doc,i,a))),t.call(Hi.key,{instruction:e.lastInstruction,label:e.lastLabel})}),j(this,aa,()=>{this.ctx.get(h).call(vt.key)}),j(this,oa,()=>{this.ctx.get(h).call(at.key)}),M(this,Xi,n),M(this,Ji,Ki(this,P,ea).call(this,t));let r=document.createElement(`div`);r.className=sa,r.dataset.show=`false`,M(this,Yi,Ki(this,P,ta).call(this,`retry`,n.retryIcon,n.retryLabel,A(this,ra))),r.appendChild(A(this,Yi)),r.appendChild(Ki(this,P,ta).call(this,`reject`,n.rejectIcon,n.rejectAllLabel,A(this,aa)));let i=Ki(this,P,ta).call(this,`accept`,n.acceptIcon,n.acceptAllLabel,A(this,oa));i.appendChild(Ki(this,P,na).call(this)),r.appendChild(i),M(this,qi,r),A(this,Ji).appendChild(r),this.update(t)}update(e){let t=!!ft.getState(e.state)?.active;if(t!==A(this,Qi)){if(M(this,Qi,t),t){let t=this.ctx.get(k.key);M(this,$i,t.diffOwnedByAI),M(this,N,e.state.doc)}else{M(this,$i,!1),M(this,N,null);let e=this.ctx.get(k.key);e.diffOwnedByAI&&this.ctx.set(k.key,{...e,diffOwnedByAI:!1})}}let n=t&&A(this,$i);if(n!==A(this,Zi)&&(M(this,Zi,n),A(this,qi).dataset.show=n?`true`:`false`),n){let t=this.ctx.get(k.key),n=!!A(this,N)&&e.state.doc.eq(A(this,N));A(this,Yi).disabled=!t.lastInstruction||!n}}destroy(){A(this,qi).remove()}},qi=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,N=new WeakMap,$i=new WeakMap,P=new WeakSet,ea=function(e){return e.dom.closest(`.milkdown`)??document.body},ta=function(e,t,n,r){let i=document.createElement(`button`);i.type=`button`,i.className=`${sa}-btn ${sa}-btn-${e}`,i.appendChild(lr(t));let a=document.createElement(`span`);return a.textContent=n,i.appendChild(a),i.addEventListener(`mousedown`,e=>e.preventDefault()),i.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),r()}),i},na=function(){let e=document.createElement(`span`);e.className=`${sa}-shortcut`;let t=document.createElement(`span`);t.textContent=A(this,Xi).modSymbol;let n=document.createElement(`span`);return n.className=`${sa}-shortcut-icon`,cr(n,A(this,Xi).enterKeyIcon),e.append(t,n),e},ra=new WeakMap,ia=function(){return A(this,N)?this.ctx.get(_).state.doc.eq(A(this,N)):!1},aa=new WeakMap,oa=new WeakMap,la=new de(`CREPE_AI_DIFF_ACTIONS_PANEL`),ua=`Retry`,da=`Reject all`,fa=`Accept all`,pa=ur(),ma=e=>{throw TypeError(e)},ha=(e,t,n)=>t.has(e)||ma(`Cannot `+n),F=(e,t,n)=>(ha(e,t,`read from private field`),n?n.call(e):t.get(e)),ga=(e,t,n)=>t.has(e)?ma(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),_a=(e,t,n,r)=>(ha(e,t,`write to private field`),t.set(e,n),n),ya=class{constructor(){ga(this,I,[]),this.addItem=(e,t)=>(F(this,va).call(this,e),F(this,I).push({kind:`item`,id:e,item:t}),this),this.addSubmenu=(e,t,n)=>{F(this,va).call(this,e);let r={def:t,items:new Map};return n&&n(pr(r)),F(this,I).push({kind:`submenu`,id:e,node:r}),this},this.removeItem=e=>(F(this,va).call(this,e),this),this.getItem=e=>{let t=F(this,I).find(t=>t.kind===`item`&&t.id===e);return t?.kind===`item`?t.item:void 0},this.getSubmenu=e=>{let t=F(this,I).find(t=>t.kind===`submenu`&&t.id===e);return t?.kind===`submenu`?pr(t.node):void 0},this.clear=()=>(_a(this,I,[]),this),this.build=()=>{let e=[],t={};for(let n of F(this,I))n.kind===`item`?e.push({kind:`item`,id:n.id,item:n.item}):(e.push({kind:`submenu`,id:n.id,def:n.node.def}),t[n.id]={def:n.node.def,items:Array.from(n.node.items.entries()).map(([e,t])=>({id:e,item:t}))});return{main:e,submenus:t}},ga(this,va,e=>{_a(this,I,F(this,I).filter(t=>t.id!==e))})}},I=new WeakMap,va=new WeakMap,ba=Vn({props:{placeholder:{type:Object,required:!0},resetSignal:{type:Object,required:!0},suggestions:{type:Object,required:!0},chrome:{type:Object,required:!0},onConfirm:{type:Function,required:!0},onCancel:{type:Function,required:!0}},setup({placeholder:e,resetSignal:t,suggestions:n,chrome:r,onConfirm:i,onCancel:a}){let o=C(``),s=C({kind:`main`}),c=C(0),l=C(null),u=C(null),d=`ai-instruction-list-${Math.random().toString(36).slice(2,9)}`,f=e=>`${d}-opt-${e}`,ee=`ai-instruction-input-${Math.random().toString(36).slice(2,9)}`;Un(t,()=>{o.value=``,s.value={kind:`main`},c.value=0});let te=T(()=>{if(s.value.kind===`submenu`){let e=n.submenus[s.value.id];return e?e.items.map(({id:e,item:t})=>({id:e,icon:t.icon,label:t.label,hasSubmenu:!1,prompt:{text:t.prompt,streamingLabel:t.streamingLabel}})):[]}return n.main.map(e=>e.kind===`item`?{id:e.id,icon:e.item.icon,label:e.item.label,hasSubmenu:!1,prompt:{text:e.item.prompt,streamingLabel:e.item.streamingLabel}}:{id:e.id,icon:e.def.icon,label:e.def.label,hasSubmenu:!0})}),ne=T(()=>s.value.kind===`submenu`?n.submenus[s.value.id]?.def??null:null),re=T(()=>{let e=o.value.trim().toLowerCase();return e?te.value.filter(t=>t.label.toLowerCase().includes(e)):te.value}),ie=T(()=>o.value.trim().length>0),ae=T(()=>re.value.length+ +!!ie.value);Un([re,s,ie],()=>{c.value=ie.value?re.value.length:0});let oe=()=>{Hn(()=>l.value?.focus())},se=e=>{s.value={kind:`submenu`,id:e},o.value=``,c.value=0,oe()},ce=()=>{s.value={kind:`main`},o.value=``,c.value=0,oe()},le=e=>{e.hasSubmenu?se(e.id):e.prompt&&(i(e.prompt.text,e.prompt.streamingLabel),o.value=``)},ue=()=>{let e=o.value.trim();e&&(i(e),o.value=``)},de=()=>{let e=c.value,t=re.value;e<t.length?le(t[e]):ie.value&&ue()},fe=()=>{Hn(()=>{let e=u.value;e&&e.querySelector(`[data-index="${c.value}"]`)?.scrollIntoView({block:`nearest`})})},p=e=>{if(e.stopPropagation(),e.key===`ArrowDown`){if(e.preventDefault(),ae.value===0)return;c.value=(c.value+1)%ae.value,fe()}else if(e.key===`ArrowUp`){if(e.preventDefault(),ae.value===0)return;c.value=(c.value-1+ae.value)%ae.value,fe()}else e.key===`Enter`?(e.preventDefault(),de()):e.key===`Escape`?(e.preventDefault(),s.value.kind===`submenu`?ce():a()):e.key===`Backspace`&&o.value===``&&s.value.kind===`submenu`&&(e.preventDefault(),ce())},m=e=>{e.preventDefault()};return()=>{let t=re.value,n=ie.value,i=ne.value;return w(`div`,{class:`ai-instruction`},w(`div`,{class:`ai-instruction-input`},w(`span`,{class:`ai-instruction-input-prefix`},w(g,{icon:r.aiIcon})),w(`input`,{ref:l,id:ee,class:`ai-instruction-input-field`,role:`combobox`,"aria-expanded":`true`,"aria-autocomplete":`list`,"aria-controls":d,"aria-activedescendant":ae.value>0?f(c.value):void 0,placeholder:i?i.searchPlaceholder:e.value,value:o.value,onInput:e=>{o.value=e.target.value},onKeydown:p}),w(`button`,{type:`button`,class:`ai-instruction-submit`,"aria-label":r.submitButtonLabel,disabled:!n,onMousedown:m,onClick:ue},w(g,{icon:r.sendIcon}))),w(`div`,{class:`ai-instruction-list`,ref:u,id:d,role:`listbox`,"aria-label":r.listboxLabel},i&&w(`button`,{type:`button`,class:`ai-instruction-back`,onMousedown:m,onClick:ce},w(`span`,{class:`ai-instruction-back-icon`,"aria-hidden":`true`},w(g,{icon:r.chevronLeftIcon})),w(`span`,null,i.title)),t.length>0&&w(`div`,{class:`ai-instruction-section`},w(`div`,{class:`ai-instruction-section-header`},r.suggestionsHeaderLabel),t.map((e,t)=>w(`div`,{key:e.id,id:f(t),"data-index":t,role:`option`,"aria-selected":t===c.value,class:[`ai-instruction-item`,t===c.value?`active`:``],onMousedown:m,onClick:()=>le(e),onPointerenter:()=>{c.value=t}},w(`span`,{class:`ai-instruction-item-icon`},w(g,{icon:e.icon})),w(`span`,{class:`ai-instruction-item-label`},hr(e.label,o.value)),e.hasSubmenu&&w(`span`,{class:`ai-instruction-item-arrow`},w(g,{icon:r.chevronRightIcon}))))),n&&w(`div`,{class:`ai-instruction-section`},w(`div`,{class:`ai-instruction-section-header`},r.sendAsPromptHeaderLabel),w(`div`,{id:f(t.length),"data-index":t.length,role:`option`,"aria-selected":c.value===t.length,class:[`ai-instruction-item`,`ai-instruction-item-prompt`,c.value===t.length?`active`:``],onMousedown:m,onClick:ue,onPointerenter:()=>{c.value=t.length}},w(`span`,{class:`ai-instruction-item-icon`},w(g,{icon:r.sendPromptIcon})),w(`span`,{class:`ai-instruction-item-label`},r.sendAsPromptLabel,` `,w(`span`,{class:`ai-instruction-item-quote`},`"`,o.value,`"`)),w(`span`,{class:`ai-instruction-item-shortcut`},w(g,{icon:r.enterKeyIcon}))))))}}}),xa=e=>{throw TypeError(e)},Sa=(e,t,n)=>t.has(e)||xa(`Cannot `+n),L=(e,t,n)=>(Sa(e,t,`read from private field`),n?n.call(e):t.get(e)),R=(e,t,n)=>t.has(e)?xa(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),z=(e,t,n,r)=>(Sa(e,t,`write to private field`),t.set(e,n),n),ja=class{constructor(e,t,n){this.ctx=e,R(this,Ca),R(this,B),R(this,wa),R(this,Ta),R(this,Ea),R(this,Da,-1),R(this,Oa,-1),R(this,V,!1),R(this,ka,(e,t)=>{e.trim()&&this.ctx.get(h).call(Hi.key,{instruction:e,label:t})&&(z(this,V,!1),L(this,B).hide())}),R(this,Aa,()=>{z(this,V,!1),L(this,B).hide()}),this.show=(e,t)=>{z(this,Da,e),z(this,Oa,t),L(this,Ea).value++,z(this,V,!0);let n=this.ctx.get(_);L(this,B).show({getBoundingClientRect:()=>ve(n,e,t)},n),requestAnimationFrame(()=>{var e;(e=L(this,Ca).querySelector(`input`))==null||e.focus()})},this.update=(e,t)=>{let{selection:n}=e.state,r=n instanceof p,i=n.from!==L(this,Da)||n.to!==L(this,Oa);!r||i?(z(this,V,!1),L(this,B).hide()):L(this,B).update(e,t)},this.destroy=()=>{L(this,wa).unmount(),L(this,B).destroy(),L(this,Ca).remove()},z(this,Ta,C(n.placeholder)),z(this,Ea,C(0));let r=document.createElement(`div`);r.className=`milkdown-ai-instruction`;let i=Jn(ba,{placeholder:L(this,Ta),resetSignal:L(this,Ea),suggestions:n.suggestions,chrome:n.chrome,onConfirm:L(this,ka),onCancel:L(this,Aa)});i.mount(r),z(this,wa,i),z(this,Ca,r),z(this,B,new on({content:r,debounce:0,offset:10,shouldShow:()=>L(this,V),floatingUIOptions:{placement:`bottom`}})),L(this,B).onHide=()=>{z(this,V,!1),requestAnimationFrame(()=>{try{let e=L(this,Ca).getRootNode().activeElement;if(!e||!L(this,Ca).contains(e))return;this.ctx.get(_).dom.focus({preventScroll:!0})}catch{}})},L(this,B).update(t)}},Ca=new WeakMap,B=new WeakMap,wa=new WeakMap,Ta=new WeakMap,Ea=new WeakMap,Da=new WeakMap,Oa=new WeakMap,V=new WeakMap,ka=new WeakMap,Aa=new WeakMap,Ma=Ee({show:()=>{}},`aiInstructionTooltipAPI`),Na=an(`CREPE_AI_INSTRUCTION`),Pa=`SUGGESTIONS`,Fa=`SEND AS PROMPT`,Ia=`Ask AI:`,La=`Send prompt`,Ra=`AI suggestions`,za=`Tell AI what to do with the selection…`,Ba=e=>{throw TypeError(e)},Va=(e,t,n)=>t.has(e)||Ba(`Cannot `+n),H=(e,t,n)=>(Va(e,t,`read from private field`),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?Ba(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ha=(e,t,n,r)=>(Va(e,t,`write to private field`),t.set(e,n),n),Xa=`milkdown-ai-streaming`,Za=800,Qa=`Generating`,$a=`Esc to cancel`,eo=new de(`CREPE_AI_STREAMING_INDICATOR`),to=class{constructor(e,t,n){U(this,Ua),U(this,Wa),U(this,Ga),U(this,Ka,performance.now()),U(this,qa,``),U(this,Ja,0),U(this,Ya,()=>{let e=(performance.now()-H(this,Ka))/Za*360;H(this,Ua).style.transform=`rotate(${e}deg)`,Ha(this,Ja,requestAnimationFrame(H(this,Ya)))}),Ha(this,Ga,t);let r=document.createElement(`span`);r.className=`${Xa}-indicator`,r.contentEditable=`false`,r.setAttribute(`role`,`status`),r.setAttribute(`aria-live`,`polite`);let i=document.createElement(`span`);i.className=`${Xa}-spinner`,i.setAttribute(`aria-hidden`,`true`),r.appendChild(i);let a=document.createElement(`span`);a.className=`${Xa}-label`,r.appendChild(a);let o=document.createElement(`span`);o.className=`${Xa}-esc`,o.textContent=n,r.appendChild(o),this.dom=r,Ha(this,Ua,i),Ha(this,Wa,a),this.setLabel(e),H(this,Ya).call(this)}setLabel(e){let t=`${e.get(k.key).label||H(this,Ga)}\u2026`;t!==H(this,qa)&&(Ha(this,qa,t),H(this,Wa).textContent=t)}destroy(){H(this,Ja)&&cancelAnimationFrame(H(this,Ja)),Ha(this,Ja,0)}},Ua=new WeakMap,Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,no=[`table`,`image-block`,`code_block`],ro={heading:[`id`]},io=(e,t)=>{let n=t?.diff??{},r=t?.streaming??{};e.config(E(O.AI)).config(e=>{e.update(St.key,e=>({...e,ignoreAttrs:n.ignoreAttrs??ro}));let{ignoreAttrs:t,...r}=n;e.update(Re.key,e=>({...e,customBlockTypes:r.customBlockTypes??no,...r}))}).use(bt).use(nt).config(e=>{e.update(xt.key,e=>({...e,...r,ignoreAttrs:r.ignoreAttrs??ro,...t?.diffReviewOnEnd===void 0?{}:{diffReviewOnEnd:t.diffReviewOnEnd}}))}).use(lt).config(e=>{e.update(Vi.key,e=>({...e,...t?.provider===void 0?{}:{provider:t.provider},...t?.buildContext===void 0?{}:{buildContext:t.buildContext},diffReviewOnEnd:t?.diffReviewOnEnd??e.diffReviewOnEnd,...t?.onError===void 0?{}:{onError:t.onError},...t?.aiIcon===void 0?{}:{aiIcon:t.aiIcon}}))}).use(Vi).use(k).use(Hi).use(Ui).config(vr(t)).use(Ma).use(Na).use(yr({config:t?.streamingIndicator})).use(fr({config:t?.diffActions,enterKeyIcon:t?.enterKeyIcon}))},ao=e=>{throw TypeError(e)},oo=(e,t,n)=>t.has(e)||ao(`Cannot `+n),so=(e,t,n)=>(oo(e,t,`read from private field`),n?n.call(e):t.get(e)),co=(e,t,n)=>t.has(e)?ao(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),lo=(e,t,n,r)=>(oo(e,t,`write to private field`),t.set(e,n),n),po=class{constructor(){co(this,uo,[]),this.clear=()=>(lo(this,uo,[]),this),co(this,fo,e=>{let t={group:e,addItem:(n,r)=>{let i={...r,key:n};return e.items.push(i),t},clear:()=>(e.items=[],t)};return t}),this.addGroup=(e,t)=>{let n={key:e,label:t,items:[]};return so(this,uo).push(n),so(this,fo).call(this,n)},this.getGroup=e=>{let t=so(this,uo).find(t=>t.key===e);if(!t)throw Error(`Group with key ${e} not found`);return so(this,fo).call(this,t)},this.build=()=>so(this,uo)}},uo=new WeakMap,fo=new WeakMap,mo=Vn({props:{ctx:{type:Object,required:!0},show:{type:Object,required:!0},filter:{type:Object,required:!0},hide:{type:Function,required:!0},config:{type:Object,required:!1}},setup({ctx:e,show:t,filter:n,hide:r,config:i}){let a=C(),o=T(()=>Sr(n.value,i,e)),s=C(0),c=C({x:-999,y:-999}),l=e=>{let{x:t,y:n}=e;c.value={x:t,y:n}};Un([o,t],()=>{let{size:e}=o.value;e===0&&t.value?r():s.value>=e&&(s.value=0)});let u=(e,t)=>{let n=s.value,r=typeof e==`function`?e(n):e;t?.(r),s.value=r},d=e=>{let t=a.value?.querySelector(`[data-index="${e}"]`),n=a.value?.querySelector(`.menu-groups`);t&&n&&(n.scrollTop=t.offsetTop-n.offsetTop)},f=t=>{let n=o.value.groups.flatMap(e=>e.items).at(t);n?.onRun&&e&&n.onRun(e),r()},ee=e=>{let{size:t,groups:n}=o.value;if(e.key===`Escape`)e.preventDefault(),r?.();else{if(e.key===`ArrowDown`)return e.preventDefault(),u(e=>e<t-1?e+1:e,d);if(e.key===`ArrowUp`)return e.preventDefault(),u(e=>e<=0?e:e-1,d);if(e.key===`ArrowLeft`)return e.preventDefault(),u(e=>{let t=n.find(t=>t.range[0]<=e&&t.range[1]>e);if(!t)return e;let r=n[n.indexOf(t)-1];return r?r.range[1]-1:e},d);if(e.key===`ArrowRight`)return e.preventDefault(),u(e=>{let t=n.find(t=>t.range[0]<=e&&t.range[1]>e);if(!t)return e;let r=n[n.indexOf(t)+1];return r?r.range[0]:e},d);e.key===`Enter`&&(e.preventDefault(),f(s.value))}},te=e=>t=>{let n=c.value;if(!n)return;let{x:r,y:i}=t;(r!==n.x||i!==n.y)&&u(e)};return Wn(()=>{t.value?window.addEventListener(`keydown`,ee,{capture:!0}):window.removeEventListener(`keydown`,ee,{capture:!0})}),qn(()=>{window.removeEventListener(`keydown`,ee,{capture:!0})}),()=>w(`div`,{ref:a,onPointerdown:e=>e.preventDefault()},w(`nav`,{class:`tab-group`},w(`ul`,null,o.value.groups.map(e=>w(`li`,{key:e.key,onPointerdown:()=>u(e.range[0],d),class:s.value>=e.range[0]&&s.value<e.range[1]?`selected`:``},e.label)))),w(`div`,{class:`menu-groups`,onPointermove:l},o.value.groups.map(e=>w(`div`,{key:e.key,class:`menu-group`},w(`h6`,null,e.label),w(`ul`,null,e.items.map(e=>w(`li`,{key:e.key,"data-index":e.index,class:s.value===e.index?`hover`:``,onPointerenter:te(e.index),onPointerdown:()=>{var t;(t=a.value?.querySelector(`[data-index="${e.index}"]`))==null||t.classList.add(`active`)},onPointerup:()=>{var t;(t=a.value?.querySelector(`[data-index="${e.index}"]`))==null||t.classList.remove(`active`),f(e.index)}},w(g,{icon:e.icon}),w(`span`,null,e.label))))))))}}),ho=e=>{throw TypeError(e)},go=(e,t,n)=>t.has(e)||ho(`Cannot `+n),W=(e,t,n)=>(go(e,t,`read from private field`),n?n.call(e):t.get(e)),_o=(e,t,n)=>t.has(e)?ho(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,r)=>(go(e,t,`write to private field`),t.set(e,n),n),So=wt(`CREPE_MENU`),Co=Ee({show:()=>{},hide:()=>{}},`menuAPICtx`),wo=class{constructor(e,t,n){_o(this,vo),_o(this,yo),_o(this,bo),_o(this,K),_o(this,xo,null),this.update=e=>{W(this,K).update(e)},this.show=e=>{G(this,xo,e),W(this,bo).value=``,W(this,K).show()},this.hide=()=>{G(this,xo,null),W(this,K).hide()},this.destroy=()=>{W(this,K).destroy(),W(this,yo).unmount(),W(this,vo).remove()};let r=document.createElement(`div`);r.classList.add(`milkdown-slash-menu`);let i=C(!1),a=C(``);G(this,bo,a);let o=this.hide,s=Jn(mo,{ctx:e,config:n,show:i,filter:a,hide:o});G(this,yo,s),s.mount(r),G(this,vo,r);let c=this,l=n?.slashMenu??{};G(this,K,new mt({content:W(this,vo),debounce:20,shouldShow(e){if(br(e.state.selection)||xr(e.state.selection))return!1;let t=this.getContent(e,e=>[`paragraph`,`heading`].includes(e.type.name));if(t==null||!wr(e.state.selection))return!1;let n=W(c,xo);if(a.value=t.startsWith(`/`)?t.slice(1):t,typeof n==`number`){let t=e.state.doc.nodeSize-2,r=Math.min(n,t);return e.state.doc.resolve(r).node()===e.state.doc.resolve(e.state.selection.from).node()||(G(c,xo,null),!1)}return!!t.startsWith(`/`)},offset:l.offset??10,middleware:l.middleware,floatingUIOptions:l.floatingUIOptions,root:l.root})),W(this,K).onShow=()=>{i.value=!0},W(this,K).onHide=()=>{i.value=!1},this.update(t),e.set(Co.key,{show:e=>this.show(e),hide:()=>this.hide()})}},vo=new WeakMap,yo=new WeakMap,bo=new WeakMap,K=new WeakMap,xo=new WeakMap,To=Vn({props:{onAdd:{type:Function,required:!0},addIcon:{type:String,required:!0},handleIcon:{type:String,required:!0}},setup(e){let t=C();return()=>w(Kn,null,w(`div`,{ref:t,class:`operation-item`,onPointerdown:e=>{var n;e.preventDefault(),e.stopPropagation(),(n=t.value)==null||n.classList.add(`active`)},onPointerup:n=>{var r;n.preventDefault(),n.stopPropagation(),(r=t.value)==null||r.classList.remove(`active`),e.onAdd()}},w(g,{icon:e.addIcon})),w(`div`,{class:`operation-item`},w(g,{icon:e.handleIcon})))}}),Eo=e=>{throw TypeError(e)},Do=(e,t,n)=>t.has(e)||Eo(`Cannot `+n),q=(e,t,n)=>(Do(e,t,`read from private field`),n?n.call(e):t.get(e)),Oo=(e,t,n)=>t.has(e)?Eo(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ko=(e,t,n,r)=>(Do(e,t,`write to private field`),t.set(e,n),n),Po=class{constructor(e,t){Oo(this,Ao),Oo(this,jo),Oo(this,Mo),Oo(this,No),this.update=()=>{q(this,jo).update()},this.destroy=()=>{q(this,jo).destroy(),q(this,Ao).remove(),q(this,Mo).unmount()},this.onAdd=()=>{let e=q(this,No),t=e.get(_);t.hasFocus()||t.focus();let{state:n,dispatch:r}=t,i=q(this,jo).active;if(!i)return;let a=i.$pos.pos+i.node.nodeSize,o=n.tr.insert(a,Ut.type(e).create());o=o.setSelection(p.near(o.doc.resolve(a))),r(o.scrollIntoView()),q(this,jo).hide(),e.get(Co.key).show(o.selection.from)},ko(this,No,e);let n=document.createElement(`div`);n.classList.add(`milkdown-block-handle`);let r=Jn(To,{onAdd:this.onAdd,addIcon:t?.handleAddIcon??Ci,handleIcon:t?.handleDragIcon??xi});r.mount(n),ko(this,Mo,r),ko(this,Ao,n);let i=t?.blockHandle??{};ko(this,jo,new Jt({ctx:e,content:n,getOffset:i.getOffset??(()=>16),getPlacement:i.getPlacement??(({active:e,blockDom:t})=>{if(e.node.type.name===`heading`)return`left`;let n=0;e.node.descendants(e=>{n+=e.childCount});let r=e.el,i=r.getBoundingClientRect(),a=t.getBoundingClientRect(),o=window.getComputedStyle(r),s=Number.parseInt(o.paddingTop,10)||0,c=Number.parseInt(o.paddingBottom,10)||0,l=i.height-s-c,u=a.height;return n>2||u<l?`left-start`:`left`}),shouldShow:i.shouldShow,getPosition:i.getPosition,middleware:i.middleware,floatingUIOptions:i.floatingUIOptions,root:i.root})),this.update()}},Ao=new WeakMap,jo=new WeakMap,Mo=new WeakMap,No=new WeakMap,Fo=(e,t)=>{e.config(E(O.BlockEdit)).config(e=>Tr(e,t)).config(e=>Cr(e,t)).use(Co).use(Ht).use(So)},Io=(e,t={})=>{e.config(E(O.CodeMirror)).config(e=>{let{languages:n=[],theme:r}=t,i=[te.of(Zn.concat(Xn)),f];r&&i.push(r),t.extensions&&i.push(...t.extensions),e.update(We.key,e=>({extensions:i,languages:n,expandIcon:t.expandIcon||Qr,searchIcon:t.searchIcon||Di,clearSearchIcon:t.clearSearchIcon||ti,searchPlaceholder:t.searchPlaceholder||`Search language`,copyText:t.copyText||`Copy`,copyIcon:t.copyIcon||ai,onCopy:t.onCopy||(()=>{}),noResultText:t.noResultText||`No result`,renderLanguage:t.renderLanguage||e.renderLanguage,renderPreview:t.renderPreview||e.renderPreview,previewToggleButton:e=>[t.previewToggleIcon?.call(t,e)||(e?ci:Li),t.previewToggleText?.call(t,e)||(e?`Edit`:`Hide`)].map(e=>e.trim()).join(` `),previewLabel:t.previewLabel||e.previewLabel,previewLoading:t.previewLoading||e.previewLoading,previewOnlyByDefault:t.previewOnlyByDefault??e.previewOnlyByDefault}))}).use(Ge)},Lo=(e,t)=>{if(e.config(E(O.Cursor)).config(e=>{e.update(Mt.key,()=>({class:`crepe-drop-cursor`,width:t?.width??4,color:t?.color??!1}))}).use(Bt),t?.virtual===!1)return;let n=$n({skipWarning:[`inlineCode`]});e.use(ke(()=>n))},Ro=(e,t)=>{e.config(E(O.ImageBlock)).config(e=>{e.update(Je.key,e=>({uploadButton:t?.inlineUploadButton??`Upload`,imageIcon:t?.inlineImageIcon??_i,confirmButton:t?.inlineConfirmButton??ii,uploadPlaceholderText:t?.inlineUploadPlaceholderText??`or paste link`,onUpload:t?.inlineOnUpload??t?.onUpload??e.onUpload,proxyDomURL:t?.proxyDomURL})),e.update(rt.key,e=>({uploadButton:t?.blockUploadButton??`Upload file`,imageIcon:t?.blockImageIcon??_i,captionIcon:t?.blockCaptionIcon??Yr,confirmButton:t?.blockConfirmButton??`Confirm`,captionPlaceholderText:t?.blockCaptionPlaceholderText??`Write Image Caption`,uploadPlaceholderText:t?.blockUploadPlaceholderText??`or paste link`,onUpload:t?.blockOnUpload??t?.onUpload??e.onUpload,proxyDomURL:t?.proxyDomURL,onImageLoadError:t?.onImageLoadError??e.onImageLoadError,maxWidth:t?.maxWidth,maxHeight:t?.maxHeight}))}).use(tt).use(Ue)},zo=Ot.extendSchema(e=>t=>{let n=e(t);return{...n,toMarkdown:{match:n.toMarkdown.match,runner:(e,t)=>{if((t.attrs.language??``).toLowerCase()===`latex`)e.addNode(`math`,void 0,t.content.firstChild?.text||``);else return n.toMarkdown.runner(e,t)}}}}),Bo=`math_inline`,Vo=`ToggleLatex`,Ho=Ce(Bo,()=>({group:`inline`,inline:!0,draggable:!0,atom:!0,attrs:{value:{default:``}},parseDOM:[{tag:`span[data-type="${Bo}"]`,getAttrs:e=>({value:e.dataset.value??``})}],toDOM:e=>{let t=e.attrs.value,n=document.createElement(`span`);return n.dataset.type=Bo,n.dataset.value=t,er.render(t,n,{throwOnError:!1}),n},parseMarkdown:{match:e=>e.type===`inlineMath`,runner:(e,t,n)=>{e.addNode(n,{value:t.value})}},toMarkdown:{match:e=>e.type.name===Bo,runner:(e,t)=>{e.addNode(`inlineMath`,void 0,t.attrs.value)}}})),Uo=Oe(`ToggleLatex`,e=>()=>(t,n)=>{let{hasNode:r,pos:i,target:a}=xe(t,Ho.type(e)),{selection:o,doc:s,tr:c}=t;if(!r){let t=s.textBetween(o.from,o.to),r=c.replaceSelectionWith(Ho.type(e).create({value:t}));return n&&n(r.setSelection(fe.create(r.doc,o.from))),!0}let{from:l,to:u}=o;if(!a||i<0)return!1;let d=c.delete(i,i+1),f=a.attrs.value;return d=d.insertText(f,i),n&&n(d.setSelection(p.create(d.doc,l,u+f.length-1))),!0}),Wo=an(`INLINE_LATEX`),Go=Vn({props:{config:{type:Object,required:!0},innerView:{type:Object,required:!0},updateValue:{type:Object,required:!0}},setup(e){let t=t=>{if(t&&t instanceof HTMLElement){for(;t.firstChild;)t.removeChild(t.firstChild);e.innerView.value&&t.appendChild(e.innerView.value.dom)}},n=t=>{t.preventDefault(),e.updateValue.value()};return()=>w(`div`,{class:`container`},e.innerView.value&&w(`div`,{ref:t}),w(`button`,{type:`button`,onPointerdown:n},w(g,{icon:e.config.inlineEditConfirm})))}}),Ko=e=>{throw TypeError(e)},qo=(e,t,n)=>t.has(e)||Ko(`Cannot `+n),J=(e,t,n)=>(qo(e,t,`read from private field`),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?Ko(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Jo=(e,t,n,r)=>(qo(e,t,`write to private field`),t.set(e,n),n),rs=class{constructor(e,t,n){this.ctx=e,Y(this,Yo),Y(this,Xo),Y(this,Zo),Y(this,Qo,Bn(null)),Y(this,$o,Bn(()=>{})),Y(this,es),Y(this,ts,()=>{J(this,Qo).value&&(J(this,Qo).value.destroy(),J(this,Qo).value=null)}),Y(this,ns,e=>{let t=(()=>{if(!e.editable)return!1;let{selection:t,schema:n}=e.state;if(t.empty||!(t instanceof fe))return!1;let r=t.node;if(r.type.name!==Bo)return!1;let i=t.from,a=n.nodes.paragraph.create(null,n.text(r.attrs.value)),o=new je(J(this,Zo),{state:ue.create({doc:a,schema:new pe({nodes:{doc:{content:`block+`},paragraph:{content:`inline*`,group:`block`,parseDOM:[{tag:`p`}],toDOM(){return[`p`,0]}},text:{group:`inline`}}}),plugins:[ge({"Mod-z":he,"Mod-Z":_e,"Mod-y":_e,Enter:()=>(J(this,$o).value(),!0)})]})});return J(this,Qo).value=o,J(this,$o).value=()=>{let{tr:t}=e.state;t.setNodeAttribute(i,`value`,o.state.doc.textContent),e.dispatch(t),requestAnimationFrame(()=>{e.focus()})},!0})();return t||J(this,ts).call(this),t}),this.update=(e,t)=>{J(this,Xo).update(e,t)},this.destroy=()=>{J(this,es).unmount(),J(this,Xo).destroy(),J(this,Yo).remove()};let r=document.createElement(`div`);r.className=`milkdown-latex-inline-edit`,Jo(this,Yo,r),Jo(this,es,Jn(Go,{config:n,innerView:J(this,Qo),updateValue:J(this,$o)})),J(this,es).mount(r),Jo(this,Xo,new on({debounce:0,content:J(this,Yo),shouldShow:J(this,ns),offset:10,floatingUIOptions:{placement:`bottom`}})),J(this,Xo).update(t),Jo(this,Zo,document.createElement(`div`))}},Yo=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,Qo=new WeakMap,$o=new WeakMap,es=new WeakMap,ts=new WeakMap,ns=new WeakMap,is=De(e=>Se(/(?:\$)([^$]+)(?:\$)$/,Ho.type(e),{getAttr:e=>({value:e[1]??``})})),as=De(e=>me(/^\$\$[\s\n]$/,Ot.type(e),()=>({language:`LaTeX`}))),os=we(`remarkMath`,()=>r),ss=we(`remarkMathBlock`,()=>()=>Er),cs=(e,t)=>{e.config(E(O.Latex)).config(e=>{if(!rr(e).get().includes(O.CodeMirror))throw Error(`You need to enable CodeMirror to use LaTeX feature`);e.update(We.key,e=>({...e,renderPreview:(n,r,i)=>{if(n.toLowerCase()===`latex`&&r.length>0)return Dr(r,t?.katexOptions);let a=e.renderPreview;return a(n,r,i)}})),e.set(Wo.key,{view:n=>new rs(e,n,{inlineEditConfirm:t?.inlineEditConfirm??ii,...t})})}).use(os).use(ss).use(Ho).use(Wo).use(is).use(as).use(zo).use(Uo)},ls=(e,t)=>{e.config(E(O.LinkTooltip)).config(Qe).config(e=>{e.update(qe.key,e=>({...e,linkIcon:t?.linkIcon??ai,editButton:t?.editButton??ci,removeButton:t?.removeButton??Ti,confirmButton:t?.confirmButton??ii,inputPlaceholder:t?.inputPlaceholder??`Paste link...`,onCopyLink:t?.onCopyLink??(()=>{})}))}).use(et)},us=(e,t)=>{e.config(E(O.ListItem)).config(e=>Or(e,t)).use(ze)},ds=Ee({text:`Please enter...`,mode:`block`},`placeholderConfigCtx`),fs=ke(e=>new m({key:new de(`CREPE_PLACEHOLDER`),props:{decorations:t=>{if(nr(e).readonly)return null;let n=e.get(ds.key);if(n.mode===`doc`&&!kr(t.doc)||br(t.selection)||xr(t.selection))return null;let r=Ar(t,n.text??`Please enter...`);return r?Ae.create(t.doc,[r]):null}}})),ps=(e,t)=>{e.config(E(O.Placeholder)).config(e=>{t&&e.update(ds.key,e=>({...e,...t}))}).use(fs).use(ds)},ms=(e,t)=>{e.config(E(O.Table)).config(e=>{e.update(Ze.key,e=>({...e,renderButton:e=>{switch(e){case`add_row`:return t?.addRowIcon??Ci;case`add_col`:return t?.addColIcon??Ci;case`delete_row`:return t?.deleteRowIcon??Ti;case`delete_col`:return t?.deleteColIcon??Ti;case`align_col_left`:return t?.alignLeftIcon??Wr;case`align_col_center`:return t?.alignCenterIcon??Ur;case`align_col_right`:return t?.alignRightIcon??Gr;case`col_drag_handle`:return t?.colDragHandleIcon??si;case`row_drag_handle`:return t?.rowDragHandleIcon??si}}}))}).use(Ye)},hs=Vn({props:{ctx:{type:Object,required:!0},hide:{type:Function,required:!0},show:{type:Object,required:!0},selection:{type:Object,required:!0},config:{type:Object,required:!1}},setup(e){let{ctx:t,config:n}=e,r=e=>n=>{n.preventDefault(),t&&e?.(t)};function i(n){return e.selection.value,t.get(Le).status===Ke.Created&&n(t)}let a=T(()=>Fr(n,t));function o(e){if(e.label)return e.shortcut?`${e.label} (${e.shortcut})`:e.label}return()=>w(Kn,null,a.value.map(e=>e.items.map(e=>w(`button`,{type:`button`,class:d(`toolbar-item`,t&&i(e.active)&&`active`),"data-toolbar-item":e.key,title:o(e),"aria-label":e.label,"aria-keyshortcuts":e.ariaKeyshortcuts,onPointerdown:r(e.onRun)},w(g,{icon:e.icon})))).reduce((e,t,n)=>(n===0?e.push(...t):e.push(w(`div`,{class:`divider`}),...t),e),[]))}}),gs=e=>{throw TypeError(e)},_s=(e,t,n)=>t.has(e)||gs(`Cannot `+n),X=(e,t,n)=>(_s(e,t,`read from private field`),n?n.call(e):t.get(e)),vs=(e,t,n)=>t.has(e)?gs(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ys=(e,t,n,r)=>(_s(e,t,`write to private field`),t.set(e,n),n),ws=an(`CREPE_TOOLBAR`),Ts=class{constructor(e,t,n){vs(this,Z),vs(this,bs),vs(this,xs),vs(this,Ss),vs(this,Cs,C(!1)),this.update=(e,t)=>{X(this,Z).update(e,t),X(this,Ss).value=e.state.selection},this.destroy=()=>{X(this,Z).destroy(),X(this,xs).unmount(),X(this,bs).remove()},this.hide=()=>{X(this,Z).hide()};let r=document.createElement(`div`);r.className=`milkdown-toolbar`,ys(this,Ss,Bn(t.state.selection));let i=Jn(hs,{ctx:e,hide:this.hide,config:n,selection:X(this,Ss),show:X(this,Cs)});i.mount(r),ys(this,bs,r),ys(this,xs,i),ys(this,Z,new on({content:X(this,bs),debounce:20,offset:10,shouldShow(e){let{doc:t,selection:n}=e.state,{empty:i,from:a,to:o}=n,s=!t.textBetween(a,o).length&&n instanceof p,c=!(n instanceof p),l=e.dom.getRootNode().activeElement,u=r.contains(l),d=!e.hasFocus()&&!u,f=!e.editable;return!(d||c||i||s||f)}})),X(this,Z).onShow=()=>{X(this,Cs).value=!0},X(this,Z).onHide=()=>{X(this,Cs).value=!1},this.update(t)}},Z=new WeakMap,bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,Es=(e,t)=>{e.config(E(O.Toolbar)).config(e=>{e.set(ws.key,{view:n=>new Ts(e,n,t)})}).use(ws)},Ds=[{label:`Paragraph`,level:null},{label:`Heading 1`,level:1},{label:`Heading 2`,level:2},{label:`Heading 3`,level:3},{label:`Heading 4`,level:4},{label:`Heading 5`,level:5},{label:`Heading 6`,level:6}],Os=Vn({props:{ctx:{type:Object,required:!0},version:{type:Object,required:!0},config:{type:Object,required:!1}},setup(e){let{ctx:t,config:n}=e,r=C(null),i=e=>n=>{n.preventDefault(),t&&e(t)};function a(){return t.get(Le).status===Ke.Created}function o(){e.version.value}function s(e){return o(),a()?e(t):!1}function c(e){return o(),a()?e.activeLabel(t):e.options[0]?.label??``}function l(e,t){t.preventDefault(),t.stopPropagation(),r.value=r.value===e?null:e}let u=e=>{e.target.closest(`.top-bar-heading-selector`)||(r.value=null)};Gn(()=>{window.addEventListener(`pointerdown`,u)}),qn(()=>{window.removeEventListener(`pointerdown`,u)});let f=T(()=>zr(n,t));function ee(e,n){let i=r.value===e,a=c(n);return w(`div`,{key:e,class:`top-bar-heading-selector`},w(`button`,{type:`button`,class:`top-bar-heading-button`,onPointerdown:t=>l(e,t)},w(`span`,{class:`top-bar-heading-label`},a),n.chevronIcon&&w(`span`,{class:`top-bar-chevron`},w(g,{icon:n.chevronIcon}))),i&&w(`div`,{class:`top-bar-heading-dropdown`},n.options.map((n,i)=>w(`button`,{key:`${e}-${i}`,type:`button`,class:d(`top-bar-heading-option`,a===n.label&&`active`),onPointerdown:e=>{e.preventDefault(),e.stopPropagation(),r.value=null,n.onSelect(t)}},n.label))))}function te(e){return w(`button`,{key:e.key,type:`button`,class:d(`top-bar-item`,s(e.active)&&`active`),onPointerdown:i(e.onRun)},w(g,{icon:e.icon}))}return()=>{let e=a()?t.get(_):null;return e&&!e.editable?null:w(`div`,{class:`top-bar-inner`},f.value.map(e=>e.items.map(e=>e.selector?ee(e.key,e.selector):e.onRun?te(e):null)).reduce((e,t,n)=>{if(n===0)e.push(...t);else{let r=f.value[n]?.key??n;e.push(w(`div`,{key:`divider-${r}`,class:`top-bar-divider`}),...t)}return e},[]))}}}),ks=e=>{throw TypeError(e)},As=(e,t,n)=>t.has(e)||ks(`Cannot `+n),js=(e,t,n)=>(As(e,t,`read from private field`),n?n.call(e):t.get(e)),Ms=(e,t,n)=>t.has(e)?ks(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ns=(e,t,n,r)=>(As(e,t,`write to private field`),t.set(e,n),n),Ls=new de(`CREPE_TOP_BAR`),Rs=class{constructor(e,t,n){Ms(this,Ps),Ms(this,Fs),Ms(this,Is),this.update=(e,t)=>{js(this,Ps).style.display=e.editable?``:`none`,js(this,Is).value++},this.destroy=()=>{js(this,Fs).unmount(),js(this,Ps).remove()},Ns(this,Is,C(0));let r=document.createElement(`div`);r.className=`milkdown-top-bar`;let i=Jn(Os,{ctx:e,config:n,version:js(this,Is)});i.mount(r),Ns(this,Ps,r),Ns(this,Fs,i);let a=t.dom.parentElement;a&&a.insertBefore(r,a.firstChild),this.update(t)}},Ps=new WeakMap,Fs=new WeakMap,Is=new WeakMap,zs=Ee({view:()=>({update:()=>{},destroy:()=>{}})},`topBarConfig`),Bs=ke(e=>{let t=e.get(zs.key);return new m({key:Ls,view:t.view})}),Vs=(e,t)=>{e.config(E(O.TopBar)).config(e=>{e.set(zs.key,{view:n=>new Rs(e,n,t)})}).use(zs).use(Bs)},Hs=e=>{throw TypeError(e)},Us=(e,t,n)=>t.has(e)||Hs(`Cannot `+n),Q=(e,t,n)=>(Us(e,t,`read from private field`),n?n.call(e):t.get(e)),Ws=(e,t,n)=>t.has(e)?Hs(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Gs=(e,t,n,r)=>(Us(e,t,`write to private field`),t.set(e,n),n),Js=class{constructor({root:e,defaultValue:t=``}={}){Ws(this,$),Ws(this,Ks),Ws(this,qs,!0),this.addFeature=(e,t)=>(e(Q(this,$),t),this),this.create=()=>Q(this,$).create(),this.destroy=()=>Q(this,$).destroy(),this.setReadonly=e=>(Gs(this,qs,!e),Q(this,$).action(t=>{Q(this,$).status===Ke.Created&&t.get(_).setProps({editable:()=>!e})}),this),this.getMarkdown=()=>Q(this,$).action(Te()),this.on=e=>Q(this,$).status===Ke.Created?(Q(this,$).action(t=>{e(t.get(Pt))}),this):(Q(this,$).config(t=>{e(t.get(Pt))}),this),Gs(this,Ks,(typeof e==`string`?document.querySelector(e):e)??document.body),Gs(this,$,Ie.make().config(e=>{e.inject(Bi,this),e.inject(zi,[])}).config(e=>{e.set(Ne,Q(this,Ks)),e.set(Fe,t),e.set(Pe,{editable:()=>Q(this,qs)}),e.update(nn.key,e=>({...e,size:4})),e.update(Qt.key,e=>({...e,uploader:async(e,t,n)=>{let r=rr(n).get().includes(O.ImageBlock),i=r?t.nodes[`image-block`]:t.nodes.image;if(!i)return[];let a=r?n.get(rt.key).onUpload:void 0,o=[];for(let t=0;t<e.length;t++){let n=e.item(t);n&&n.type.includes(`image`)&&o.push(n)}return await Promise.all(o.map(async e=>{let t=a?await a(e):URL.createObjectURL(e);return i.createAndFill({src:t})}))}}))}).use(At).use(en).use(Rt).use(Gt).use(Nt).use(qt).use(Yt).use(Et))}get editor(){return Q(this,$)}get readonly(){return!Q(this,qs)}},$=new WeakMap,Ks=new WeakMap,qs=new WeakMap,Ys=class extends Js{constructor({features:e={},featureConfigs:t={},...r}={}){super(r);let i=n(t,Ri);Object.entries({...Vr,...e}).filter(([,e])=>e).map(([e])=>e).forEach(e=>{let t=i[e];Br(e,this.editor,t)})}},Ys.Feature=O})),Zs=e((()=>{})),Qs=e((()=>{}));export{Xs as i,Zs as n,Ys as r,Qs as t};