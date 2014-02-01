var Zepto=function(){function t(t){return null==t?String(t):J[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function c(t){return P.call(t,function(t){return null!=t})}function u(t){return t.length>0?j.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||M[l(t)]?e:e+"px"}function p(t){var e,n;return _[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),_[t]=n),_[t]}function d(t){return"children"in t?N.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(R in e)n&&(o(e[R])||s(e[R]))?(o(e[R])&&!o(t[R])&&(t[R]={}),s(e[R])&&!s(t[R])&&(t[R]=[]),m(t[R],e[R],n)):e[R]!==E&&(t[R]=e[R])}function g(t,e){return null==e?j(t):j(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){var n=t.className,r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:(r?n.baseVal=e:t.className=e,void 0)}function b(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?j.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n in t.childNodes)x(t.childNodes[n],e)}var E,R,j,T,k,C,S=[],N=S.slice,P=S.filter,O=window.document,_={},A={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,U=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],F=O.createElement("table"),I=O.createElement("tr"),H={tr:O.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:I,th:I,"*":O.createElement("div")},V=/complete|loaded|interactive/,B=/^[\w-]*$/,J={},X=J.toString,W={},Y=O.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Y).appendChild(t),r=~W.qsa(i,e).indexOf(t),o&&Y.removeChild(t),r},k=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,s;return $.test(t)&&(r=j(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(L,"<$1></$2>")),e===E&&(e=Z.test(t)&&RegExp.$1),e in H||(e="*"),s=H[e],s.innerHTML=""+t,r=j.each(N.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=j(r),j.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))r=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);r=W.qsa(O,t)}else{if(e(t))return j(O).ready(t);if(W.isZ(t))return t;if(s(t))r=c(t);else if(i(t))r=[t],t=null;else if(Z.test(t))r=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);r=W.qsa(O,t)}}return W.Z(r,t)},j=function(t,e){return W.init(t,e)},j.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},W.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,a=B.test(s);return r(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(a&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=function(t,e){return t!==e&&t.contains(e)},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=s,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},j.camelCase=k,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},j.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},j.grep=function(t,e){return P.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(N.apply(this,arguments))},ready:function(t){return V.test(O.readyState)&&O.body?t(j):O.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===E?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(P.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return j(C(this.concat(j(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):j(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return i(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:j(t)},find:function(t){var e,n=this;return e="object"==typeof t?j(t).filter(function(){var t=this;return S.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=j(t));n&&!(i?i.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(C(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return P.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=j(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=j(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;j(this).empty().append(v(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===E?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===E?0==this.length||1!==this[0].nodeType?E:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(i(t))for(R in t)y(this,R,t[R]);else y(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return t=G[t]||t,e===E?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(U,"-$1").toLowerCase(),e);return null!==n?b(n):E},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=j(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0],i=getComputedStyle(r,"");if(!r)return;if("string"==typeof e)return r.style[k(e)]||i.getPropertyValue(e);if(s(e)){var o={};return j.each(s(e)?e:[e],function(t,e){o[e]=r.style[k(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=l(e)+":"+h(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(R in e)e[R]||0===e[R]?a+=l(R)+":"+h(R,e[R])+";":this.each(function(){this.style.removeProperty(l(R))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(w(t))},f(t)):!1},addClass:function(t){return t?this.each(function(e){T=[];var n=w(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||T.push(t)},this),T.length&&w(this,n+(n?" ":"")+T.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===E?w(this,""):(T=w(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(f(t)," ")}),w(this,T.trim()),void 0)})},toggleClass:function(t,e){return t?this.each(function(n){var r=j(this),i=v(this,t,n,w(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,r.top+=parseFloat(j(e[0]).css("border-top-width"))||0,r.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!D.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(i){var o,s=this[0];return i===E?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=j(this),s.css(t,v(this,i,e,s[t]()))})}}),q.forEach(function(e,n){var r=n%2;j.fn[e]=function(){var e,i,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return j(t).remove();x(i.insertBefore(t,e),function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&!t.src&&window.eval.call(window,t.innerHTML)})})})},j.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),W.Z.prototype=j.fn,W.uniq=C,W.deserializeValue=b,j.zepto=W,j}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=r(n),n.ns)var a=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function s(t){return b[t]||y&&w[t]||t}function a(n,i,a,c,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var i=r(e);i.fn=a,i.sel=l,i.e in b&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||a;i.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function c(t,r,i,a,c){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,r){var i=n[t];e[t]=function(){return this[r]=x,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)!R.test(e)&&t[e]!==f&&(n[e]=t[e]);return u(n,t)}var f,h=(t.zepto.qsa,1),p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,r){if(d(n)){var i=function(){return n.apply(r,arguments)};return i._zid=e(n),i}if(m(r))return t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},E=function(){return!1},R=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(!m(n)&&!d(i)&&i!==!1&&(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(s=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),a(h,e,i,r,n,u||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(!m(n)&&!d(r)&&r!==!1&&(r=n,n=f),r===!1&&(r=E),i.each(function(){c(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){i=l(m(e)?t.Event(e):e),i._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,r,"ajaxSend",[t,e]),void 0)}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),c(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==R?"html":t==E?"json":b.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),e.data&&(!e.type||"GET"==e.type.toUpperCase())&&(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(r)?r:void 0:n,dataType:o?i||r:r}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(c.name,c.value):"array"==o||!r&&"object"==o?d(e,c,r,n):e.add(n,c)})}var m,g,v=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,E="application/json",R="text/html",j=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if("type"in e){var r,i,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,c||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/=\?/,"="+u),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)}return t.ajax(e)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:R,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),i=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var c=n.dataType,p=/=\?/.test(n.url);if("jsonp"==c||p)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,i);var d,v=n.accepts[c],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),E=x.setRequestHeader;if(i&&i.promise(x),n.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&w("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)w(g,n.headers[g]);if(x.setRequestHeader=w,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=u,clearTimeout(d);var e,r=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==b){c=c||l(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==c?(1,eval)(e):"xml"==c?e=x.responseXML:"json"==c&&(e=j.test(e)?null:t.parseJSON(e))}catch(o){r=o}r?a(r,"parsererror",x,n,i):s(e,x,n,i)}else a(x.statusText||null,x.status?"error":"abort",x,n,i)}},o(x,n)===!1)return x.abort(),a(null,"abort",x,n,i),x;if(n.xhrFields)for(g in n.xhrFields)x[g]=n.xhrFields[g];var R="async"in n?n.async:!0;x.open(n.type,n.url,R,n.username,n.password);for(g in y)E.apply(x,y[g]);return n.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=u,x.abort(),a(null,"timeout",x,n,i)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=p(e,n,r),c=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(w,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e){if("object"==typeof exports&&exports)e(exports);else{var n={};e(n),"function"==typeof define&&define.amd?define(n):t.Mustache=n}}(this,function(t){function e(t,e){return p.call(t,e)}function n(t){return!e(d,t)}function r(t){return"function"==typeof t}function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t){return String(t).replace(/[&<>"'\/]/g,function(t){return v[t]})}function s(t){if(!g(t)||2!==t.length)throw new Error("Invalid tags: "+t);return[new RegExp(i(t[0])+"\\s*"),new RegExp("\\s*"+i(t[1]))]}function a(e,r){function o(){if(k&&!C)for(;T.length;)delete j[T.pop()];else T=[];k=!1,C=!1}r=r||t.tags,e=e||"","string"==typeof r&&(r=r.split(w));for(var a,f,h,p,d,m,g=s(r),v=new l(e),R=[],j=[],T=[],k=!1,C=!1;!v.eos();){if(a=v.pos,h=v.scanUntil(g[0]))for(var S=0,N=h.length;N>S;++S)p=h.charAt(S),n(p)?T.push(j.length):C=!0,j.push(["text",p,a,a+1]),a+=1,"\n"===p&&o();if(!v.scan(g[0]))break;if(k=!0,f=v.scan(E)||"name",v.scan(y),"="===f?(h=v.scanUntil(b),v.scan(b),v.scanUntil(g[1])):"{"===f?(h=v.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),v.scan(x),v.scanUntil(g[1]),f="&"):h=v.scanUntil(g[1]),!v.scan(g[1]))throw new Error("Unclosed tag at "+v.pos);if(d=[f,h,a,v.pos],j.push(d),"#"===f||"^"===f)R.push(d);else if("/"===f){if(m=R.pop(),!m)throw new Error('Unopened section "'+h+'" at '+a);if(m[1]!==h)throw new Error('Unclosed section "'+m[1]+'" at '+a)}else"name"===f||"{"===f||"&"===f?C=!0:"="===f&&(g=s(r=h.split(w)))}if(m=R.pop())throw new Error('Unclosed section "'+m[1]+'" at '+v.pos);return u(c(j))}function c(t){for(var e,n,r=[],i=0,o=t.length;o>i;++i)e=t[i],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function u(t){for(var e,n,r=[],i=r,o=[],s=0,a=t.length;a>s;++s)switch(e=t[s],e[0]){case"#":case"^":i.push(e),o.push(e),i=e[4]=[];break;case"/":n=o.pop(),n[5]=e[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(e)}return r}function l(t){this.string=t,this.tail=t,this.pos=0}function f(t,e){this.view=null==t?{}:t,this.cache={".":this.view},this.parent=e}function h(){this.cache={}}var p=RegExp.prototype.test,d=/\S/,m=Object.prototype.toString,g=Array.isArray||function(t){return"[object Array]"===m.call(t)},v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},y=/\s*/,w=/\s+/,b=/\s*=/,x=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;l.prototype.eos=function(){return""===this.tail},l.prototype.scan=function(t){var e=this.tail.match(t);if(e&&0===e.index){var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},l.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},f.prototype.push=function(t){return new f(t,this)},f.prototype.lookup=function(t){var e;if(t in this.cache)e=this.cache[t];else{for(var n=this;n;){if(t.indexOf(".")>0){e=n.view;for(var i=t.split("."),o=0;null!=e&&o<i.length;)e=e[i[o++]]}else e=n.view[t];if(null!=e)break;n=n.parent}this.cache[t]=e}return r(e)&&(e=e.call(this.view)),e},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(t,e){var n=this.cache,r=n[t];return null==r&&(r=n[t]=a(t,e)),r},h.prototype.render=function(t,e,n){var r=this.parse(t),i=e instanceof f?e:new f(e);return this.renderTokens(r,i,n,t)},h.prototype.renderTokens=function(e,n,i,o){function s(t){return l.render(t,n,i)}for(var a,c,u="",l=this,f=0,h=e.length;h>f;++f)switch(a=e[f],a[0]){case"#":if(c=n.lookup(a[1]),!c)continue;if(g(c))for(var p=0,d=c.length;d>p;++p)u+=this.renderTokens(a[4],n.push(c[p]),i,o);else if("object"==typeof c||"string"==typeof c)u+=this.renderTokens(a[4],n.push(c),i,o);else if(r(c)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,o.slice(a[3],a[5]),s),null!=c&&(u+=c)}else u+=this.renderTokens(a[4],n,i,o);break;case"^":c=n.lookup(a[1]),(!c||g(c)&&0===c.length)&&(u+=this.renderTokens(a[4],n,i,o));break;case">":if(!i)continue;c=r(i)?i(a[1]):i[a[1]],null!=c&&(u+=this.renderTokens(this.parse(c),n,i,c));break;case"&":c=n.lookup(a[1]),null!=c&&(u+=c);break;case"name":c=n.lookup(a[1]),null!=c&&(u+=t.escape(c));break;case"text":u+=a[1]}return u},t.name="mustache.js",t.version="0.8.1",t.tags=["{{","}}"];var R=new h;t.clearCache=function(){return R.clearCache()},t.parse=function(t,e){return R.parse(t,e)},t.render=function(t,e,n){return R.render(t,e,n)},t.to_html=function(e,n,i,o){var s=t.render(e,n,i);return r(o)?(o(s),void 0):s},t.escape=o,t.Scanner=l,t.Context=f,t.Writer=h}),function(){this.Remetric||(this.Remetric={}),Remetric.domain="https://secure.remetric.com",Remetric.api_key=!1,Remetric.debug=!1,Remetric.log=function(t){return Remetric.debug?console.log(t):void 0},Remetric.responder=function(t,e){return"function"==typeof e&&e(t),Remetric.log(t)},Remetric.detectPushes=function(){return this._RM||(this._RM=[]),_RM.push=function(t){var e;return e=Array.prototype.push.call(this,t),Remetric.log("Remetric has received a(n) "+t[0]+" event."),setTimeout(Remetric.parseEvents,20),e}},Remetric.contacts=function(t,e,n){return null==n&&(n=!1),Zepto.post(""+Remetric.domain+"/contacts"+t+".json",{api_key:Remetric.api_key,contact:{data:e}},function(t){return Remetric.responder(t,n)})},Remetric.track=function(t,e,n){return null==n&&(n=!1),Zepto.post(""+Remetric.domain+"/events.json",{api_key:Remetric.api_key,event:{data:e,description:t}},function(t){return Remetric.responder(t,n)})},Remetric.parseEvents=function(){var t,e,n,r;for(n=0,r=_RM.length;r>n;n++)e=_RM[n],e=_RM.shift(),"domain"===e[0]?(Remetric.domain=e[1],Remetric.log("Remetric domain is set to "+Remetric.domain+".")):"saveContact"===e[0]?(Remetric.log("Remetric is attempting to save contact..."),Remetric.contacts("/save",e[1],e[2],e[3])):"overwriteContact"===e[0]?(Remetric.log("Remetric is attempting to replace contact..."),Remetric.contacts("/overwrite",e[1],e[2],e[3])):"track"===e[0]?(t=Mustache.render(e[1],e[2]),Remetric.log('Remetric is tracking "'+t+'" for '+e[1]+"..."),Remetric.track(e[1],e[2],e[3])):"api_key"===e[0]?(Remetric.api_key=e[1],Remetric.log("Remetric API Key is set to "+Remetric.api_key+".")):"debug"===e[0]&&(Remetric.debug=!0,Remetric.log("Remetric is set to debug mode."));return Remetric.detectPushes()},Remetric.parseEvents()}.call(this);