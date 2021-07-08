(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[990],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7560),i=n(8283),o=(n(2784),n(876)),a=["components"],l={sidebar_label:"Ellipse",sidebar_position:4},s={unversionedId:"geometries/ellipse",id:"geometries/ellipse",isDocsHomePage:!1,title:"Ellipse",description:"Example",source:"@site/docs/geometries/ellipse.mdx",sourceDirName:"geometries",slug:"/geometries/ellipse",permalink:"/react-maptalks/docs/geometries/ellipse",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/geometries/ellipse.mdx",version:"current",sidebar_label:"Ellipse",sidebarPosition:4,frontMatter:{sidebar_label:"Ellipse",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Circle",permalink:"/react-maptalks/docs/geometries/circle"},next:{title:"LineString",permalink:"/react-maptalks/docs/geometries/line-string"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function EllipseExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n  const ellipseConfig = {\n    symbol: {\n      lineColor: '#34495e',\n      lineWidth: 2,\n      polygonFill: '#1bbc9b',\n      polygonOpacity: 0.4\n    },\n    center: [-0.113049,51.49856],\n    width: 400,\n    height: 200\n  }\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtVectorLayer id={'vector'}>\n          <MtEllipse {...ellipseConfig} visible={visible} />\n        </MtVectorLayer>\n      </MtMap>\n    </>\n  )\n}\n\n")))}u.isMDXComponent=!0}}]);