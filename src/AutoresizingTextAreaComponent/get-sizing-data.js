import { sum, isIE, pick } from './utils.js'

const SIZING_STYLE = [
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'boxSizing',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  // non-standard
  'tabSize',
  'textIndent',
  // non-standard
  'textRendering',
  'textTransform',
  'width',
]

export default function getSizingData(node) {
  const style = window.getComputedStyle(node)

  if (style === null) {
    return null
  }

  let sizingStyle = pick(style, SIZING_STYLE)
  const { boxSizing } = sizingStyle

  // probably node is detached from DOM, can't read computed dimensions
  if (boxSizing === '') {
    return null
  }

  // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths
  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width =
      sum(
        sizingStyle.width,
        sizingStyle.borderRightWidth,
        sizingStyle.borderLeftWidth,
        sizingStyle.paddingRight,
        sizingStyle.paddingLeft,
      ) + 'px'
  }

  const paddingSize = sum(sizingStyle.paddingBottom, sizingStyle.paddingTop)

  const borderSize = sum(
    sizingStyle.borderBottomWidth,
    sizingStyle.borderTopWidth,
  )

  return {
    sizingStyle,
    paddingSize,
    borderSize,
  }
}
