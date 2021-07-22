(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[108],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),b=o,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1569:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(9603),o=n(120),i=(n(7378),n(5318)),l=["components"],a={sidebar_label:"Ellipse",sidebar_position:4},s={unversionedId:"components/geometries/ellipse",id:"components/geometries/ellipse",isDocsHomePage:!1,title:"Ellipse",description:"Example",source:"@site/docs/components/geometries/ellipse.mdx",sourceDirName:"components/geometries",slug:"/components/geometries/ellipse",permalink:"/react-maptalks/docs/components/geometries/ellipse",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/components/geometries/ellipse.mdx",version:"current",sidebar_label:"Ellipse",sidebarPosition:4,frontMatter:{sidebar_label:"Ellipse",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Circle",permalink:"/react-maptalks/docs/components/geometries/circle"},next:{title:"LineString",permalink:"/react-maptalks/docs/components/geometries/line-string"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function EllipseExample() {\n  const view = { center: [-0.113049,51.49856], pitch: 0, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n  const ellipseConfig = {\n    symbol: {\n      lineColor: '#34495e',\n      lineWidth: 2,\n      polygonFill: '#1bbc9b',\n      polygonOpacity: 0.4\n    },\n    center: [-0.113049,51.49856],\n    width: 400,\n    height: 200\n  }\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtVectorLayer id={'vector'}>\n          <MtEllipse {...ellipseConfig} visible={visible} />\n        </MtVectorLayer>\n      </MtMap>\n    </>\n  )\n}\n\n")))}u.isMDXComponent=!0}}]);