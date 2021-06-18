(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=a,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4273:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(7560),a=r(8283),o=(r(2784),r(876)),i=["components"],l={sidebar_label:"TileLayer",sidebar_position:1},c={unversionedId:"layers/tile-layer",id:"layers/tile-layer",isDocsHomePage:!1,title:"MtMap",description:"Example",source:"@site/docs/layers/tile-layer.mdx",sourceDirName:"layers",slug:"/layers/tile-layer",permalink:"/react-maptalks/docs/layers/tile-layer",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/layers/tile-layer.mdx",version:"current",sidebar_label:"TileLayer",sidebarPosition:1,frontMatter:{sidebar_label:"TileLayer",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MtMap",permalink:"/react-maptalks/docs/map"},next:{title:"MtWmsLayer",permalink:"/react-maptalks/docs/layers/vector-layer"}},s=[{value:"Example",id:"example",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function TileExample() {\n  const ref = useRef();\n  const [view] = useState({ center: [-0.113049,51.49856], pitch: 0 });\n  const [boundaryVisible, setBoundaryVisible] = useState(true);\n\n  const handleTitleLayerReady = tileLayer => {\n    console.log('ready', tileLayer);\n  }\n\n  return (\n    <div style={{height: 400}}>\n      <button onClick={() => setBoundaryVisible(!boundaryVisible)}>change visible</button>\n      <MtMap {...view} onReady={handleTitleLayerReady}>\n        <MtTileLayer\n          ref={instance => ref.current = instance}\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtTileLayer\n          visible={boundaryVisible}\n          id={\"boundaries\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n        />\n      </MtMap>\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0}}]);