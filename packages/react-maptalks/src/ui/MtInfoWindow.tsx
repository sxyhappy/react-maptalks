import { FC, useContext, Children, ReactElement } from 'react';
import { render } from 'react-dom';
import { Geometry, ui, Map } from 'maptalks';
import {
  createUIComponent,
  geometryContext,
  UIComponentProps,
  useMap,
  useMount,
  useUIComponent
} from '@react-maptalks/core';

interface MtInfoWindowProps extends UIComponentProps {
  visible?: boolean,
  children?: ReactElement
}

const defaultProps: Partial<MtInfoWindowProps> = {
  visible: false
}

const MtInfoWindowWrapper: FC<MtInfoWindowProps> = (props) => {
  const { children, visible, ...rest } = props;
  const { map } = useMap();
  const { uiComponent, setUIComponent } = useUIComponent();
  const geometry = useContext(geometryContext);

  useMount(() => {
    if (uiComponent) return;

    const element = getElement();
    if (!element) throw new Error('must provide geometry or map provider for infoWindow')

    const content = getContent();
    const infoWindow = new ui.InfoWindow({ ...rest, content });
    infoWindow.addTo(element);
    setUIComponent(infoWindow);
  })

  const getElement = (): Geometry | Map => {
    return geometry?.geometry || map;
  }

  const getContent = (): HTMLElement | string => {
    if (children) {
      const child = Children.only(children);

      const div = document.createElement('div');
      render(child, div);
      return div;
    }
    return '';
  }

  return null;
}

MtInfoWindowWrapper.displayName = 'MtInfoWindow';
MtInfoWindowWrapper.defaultProps = defaultProps;

const MtInfoWindow = createUIComponent(MtInfoWindowWrapper);

export { MtInfoWindow, MtInfoWindowProps }
