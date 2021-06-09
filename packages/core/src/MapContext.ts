import { createContext, useContext } from "react";
import { Map } from 'maptalks';

export interface MapContextInterface {
  map: Map
}

export const MapContext = createContext<MapContextInterface | null>(null)
export const MapContextProvider = MapContext.Provider

export const useMap = (): MapContextInterface => {
  const context = useContext(MapContext)

  if (context == null) {
    throw new Error(
      'No MapContext provided',
    )
  }
  return context
}
