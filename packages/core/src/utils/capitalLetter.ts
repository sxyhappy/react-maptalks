export const capitalLetter = (str: string) => {
  const [first, ...rest] = str;

  return `${first.toUpperCase()}${rest.join('')}`
}
