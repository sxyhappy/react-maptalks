export const capitalOrLowerLetter = (str: string, type: 'capital' | 'lower' = 'capital') => {
  const [first, ...rest] = str;

  return `${ type === 'capital' ? first.toUpperCase() : first.toLowerCase()}${rest.join('')}`
}

