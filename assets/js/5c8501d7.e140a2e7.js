(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[924],{876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4777:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(7560),a=t(8283),o=(t(2784),t(876)),i=["components"],l={sidebar_label:"ThreeLayer",sidebar_position:1},s={unversionedId:"plugins/three-layer",id:"plugins/three-layer",isDocsHomePage:!1,title:"ThreeLayer",description:"Example",source:"@site/docs/plugins/three-layer.mdx",sourceDirName:"plugins",slug:"/plugins/three-layer",permalink:"/react-maptalks/docs/plugins/three-layer",editUrl:"https://github.com/sxyhappy/react-maptalks/tree/master/packages/docs/docs/plugins/three-layer.mdx",version:"current",sidebar_label:"ThreeLayer",sidebarPosition:1,frontMatter:{sidebar_label:"ThreeLayer",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Marker",permalink:"/react-maptalks/docs/geometries/marker"}},c=[{value:"Example",id:"example",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"function ThreeExample() {\n  const mapRef = useRef();\n  const view = { center: [13.416935229170008, 52.529564137540376], pitch: 60, zoom: 14 };\n  const [visible, setVisible] = useState(true);\n\n  const handleLayerReady = layer => {\n    let features = [];\n\n    buildings.forEach(function (b) {\n      features = features.concat(b.features);\n    });\n\n    function getColor(level) {\n      if (level < 2) {\n          return 0x2685a7;\n      } else if (level >= 2 && level <= 5) {\n          return 0xff5733;\n      } else {\n          return 0xff2e00;\n      }\n   }\n\n    layer.prepareToDraw = function (gl, scene, camera) {\n      const me = this;\n      const light = new THREE.DirectionalLight(0xffffff);\n      light.position.set(0, -10, 10).normalize();\n      scene.add(light);\n\n      features.forEach(function (g) {\n        const heightPerLevel = 10;\n        const levels = g.properties.levels || 1;\n        const color = getColor(levels);\n        const m = new THREE.MeshPhongMaterial({color: color, opacity : 0.7});\n        const mesh = me.toExtrudeMesh(maptalks.GeoJSON.toGeometry(g), levels * heightPerLevel, m, levels * heightPerLevel);\n        if (Array.isArray(mesh)) {\n          scene.add.apply(scene, mesh);\n        } else {\n          scene.add(mesh);\n        }\n      });\n    };\n  }\n\n  return (\n    <div style={{height: 400}}>\n      <button onClick={() => setVisible(!visible)}>change visible</button>\n      <MtMap {...view} ref={mapRef}>\n        <MtTileLayer\n          id={\"base\"}\n          urlTemplate=\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n          subdomains={['a','b','c','d']}\n          attribution={'&copy; <a href=\"http://osm.org\">OpenStreetMap</a> contributors, &copy; <a href=\"https://carto.com/\">CARTO</a>'}\n        />\n\n        <MtThreeLayer\n          id={'three'}\n          onReady={handleLayerReady}\n          forceRenderOnMoving={true}\n          forceRenderOnRotating={true}\n          forceRenderOnZooming={true}\n          visible={visible}\n        />\n      </MtMap>\n    </div>\n  )\n}\n")))}p.isMDXComponent=!0}}]);