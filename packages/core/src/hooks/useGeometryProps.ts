import { useEffect } from 'react';
import { Geometry, GeometryOptions } from 'maptalks';
import { GeometryProps } from '../core';

export function useGeometryProps<P extends GeometryOptions & GeometryProps, T extends Geometry>(props: P, element?: T) {
  useEffect(() => {
    if (!element) return;

    if (props.editable) {
      element.startEdit();
    } else {
      element.endEdit();
    }
  }, [props.editable, element])

  useEffect(() => {
    if (!element) return;

    if (props.infoVisible) {
      element.openInfoWindow();
    } else {
      element.closeInfoWindow();
    }
  }, [props.infoVisible, element])
}
