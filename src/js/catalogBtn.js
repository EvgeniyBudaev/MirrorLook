const catalogBtnLine = document.querySelector('[data-catalogBtn="line"]')
const catalogBtnGrid = document.querySelector('[data-catalogBtn="grid"]')
const catalogCard = document.querySelectorAll('[data-catalogCard=""]')

function clickHandlerCatalogBtnLine() {
  catalogBtnLine.classList.add('active')
  catalogBtnGrid.classList.remove('active')
  if (catalogCard) catalogCard.forEach(card => card.classList.add('active'))
}

function clickHandlerCatalogBtnGrid() {
  catalogBtnGrid.classList.add('active')
  catalogBtnLine.classList.remove('active')
  if (catalogCard) catalogCard.forEach(card => card.classList.remove('active'))
}

function catalogBtn() {
  if (catalogBtnLine) catalogBtnLine.addEventListener('click', clickHandlerCatalogBtnLine)
  if (catalogBtnGrid) catalogBtnGrid.addEventListener('click', clickHandlerCatalogBtnGrid)
}

catalogBtn()