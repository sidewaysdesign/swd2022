function initHeightTransition(container, activeClass) {
  const current = container.querySelector(`.${activeClass}, :scope > :first-child`)
  current.classList.add(activeClass)
  container.style.minHeight = `${current.getBoundingClientRect().height}px`
}

function heightTransition({ container, activeClass = 'active', fadeInClass = 'fadein', fadeOutClass = 'fadeout', requestedIndex }) {
  if (!container) return
  const element = container.firstElementChild
  const elementTransitionTime = getTransTime(element, fadeInClass)
  const containerTransitionTime = getTransTime(container)

  const doTransition = (container, requestedIndex) => {
    const current = container.querySelector(`:scope > .${activeClass}`)
    const other = container.children.item(requestedIndex)
    const currentIndex = Array.from(container.children).indexOf(current)
    if (!current || currentIndex < 0 || currentIndex === requestedIndex) return
    ;[current, other].forEach(el => [fadeInClass, fadeOutClass].forEach(c => el.classList.remove(c)))

    const currentHeight = elementHeight(current)
    const otherHeight = elementHeight(other)
    const currentPositioning = current.style.position
    const otherPositioning = other.style.position
    // defer if height change is required to fully enclose current and other elements prior to transition
    const defer = currentHeight > otherHeight

    const doHeight = () => {
      // invoke height change
      current.style.position = 'absolute'
      other.style.position = 'absolute'
      const otherHeight = elementHeight(other)
      container.style.minHeight = `${otherHeight}px`
    }
    const doTransition = () => {
      // start transition
      other.classList.add(fadeInClass)
      current.classList.add(fadeOutClass)
      current.classList.remove(activeClass)
    }
    const doCleanup = () => {
      // end transition
      ;[current, other].forEach(el => [fadeInClass, fadeOutClass].forEach(c => el.classList.remove(c)))
      other.classList.add(activeClass)
      current.style.position = currentPositioning
      other.style.position = otherPositioning
    }
    setTimeout(doHeight, defer ? elementTransitionTime : 0, current, other, defer)
    setTimeout(doTransition, defer ? 0 : containerTransitionTime, current, other, defer)
    setTimeout(doCleanup, containerTransitionTime + elementTransitionTime, current, other, defer)
  }

  function getTransTime(el, sampleClass = null) {
    const origClasses = el.classList
    if (sampleClass) el.classList.add(sampleClass)
    const cssTransTime = window.getComputedStyle(el).transitionDuration
    if (sampleClass) el.classList = origClasses
    const transTime = parseFloat(cssTransTime) * (/\ds$/.test(cssTransTime) ? 1000 : 1)
    return transTime
  }

  function elementHeight(el) {
    const initialDisplayValue = el.style.display
    el.style.display = 'block'
    const height = el.getBoundingClientRect().height
    el.style.display = initialDisplayValue
    return height
  }
  doTransition(container, requestedIndex)
}
function switchElements(event) {
  const btn = event.target
  const btnIndex = Array.from(btn.parentNode.children).indexOf(btn)
  heightTransition({
    container,
    requestedIndex: btnIndex,
    activeClass: 'active',
    fadeInClass: 'fadein',
    fadeOutClass: 'fadeout'
  })
}

export { initHeightTransition, heightTransition }
