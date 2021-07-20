(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[148],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4450:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),i=["components"],c={sidebar_label:"Rectangle",sidebar_position:7},l={unversionedId:"geometries/rectangle",id:"geometries/rectangle",isDocsHomePage:!1,title:"Rectangle",description:"Example",source:"@site/docs/geometries/rectangle.mdx",sourceDirName:"geometries",slug:"/geometries/rectangle",permalink:"/react-maptalks/docs/geometries/rectangle",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/geometries/rectangle.mdx",version:"current",sidebar_label:"Rectangle",sidebarPosition:7,frontMatter:{sidebar_label:"Rectangle",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Polygon",permalink:"/react-maptalks/docs/geometries/polygon"},next:{title:"ArcCurve",permalink:"/react-maptalks/docs/geometries/arc-curve"}},s=[{value:"Example",id:"example",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function RectangleExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n  const rectangleConfig = {\n    symbol: {\n      'lineColor' : '#34495e',\n      'lineWidth' : 2,\n      'polygonFill' : 'rgb(135,196,240)',\n      'polygonOpacity' : 0.6\n    },\n    coordinates: [-0.113049,51.49856],\n    width: 400,\n    height: 400\n  }\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtVectorLayer id={'vector'}>\n          <MtRectangle {...rectangleConfig} visible={visible} />\n        </MtVectorLayer>\n      </MtMap>\n    </>\n  )\n}\n\n")))}u.isMDXComponent=!0}}]);