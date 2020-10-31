class Sidebar {
  constructor() {
    this.$header = document.querySelector('[data-type="header"]')
    this.$body = document.querySelector('.body')
    this.$hamburger = document.querySelector('[data-type="hamburger"]')
    this.$menu = document.querySelector('[data-type="menu"]')

    this.setup()
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$hamburger.addEventListener('click', this.clickHandler)
  }

  clickHandler() {
    if (this.$hamburger) {
      this.toggle()
    }
      this.submenu()
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
  }

  close() {
    this.$menu.classList.add('close')
    this.$menu.classList.remove('open')
    this.$hamburger.classList.remove('open')
    this.$body.classList.remove('scrollHidden')
    this.$header.classList.remove('noshadow')

    setTimeout(() => {
      this.$menu.classList.remove('close')
    }, 500)
  }

  submenu() {
    this.$menu.addEventListener('click', (event) => {
      let childrenContainer = event.target.parentNode.querySelector('ul');
      console.log('childrenContainer', childrenContainer)
      if (!childrenContainer) return; // нет детей
      childrenContainer.classList.toggle('visible')
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