function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status !== 200) {
                    reject();
                }
                const users = JSON.parse(xhr.responseText);

                resolve(users);
            }
        };
        xhr.send();
    });
}

class ItemsList {
    constructor() {
        this.items = [];
    }

    fetchItems() {
        return sendRequest('/goods')
            .then((items) => {
                this.items = items;
            });
    }

    total() {
         return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    render() {
        return this.items.map((item) => new Item(item.id, item.title, item.price, item.img).render()).join('');
    }
}

class Item {
    constructor(id, title, price, img) {
        this.id = id;
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
        </div>`
    }
}

const items = new ItemsList();
items.fetchItems().then(() => {
    document.querySelector('.items').innerHTML = items.render();
});