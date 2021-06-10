export const capitalOrLowerLetter = (str: string, type: 'capital' | 'lower' = 'capital') => {
  if (!str) return str;
  const first = str.charAt(0)
  const rest = str.slice(1);

  return `${ type === 'capital' ? first.toUpperCase() : first.toLowerCase()}${rest}`
}

