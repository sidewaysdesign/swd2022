initHamburger()
initMobileMenus()

function initHamburger() {
  var burger = document.getElementById('burger')
  var menu = document.getElementById('menu')
  var menuParent = menu.parentNode
  var mobileOnlyElems = menu.querySelectorAll('[data-mobileonly]')

  var isOpen = false
  var resizeTimer

  function closeMenu() {
    var allSubmenus = menu.querySelectorAll('[data-submenu]')
    allSubmenus.forEach(function (submenu) {
      submenu.style.display = ''
    })
    menu.style.transform = ''

    document.body.style.overflow = ''
    menu.style.display = ''
    menuParent.style.display = ''
    mobileOnlyElems.forEach(function (elem) {
      elem.removeAttribute('hidden')
    })
    burger.setAttribute('aria-expanded', 'false')
    isOpen = false
  }
  function openMenu() {
    document.body.style.overflow = 'hidden'
    menu.style.display = 'flex'
    menuParent.style.display = 'block'
    mobileOnlyElems.forEach(function (elem) {
      elem.setAttribute('hidden', 'hidden')
    })
    burger.setAttribute('aria-expanded', 'true')
    isOpen = true
  }
  function debounceResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      if (isOpen && window.innerWidth >= 768) {
        closeMenu()
      }
    }, 250)
  }
  burger.addEventListener('click', function () {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  })
  window.addEventListener('resize', debounceResize)
}

function initMobileMenus() {
  var submenuButtons = document.querySelectorAll('[data-dropdown]')
  var rootMenu = document.getElementById('menu')

  submenuButtons.forEach(function (button) {
    var dropdownLevel = parseInt(button.getAttribute('data-dropdown'))
    var offsetPercent = (dropdownLevel + 1) * 100
    button.addEventListener('click', function () {
      rootMenu.style.transform = 'translate3d(-' + String(offsetPercent) + '%,0,0)'
      var siblingMenu = findNearestSiblingWithAttribute(button, 'data-submenu')
      if (siblingMenu) siblingMenu.style.display = 'flex'
    })
  })
  var backButtons = document.querySelectorAll('[data-back]')
  backButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentLevel = parseInt(button.getAttribute('data-back'))
      var offsetPercent = currentLevel * 100
      console.log('currentLevel', currentLevel)
      rootMenu.style.transform = 'translate3d(-' + String(offsetPercent) + '%,0,0)'
      var siblingMenuItem = findNearestSiblingWithAttribute(button, 'data-level')
      var siblingMenu = siblingMenuItem.querySelector('[data-submenu]')
      if (siblingMenu) siblingMenu.style.display = ''
    })
  })
}
function findNearestSiblingWithAttribute(element, attribute) {
  let sibling = element.nextSibling
  while (sibling) {
    if (sibling.nodeType === 1 && sibling.hasAttribute(attribute)) {
      return sibling
    }
    sibling = sibling.nextSibling
  }
  return null
}
