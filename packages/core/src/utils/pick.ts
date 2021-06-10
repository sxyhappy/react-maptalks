import { isEmpty } from "./isEmpty";

export function pick<T extends Record<string, any>>(props: T, key: string | string[]): Partial<T> {
  if (isEmpty(key)) return props;

  let keys: string[] = [];
  let result: Partial<T> = {};

  if (typeof key === 'string') {
    keys = [key]
  } else {
    keys = [...key]
  }

  Object.entries(props).forEach(([key, val]) => {
    if (keys.includes(key)) {
      result[key as keyof T] = val;
    }
  })

  return result;
}
