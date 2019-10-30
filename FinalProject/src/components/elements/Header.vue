<template>
    <header>
        <div class="container head_cont">
            <div class="header_left">
                <a href="index2.html" class="logo"><img class="logo_img" src="img/logo.png" alt="logo">BRAN<span
                        class="red_symbol">D</span></a>
                <div class="form">
                    <div class="form_browse">Browse <span class="sb_triang"><i class="fas fa-caret-down"></i></span>
                    </div>
                    <input class="form_search" type="text" v-model="query" name="query" placeholder="Search for item...">
                    <button class="form_button" @click="handleSearchClick"><img src="img/search.png" alt="search"></button>
                </div>
            </div>
            <div class="header_right">
                <a class="checkout" href=# @click="showCart = !showCart"><img class="cart" src="img/cart.svg" alt="cart"></a>
                <div class="checkout_drop" v-show="showCart">
                    <div class="checkout_drop_column" v-if="cart.length !==0">
                        <div class="checkout_drop_menu">
                            <ul>
                                <li v-for="item in cart" class="checkout_drop_list">
                                    <div class="cart__item">
                                        <div class="cart__picture"><img :src="item.img" alt="checkout"></div>
                                        <div class="cart__text">
                                            <div class="cart__text_name">{{item.title}}</div>
                                            <div class="cart__text_stars"><img src="img/checkoutstars.jpg" alt="stars"></div>
                                            <div class="cart__text_count">
                                                <input class="qty" type="number" v-model="item.qty" />x ${{item.price}}</div>
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
                    </div>
                    <p v-if="cart.length ===0">Корзина пуста</p>
                </div>
                <a class="account" href="#">My Account</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        name: 'Header',
    }
</script>

<style lang="scss">

</style>