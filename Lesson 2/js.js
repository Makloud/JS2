'use strict';

class ItemsList {
    constructor() {
        this.items = [];
        const sum = this.items.reduce((a, {price = 0}) => a += price, 0)
    }

    fetchItems() {
        this.items = [
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt1.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt2.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt3.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt4.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt5.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt6.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt7.jpg'},
            {title: 'Mango People T-shirt', price: '52.00', img: 'img/shirt8.jpg'},
        ];
    }

    render() {
        return this.items.map((item) => new Item(item.title, item.price, item.img).render()).join('');
    }
    productListPriceCount() {
        let productsPrice = 0;
        for (let i = 0; i < this.goods.length; i++) {
            productsPrice += this.goods.price;
        }
        return productsPrice;
    }
}

class Item {
    constructor(title, price, img) {
        this.price = price;
        this.title = title;
        this.img = img;
    }

    render() {
        return `<div class="item">
            <a href="single%20page.html">
                <img class="item_img" src=${this.img} alt="item">
            </a>
            <div class="item_text">
                <a href="single%20page.html" class="item_name">${this.title}</a>
                <p class="item_price">$${this.price} <img class="item_star" src="img/star.png" alt="star"></p>
            </div>
            <a href="#" class="add_item"><img class="add_item_img" src="img/add_cart.svg" alt="cart"> Add to cart</a>
        </div>`;
    }
}

class Card {
    constructor(item){

    }
    render() {

    }
}

class CartItem {
    CartItemPrice() {

    }

    CartItemCount() {

    }
}

const items = new ItemsList();
items.fetchItems();

document.querySelector('.items').innerHTML = items.render();
