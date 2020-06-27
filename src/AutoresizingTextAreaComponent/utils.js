export const sum = (...summands) =>
  summands.map(parseFloat).reduce((a, b) => a + b, 0)

export const isIE =
  typeof document !== 'undefined'
    ? !!document.documentElement.currentStyle
    : false

export const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})

export const clean = (props) => {
  const { children, $$scope, $$slots, ...rest } = props
  return rest
}
