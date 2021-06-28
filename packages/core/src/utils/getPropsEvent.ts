import { capitalOrLowerLetter } from './capitalOrLowerLetter';

export interface EventMap {
  [key: string]: (...args: any) => void
}

export function getPropsEvent<T extends Record<string, any>>(props: T): EventMap {
  const eventMap: EventMap = {};
  const reg = /^on/;

  Object.keys(props).forEach((key) => {
    const eventKey = key.substring(2);

    if (reg.test(key) && typeof props[key] === 'function' && eventKey) {
      eventMap[capitalOrLowerLetter(eventKey, 'lower')] = props[key]
    }
  })

  return eventMap;
}

