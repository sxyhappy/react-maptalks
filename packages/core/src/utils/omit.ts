export function omit<T extends Record<string, any>> (obj: T, key?: string | string[]): Partial<T> {
  if (!key || (Array.isArray(key) && key.length === 0)) return obj;

  let tempKeys: string[];
  if (typeof key === 'string') {
    tempKeys = [key]
  } else {
    tempKeys = [...key]
  }

  const loop = (obj: Partial<T>, keys: string[]): Partial<T> => {
    if (keys.length === 0) return obj;

    const { [keys.pop() as string]: omitted, ...rest } = obj

    return loop(rest as Partial<T>, keys)
  }

  return loop(obj, tempKeys)
}
