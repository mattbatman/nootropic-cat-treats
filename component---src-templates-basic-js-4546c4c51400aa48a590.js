"use strict";(self.webpackChunknootropic_cat_treats=self.webpackChunknootropic_cat_treats||[]).push([[693],{4816:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(7294),a=n(5414),l=n(5444),u=n(8745),o=function(e){var t=e.handleClick;return r.createElement("svg",{onClick:t,className:"open-button",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"}))},c=function(e){var t=e.quotees,n=e.handleClick;return r.createElement("ul",null,r.createElement("li",null,r.createElement("button",{className:"quotee-select-button",onClick:function(){return n(null)}},"All")),t.map((function(e,t){return r.createElement("li",{key:t},r.createElement("button",{onClick:function(){return n(e)},className:"quotee-select-button"},e))})))};function i(e,t,n){var r="backward"===n?0:t.length-1;return!t||t.length<=1||e===t[r].id}function s(e,t,n){if(i(e,t,n))return e;var r=t.findIndex((function(t){return t.id===e}));return r>-1?t[r+("backward"===n?-1:1)].id:e}var d=function(e){var t=e.id,n=e.playlist,a=e.backwardOrForward,u=i(t,n,a);return!n||0===n.length||u?r.createElement("span",{className:a+" disabled"}):r.createElement(l.Link,{to:"/quotes/"+s(t,n,a),className:a})},m=(0,u.$j)((function(e){return{selectedQuotee:e.selectedQuotee}}),{selectQuotee:function(e){return{type:"QUOTEE_SELECTED",payload:e}}})((function(e){var t=e.allQuotesData,n=e.id,a=e.uniqueQuotees,u=e.selectedQuotee,i=e.selectQuotee,s=(0,r.useState)(!1),m=s[0],f=s[1],E=(0,r.useState)([]),p=E[0],k=E[1];(0,r.useEffect)((function(){var e=u?t.filter((function(e){return e.quotee===u})):t;k(e)}),[u,t]);return r.createElement("nav",{className:m?"open":"closed"},m?r.createElement("button",{className:"close-button",onClick:function(){return f(!1)}},"∨"):r.createElement(o,{className:"open-button",handleClick:function(){return f(!0)}}),m?null:r.createElement(d,{backwardOrForward:"backward",id:n,playlist:p}),m?r.createElement(c,{quotees:a,handleClick:function(e){if(null!==e){var n=t.find((function(t){return t.quotee===e}));(0,l.navigate)("/quotes/"+n.id)}i(e),f(!1)}}):r.createElement("button",{onClick:function(){return f(!0)},className:"playlist-button"},u||"Nootropic Cat Treats"),m?null:r.createElement(d,{backwardOrForward:"forward",id:n,playlist:p}))})),f=function(e){var t=e.id,n=(0,l.useStaticQuery)("2259100704").allQuotesJson.edges.map((function(e){return e.node})).map((function(e){var t=e.quotee,n=e.jsonId;return{quotee:t,id:parseInt(n)}})),a=n.map((function(e){return e.quotee})).filter((function(e,t,n){return n.indexOf(e)===t}));return n&&a&&t?r.createElement(m,{id:t,allQuotesData:n,uniqueQuotees:a}):null},E=function(e){var t=e.pageContext,n=t.id,l=t.quote,u=t.quotee,o=t.platform,c=t.link;return r.createElement("div",{className:"App"},r.createElement(a.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,"Nootropic Cat Treats")),r.createElement("div",{className:"container"},r.createElement("span",{className:"quotemark-l"},"“"),r.createElement("blockquote",{dangerouslySetInnerHTML:{__html:l}}),r.createElement("cite",null,r.createElement("p",null,u),r.createElement("p",null,r.createElement("a",{href:c},o)))),r.createElement(f,{id:n}))}}}]);
//# sourceMappingURL=component---src-templates-basic-js-4546c4c51400aa48a590.js.map