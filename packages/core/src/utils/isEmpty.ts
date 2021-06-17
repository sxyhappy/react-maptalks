export const isEmpty = (data: unknown): boolean => {
  if (data === false || data === 0) return false;

  if (!data) return true;

  if (Array.isArray(data)) {
    return data.length === 0
  }

  if (data && typeof data === 'object') {
    return Object.keys(data).length === 0
  }

  return false;
}
