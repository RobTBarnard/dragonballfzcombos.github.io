(function(t){function e(e){for(var r,u,s=e[0],c=e[1],i=e[2],f=0,p=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roster",attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Dragonball Fighterz Combos"}}),t._l(t.roster,(function(e){return n("ul",{key:e.name},[n("li",[n("p",[t._v(t._s(e.name))]),n("br"),n("img",{attrs:{src:e.image}})])])}))],2)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello",staticStyle:{width:"100%"}},[n("h1",[t._v(t._s(t.msg))])])},s=[],c={name:"HelloWorld",props:{msg:String}},i=c,l=(n("b0b3"),n("2877")),f=Object(l["a"])(i,u,s,!1,null,"2c084f59",null),p=f.exports,d={name:"App",components:{HelloWorld:p},data:function(){return{roster:[]}},created:function(){var t=this;this.$axios.get("https://dbfzcs.s3.us-east-2.amazonaws.com/roster.json").then((function(e){console.log(e.data),t.roster=e.data}))}},b=d,h=(n("034f"),Object(l["a"])(b,o,a,!1,null,null,null)),v=h.exports,g=n("bc3a"),m=n.n(g);r["a"].config.productionTip=!1,r["a"].prototype.$axios=m.a,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},"96b8":function(t,e,n){},b0b3:function(t,e,n){"use strict";var r=n("96b8"),o=n.n(r);o.a}});
//# sourceMappingURL=app.fc648ee2.js.map