(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[106],{876:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9796:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=t(7560),o=t(8283),a=(t(2784),t(876)),i=["components"],c={sidebar_label:"Marker",sidebar_position:2},s={unversionedId:"geometries/marker",id:"geometries/marker",isDocsHomePage:!1,title:"Marker",description:"Example",source:"@site/docs/geometries/marker.mdx",sourceDirName:"geometries",slug:"/geometries/marker",permalink:"/react-maptalks/docs/geometries/marker",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/geometries/marker.mdx",version:"current",sidebar_label:"Marker",sidebarPosition:2,frontMatter:{sidebar_label:"Marker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Geometry",permalink:"/react-maptalks/docs/geometries/geometry"},next:{title:"Zoom",permalink:"/react-maptalks/docs/controls/zoom"}},l=[{value:"Example",id:"example",children:[]}],p={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function MarkerExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n  const markerConfig = {\n    'symbol' : {\n      'markerFile'   : 'https://maptalks.org/examples/en/style/image-marker/raw/3.png',\n      'markerWidth'  : 28,\n      'markerHeight' : 40,\n      'markerDx'     : 0,\n      'markerDy'     : 0,\n      'markerOpacity': 1\n    },\n    coordinate: [-0.113049,51.49856],\n    cursor: 'Pointer'\n  }\n\n  const handleClick = (e) => {\n    window.alert(JSON.stringify(e.target))\n  }\n\n  return (\n    <div style={{height: 400}}>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtVectorLayer id={'vector'}>\n          <MtMarker {...markerConfig} visible={visible}>\n            <MtInfoWindow title={'infoTitle'}><>content</></MtInfoWindow>\n          </MtMarker>\n        </MtVectorLayer>\n      </MtMap>\n    </div>\n  )\n}\n\n")))}m.isMDXComponent=!0}}]);