(function(t){function e(e){for(var n,c,i=e[0],s=e[1],l=e[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={action_buttons:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;a.push([6,"chunk-common"]),o()})({"1ea0":function(t,e,o){"use strict";var n=o("746a"),r=o.n(n);r.a},6:function(t,e,o){t.exports=o("7574")},"746a":function(t,e,o){},7574:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("a026"),r=o("6866"),a=(o("67c4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"section-cloner"}},[o("button",{staticClass:"action clone-casebook-nodes",attrs:{"data-disable-with":"Clone-Node"},on:{click:function(e){return t.displayModal()}}},[t._v("Clone Nodes")]),t.showModal?o("Modal",{on:{close:function(e){t.showModal=!1}}},[o("template",{slot:"title"},[t._v("Clone Section To Casebook")]),o("template",{slot:"body"},[o("p",[t._v("Select a casebook to clone "),o("em",[t._v(t._s(t.sectionSource))]),t._v(" to")]),o("ul",{staticClass:"clone-target-list"},t._l(t.casebookTargets,(function(e){return o("li",{key:e.form_target},[o("form",{attrs:{action:e.form_target,method:"POST"}},[o("input",{attrs:{type:"hidden",name:"csrfmiddlewaretoken"},domProps:{value:t.csrftoken}}),o("button",{staticClass:"link",attrs:{type:"submit"}},[t._v(t._s(e.title))])])])})),0)])],2):t._e()],1)}),c=[],i=o("e5fd"),s=i["a"],l=(o("1ea0"),o("0c7c")),u=Object(l["a"])(s,a,c,!1,null,null,null),d=u.exports;n["a"].config.productionTip=!1,document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("action-buttons"),e=new n["a"]({el:t,store:r["a"],components:{SectionCloner:d}});window.app=e}))},e5fd:function(t,e,o){"use strict";(function(t){o("1276"),o("498a");var n=o("a78b");function r(e){var o=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var a=t.trim(n[r]);if(a.substring(0,e.length+1)===e+"="){o=decodeURIComponent(a.substring(e.length+1));break}}return o}e["a"]={components:{Modal:n["a"]},props:{casebookTargets:{type:Array},sectionSource:{type:String}},data:function(){return{showModal:!1,csrftoken:r("csrftoken")}},methods:{displayModal:function(){this.showModal=!0}}}}).call(this,o("1157"))}});
//# sourceMappingURL=action_buttons.7b3a9395.js.map