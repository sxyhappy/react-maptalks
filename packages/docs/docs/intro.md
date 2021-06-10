---
sidebar_position: 1
---

# 快速上手

## 安装
```bash
yarn add react-maptalks
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
