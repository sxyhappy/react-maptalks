# react-maptalks

## install

### main package install

```bash
# npm
npm install maptalks -S
npm install react-maptalks @react-maptalks/core -S
# npm with ts
npm install @types/maptalks -D

# yarn
yarn add maptalks -S
yarn add react-maptalks @react-maptalks/core -S
# yarn with ts
yarn add @types/maptalks -D
```

### plugins install

#### plugin @react-maptalks/three install
```bash
# npm
npm install three maptalks.three -S
npm install @react-maptalks/three -S
# npm with ts
npm install @types/three -D

# yarn
yarn add three maptalks.three
yarn add @react-maptalks/three
# npm with ts
yarn add @types/three -D
```

## use
```jsx
function TileExample() {
  const ref = useRef();
  const [view] = useState({ center: [-0.113049,51.49856], pitch: 0 });
  const [boundaryVisible, setBoundaryVisible] = useState(true);

  const handleTitleLayerReady = tileLayer => {
    console.log('ready', tileLayer);
  }

  return (
    <div style={{height: 400}}>
      <button onClick={() => setBoundaryVisible(!boundaryVisible)}>change visible</button>
      <MtMap {...view} onReady={handleTitleLayerReady}>
        <MtTileLayer
          ref={instance => ref.current = instance}
          id={"base"}
          urlTemplate="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          subdomains={['a','b','c','d']}
          attribution={'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'}
        />

        <MtTileLayer
          visible={boundaryVisible}
          id={"boundaries"}
          urlTemplate="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png"
          subdomains={['a','b','c','d']}
        />
      </MtMap>
    </div>
  )
}
```

## LICENSE
[MIT](LICENSE) © sxyhappy
