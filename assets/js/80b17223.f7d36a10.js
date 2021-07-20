(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[499],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),v=o,f=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3039:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(9603),o=r(120),i=(r(7378),r(5318)),a=["components"],c={sidebar_label:"Overview",sidebar_position:2},s={unversionedId:"controls/overview",id:"controls/overview",isDocsHomePage:!1,title:"Overview",description:"Example",source:"@site/docs/controls/overview.mdx",sourceDirName:"controls",slug:"/controls/overview",permalink:"/react-maptalks/docs/controls/overview",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/controls/overview.mdx",version:"current",sidebar_label:"Overview",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Zoom",permalink:"/react-maptalks/docs/controls/zoom"},next:{title:"InfoWindow",permalink:"/react-maptalks/docs/ui/infoWindow"}},l=[{value:"Example",id:"example",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function OverviewExample() {\n  const view = {\n    center: [-0.113049,51.49856],\n    pitch: 0,\n    zoom: 14,\n    baseLayer: new maptalks.TileLayer('base', {\n      urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',\n      subdomains: ['a','b','c','d'],\n      attribution: '&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'\n    })\n  };\n  const [ visible, setVisible ] = useState(true);\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtOverview  />\n        <MtOverview position={'top-left'} visible={visible} />\n      </MtMap>\n    </>\n  )\n}\n\n")))}u.isMDXComponent=!0}}]);