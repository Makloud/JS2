Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                    :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
});

Vue.component('cart-item-component', {
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
                </div>`
});
