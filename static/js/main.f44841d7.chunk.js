(this["webpackJsonpdrumpad-machine"]=this["webpackJsonpdrumpad-machine"]||[]).push([[0],{51:function(e,t,c){"use strict";c.r(t);var n,a,r,s=c(0),i=c.n(s),l=c(13),o=c.n(l),u=c(7),d=c.n(u),m=c(14),h=c(2),j=c(3),b=c(4),p=c(1),f=b.a.div(n||(n=Object(j.a)(["\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap:10px;\n    padding:10px;        \n"]))),x=b.a.button(a||(a=Object(j.a)(["\n    width:150px;\n    height:150px;\n"]))),O=b.a.div(r||(r=Object(j.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    text-align:center;\n"]))),g=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(h.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)("0.5"),u=Object(h.a)(o,2),j=u[0],b=u[1],g=Object(s.useState)(!1),k=Object(h.a)(g,2),v=k[0],y=k[1];Object(s.useEffect)((function(){w(!0===v?"http://localhost:4000/bank2":"http://localhost:4000/bank1")}),[v]);var w=function(){var e=Object(m.a)(d.a.mark((function e(t){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("keypress",(function(e){var t=e.code,c=document.getElementById(t);!0===i&&(null!==c?(c.play(),c.volume=j):console.log(!0))})),Object(p.jsxs)("div",{className:"container d-flex align-items-center justify-content-center bg-dark text-white mt-4 w-50 p-5",children:[Object(p.jsx)("div",{id:"drum-machine",children:Object(p.jsxs)(f,{id:"display",children:[c.map((function(e,t){return Object(p.jsx)(x,{className:"drum-pad",type:"button",onClick:function(){return function(e){if(console.log(e),!0===i){var t=document.createElement("audio");t.setAttribute("src",e.source),t.play(),t.volume=j}}(e)},children:e.key},t)})),c.map((function(e,t){return Object(p.jsx)("audio",{className:"clip",id:e.key,name:e.trigger,src:e.source},t)}))]})}),Object(p.jsxs)(O,{className:"controls",children:[Object(p.jsxs)("div",{className:"form-check form-switch mb-5",children:[Object(p.jsx)("label",{htmlFor:"flexSwitchCheckDefault",children:"POWER"}),Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:function(e){l(!i)}})]}),Object(p.jsx)("label",{for:"customRange2",class:"form-label",children:"Volume"}),Object(p.jsx)("input",{type:"range",class:"form-range",min:"0",max:"1",step:"0.1",id:"customRange2",onChange:function(e){b(e.target.value)}}),Object(p.jsxs)("div",{className:"form-check form-switch mt-5",children:[Object(p.jsx)("label",{htmlFor:"flexSwitchCheckDefault",children:"BANK"}),Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:function(e){y(!v)}})]})]})]})};c(28),c(29);o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f44841d7.chunk.js.map