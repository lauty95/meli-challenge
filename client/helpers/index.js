const nf = new Intl.NumberFormat('es-AR')

export function priceFormatter (price) {
  if (typeof price !== 'number') {
    if (Number.isNaN(Number(price))) { return '$ 0' }
  } else {
    return `$ ${nf.format(price)}`
  }
}
