import forceHiddenStyles from './force-hidden-styles.js'

let hiddenTextarea

const getHeight = (node, sizingData) => {
  const height = node.scrollHeight
  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize
  }

  // remove padding, since height = content
  return height - sizingData.paddingSize
}

export default function calculateNodeHeight(sizingData, value) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    hiddenTextarea.setAttribute('tab-index', '-1')
    hiddenTextarea.setAttribute('aria-hidden', 'true')
    hiddenTextarea.setAttribute('rows', '1')
    forceHiddenStyles(hiddenTextarea)
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea)
  }

  const { paddingSize, borderSize, sizingStyle } = sizingData
  const { boxSizing } = sizingStyle

  Object.entries(sizingStyle).forEach(
    ([key, value]) => (hiddenTextarea.style[key] = value),
  )

  forceHiddenStyles(hiddenTextarea)

  hiddenTextarea.value = value
  let height = getHeight(hiddenTextarea, sizingData)

  // measure height of a textarea with a single row
  hiddenTextarea.value = 'x'
  const rowHeight = hiddenTextarea.scrollHeight - paddingSize

  let minHeight = rowHeight
  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize
  }
  return Math.max(minHeight, height)
}
