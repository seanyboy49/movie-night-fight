(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(18),o=n.n(a),i=(n(26),n(10)),u=n(2),j=function(){return Object(c.jsx)("h1",{children:"Home"})},l=n(9),h=n.n(l),b=n(12),p=n(6),d=s.a.createContext(),O=function(){return Object(r.useContext)(d)||{}},x=function(e){var t=e.children,n=e.value;return Object(c.jsx)(d.Provider,{value:n,children:t})},v=n(19),f={apiUrl:"https://movienightfight.herokuapp.com/api"},g=f.apiUrl,m=Object(v.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){fetch("".concat(g,"/refresh"),{method:"POST",body:e.access_token}).then((function(e){return e.json()}))}}),w=Object(p.a)(m,4),k=w[0],y=(w[1],w[2]),C=w[3],S=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(p.a)(a,2),i=o[0],j=o[1],l=k(),d=Object(p.a)(l,1)[0],x=O().apiUrl,v=Object(u.g)();function f(){return(f=Object(b.a)(h.a.mark((function e(t){var c,r,s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={username:n,password:i},e.prev=2,e.next=5,fetch("".concat(x,"/login"),{method:"POST",body:JSON.stringify(c)});case 5:return r=e.sent,e.next=8,r.json();case 8:s=e.sent,a=s.access_token,y(a),v.push("/movies-list"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Login"}),d?Object(c.jsx)("button",{onClick:C,children:"Logout"}):Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return s(e.target.value)},value:n})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{autoComplete:"new-password",type:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)},value:i})}),Object(c.jsx)("button",{onClick:function(e){return f.apply(this,arguments)},children:"Login Now"})]})]})},P=function(){return Object(c.jsx)("h1",{children:"Movies List"})},U=s.a.createContext(),T=function(e){var t=e.children,n=e.value,r=k();return Object(p.a)(r,1)[0]?Object(c.jsx)(U.Provider,{value:n,children:t}):Object(c.jsx)(u.a,{to:"/login"})},F=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(p.a)(a,2),i=o[0],j=o[1],l=k(),d=Object(p.a)(l,1)[0],x=O().apiUrl,v=Object(u.g)();function f(){return(f=Object(b.a)(h.a.mark((function e(t){var c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={username:n,password:i},e.prev=2,e.next=5,fetch("".concat(x,"/signup"),{method:"POST",body:JSON.stringify(c)});case 5:r=e.sent,s=r.access_token,y(s),v.push("/movies-list"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return d?Object(c.jsx)(u.a,{to:"/movies-list"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Sign up!"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return s(e.target.value)},value:n})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{autoComplete:"new-password",type:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)},value:i})}),Object(c.jsx)("button",{onClick:function(e){return f.apply(this,arguments)},children:"Sign Up!"})]})]})},L=f.apiUrl,J=function(){return Object(c.jsx)(x,{value:{apiUrl:L},children:Object(c.jsx)(i.a,{children:Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{path:"/login",children:Object(c.jsx)(S,{})}),Object(c.jsx)(u.b,{path:"/signup",children:Object(c.jsx)(F,{})}),Object(c.jsx)(u.b,{path:"/home",children:Object(c.jsx)(j,{})}),Object(c.jsx)(T,{children:Object(c.jsx)(u.b,{path:"/movies-list",children:Object(c.jsx)(P,{})})})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),_()}},[[34,1,2]]]);
//# sourceMappingURL=main.a9f38c9c.chunk.js.map