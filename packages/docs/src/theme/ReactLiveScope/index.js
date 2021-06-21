/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as maptalks from 'maptalks';
import * as reactMaptalks from 'react-maptalks';
import * as reactMaptalksThree from '@react-maptalks/three';
import * as THREE from 'three';
import { buildings } from './building';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  THREE,
  maptalks,
  buildings,
  ...React,
  ...reactMaptalks,
  ...maptalks,
  ...reactMaptalksThree
};

export default ReactLiveScope;
