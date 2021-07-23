(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[546],{9603:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},120:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},3953:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(9603),o=r(120),i=(r(7378),r(5318)),a=["components"],c={sidebar_label:"Geometry",sidebar_position:1},s="Geometry",l={unversionedId:"components/geometries/geometry",id:"components/geometries/geometry",isDocsHomePage:!1,title:"Geometry",description:"Example",source:"@site/docs/components/geometries/geometry.mdx",sourceDirName:"components/geometries",slug:"/components/geometries/geometry",permalink:"/react-maptalks/docs/components/geometries/geometry",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/components/geometries/geometry.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Geometry",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WMSTileLayer",permalink:"/react-maptalks/docs/components/layers/wms-tile-layer"},next:{title:"Marker",permalink:"/react-maptalks/docs/components/geometries/marker"}},p=[{value:"Example",id:"example",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geometry"},"Geometry"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},'function GeometryExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n  const profile = {\n    "feature": {\n      "type": "Feature",\n      "id" : "point1",\n      "geometry": {"type": "Point", "coordinates": [-0.113049,51.49856]},\n      "properties": {"prop0": "value0"}\n    },\n    "options":{\n      "draggable" : true\n    },\n    "symbol":{\n      "markerFile"  : "https://maptalks.org/examples/en/style/image-marker/raw/1.png",\n      \'markerWidth\'  : 28,\n      \'markerHeight\' : 40,\n      \'markerDx\'     : 0,\n      \'markerDy\'     : 0,\n      \'markerOpacity\': 1\n    }\n  }\n\n  const handleClick = (e) => {\n    window.alert(JSON.stringify(e.target))\n  }\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={"base"}\n          urlTemplate="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"\n          subdomains={[\'a\',\'b\',\'c\',\'d\']}\n          attribution={\'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>\'}\n        />\n\n        <MtVectorLayer id={\'vector\'}>\n          <MtGeometry profile={profile} visible={visible} onClick={handleClick} />\n        </MtVectorLayer>\n      </MtMap>\n    </>\n  )\n}\n\n')))}m.isMDXComponent=!0},5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);