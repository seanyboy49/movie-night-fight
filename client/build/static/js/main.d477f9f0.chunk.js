(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),o=n(6),s=n.n(o),i=(n(12),n(2)),u=n.n(i),l=n(4),p=n(5),h=(n(14),"https://movienightfight.herokuapp.com/api");var f=function(){var t=Object(r.useState)([]),e=Object(p.a)(t,2),n=e[0],a=e[1],o=Object(r.useState)(""),s=Object(p.a)(o,2),i=s[0],f=s[1];function j(){return(j=Object(l.a)(u.a.mark((function t(e){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,fetch("".concat(h,"/hello"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:r=t.sent,f(i.concat(r)),a(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(h,"/hello"));case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,f(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),i?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:n,onChange:function(t){return a(t.target.value)}}),Object(c.jsx)("button",{onClick:function(t){return j.apply(this,arguments)},children:"submit"})]}),Object(c.jsx)("div",{children:i.map((function(t){return Object(c.jsx)("h4",{children:t},t)}))})]}):null},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.d477f9f0.chunk.js.map