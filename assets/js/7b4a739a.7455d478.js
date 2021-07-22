(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[890],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3873:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(9603),a=r(120),o=(r(7378),r(5318)),i=["components"],s={sidebar_label:"WMSTileLayer",sidebar_position:6},l={unversionedId:"components/layers/wms-tile-layer",id:"components/layers/wms-tile-layer",isDocsHomePage:!1,title:"MtWmsLayer",description:"Example",source:"@site/docs/components/layers/wms-tile-layer.mdx",sourceDirName:"components/layers",slug:"/components/layers/wms-tile-layer",permalink:"/react-maptalks/docs/components/layers/wms-tile-layer",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/components/layers/wms-tile-layer.mdx",version:"current",sidebar_label:"WMSTileLayer",sidebarPosition:6,frontMatter:{sidebar_label:"WMSTileLayer",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ParticleLayer",permalink:"/react-maptalks/docs/components/layers/particle-layer"},next:{title:"Geometry",permalink:"/react-maptalks/docs/components/geometries/geometry"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},'function WmsExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 1 };\n  const [wmsVisible, setWmsVisible] = useState(true);\n\n  return (\n    <>\n      <button onClick={() => setWmsVisible(!wmsVisible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={"base"}\n          urlTemplate="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"\n          subdomains={[\'a\',\'b\',\'c\',\'d\']}\n          attribution={\'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>\'}\n        />\n\n        <MtWMSTileLayer\n          visible={wmsVisible}\n          id={"wms"}\n          crs="EPSG:3857"\n          version="1.1.1"\n          layers="GDPS.ETA_NT"\n          format="image/png"\n          transparent={true}\n          urlTemplate="https://geo.weather.gc.ca/geomet"\n          uppercase={true}\n        />\n      </MtMap>\n    </>\n  )\n}\n\n')))}m.isMDXComponent=!0}}]);