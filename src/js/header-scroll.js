// Sticky scroll header
function HeaderScrollSticky() {
  const header = document.querySelector('[data-header="sticky"]')
  const slider = document.querySelector('[data-slider=""]')
  const empty = document.querySelector('[data-empty=""]')

  // при обновлении или загрузке страницы
  if (pageYOffset > 0) {
    if (header) header.classList.toggle('sticky')
    if (slider) slider.classList.toggle('sticky')
    if (empty) empty.classList.toggle('sticky')
  }

  window.addEventListener('scroll', function () {
    if (!header) {
      return
    }

    if (header) header.classList.toggle('sticky', window.scrollY > 0)
    if (slider) slider.classList.toggle('sticky', window.scrollY > 0)
    if (empty) empty.classList.toggle('sticky', window.scrollY > 0)

  })
}

HeaderScrollSticky()

