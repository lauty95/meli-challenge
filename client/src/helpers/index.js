const nf = new Intl.NumberFormat('es-AR')

export function priceFormatter (price) {
  if (!price) return '$ '
  if (typeof price !== 'number') {
    if (Number.isNaN(Number(price))) return '$ 0'
    else return `$ ${Number(price)}`
  } else {
    return `$ ${nf.format(price)}`
  }
}
