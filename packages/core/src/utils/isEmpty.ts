export const isEmpty = (data: any): boolean => {
  if (data === false || data === 0) return false;

  if (!data) return true;

  if (Array.isArray(data)) {
    return data.length === 0
  }

  return Object.keys(data).length === 0;
}
