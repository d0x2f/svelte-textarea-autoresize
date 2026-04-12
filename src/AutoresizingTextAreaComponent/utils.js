export const sum = (...summands) =>
  summands.map(parseFloat).reduce((a, b) => a + b, 0)

export const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})
