const HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  // height: "0",
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0',
}

export default function forceHiddenStyles(node) {
  return Object.entries(HIDDEN_TEXTAREA_STYLE).forEach(([key, value]) =>
    node.style.setProperty(key, value, 'important'),
  )
}
