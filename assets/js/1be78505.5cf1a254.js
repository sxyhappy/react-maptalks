/*! For license information please see 1be78505.5cf1a254.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,489],{8626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(2784),a=n(876),o=n(7614),i=n(7647),l=n(7902),c=n(7560),s=n(8283),u=n(6277),d=n(7510),f=n(5862),p=n(3157),m=n(1233),b=n(2391),v=n(1510),h=n(1344),y=n(3578),E=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(8013),_=n(7921),O="sidebar_AUih",k="sidebarWithHideableNavbar_13bV",C="sidebarHidden_d9AY",w="sidebarLogo_f7Rp",j="menu_16eN",S="menuLinkText_2jnp",N="menuWithAnnouncementBar_283y",Z="collapseSidebarButton_253t",P="collapseSidebarButtonIcon_Gq9h",x="sidebarMenuIcon_1r51",R="sidebarMenuCloseIcon_34YW",I="menuLinkExternal_3oZa",L=["items"],M=["item","onItemClick","collapsible","activePath"],T=["item","onItemClick","activePath","collapsible"];var A=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,L);return t.map((function(e,t){return r.createElement(F,(0,c.Z)({key:t,item:e},n))}))}));function F(e){switch(e.item.type){case"category":return r.createElement(D,e);case"link":default:return r.createElement(H,e)}}function D(e){var t,n,a,o=e.item,i=e.onItemClick,l=e.collapsible,d=e.activePath,f=(0,s.Z)(e,M),p=o.items,m=o.label,b=A(o,d),v=(n=b,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),h=(0,r.useState)((function(){return!!l&&(!b&&o.collapsed)})),y=h[0],E=h[1],g=(0,r.useRef)(null),_=(0,r.useState)(void 0),O=_[0],k=_[1],C=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){b&&!v&&y&&E(!1)}),[b,v,y]);var w=(0,r.useCallback)((function(e){e.preventDefault(),O||C(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[O]);return 0===p.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":y})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&b},t[S]=!l,t)),onClick:l?w:void 0,href:l?"#!":void 0},f),m),r.createElement("ul",{className:"menu__list",ref:g,style:{height:O},onTransitionEnd:function(){y||C(!1)}},r.createElement(B,{items:p,tabIndex:y?"-1":"0",onItemClick:i,collapsible:l,activePath:d})))}function H(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,i=(e.collapsible,(0,s.Z)(e,T)),l=n.href,d=n.label,f=A(n,o);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(v.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":f},t[I]=!(0,h.Z)(l),t)),to:l},(0,h.Z)(l)&&{isNavLink:!0,exact:!0,onClick:a},i),d))}function W(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",Z),onClick:t},r.createElement(E,{className:P}))}function q(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(x,R)},"\xd7"):r.createElement(g.Z,{className:x,height:24,width:24}))}var U=function(e){var t,n,a=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,v=function(){var e=(0,f.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,b.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),h=(0,d.LU)(),E=h.navbar.hideOnScroll,g=h.hideableSidebar,_=(0,f.Z)().isAnnouncementBarClosed,S=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var a=(0,m.Z)();return(0,r.useEffect)((function(){a===m.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),Z=S.showResponsiveSidebar,P=S.closeResponsiveSidebar,x=S.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(O,(t={},t[k]=E,t[C]=s,t))},E&&r.createElement(y.Z,{tabIndex:-1,className:w}),r.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",j,(n={"menu--show":Z},n[N]=!_&&v,n))},r.createElement(q,{responsiveSidebarOpened:Z,onClick:x}),r.createElement("ul",{className:"menu__list"},r.createElement(B,{items:o,onItemClick:P,collapsible:l,activePath:a}))),g&&r.createElement(W,{onClick:c}))},z=n(2923),Y=n(2489),V=n(4517),J="docPage_2hm3",K="docMainContainer_luF8",$="docMainContainerEnhanced_1KzL",G="docSidebarContainer_mF8j",X="docSidebarContainerHidden_2DZs",Q="collapsedDocSidebar_3YtF",ee="expandSidebarButtonIcon_2vqf",te="docItemWrapperEnhanced_1BzV",ne="docItemWrapper_12Bq";function re(e){var t,n,i,c,s,f=e.currentDocRoute,p=e.versionMetadata,m=e.children,b=(0,o.default)(),v=b.siteConfig,h=b.isClient,y=p.pluginId,g=p.permalinkToSidebar,O=p.docsSidebars,k=p.version,C=g[f.path],w=O[C],j=(0,r.useState)(!1),S=j[0],N=j[1],Z=(0,r.useState)(!1),P=Z[0],x=Z[1],R=(0,r.useCallback)((function(){P&&x(!1),N(!S)}),[P]);return r.createElement(l.Z,{key:h,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:k,tag:(0,d.os)(y,k)}},r.createElement("div",{className:J},w&&r.createElement("div",{className:(0,u.Z)(G,(t={},t[X]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G)&&S&&x(!0)},role:"complementary"},r.createElement(U,{key:C,sidebar:w,path:f.path,sidebarCollapsible:null==(n=null==(i=v.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:R,isHidden:P}),P&&r.createElement("div",{className:Q,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},r.createElement(E,{className:ee}))),r.createElement("main",{className:(0,u.Z)(K,(c={},c[$]=S||!w,c))},r.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ne,(s={},s[te]=S,s))},r.createElement(a.Zo,{components:z.Z},m)))))}var ae=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,V.LX)(a.pathname,e)}));return o?r.createElement(re,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t)):r.createElement(Y.default,e)}},2489:function(e,t,n){"use strict";n.r(t);var r=n(2784),a=n(7902),o=n(7921);t.default=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},1385:function(e,t,n){"use strict";var r=n(2784),a=n(4316),o=Object.assign({React:r},r,a);t.Z=o},4316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2784),a=n(1391);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(r),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c={exports:{}},s={},u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function p(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var m=i.default,b=60103;if(s.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var v=Symbol.for;b=v("react.element"),s.Fragment=v("react.fragment")}var h=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,n){var r,a={},o=null,i=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(i=t.ref),t)y.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:b,type:e,key:o,ref:i,props:a,_owner:h.current}}s.jsx=g,s.jsxs=g;c.exports=s;var _={};Object.defineProperty(_,"__esModule",{value:!0});var O=i.default,k=O.createContext(null),C=k.Provider;function w(e){var t=O.useRef();return O.useEffect((function(){t.current=e})),t.current}function j(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e}function S(e,t){var n=[];return Array.from(new Set(Object.keys(e).concat(Object.keys(t)))).forEach((function(r){N(e[r],t[r])||n.push(r)})),n}var N=function(e,t){return typeof e==typeof t&&(!e&&!t||!(!e&&e||e&&!t)&&("function"==typeof e&&"function"==typeof t?e.toString()===t.toString():"object"==typeof e&&"object"==typeof t?JSON.stringify(e,(function(e,t){return"function"==typeof t?t+"":t}))===JSON.stringify(t,(function(e,t){return"function"==typeof t?t+"":t})):e===t))},Z=function(e,t){if(void 0===t&&(t="capital"),!e)return e;var n=e.charAt(0),r=e.slice(1);return""+("capital"===t?n.toUpperCase():n.toLowerCase())+r},P=function(e){return!1!==e&&0!==e&&(!e||(Array.isArray(e)?0===e.length:0===Object.keys(e).length))};function x(e){var t={},n=/^on/;return Object.keys(e).forEach((function(r){var a=r.substring(2);n.test(r)&&"function"==typeof e[r]&&a&&(t[Z(a,"lower")]=e[r])})),t}_.MapContext=k;var R=_.MapContextProvider=C;_.capitalOrLowerLetter=Z,_.compareObj=S,_.getPropsEvent=x,_.isEmpty=P,_.isEqual=N;var I=_.omit=function(e,t){return!t||Array.isArray(t)&&0===t.length?e:function e(t,n){if(0===n.length)return t;var r=t,a=n.pop();return r[a],e(function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(r,["symbol"==typeof a?a:a+""]),n)}(e,"string"==typeof t?[t]:j([],t))};_.pick=function(e,t){if(P(t))return e;var n=[],r={};return n="string"==typeof t?[t]:j([],t),Object.entries(e).forEach((function(e){var t=e[0],a=e[1];n.includes(t)&&(r[t]=a)})),r};var L=_.useElementEvent=function(e,t){var n=O.useMemo((function(){return x(e)}),[e]),r=w(n);O.useEffect((function(){if(!P(n)&&t)for(var e in n)t.addEventListener(e,n[e]);return function(){if(t)for(var e in n)t.removeEventListener(e,n[e])}}),[N(n,r),t])},M=_.useElementProps=function(e,t){var n=w(e);return O.useEffect((function(){if(t){var r=S(e||{},n||{});console.log(r),r.forEach((function(n){t["set"+Z(n)]&&t["get"+Z(n)]&&(null==e?void 0:e[n])!==t["get"+Z(n)]()&&t["set"+Z(n)](null==e?void 0:e[n])}))}}),[e]),null},T=_.useElementVisible=function(e,t){void 0===e&&(e=!0),O.useEffect((function(){var n,r,a,o;t&&(e?null===(r=(n=t).show)||void 0===r||r.call(n):null===(o=(a=t).hide)||void 0===o||o.call(a))}),[e,t])},A=_.useMap=function(){var e=O.useContext(k);if(null==e)throw new Error("No MapContext provided");return e},B=_.useParentRef=function(e,t){O.useEffect((function(){t&&("function"==typeof e?e(t):e&&(e.current=t))}),[e,t])};_.usePrevious=w;var F={center:void 0,zoom:void 0,maxExtent:void 0,spatialReference:void 0,baseLayer:void 0,maxZoom:void 0,minZoom:void 0,bearing:void 0,pitch:void 0},D=r.forwardRef((function(e,t){var n=e.children,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["children"]),i=r.useRef(null),s=r.useRef(),u=r.useState(),d=u[0],f=u[1];return M(o,d),L(o,d),B(t,d),s.current=o,r.useEffect((function(){var e,t;if(i.current&&!d){var n=new a.Map(i.current,I(o,["onReady"]));f(n),null===(t=null===(e=s.current)||void 0===e?void 0:e.onReady)||void 0===t||t.call(e,n)}return function(){null==d||d.remove()}}),[]),c.exports.jsx("div",l({ref:i,style:{height:"100%",width:"100%"}},{children:d?c.exports.jsx(R,l({value:{map:d}},{children:n}),void 0):null}),void 0)}));D.defaultProps=F;var H=r.forwardRef((function(e,t){var n=A().map,o=r.useState(),i=o[0],l=o[1];return B(t,i),T(e.visible,i),L(e,i),M(e),r.useEffect((function(){var t;if(!e.id)throw new Error("must provide id for tileLayer");var r=new a.TileLayer(e.id,I(e,["onReady","id"]));return r.addTo(n),l(r),null===(t=null==e?void 0:e.onReady)||void 0===t||t.call(e,r),function(){r.remove()}}),[n]),null}));H.defaultProps={visible:!0},t.MtMap=D,t.MtTileLayer=H}}]);