const catalogAsideFilterSelectsWrapper = document.querySelector('[data-catalog-filter-selects-wrapper=""]')
const catalogAsideButtonSort = document.querySelector('[data-catalog-btn-sort=""]')
const catalogFilterBtn = document.querySelector('.catalog__filter-btn')

// Отображение панели сортировки по клику на иконку
function clickHandlerAsideButtonSort() {
  console.log('click')
  // catalogAsideFilterSelectsWrapper.classList.toggle('active')
  // catalogFilterBtn.classList.toggle('active')
  // if (catalogAsideFilterSelectsWrapper.style.maxHeight) {
  //   catalogAsideFilterSelectsWrapper.style.maxHeight = null;
  // } else {
  //   catalogAsideFilterSelectsWrapper.style.maxHeight = catalogAsideFilterSelectsWrapper.scrollHeight + "px";
  // }
}

function showCatalogSort() {
  console.log('catalogAsideButtonSort', catalogAsideButtonSort)
  if (catalogAsideButtonSort) catalogAsideButtonSort.addEventListener('click', clickHandlerAsideButtonSort)
}

showCatalogSort()