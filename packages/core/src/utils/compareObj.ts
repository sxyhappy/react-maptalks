export function compareObj<T extends Record<string, unknown>>(target: T, origin: T): string[] {
  const changeKey: string[] = [];
  const keys = Array.from(new Set(Object.keys(target).concat(Object.keys(origin))));

  keys.forEach(key => {
    if (!isEqual(target[key], origin[key])) {
      changeKey.push(key);
    }
  })

  return changeKey;
}

export const isEqual = (targetVal: any, originVal: any): boolean => {
  if (typeof targetVal !== typeof originVal) return false;
  if (!targetVal && !originVal) return true;
  if ((!targetVal && targetVal) || (targetVal && !originVal)) return false;

  if ((typeof targetVal === 'function' && typeof originVal === 'function')) {
    return targetVal.toString() === originVal.toString();
  }

  if (typeof targetVal === 'object' && typeof originVal === 'object') {
    return JSON.stringify(targetVal, (key, val) => {
      if (typeof val === 'function') {
        return val + '';
      }
      return val;
    }) === JSON.stringify(originVal, (key, val) => {
      if (typeof val === 'function') {
        return val + '';
      }
      return val;
    });
  }

  return targetVal === originVal;
}
