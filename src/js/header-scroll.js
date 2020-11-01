// Sticky scroll header
function HeaderScrollSticky() {
  const header = document.querySelector('[data-header="sticky"]')
  const slider = document.querySelector('[data-slider=""]')

  // при обновлении или загрузке страницы
  if (pageYOffset > 0) {
    header.classList.toggle('sticky')
    slider.classList.toggle('sticky')
  }

  window.addEventListener('scroll', function () {
    if (!header) {
      return
    }

    header.classList.toggle('sticky', window.scrollY > 0)
    slider.classList.toggle('sticky', window.scrollY > 0)

  })
}

HeaderScrollSticky()

