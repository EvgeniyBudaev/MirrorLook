

// class CatalogBtn {
//   constructor() {
//     this.$catalogFilter = document.querySelector('[data-catalogfilter=""]')
//
//     this.setup()
//   }
//
//   setup() {
//     this.clickHandler = this.clickHandler.bind(this)
//     if (this.$catalogFilter) this.$catalogFilter.addEventListener('click', this.clickHandler)
//   }
//
//   clickHandler(event) {
//     const {catalogbtn} = event.target.dataset
//     console.log('type', catalogbtn)
//   }
//
// }
//
// new CatalogBtn()

const catalogBtnLine = document.querySelector('[data-catalogBtn="line"]')
const catalogBtnGrid = document.querySelector('[data-catalogBtn="grid"]')
const catalogCard = document.querySelectorAll('[data-catalogCard=""]')

function clickHandlerCatalogBtnLine() {
  catalogBtnLine.classList.add('active')
  catalogBtnGrid.classList.remove('active')
  catalogCard.forEach(card => card.classList.add('active'))
}

function clickHandlerCatalogBtnGrid() {
  catalogBtnGrid.classList.add('active')
  catalogBtnLine.classList.remove('active')
  catalogCard.forEach(card => card.classList.remove('active'))
}

function catalogBtn() {
  catalogBtnLine.addEventListener('click', clickHandlerCatalogBtnLine)
  catalogBtnGrid.addEventListener('click', clickHandlerCatalogBtnGrid)
}

catalogBtn()