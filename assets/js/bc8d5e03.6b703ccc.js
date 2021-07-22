(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[600],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4870:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],s={sidebar_label:"ImageLayer",sidebar_position:3},c={unversionedId:"components/layers/image-layer",id:"components/layers/image-layer",isDocsHomePage:!1,title:"ImageLayer",description:"Example",source:"@site/docs/components/layers/image-layer.mdx",sourceDirName:"components/layers",slug:"/components/layers/image-layer",permalink:"/react-maptalks/docs/components/layers/image-layer",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/components/layers/image-layer.mdx",version:"current",sidebar_label:"ImageLayer",sidebarPosition:3,frontMatter:{sidebar_label:"ImageLayer",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MtWmsLayer",permalink:"/react-maptalks/docs/components/layers/vector-layer"},next:{title:"CanvasLayer",permalink:"/react-maptalks/docs/components/layers/canvas-layer"}},l=[{value:"Example",id:"example",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function ImageExample() {\n  const mapRef = useRef();\n  const view = { center: [-0.09270712, 51.50615], pitch: 0, zoom: 14 };\n  const images = [\n    {\n      url : 'https://maptalks.org/examples/en/layer/imagelayer/raw/1.png',\n      extent: [-0.11854216406254636, 51.50043810048564, -0.09081885168461667, 51.50994770979011],\n      opacity : 1\n    },\n    {\n      url : 'https://maptalks.org/examples/en/layer/imagelayer/raw/2.png',\n      extent: [-0.10343596289067136, 51.50797115663946, -0.07897421667485105, 51.51876102463089],\n      opacity : 1\n    }\n  ]\n  const [visible, setVisible] = useState(true);\n\n  return (\n    <>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} ref={mapRef} style={{height: 400}}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtImageLayer id={'image'} visible={visible} images={images} crossOrigin={'https://maptalks.org'} />\n      </MtMap>\n    </>\n  )\n}\n\n")))}m.isMDXComponent=!0}}]);