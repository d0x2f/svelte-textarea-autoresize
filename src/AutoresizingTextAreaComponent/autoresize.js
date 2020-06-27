import getSizingData from './get-sizing-data.js'
import calculateNodeHeight from './calculate-node-height.js'

export default function autoresize(node) {
  const resize = () => {
    const nodeSizingData = getSizingData(node)

    if (!nodeSizingData) {
      return
    }

    const height = calculateNodeHeight(
      nodeSizingData,
      node.value || node.placeholder || 'x',
    )
    node.style.setProperty('height', `${height}px`, 'important')
  }
  node.addEventListener('input', resize)
  window.addEventListener('resize', resize)
  resize()
}
