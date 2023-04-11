truncateParagraph('truncate')

function truncateParagraph(containerClass) {
  var truncator = '…'
  function truncate(container) {
    var heading = container.querySelector('h3')
    var paragraph = container.querySelector('p')
    var containerStyles = getComputedStyle(container)
    var paddingTop = parseInt(containerStyles.getPropertyValue('padding-top'), 10)
    var paddingBottom = parseInt(containerStyles.getPropertyValue('padding-bottom'), 10)
    var containerHeight = container.offsetHeight - paddingTop - paddingBottom
    var headingHeight = heading.offsetHeight
    var paragraphHeight = paragraph.offsetHeight
    var limit = headingHeight + paragraphHeight

    container.style.visibility = 'visible'

    if (containerHeight > limit) {
      container.truncated = false
      return
    }

    if (!container.truncated) {
      container.truncated = true
      container.originalText = paragraph.textContent
    }

    var words = container.originalText.split(' ')
    while (words.length > 0) {
      words.pop()
      paragraph.textContent = words.join(' ') + truncator
      paragraphHeight = paragraph.offsetHeight
      limit = headingHeight + paragraphHeight

      if (containerHeight > limit) {
        break
      }
    }
    if (paragraph.textContent.trim() === truncator) {
      paragraph.style.visibility = 'hidden'
      paragraph.textContent = ''
    }
  }

  function debouncedTruncate() {
    for (var i = 0; i < containers.length; i++) {
      var container = containers[i]
      var paragraph = container.querySelector('p')
      var originalText = container.originalText || paragraph.textContent
      container.truncated = false
      paragraph.textContent = originalText
      debounce(truncate(container), 250)
    }
  }

  var containers = document.querySelectorAll('.' + containerClass)
  var text = containers[0].querySelector('p').textContent
  for (var i = 0; i < containers.length; i++) {
    containers[i].truncated = false
    truncate(containers[i])
  }

  window.addEventListener('resize', debounce(debouncedTruncate, 250))

  function debounce(fn, delay) {
    var timeout
    return function () {
      var context = this
      var args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}
