(self.webpackChunk=self.webpackChunk||[]).push([[625,335,669,966,657],{7096:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".input[data-v-242d7062]{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/)!important;--tw-ring-offset-width:0px!important;--tw-ring-offset-color:#fff!important;--tw-ring-color:#818181!important;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important;border:none!important;border-top:1px solid #e5e7eb!important;box-shadow:none!important;outline:2px solid transparent!important;outline-offset:2px!important}.input[data-v-242d7062]:focus{border-top:1px solid gray!important}",""]);const i=r},8659:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".modal-container[data-v-50a0611d]{background-color:rgba(0,0,0,.6);height:100vh;left:0;padding:5%;position:fixed;top:0;width:100vw;z-index:200000}.content-container[data-v-50a0611d]{background-color:#fff;border-radius:10px;height:100%;margin:auto;max-width:900px;padding:8px;width:100%}",""]);const i=r},9860:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".inputfdp{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/)!important;--tw-ring-offset-width:0px!important;--tw-ring-offset-color:#fff!important;--tw-ring-color:#818181!important;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important;border-color:#36363600!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)!important;outline:2px solid transparent!important;outline-offset:2px!important}",""]);const i=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&r[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),t.push(d))}},t}},3379:(e,t,o)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function s(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function d(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],l=o[d]||0,c="".concat(d," ").concat(l);o[d]=l+1;var u=s(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:m(p,t),references:1}),n.push(c)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,v=0;function m(e,t){var o,n,r;if(t.singleton){var i=v++;o=h||(h=l(t)),n=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=l(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);a[r].references--}for(var i=d(e,t),l=0;l<o.length;l++){var c=s(o[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}o=i}}}},5068:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166),r={viewBox:"0 0 316 316",xmlns:"http://www.w3.org/2000/svg"},i=(0,n.createVNode)("path",{d:"M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"},null,-1);const a={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("svg",r,[i])}},s=a},401:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(5166),r={class:"py-12"},i={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},a={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},s={class:"p-6 bg-white border-b border-gray-200"};const d={render:function(e,t,o,d,l,c){return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)("div",i,[(0,n.createVNode)("div",a,[(0,n.createVNode)("div",s,[(0,n.renderSlot)(e.$slots,"default")])])])])}},l=d},2705:(e,t,o)=>{"use strict";o.d(t,{Z:()=>H});var n=o(5166),r={class:"min-h-screen bg-gray-100"},i={class:"bg-white border-b border-gray-100"},a={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},s={class:"flex justify-between h-16"},d={class:"flex"},l={class:"flex-shrink-0 flex items-center"},c={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},u=(0,n.createTextVNode)(" Todos "),p={class:"hidden sm:flex sm:items-center sm:ml-6"},f={class:"ml-3 relative"},h={class:"inline-flex rounded-md"},v={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},m=(0,n.createVNode)("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createVNode)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),g=(0,n.createTextVNode)(" Edit "),w=(0,n.createTextVNode)(" Log Out "),x={class:"-mr-2 flex items-center sm:hidden"},b={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},k={class:"pt-2 pb-3 space-y-1"},C=(0,n.createTextVNode)(" Dashboard "),y={class:"pt-4 pb-1 border-t border-gray-200"},V={class:"px-4"},N={class:"font-medium text-base text-gray-800"},T={class:"mt-3 space-y-1"},B=(0,n.createTextVNode)(" Edit "),L=(0,n.createTextVNode)(" Log Out "),S={key:0,class:"bg-white shadow"},M={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"};var D=o(5068),j={class:"relative"};const Z={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,n.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,n.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,n.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}},render:function(e,t,o,r,i,a){return(0,n.openBlock)(),(0,n.createBlock)("div",j,[(0,n.createVNode)("div",{onClick:t[1]||(t[1]=function(e){return r.open=!r.open})},[(0,n.renderSlot)(e.$slots,"trigger")]),(0,n.withDirectives)((0,n.createVNode)("div",{class:"fixed inset-0 z-40",onClick:t[2]||(t[2]=function(e){return r.open=!1})},null,512),[[n.vShow,r.open]]),(0,n.createVNode)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",{class:["absolute z-50 mt-2 rounded-md shadow-lg",[a.widthClass,a.alignmentClasses]],style:{display:"none"},onClick:t[3]||(t[3]=function(e){return r.open=!1})},[(0,n.createVNode)("div",{class:["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses]},[(0,n.renderSlot)(e.$slots,"content")],2)],2),[[n.vShow,r.open]])]})),_:3})])}},$=Z;const _={render:function(e,t){var o=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)(o,{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3})}},O=_;const z={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}},render:function(e,t,o,r,i,a){var s=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)(s,{href:o.href,class:a.classes},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["href","class"])}},I=z;const E={props:["active"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}},render:function(e,t,o,r,i,a){var s=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)(s,{class:a.classes},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["class"])}},A=E,F={components:{BreezeApplicationLogo:D.Z,BreezeDropdown:$,BreezeDropdownLink:O,BreezeNavLink:I,BreezeResponsiveNavLink:A},data:function(){return{showingNavigationDropdown:!1}},render:function(e,t,o,D,j,Z){var $=(0,n.resolveComponent)("breeze-application-logo"),_=(0,n.resolveComponent)("inertia-link"),O=(0,n.resolveComponent)("breeze-nav-link"),z=(0,n.resolveComponent)("breeze-dropdown-link"),I=(0,n.resolveComponent)("breeze-dropdown"),E=(0,n.resolveComponent)("breeze-responsive-nav-link");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("div",r,[(0,n.createVNode)("nav",i,[(0,n.createVNode)("div",a,[(0,n.createVNode)("div",s,[(0,n.createVNode)("div",d,[(0,n.createVNode)("div",l,[(0,n.createVNode)(_,{href:e.route("dashboard")},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)($,{class:"block h-9 w-auto"})]})),_:1},8,["href"])]),(0,n.createVNode)("div",c,[(0,n.createVNode)(O,{href:e.route("todo.index"),active:e.route().current("todo.index")},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["href","active"])])]),(0,n.createVNode)("div",p,[(0,n.createVNode)("div",f,[(0,n.createVNode)(I,{align:"right",width:"48"},{trigger:(0,n.withCtx)((function(){return[(0,n.createVNode)("span",h,[(0,n.createVNode)("button",v,[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.auth.user.name)+" ",1),m])])]})),content:(0,n.withCtx)((function(){return[(0,n.createVNode)(z,{href:e.route("profile.show"),method:"get",as:"button"},{default:(0,n.withCtx)((function(){return[g]})),_:1},8,["href"]),(0,n.createVNode)(z,{href:e.route("logout"),method:"post",as:"button"},{default:(0,n.withCtx)((function(){return[w]})),_:1},8,["href"])]})),_:1})])]),(0,n.createVNode)("div",x,[(0,n.createVNode)("button",{onClick:t[1]||(t[1]=function(e){return j.showingNavigationDropdown=!j.showingNavigationDropdown}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[((0,n.openBlock)(),(0,n.createBlock)("svg",b,[(0,n.createVNode)("path",{class:{hidden:j.showingNavigationDropdown,"inline-flex":!j.showingNavigationDropdown},"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),(0,n.createVNode)("path",{class:{hidden:!j.showingNavigationDropdown,"inline-flex":j.showingNavigationDropdown},"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),(0,n.createVNode)("div",{class:[{block:j.showingNavigationDropdown,hidden:!j.showingNavigationDropdown},"sm:hidden"]},[(0,n.createVNode)("div",k,[(0,n.createVNode)(E,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:(0,n.withCtx)((function(){return[C]})),_:1},8,["href","active"])]),(0,n.createVNode)("div",y,[(0,n.createVNode)("div",V,[(0,n.createVNode)("div",N,(0,n.toDisplayString)(e.$page.props.auth.user.name),1)]),(0,n.createVNode)("div",T,[(0,n.createVNode)(E,{href:e.route("profile.show"),method:"get",as:"button"},{default:(0,n.withCtx)((function(){return[B]})),_:1},8,["href"]),(0,n.createVNode)(E,{href:e.route("logout"),method:"post",as:"button"},{default:(0,n.withCtx)((function(){return[L]})),_:1},8,["href"])])])],2)]),e.$slots.header?((0,n.openBlock)(),(0,n.createBlock)("header",S,[(0,n.createVNode)("div",M,[(0,n.renderSlot)(e.$slots,"header")])])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)("main",null,[(0,n.renderSlot)(e.$slots,"default")])])])}},H=F},6625:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(5166);var r=o(2705),i=o(5669),a=o(401),s=o(9335);const d={layout:[r.Z],components:{Todos:i.default,AuthenticatedMainContainer:a.Z,TodoModal:s.default},props:{todos:Object,modal:Boolean,todo:Object,subTodos:Object},render:function(e,t,o,r,i,a){var s=(0,n.resolveComponent)("todos"),d=(0,n.resolveComponent)("todo-modal"),l=(0,n.resolveComponent)("authenticated-main-container");return(0,n.openBlock)(),(0,n.createBlock)(l,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(s,{todos:o.todos},null,8,["todos"]),o.modal?((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,subTodos:o.subTodos,todo:o.todo},null,8,["subTodos","todo"])):(0,n.createCommentVNode)("",!0)]})),_:1})}},l=d},9335:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C});var n=o(5166),r=(0,n.withScopeId)("data-v-50a0611d"),i=r((function(e,t,o,i,a,s){var d=(0,n.resolveComponent)("todos-list"),l=(0,n.resolveComponent)("todo-modal-header");return(0,n.openBlock)(),(0,n.createBlock)("div",{class:"modal-container",onClick:t[2]||(t[2]=function(){return s.close&&s.close.apply(s,arguments)})},[(0,n.createVNode)("div",{class:"content-container shadow-md",onClick:t[1]||(t[1]=(0,n.withModifiers)((function(){return s.t&&s.t.apply(s,arguments)}),["stop"]))},[(0,n.createVNode)(l,{todo:o.todo},{default:r((function(){return[(0,n.createVNode)(d,{todos:o.subTodos},null,8,["todos"])]})),_:1},8,["todo"])])])})),a=(0,n.withScopeId)("data-v-242d7062");(0,n.pushScopeId)("data-v-242d7062");var s=(0,n.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),d=(0,n.createVNode)("span",null,null,-1),l={class:"ml-8 mt-2 text-3xl"};(0,n.popScopeId)();var c=a((function(e,t,o,r,i,a){return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("div",{class:"text-blue-500 cursor-pointer inline-block",onClick:t[1]||(t[1]=function(){return a.back&&a.back.apply(a,arguments)})},[s,d,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(a.backText),1)]),(0,n.createVNode)("div",l,(0,n.toDisplayString)(o.todo.task),1),(0,n.renderSlot)(e.$slots,"default",{},void 0,!0),(0,n.withDirectives)((0,n.createVNode)("input",{onKeydown:t[2]||(t[2]=(0,n.withKeys)((function(){return a.addTodo&&a.addTodo.apply(a,arguments)}),["enter"])),ref:"input","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.newTodo=e}),type:"text",placeholder:"Add sub-task",class:"w-full px-4 py-2 mt-4 rounded-sm shadow-sm input"},null,544),[[n.vModelText,i.newTodo]])])}));const u={props:{todo:Object},data:function(){return{newTodo:null}},computed:{backText:function(){return null!=this.todo.todo?this.todo.todo.task:"Back to TODOS"}},methods:{back:function(){null!=this.todo.todo?this.$inertia.get(route("todo.show",this.todo.todo.id),{},{only:["subTodos","todo"]}):this.$inertia.get(route("todo.index"),{},{})},addTodo:function(){this.newTodo&&(this.$inertia.post(route("todo.store"),{task:this.newTodo,todo_id:this.todo.id},{preserveScroll:!0,only:["subTodos"]}),this.newTodo=null)}}};var p=o(3379),f=o.n(p),h=o(7096),v={insert:"head",singleton:!1};f()(h.Z,v);h.Z.locals;u.render=c,u.__scopeId="data-v-242d7062";const m=u;var g=o(966),w=o(7657);const x={components:{TodosList:g.default,Top:w.default,TodoModalHeader:m},props:{todo:Object,subTodos:Object},methods:{close:function(){this.$inertia.get(route("todo.index"))},t:function(){}}};var b=o(8659),k={insert:"head",singleton:!1};f()(b.Z,k);b.Z.locals;x.render=i,x.__scopeId="data-v-50a0611d";const C=x},5669:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var n=o(5166);var r=o(966),i=o(7657);const a={components:{TodosList:r.default,Top:i.default},props:{todos:Object,todo:Object},render:function(e,t,o,r,i,a){var s=(0,n.resolveComponent)("top"),d=(0,n.resolveComponent)("todos-list");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)(s),(0,n.createVNode)(d,{todos:o.todos},null,8,["todos"])])}},s=a},966:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(5166),r={class:"todo-list"},i={key:0,class:"text-gray-400 font-light pl-1 font-mono"},a=(0,n.createVNode)("path",{d:"M6 18L18 6M6 6l12 12"},null,-1);const s={props:{todos:Object},methods:{childs:function(e){this.$inertia.get(route("todo.show",e.id),{},{only:["modal","todo","subTodos"]})},toggleTodo:function(e){"pending"===e.status?(e.status="completed",this.$inertia.post(route("todo.complete",e.id),{},{preserveScroll:!0,only:["todos","subTodos"]})):(e.status="pending",this.$inertia.post(route("todo.uncomplete",e.id),{},{preserveScroll:!0,only:["todos","subTodos"]}))},deleteTodo:function(e){this.$inertia.delete(route("todo.destroy",e.id),{preserveScroll:!0,only:["todos","subTodos"],onBefore:function(){return confirm("Are you sure you want to delete this task?")}})}},render:function(e,t,o,s,d,l){return(0,n.openBlock)(),(0,n.createBlock)("ul",r,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(o.todos,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("li",{class:"flex items-center justify-between mt-3",key:e.id},[(0,n.createVNode)("div",{class:["flex items-center",{"line-through":"completed"===e.status}]},[(0,n.createVNode)("input",{class:"focus:ring-0 text-gray-500",checked:"completed"===e.status,type:"checkbox",onClick:function(t){return l.toggleTodo(e)}},null,8,["checked","onClick"]),(0,n.createVNode)("div",{class:"ml-3 text-sm font-semibold",onClick:function(t){return l.childs(e)}},[(0,n.createTextVNode)((0,n.toDisplayString)(e.task)+" ",1),e.subTodosDetails.total?((0,n.openBlock)(),(0,n.createBlock)("span",i,(0,n.toDisplayString)(e.subTodosDetails.completed+"/"+e.subTodosDetails.total),1)):(0,n.createCommentVNode)("",!0)],8,["onClick"])],2),(0,n.createVNode)("div",null,[(0,n.createVNode)("button",null,[((0,n.openBlock)(),(0,n.createBlock)("svg",{class:"w-4 h-4 text-gray-600 fill-current",onClick:function(t){return l.deleteTodo(e)},fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[a],8,["onClick"]))])])])})),128))])}},d=s},7657:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var n=o(5166),r={class:"text-lg font-bold title"},i={key:0},a=(0,n.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"relative inline w-5 h-5",style:{top:"-2px"},viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createVNode)("path",{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"})],-1),s=(0,n.createTextVNode)(" Voltar "),d=(0,n.createTextVNode)("Windows 10"),l=(0,n.createVNode)("button",{class:"outline-none"},[(0,n.createVNode)("svg",{class:"w-3 h-3 mr-3 focus:outline-none",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.createVNode)("path",{d:"M12 4v16m8-8H4"})])],-1),c=(0,n.createVNode)("span",null,"Clique para adicionar tarefas",-1);const u={props:{title:{type:String,default:"Lista de Todos"},todoId:{type:Number,default:null}},data:function(){return{newTodo:null}},methods:{inputFocus:function(){this.$refs.input.focus()},back:function(){var e=this;window.history.back(),setTimeout((function(){e.$inertia.get(window.location.href)}),50)},addTodo:function(){this.newTodo&&(this.$inertia.post(route("todo.store"),{task:this.newTodo,todo_id:this.todoId},{preserveScroll:!0}),this.newTodo=null)}}};var p=o(3379),f=o.n(p),h=o(9860),v={insert:"head",singleton:!1};f()(h.Z,v);h.Z.locals;u.render=function(e,t,o,u,p,f){var h=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("div",r,[o.todoId?((0,n.openBlock)(),(0,n.createBlock)("div",i,[(0,n.createVNode)("span",{onClick:t[1]||(t[1]=function(){return f.back&&f.back.apply(f,arguments)}),class:"inline-block px-3 text-white bg-blue-500 rounded cursor-pointer"},[a,s])])):(0,n.createCommentVNode)("",!0),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(o.title)+" ",1),(0,n.createVNode)(h,{href:e.route("todo.createTodosForWindows"),class:"float-right px-3 text-white bg-blue-500 rounded"},{default:(0,n.withCtx)((function(){return[d]})),_:1},8,["href"])]),(0,n.createVNode)("div",{class:"flex items-center mt-2 text-sm cursor-pointer select-none",onClick:t[2]||(t[2]=function(){return f.inputFocus&&f.inputFocus.apply(f,arguments)})},[l,c]),(0,n.withDirectives)((0,n.createVNode)("input",{onKeydown:t[3]||(t[3]=(0,n.withKeys)((function(){return f.addTodo&&f.addTodo.apply(f,arguments)}),["enter"])),ref:"input","onUpdate:modelValue":t[4]||(t[4]=function(e){return p.newTodo=e}),type:"text",placeholder:"Quais os seus planos para hoje?",class:"w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm inputfdp"},null,544),[[n.vModelText,p.newTodo]])])};const m=u}}]);