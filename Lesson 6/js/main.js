const ItemComponent = {
    props: ['id', 'title', 'price', 'img'],
    template: `<div class="item">
                <a href="single%20page.html">
                    <img class="item_img" :src="img" alt="item">
                </a>
                <div class="item_text">
                    <a href="single%20page.html" class="item_name">{{title}}</a>
                    <p class="item_price">\${{price}}<img class="item_star" src="img/star.png" alt="star"></p>
                </div>
                <a  href="#"
                    class="add_item" @click="handleBuyClick(item)"><img class="add_item_img" src="img/add_cart.svg" alt="cart"> Add to cart</a>
                <a href="#" class="ref_item"><img class="ref_item_img" src="img/ref.svg" alt="ref"></a>
                <a href="#" class="favor_item"><img class="favor_item_img" src="img/favor.svg" alt="favor"></a>
            </div>`,
    methods: {
        handleBuyClick(id) {
            this.$emit('buy', id);
        }
    }
};

const ItemsListComponent = {
    props: ['items'],
    template: `<div class="items prod_cont">
          <item-component
          v-if="items.length"
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :price="item.price"
          :img="item.img"
          @buy="handleBuyClick(item)"
        ></item-component>
        <div v-if="!items.length">
        Список товаров пуст
      </div>
      </div>`,
    methods: {
        handleBuyClick(item) {
            this.$emit('buy', item);
        }
    },
    components: {
        'item-component': ItemComponent,
    },
};

const CartItemComponent = {
    props: ['id', 'title', 'price', 'img', 'qty'],
    template: `<div v-if="cart.length !==0">
                    <div class="checkout_drop_menu">
                        <ul>
                            <li class="checkout_drop_list">
                            <div class="cart__item">
                                <div class="cart__picture"><img :src="img" alt="checkout"></div>
                                <div class="cart__text">
                                    <div class="cart__text_name">{{title}}</div>
                                    <div class="cart__text_stars"><img src="img/checkoutstars.jpg" alt="stars"></div>
                                    <div class="cart__text_count">
                                        <input class="qty" type="number" v-model="qty" />x \${{price}}</div>
                                </div>
                                <div class="cart__delete" @click="handleDeleteClick(item.id)"><img src="img/delete.png" alt="delete"></div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <ul>
                    <li class="checkout_drop_list">
                        <div class="total">
                            <div class="total__text">total</div>
                            <div class="total__count">
                                $ {{total}}
                            </div>
                        </div>
                    </li>
                    <li class="checkout_buttons">
                        <ul class="checkout_button">
                            <li class="checkout_drop_list"><a class="account_checkout"
                                                              href="checkout.html">Checkout</a></li>
                        </ul>
                        <ul class="checkout_button">
                            <li class="checkout_drop_list"><a class="account_checkout" href="shoppingcart.html">Go
                                to cart</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>`,
};

const CartItemsListComponent = {
    props: ['cartitems'],
    template: `<div>
                    <a class="checkout" href=# @click="showCart = !showCart"><img class="cart" src="img/cart.svg" alt="cart"></a>
            <div class="checkout_drop" v-show="showCart">
                <p v-if="cart.length ===0">Корзина пуста</p>
                <cart-item-component class="checkout_drop_column"
                v-for="item in cartitems">
                </cart-item-component>
            </div>
                </div>`,
    methods: {
        handleBuyClick(item) {
            const cartItem = this.cart.find((cartItem) => +cartItem.id === +item.id);
            if (cartItem) {
                fetch(`/cart/${item.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({qty: cartItem.qty + 1}),
                    headers: {
                        'Content-type': 'application/json',
                    }
                }).then(() => {
                    cartItem.qty++;
                });
            } else {
                fetch('/cart', {
                    method: 'POST',
                    body: JSON.stringify({...item, qty: 1}),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }).then(() => {
                    this.cart.push({...item, qty: 1});
                });
            }
        },
        handleDeleteClick(id) {
            const cartItem = this.cart.find((cartItem) => +cartItem.id === +id);

            if (cartItem && cartItem.qty > 1) {
                fetch(`/cart/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({qty: cartItem.qty - 1}),
                    headers: {
                        'Content-type': 'application/json',
                    }
                }).then(() => {
                    cartItem.qty--;
                });
            } else {

                if (confirm('Вы действительно хотите удалить последний товар?')) {
                    fetch(`/cart/${id}`, {
                        method: 'DELETE',
                    }).then(() => {
                        this.cart = this.cart.filter((item) => item.id !== id);
                    });
                }
            }
        },
    },
    components: {
        'cart-item-component': CartItemComponent,
    },
};


const app = new Vue({
    el: '#root',
    data: {
        items: [],
        filteredItems: [],
        cart: [],
        query: '',
        showCart: false,
    },
    methods: {
        handleSearchClick() {
            this.filteredItems = this.items.filter((item) => {
                const regexp = new RegExp(this.query, 'i');
                return regexp.test(item.title);
            });
        },
        filter(query) {
            this.filteredItems = this.items.filter((item) => {
                const regexp = new RegExp(query, 'i');

                return regexp.test(item.title);
            });
        }
    },
    mounted() {
        fetch('/goods')
            .then(response => response.json())
            .then((goods) => {
                this.items = goods;
                this.filteredItems = goods;
            });

        fetch('/cart')
            .then(response => response.json())
            .then((cart) => {
                this.cart = cart;
            });
    },
    computed: {
        total() {
            return this.cart.reduce((acc, item) => acc + item.qty * item.price, 0);
        }
    },
    components: {
        'items-list-component': ItemsListComponent,
        'cart-item-list-component':CartItemsListComponent,
    },
});