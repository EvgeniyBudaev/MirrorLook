let mask = document.querySelector('[data-mask=""]')

// Функция-конструктор
const Preloader = function (mask) {
  this.mask = mask
  this.init()
}

// запишем конструктор в свойство 'window.Preloader', чтобы обеспечить
// доступ к нему снаружи анонимной функции
window.Preloader = Preloader
// для сокращения записи, создадим переменную, которая будет ссылаться
// на прототип 'Preloader'
const fn = Preloader.prototype

// Инициализация
fn.init = function () {
  window.addEventListener('load', () => {
    mask.classList.add('hide')
    setTimeout(() => {
      mask.remove()
    }, 1)
  })
}

// Создаем прелоадер
if (mask) {
  new Preloader(mask)
}
