export function getDecimals (number) {
  if (typeof number === 'number') number = number.toString()
  const decimals = number.split('.')[1]
  if (!decimals) return 0
  return decimals.length
}
