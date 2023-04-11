const applyAriaLabelToLinks = truncateClass => {
  const truncateElements = document.querySelectorAll(truncateClass)
  truncateElements.forEach(truncateElement => {
    const heading = truncateElement.querySelector('h2, h3, h4')
    if (heading) {
      const headingText = heading.textContent
      const parentElement = truncateElement.parentElement
      const siblingLink = parentElement.querySelector('a')

      if (siblingLink) siblingLink.setAttribute('aria-label', headingText)
    }
  })
}

applyAriaLabelToLinks('.truncate')
