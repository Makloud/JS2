class ItemsList {
  constructor() {
    this.items = [];
    this.filteredItems = [];
    this.loaded = false;
  }

  fetchItems() {
    return fetch('/goods')
      .then(response => response.json())
      .then((items) => {
        this.items = items;
        this.loaded = true;
        this.filteredItems = items;
      })
  }

  filter(query) {
    this.filteredItems = this.items.filter((item) => {
      const regexp = new RegExp(query, 'i');

      return regexp.test(item.title);
    });
  }

  render() {
    if(this.loaded && this.filteredItems.length === 0) {
      return `<div>Ничего не найдено</div>`;
    }

    return this.filteredItems.map((item) => new Item(item.id, item.title, item.price, item.img).render()).join('');
  }
}

class Item {
  constructor(id, title, price, img) {
    this.price = price;
    this.title = title;
    this.id = id;
    this.img = img;
  }

  render() {
    return `<div class="item">
                <a href="single%20page.html">
                    <img class="item_img" src=${this.img} alt="item">
                </a>
                <div class="item_text">
                    <a href="single%20page.html" class="item_name">${this.title}</a>
                    <p class="item_price">$${this.price}<img class="item_star" src="img/star.png" alt="star"></p>
                </div>
                <a  href="#"
                 data-id="${this.id}"
                 data-title="${this.title}"
                 data-price="${this.price}"
                 data-img="${this.img}"
                 class="add_item"><img class="add_item_img" src="img/add_cart.svg" alt="cart"> Add to cart</a>
                <a href="#" class="ref_item"><img class="ref_item_img" src="img/ref.svg" alt="ref"></a>
                <a href="#" class="favor_item"><img class="favor_item_img" src="img/favor.svg" alt="favor"></a>
            </div>`
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.element = null;
  }

  fetchItems() {
    return fetch('/cart')
      .then(response => response.json())
      .then((items) => {
        this.items = items;
      });
  }

  add(item) {
    fetch('/cart', {
      method: 'POST',
      body: JSON.stringify({...item, qty: 1}),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((item) => {
        this.element.insertAdjacentHTML('beforeend', this.renderItem(item));
      });
      this.items.push({...item, qty: 1});
  }

  update(id, newQty) {
    if(newQty < 1) {
      if(confirm('Вы действительно хотите удалить товар из корзины?')) {
        fetch(`/cart/${id}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then((item) => {
            const $item = document.querySelector(`.checkout_drop_menu li[data-id="${id}"]`);
            if($item) {
              $item.remove();
            }
          });
          const idx = this.items.findIndex(entity => entity.id === id);
          this.items.splice(idx, 1);
      } else {
        return false;
      }
    } else {
      fetch(`/cart/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({qty: newQty}),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((item) => {
          console.log('Обновление количества прошло успешно!');
        });

        const idx = this.items.findIndex(entity => entity.id === id);
      console.log(idx);
      this.items[idx].qty = newQty;
    }

    return true;
  }

  renderItem(item) {
    return `<li data-id="${item.id}" class="checkout_drop_list">
                            <div class="cart__item">
                                <div class="cart__picture"><img src=${item.img} alt="checkout"></div>
                                <div class="cart__text">
                                    <div class="cart__text_name">${item.title}</div>
                                    <div class="cart__text_stars"><img src="img/checkoutstars.jpg" alt="stars"></div>
                                    <div class="cart__text_count">
                                    <input class="qty" type="number" value="${item.qty}" />x $${item.price}</div>
                                </div>
                                <div class="cart__delete"><img src="img/delete.png" alt="delete"></div>
                            </div>
                        </li>`
  }

  render() {
    if(!this.element) {
      this.element = document.createElement('ul');
      this.element.innerHTML = this.items.map(this.renderItem).join('');
    }
    return this.element;
  }

  total() {
    return `<div class="total">
                <div class="total__text">total</div>
                <div class="total__count">
                    $ ${this.items.reduce((acc, item) => acc + item.qty * item.price, 0)}
                </div>
            </div>`;
  }
}

const items = new ItemsList();
items.fetchItems().then(() => {
  document.querySelector('.items').innerHTML = items.render();
});

const cart = new Cart();
cart.fetchItems().then(() => {
  document.querySelector('.checkout_drop_menu').appendChild(cart.render());
  document.querySelector('.total').innerHTML = cart.total();
});

document.querySelector('.checkout_drop_menu').addEventListener('change', (event) => {
  if(event.target.classList.contains('qty')) {
    console.log(event.target.classList);
    const $parent = event.target.parentElement;
    console.log($parent);
    if(!cart.update($parent.dataset.id, +event.target.value)) {
      event.target.value = 1;
    }
    document.querySelector('.total').innerHTML = cart.total();
  }
});

document.querySelector('.items').addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  if(event.target.classList.contains('.add_item')) {
    console.log(event.target.classList);
    const id = event.target.dataset.id;
    console.log(id);
    const $item = document.querySelector(`.checkout_drop_menu li[data-id="${id}"]`);
    console.log($item);
    if($item) {
      const $currentQty = $item.querySelector('.qty');
      $currentQty.value = +$currentQty.value + 1;
      cart.update(id, +$currentQty.value);
    } else {
      cart.add(event.target.dataset);
    }
    document.querySelector('.total').innerHTML = cart.total();
  }
});

document.querySelector('[name="query"]').addEventListener('input', (event) => {
  const query = event.target.value;
  items.filter(query);
  document.querySelector('.items').innerHTML = items.render();
});