(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(421)},123:function(e,t,n){},418:function(e,t,n){},420:function(e,t,n){e.exports=n.p+"static/media/time.b1fba15f.jpg"},421:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),u=n.n(c),l=(n(123),n(48));n(125),n(418),n(420);function o(e){return e.toString().padStart(2,"0")}function i(){var e=Object(a.useState)("Let the countdown begin!!!"),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(1500),i=Object(l.a)(u,2),s=i[0],m=i[1],f=Object(a.useState)(!1),p=Object(l.a)(f,2),b=p[0],d=p[1],g=Object(a.useRef)(null);console.log(g.current);var E=o(Math.floor(s/60)),v=o(s-60*E);return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,n),r.a.createElement("div",{className:"timer"},r.a.createElement("span",null,E),r.a.createElement("span",null,":"),r.a.createElement("span",null,v)),r.a.createElement("div",{className:"buttons"},!b&&r.a.createElement("button",{onClick:function(){c("You are doing great"),null===g.current&&(d(!0),g.current=setInterval(function(){m(function(e){return e>=1?e-1:0})},1e3))}},"Start"),b&&r.a.createElement("button",{onClick:function(){c("Keep it up"),null!==g.current&&(clearInterval(g.current),g.current=null,d(!1))}},"Stop"),r.a.createElement("button",{onClick:function(){c("Ready to go another round?"),clearInterval(g.current),g.current=null,m(1500),d(!1)}},"Reset")))}var s=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,422)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)})};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),s()}},[[119,3,2]]]);
//# sourceMappingURL=main.a8d0315b.chunk.js.map