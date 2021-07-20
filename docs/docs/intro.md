---
sidebar_position: 1
---

# 快速上手

## 安装
### main package install

```bash
# yarn
yarn add maptalks
yarn add react-maptalks @react-maptalks/core
# yarn with ts
yarn add @types/maptalks -D
```

### plugins install

#### plugin @react-maptalks/three install
```bash
# yarn
yarn add three maptalks.three
yarn add @react-maptalks/three
# yarn with ts
yarn add @types/three -D
```

## 使用

```jsx
import { MtMap, MtTileLayer } from 'react-maptalks';
const view = { center: [-0.113049,51.49856], pitch: 0 };

<MtMap {...view}>
  <MtTileLayer
    id={"base"}
    urlTemplate="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
    subdomains={['a','b','c','d']}
    attribution={'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'}
  />
</MtMap>

```
