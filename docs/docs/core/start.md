---
sidebar_position: 1
sidebar_label: 'Core Start'
---

## 简介
@react-maptalks/core 是 react-maptalks 的 core api,它提供了 Map context, createMapElement Hoc 等核心功能,使用这些 API 可以很容易的创建React Maptalks 组件

## 安装
为了方便管理 @react-maptalks/core 是 react-maptalks, @react-maptalks/three 等插件的 peerDependences, 在安装 react-maptalks 必须同时安装 @react-maptalks/core

## 使用
maptalks three plugin

```tsx
import { FC, useEffect } from 'react';
import { ThreeLayer } from 'maptalks.three';
import { createLayer, useLayer, useMap } from '@react-maptalks/core';

const MtThreeLayer: FC = createLayer(() => {
  // MtMap 提供的 Map Context
  const { map } = useMap();
  // createLayer Hoc 提供的 layer Context
  const { layer, setLayer } = useLayer<ThreeLayer>();

  useEffect(() => {
    const threeLayer = new ThreeLayer('three');
    threeLayer.addTo(map);

    // 必须调用 setLayer, 否则 createLayer Hoc 无法绑定 layer 事件/属性等
    setLayer(threeLayer);
  }, []);

  return null;
});

```
