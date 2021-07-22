(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[347],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7761:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=r(9603),o=r(120),a=(r(7378),r(5318)),c=["components"],l={sidebar_label:"Core Hoc"},i={unversionedId:"core/hoc",id:"core/hoc",isDocsHomePage:!1,title:"hoc",description:"createLayer",source:"@site/docs/core/hoc.mdx",sourceDirName:"core",slug:"/core/hoc",permalink:"/react-maptalks/docs/core/hoc",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/core/hoc.mdx",version:"current",sidebar_label:"Core Hoc",frontMatter:{sidebar_label:"Core Hoc"},sidebar:"core",previous:{title:"start",permalink:"/react-maptalks/docs/core/start"},next:{title:"Context and Hook",permalink:"/react-maptalks/docs/core/context-hook"}},p=[{value:"createLayer",id:"createlayer",children:[{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]}]},{value:"createGeometry",id:"creategeometry",children:[{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d-1",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",children:[]}]},{value:"createUIComponent",id:"createuicomponent",children:[{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d-2",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",children:[]}]},{value:"createControl",id:"createcontrol",children:[{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d-3",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"createlayer"},"createLayer"),(0,a.kt)("p",null,"\u521b\u5efa maptalks layer HOC, eg: ImageLayer, WMSLayer"),(0,a.kt)("h3",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare function createLayer<\n    P extends LayerOptions,\n    T extends Layer\n>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>\n")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P component Props \u7ee7\u627f maptalks \u7684 LayerOption"),(0,a.kt)("li",{parentName:"ol"},"T Ref current\u5bf9\u8c61, \u7ee7\u627f maptalks Layer")),(0,a.kt)("h2",{id:"creategeometry"},"createGeometry"),(0,a.kt)("p",null,"\u521b\u5efa maptalks geometry HOC, eg: Polygon, Circle"),(0,a.kt)("h3",{id:"\u51fd\u6570\u7b7e\u540d-1"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export declare function createGeometry<\n    P extends GeometryProps,\n    T extends Geometry\n>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;\n")),(0,a.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P component Props \u7ee7\u627f @react-maptalks/core \u7684 GeometryProps"),(0,a.kt)("li",{parentName:"ol"},"T Ref current\u5bf9\u8c61, \u7ee7\u627f maptalks Geometry")),(0,a.kt)("h2",{id:"createuicomponent"},"createUIComponent"),(0,a.kt)("p",null,"\u521b\u5efa maptalks uiComponent HOC, eg: InfoWindow, Tooltip"),(0,a.kt)("h3",{id:"\u51fd\u6570\u7b7e\u540d-2"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export declare function createUIComponent<\n    P extends UIComponentProps,\n    T extends ui.UIComponent\n>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;\n")),(0,a.kt)("h3",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P component Props \u7ee7\u627f @react-maptalks/core \u7684 UIComponentProps"),(0,a.kt)("li",{parentName:"ol"},"T Ref current\u5bf9\u8c61, \u7ee7\u627f maptalks ui.UIComponent")),(0,a.kt)("h2",{id:"createcontrol"},"createControl"),(0,a.kt)("p",null,"\u521b\u5efa maptalks control HOC, eg: Zoom, Overview"),(0,a.kt)("h3",{id:"\u51fd\u6570\u7b7e\u540d-3"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export declare function createControl<\n    P extends ControlProps,\n    T extends control.Control\n>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;\n")),(0,a.kt)("h3",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P component Props \u7ee7\u627f @react-maptalks/core \u7684 ControlProps"),(0,a.kt)("li",{parentName:"ol"},"T Ref current\u5bf9\u8c61, \u7ee7\u627f maptalks control.Control")))}s.isMDXComponent=!0}}]);