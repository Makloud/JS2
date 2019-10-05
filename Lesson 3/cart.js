function sendCartRequest(url) {
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

class CartItemsList {
    constructor() {
        this.cartItems = [];
    }

    fetchItems() {
        return sendCartRequest('/cart')
            .then((cartItems) => {
                this.cartItems = cartItems;
            });
    }

    total() {
        return this.cartItems.reduce((acc, item) => acc + item.price, 0);
    }

    render() {
        return this.cartItems.map((item) => new cartItem(item.id, item.title, item.price, item.img, item.count).render()).join('');
    }
}

class cartItem {
    constructor(id, title, price, img, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.count = count;
    }

    render() {
        return `<li class="checkout_drop_list">
                            <div class="cart__item">
                                <div class="cart__picture"><img src=${this.img} alt="checkout"></div>
                                <div class="cart__text">
                                    <div class="cart__text_name">${this.title}</div>
                                    <div class="cart__text_stars"><img src="img/checkoutstars.jpg" alt="stars"></div>
                                    <div class="cart__text_count">${this.count} x $${this.price}</div>
                                </div>
                                <div class="cart__delete"><img src="img/delete.png" alt="delete"></div>
                            </div>
                        </li>`
    }
}

const cartItems = new CartItemsList();
cartItems.fetchItems().then(() => {
    document.querySelector('.checkout_drop_menu').innerHTML = cartItems.render();
});