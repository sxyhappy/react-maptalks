(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[685],{9603:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},120:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},5816:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(9603),o=n(120),i=(n(7378),n(5318)),c=["components"],a={sidebar_label:"Overview",sidebar_position:2},s="Overview",l={unversionedId:"components/controls/overview",id:"components/controls/overview",isDocsHomePage:!1,title:"Overview",description:"Example",source:"@site/docs/components/controls/overview.mdx",sourceDirName:"components/controls",slug:"/components/controls/overview",permalink:"/react-maptalks/docs/components/controls/overview",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/components/controls/overview.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Zoom",permalink:"/react-maptalks/docs/components/controls/zoom"},next:{title:"InfoWindow",permalink:"/react-maptalks/docs/components/ui/infoWindow"}},p=[{value:"Example",id:"example",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function OverviewExample() {\n  const view = {\n    center: [-0.113049,51.49856],\n    pitch: 0,\n    zoom: 14,\n    baseLayer: new maptalks.TileLayer('base', {\n      urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',\n      subdomains: ['a','b','c','d'],\n      attribution: '&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'\n    })\n  };\n  const [ visible, setVisible ] = useState(true);\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtOverview  />\n        <MtOverview position={'top-left'} visible={visible} />\n      </MtMap>\n    </>\n  )\n}\n\n")))}f.isMDXComponent=!0},5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,v=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(v,c(c({ref:t},p),{},{components:n})):r.createElement(v,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);