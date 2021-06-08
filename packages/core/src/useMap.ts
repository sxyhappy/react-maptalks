import { useContext } from "react";
import { MapContext } from "./MapContext";

export const useMap = () => {
  return useContext(MapContext);
}
