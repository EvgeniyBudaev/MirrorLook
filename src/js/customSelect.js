export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    this.inputHidden = document.querySelector('[data-input="hidden"]')
    this.inputHiddenValue = null

    this.span = document.querySelector('[data-type="value"]')

    this.render()
    this.setup()
  }

  render() {
     //console.log('this.options', this.options);
    if (this.$el) {
      this.$el.classList.add('select')
    }
  }

  setup() {
    //console.log('this', this);
    //console.log('this.current', this.current);
    this.inputHiddenValue = this.current.value
    this.inputHidden.value = this.inputHiddenValue

    this.span.innerHTML = this.current.value

    this.clickHandler = this.clickHandler.bind(this)
    if (this.$el) {
      this.$el.addEventListener('click', this.clickHandler)
      this.$value = this.$el.querySelector('[data-type="value"]')
    }
  }

  clickHandler(event) {
    const {type} = event.target.dataset
    if (type === 'input' || type === 'value' || type === 'arrow') {
      this.toggle()
    } else if (type === 'item') {
      //console.log('event.target', event.target)
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value
    this.close()

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected')
    })
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    // console.log('this.current', this.current);
    this.inputHidden.value = this.current.value

    this.options.onSelect ? this.options.onSelect(this.current) : null

    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')

    // const selectDropDown = document.querySelector('.select__dropdown')
    // console.log('selectDropDown', selectDropDown);
    // selectDropDown.style.overflowY = 'auto'
  }

  close() {
    this.$el.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }
}


// Страница Каталога с товарами. Работа с селектами
const select = document.querySelector('[data-type="select"]')
if (select) {
  const items = select.querySelectorAll('[data-type="item"]')
  const array = [...items]
  let obj = array.map( (item, index) => {
    item.dataset.id = index + 1
    return {
      id: item.dataset.id,
      value: item.textContent
    }
  })
 // console.log('obj', obj)

  new Select('#select', {
    selectedId: '1',
    data: obj,
    onSelect(item) {
      console.log('[customSelect.js] Catalog Select 1', item)
    }
  })

  new Select('#catalog-select2', {
    selectedId: '1',
    data: obj,
    onSelect(item) {
      console.log('[customSelect.js] Catalog Select 2', item)
    }
  })

}

// (function () {
//   if (typeof window.CustomEvent === 'function') return false;
//
//   function CustomEvent(event, params) {
//     params = params || { bubbles: false, cancelable: false, detail: null };
//     var evt = document.createEvent('CustomEvent');
//     evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
//     return evt;
//   }
//   window.CustomEvent = CustomEvent;
// })();
//
// const templateSelect = (data = [], defaultText = 'Выберите из списка') => {
//   let items = [];
//   data.forEach(item => {
//     let classItemSelected = '';
//     if (item === defaultText) {
//       classItemSelected = ' select__item_selected';
//     }
//     items.push(`<li class="select__item${classItemSelected}" data-select="item">${item}</li>`);
//   });
//   return `
//   <div class="select__backdrop" data-select="backdrop"></div>
//   <button type="button" class="select__trigger" data-select="trigger">
//     ${defaultText}
//   </button>
//   <div class="select__dropdown">
//     <ul class="select__items">
//       ${items.join('')}
//     </ul>
//   </div>`;
// };
//
// class CustomSelect {
//   constructor(selector, config) {
//     this._$main = document.querySelector(selector);
//     this._config = config || {};
//     if (this._config.data) {
//       this._render();
//     }
//     this._$trigger = this._$main.querySelector('[data-select="trigger"]');
//     this._addEventListener();
//   }
//   _isShow() {
//     return this._$main.classList.contains('select_show');
//   }
//   _changeItem(item) {
//     if (!item.classList.contains('select__item_selected')) {
//       const itemSelected = this._$main.querySelector('.select__item_selected');
//       if (itemSelected) {
//         itemSelected.classList.remove('select__item_selected');
//       }
//       item.classList.add('select__item_selected');
//       this._$trigger.textContent = item.textContent;
//       this._$main.dispatchEvent(this._changeValue);
//       this._config.onSelected ? this._config.onSelected(item) : null;
//     }
//   }
//   _eventHandler(e) {
//     let $target = e.target;
//     let type = $target.dataset.select;
//     if (!type) {
//       $target = $target.closest('[data-select]');
//       type = $target.dataset.select;
//     }
//     if (type === 'trigger') {
//       this.toggle();
//     } else if (type === 'item') {
//       this._changeItem($target);
//       this.hide();
//     } else if (type === 'backdrop') {
//       // закрываем селект, если кликнули вне его
//       this.hide();
//     }
//   }
//   _addEventListener() {
//     // привяжем функцию _eventHandler к контексту this
//     this._eventHandler = this._eventHandler.bind(this);
//     // добавим слушатель
//     this._$main.addEventListener('click', this._eventHandler);
//     this._changeValue = new CustomEvent('select.change');
//   }
//   _render() {
//     // добавляем класс select, если его нет у базового элемента
//     if (!this._$main.classList.contains('select')) {
//       this._$main.classList.add('select');
//     }
//     this._$main.innerHTML = templateSelect(this._config['data'], this._config['defaultValue']);
//   }
//   show() {
//     this._$main.classList.add('select_show');
//   }
//   hide() {
//     this._$main.classList.remove('select_show');
//   }
//   toggle() {
//     this._isShow() ? this.hide() : this.show();
//   }
//   // удаляем слушатели и данный селект из DOM
//   destroy() {
//     this._$main.removeEventListener('click', this._eventHandler);
//     this._$main.innerHTML = '';
//   }
//   selectedItem(value) {
//     if (typeof value === 'object') {
//       if (value['value']) {
//         this._$main.querySelectorAll('[data-select="item"]').forEach($item => {
//           if ($item.textContent.trim() === value['value'].toString()) {
//             this._changeItem($item);
//             return;
//           }
//         });
//       } else if (value['index'] >= 0) {
//         const $item = this._$main.querySelectorAll('[data-select="item"]')[value['index']];
//         this._changeItem($item);
//       }
//       return this.selectedItem();
//     }
//     let indexSelected = -1;
//     let valueSelected = '';
//     this._$main.querySelectorAll('[data-select="item"]').forEach(($element, index) => {
//       if ($element.classList.contains('select__item_selected')) {
//         indexSelected = index;
//         valueSelected = $element.textContent;
//       }
//     });
//     return { index: indexSelected, value: valueSelected };
//   }
// }
//
// const select1 = new CustomSelect('#select-1');