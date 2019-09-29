'use strict';

const goods = [
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt1.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt2.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt3.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt4.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt5.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt6.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt7.jpg'},
    {title: 'Mango People T-shirt', price: '$52.00', img: 'img/shirt8.jpg'},

];

const renderList = (items) => {
    const renderedGoods = items.map(item => renderItem(item.title, item.price, item.img)).join("");

    document.querySelector('.items').innerHTML = renderedGoods;
};

const renderItem = (title, price, img = 'http://dummyimage.com/180x95/99cccc.gif') => {
    return `<div class="item">
            <a href="single%20page.html">
                <img class="item_img" src=${img} alt="item">
            </a>
            <div class="item_text">
                <a href="single%20page.html" class="item_name">${title}</a>
                <p class="item_price">${price} <img class="item_star" src="img/star.png" alt="star"></p>
            </div>
            <a href="#" class="add_item"><img class="add_item_img" src="img/add_cart.svg" alt="cart"> Add to cart</a>
        </div>`;
};

renderList(goods);