const asideFilterButton = document.querySelector('[data-aside-filter-button=""]')
const asideFilterWrapper = document.querySelector('[data-aside-filter-wrapper=""]')


// Кнопка для отображения панели aside
function clickHandlerAsideFilterButton() {
  asideFilterWrapper.classList.toggle('active')
  if (asideFilterWrapper.style.maxHeight) {
    asideFilterWrapper.style.maxHeight = null;
  } else {
    asideFilterWrapper.style.maxHeight = asideFilterWrapper.scrollHeight + "px";
  }
}

function showAsideFilter() {
  if (asideFilterButton) asideFilterButton.addEventListener('click', clickHandlerAsideFilterButton)
}


showAsideFilter()
