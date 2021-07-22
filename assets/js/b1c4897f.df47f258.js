(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[304],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,f=m["".concat(i,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3606:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),s=["components"],c={sidebar_label:"Multiple Layer"},i={unversionedId:"examples/base",id:"examples/base",isDocsHomePage:!1,title:"Multiple Layer",description:"`jsx live=true",source:"@site/docs/examples/base.mdx",sourceDirName:"examples",slug:"/examples/base",permalink:"/react-maptalks/docs/examples/base",editUrl:"https://github.com/sxyhappy/react-maptalks/blob/master/docs/docs/examples/base.mdx",version:"current",sidebar_label:"Multiple Layer",frontMatter:{sidebar_label:"Multiple Layer"},sidebar:"examples"},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function MultipleLayer() {\n  const view = { center: [-0.09270712, 51.50615], pitch: 0, zoom: 14 };\n  const images = [\n    {\n      url : 'https://maptalks.org/examples/en/layer/imagelayer/raw/1.png',\n      extent: [-0.11854216406254636, 51.50043810048564, -0.09081885168461667, 51.50994770979011],\n      opacity : 1\n    },\n    {\n      url : 'https://maptalks.org/examples/en/layer/imagelayer/raw/2.png',\n      extent: [-0.10343596289067136, 51.50797115663946, -0.07897421667485105, 51.51876102463089],\n      opacity : 1\n    }\n  ]\n\n  return (\n    <>\n      <MtMap {...view} style={{height: 400}}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtTileLayer\n          id={\"boundaries\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n        />\n\n        <MtWMSTileLayer\n          id={\"wms\"}\n          crs=\"EPSG:3857\"\n          version=\"1.1.1\"\n          layers=\"GDPS.ETA_NT\"\n          format=\"image/png\"\n          transparent={true}\n          urlTemplate=\"https://geo.weather.gc.ca/geomet\"\n          uppercase={true}\n        />\n\n        <MtImageLayer id={'image'} images={images} crossOrigin={'https://maptalks.org'} />\n      </MtMap>\n    </>\n  )\n}\n")))}u.isMDXComponent=!0}}]);