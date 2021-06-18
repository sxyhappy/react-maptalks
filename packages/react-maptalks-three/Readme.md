# react-maptalks-three

mptalks.three react plugin

## install

```bash
# npm
npm install maptalks maptalks.three three -S
npm install react-maptalks @react-maptalks/core @react-maptalks/three -S
# npm with ts
npm install @types/three @types/maptalks -D

# yarn
yarn add maptalks maptalks.three three -S
yarn add react-maptalks @react-maptalks/core @react-maptalks/three -S
# yarn with ts
yarn add @types/three @types/maptalks -D
```

## use

```jsx
import { MtMap, MtTileLayer } from "react-maptalks";
import { MtThreeLayer } from "@react-maptalks/three";

<MtMap>
  <MtTileLayer></MtTileLayer>
  <MtThreeLayer></MtThreeLayer>
</MtMap>

```
