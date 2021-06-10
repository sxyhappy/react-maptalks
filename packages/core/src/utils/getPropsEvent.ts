import { capitalOrLowerLetter } from "./capitalOrLowerLetter";

export interface EventMap<T extends Record<string, any>> {
  [key: string]: (...args: any) => void
}

export function getPropsEvent<T extends Record<string, any>>(props: T): EventMap<T> {
  const eventMap: EventMap<T> = {};
  const reg = /^on/;

  Object.keys(props).forEach((key) => {
    const eventKey = key.substring(2);

    if (reg.test(key) && typeof props[key] === 'function' && eventKey) {
      eventMap[capitalOrLowerLetter(eventKey, 'lower')] = props[key]
    }
  })

  return eventMap;
}

