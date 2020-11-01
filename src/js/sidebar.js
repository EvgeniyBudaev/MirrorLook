import {findParentBySelector} from './utils'

class Sidebar {
  constructor() {
    this.$header = document.querySelector('[data-type="header"]')
    this.$body = document.querySelector('[data-body=""]')
    this.$hamburger = document.querySelector('[data-type="hamburger"]')
    this.$menu = document.querySelector('[data-type="menu"]')
    this.$mainMenuItemAll = document.querySelectorAll('li.main-menu-item')
    this.$headerMenu = document.querySelector('[data-headerMenu=""]')

    this.setup()
  }

  setup() {
    this.clickHandlerHamburger = this.clickHandlerHamburger.bind(this)
    this.$hamburger.addEventListener('click', this.clickHandlerHamburger)
    this.submenuSetup()
  }

  clickHandlerHamburger() {
    if (this.$hamburger) {
      this.toggle()
    }
  }

  get isOpen() {
    return this.$hamburger.classList.contains('open')
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$hamburger.classList.add('open')
    this.$body.classList.add('scrollHidden')
    this.$header.classList.add('noshadow')
    this.$menu.classList.add('open')
    this.$headerMenu.classList.add('displayOff')
  }

  close() {
    this.$menu.classList.add('close')
    this.$menu.classList.remove('open')
    this.$hamburger.classList.remove('open')
    this.$body.classList.remove('scrollHidden')
    this.$header.classList.remove('noshadow')
    this.$headerMenu.classList.remove('displayOff')

    setTimeout(() => {
      this.$menu.classList.remove('close')
    }, 500)
  }

  submenuSetup() {
    this.$mainMenuItemAll.forEach(item => {
      item.addEventListener('click', (event) => {
        const menuElement = findParentBySelector(event.target, 'li.main-menu-item')
        let childrenContainer = menuElement.querySelector('ul')
        if (!childrenContainer) return; // нет детей
        event.preventDefault()
        if (menuElement.classList.contains('visible')) {
          menuElement.classList.remove('visible')
        } else {
          this.$mainMenuItemAll.forEach(item => item.classList.remove('visible'))
          menuElement.classList.add('visible')
        }

      })
    })

  }
}

new Sidebar()


//   $('ul.main-menu li').click(function () {
//     if ($(this).siblings('li').find('ul.sidebar__submenu:visible').length) {
//       $('ul.sidebar__submenu').slideUp('normal')
//     }
//     $(this).find('ul.sidebar__submenu').slideToggle('normal')
//     $('.main-menu-item__linkWrapper svg').toggleClass('active')
//   })