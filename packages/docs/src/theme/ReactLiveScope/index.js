/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as reactMaptalks from 'react-maptalks';
import * as maptalks from 'maptalks';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  maptalks,
  ...React,
  ...reactMaptalks,
  ...maptalks
};

export default ReactLiveScope;
