(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3DMt":function(e,a,t){},"3jc8":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("/MKj"),i=t("qIgq"),c=t.n(i),m=(t("sQOL"),t("Z3vd")),s=t("9XV7"),d=e=>{var a=e.flag.flagDetail.detailInfo,t=e.dispatch,r=localStorage.getItem("userId"),i=a.payer_id,d=Object(l["useState"])(a.verified),o=c()(d,2),u=o[0],f=o[1],v=Object(l["useState"])(a.period_status),E=c()(v,2),g=E[0],p=E[1],y=Object(l["useState"])(null),N=c()(y,2),w=N[0],b=N[1];Object(l["useEffect"])(()=>{f(a.verified),p(a.period_status)},[a]);var O=e=>{t({type:"flag/opFlag",payload:{flagid:a.id,op:e}})},k=e=>{b(e.currentTarget.files[0])},j=Object(s["c"])(()=>{var e=new FormData;e.append("file",w),t({type:"flag/uploadEvidence",payload:{flagid:a.id,file:e,type:"image"}})},{wait:1e3}),D=j.run,_=(e,a)=>{if(r===i)switch(g){case"UNDONE":return n.a.createElement("div",{className:"detailinfo-button"},n.a.createElement("form",{id:"uploadImg"},n.a.createElement("div",{className:"detailinfo-upload"},n.a.createElement("input",{type:"file",onChange:k})),n.a.createElement("br",null),n.a.createElement(m["a"],{variant:"contained",color:"primary",onClick:D},"\u4e0a\u4f20\u8bc1\u636e")));case"PAID":return n.a.createElement("div",{className:"detailinfo-button"},n.a.createElement("form",{id:"uploadImg"},n.a.createElement("div",{className:"detailinfo-upload"},n.a.createElement("input",{type:"file",onChange:k})),n.a.createElement("br",null),n.a.createElement(m["a"],{variant:"contained",color:"primary",onClick:D},"\u4e0a\u4f20\u8bc1\u636e")));case"DONE":return n.a.createElement("div",null,"\u5df2\u4e0a\u4f20\u8bc1\u636e");case"CLOSE":return n.a.createElement("div",null,"\u5df2\u5173\u95ed");default:}else switch(e){case"NO":return n.a.createElement("div",null,"\u5df2\u89c1\u8bc1\u672a\u5b8c\u6210");case"UNSET":return n.a.createElement("div",{className:"detailinfo-button"},n.a.createElement(m["a"],{variant:"contained",color:"primary",style:{marginRight:10},onClick:()=>O("yes")},"\u5df2\u5b8c\u6210"),n.a.createElement(m["a"],{variant:"contained",color:"secondary",onClick:()=>O("no")},"\u672a\u5b8c\u6210"));case"YES":return n.a.createElement("div",null,"\u5df2\u89c1\u8bc1\u5b8c\u6210");default:return n.a.createElement("div",null)}};return n.a.createElement("div",{className:"detailinfo-container"},n.a.createElement("div",{className:"detailinfo-info"},n.a.createElement("div",{className:"detailinfo-avatar"},n.a.createElement("img",{src:a.payer_avatar_url,alt:""})),n.a.createElement("div",{className:"detailinfo-name"},a.payer_name),n.a.createElement("div",{className:"detailinfo-task"},a.task)),_(u,g),n.a.createElement("div",{className:"detailinfo-rewards"},a.amount,n.a.createElement("span",{className:"detailinfo-unit"},a.symbol)))},o=Object(r["c"])(e=>{var a=e.flag,t=e.user;return{flag:a,user:t}})(d),u=(t("3DMt"),e=>{var a=e.flag.flagDetail.evidence;return console.log("Evidence -> evidence",a),n.a.createElement("div",{className:"evidence-container"},a&&a.map((e,a)=>n.a.createElement(f,{type:e.type,evidenceUrl:e.url,time:e.created_at,key:a})))}),f=e=>{var a=e.evidenceUrl,t=e.time;return n.a.createElement("div",{className:"evidence-item"},n.a.createElement("div",{className:"evidence-item-media"},n.a.createElement("img",{src:a,alt:"evidenceitm"})),n.a.createElement("div",{className:"evidence-item-time"},t))},v=Object(r["c"])(e=>{var a=e.flag;return{flag:a}})(u),E=(t("fPkZ"),e=>{var a=e.flag.flagDetail.witness;return n.a.createElement("div",{className:"rewards-container"},a&&a.map((e,a)=>n.a.createElement(g,{avatarurl:e.payee_avatar_url,name:e.payee_name,time:e.witnessed_time,amount:e.amount,unit:e.symbol,key:a})))}),g=e=>{var a=e.avatarurl,t=e.name,l=e.time,r=e.amount,i=e.unit;return n.a.createElement("div",{className:"rewards-item"},n.a.createElement("div",{className:"rewards-item-info"},n.a.createElement("div",{className:"rewards-item-avatar"},n.a.createElement("img",{src:a,alt:"rewardsavatar"})),n.a.createElement("div",{className:"rewards-item-txt"},n.a.createElement("div",{className:"rewards-item-name"},t),n.a.createElement("div",{className:"rewards-item-time"},l))),n.a.createElement("div",{className:"rewards-item-amount"},r," ",n.a.createElement("span",{className:"rewards-item-unit"},i)))},p=Object(r["c"])(e=>{var a=e.flag;return{flag:a}})(E),y=(t("Ekka"),e=>{var a=e.flag.flagDetail,t=e.dispatch,r=e.location,i=a.detailInfo;console.log("FlagDetail -> detailInfo",i);var c=r.query,m=c.id,s=a.evidence,d=a.witness;return Object(l["useEffect"])(()=>{s||t({type:"flag/getFlagDetail",payload:{flagid:m}})},[m,t,s]),Object(l["useEffect"])(()=>{s||t({type:"flag/getEvidenceList",payload:{flagid:m}})},[m,t,s]),Object(l["useEffect"])(()=>{d||t({type:"flag/getWitness",payload:{flagid:m}})},[m,t,d]),Object(l["useEffect"])(()=>{return()=>{t({type:"flag/clean"})}},[t]),n.a.createElement("div",{className:"flagdetail-container"},i&&n.a.createElement(o,null),s&&n.a.createElement(v,null),d&&n.a.createElement(p,null))});a["default"]=Object(r["c"])(e=>{var a=e.flag;return{flag:a}})(y)},Ekka:function(e,a,t){},fPkZ:function(e,a,t){},sQOL:function(e,a,t){}}]);