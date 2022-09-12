function AccordionPayloadMinHeight({ id, trigger, heading, measured, target }) {
  const triggerRefs = document.querySelectorAll([id, trigger].join(' '))
  const targetRefs = document.querySelectorAll([id, target].join(' '))
  const measuredRefs = document.querySelectorAll([id, measured].join(' '))
  const headingRefs = document.querySelectorAll([id, heading].join(' '))

  let resetMinHeights = i => {
    targetRefs[i].style.minHeight = 'auto'
    const minHeightVal = parseInt(Math.max(measuredRefs[i].offsetHeight, headingRefs[i].offsetWidth))
    targetRefs[i].style.minHeight = minHeightVal.toString() + 'px'
  }

  for (let i = 0; i < triggerRefs.length; i++) {
    triggerRefs[i].addEventListener('click', () => {
      // if (triggerRefs[i].classList.contains('active')) {
      resetMinHeights(i)
      // }
    })
  }
  let resetAllHeights = () => {
    for (let i = 0; i < triggerRefs.length; i++) {
      resetMinHeights(i)
    }
  }

  window.addEventListener('resize', () => {
    let timeOutFunctionId = null
    if (timeOutFunctionId !== null) {
      clearTimeout(timeOutFunctionId)
    }
    timeOutFunctionId = setTimeout(resetAllHeights(), 500)
  })
}
export default AccordionPayloadMinHeight
