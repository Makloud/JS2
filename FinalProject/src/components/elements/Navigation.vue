<template>
    <div class="container">
        <ul class="menu">
            <li class="menu_list"><a href="index2.html" class="menu_link">Home</a></li>
            <li class="menu_list"><a href="#" class="menu_link">Man</a>
                <div class="drop">
                    <div class="drop_column">
                        <h3 class="drop_h3">Men</h3>
                        <ul class="drop_menu">
                            <li><a href="product.html" class="drop_list">New Arrivals </a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu_list"><a href="#" class="menu_link">Women</a>
                <div class="drop">
                    <div class="drop_column">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_menu">
                            <li><a href="#" class="drop_list">Dresses</a></li>
                            <li><a href="#" class="drop_list">Tops</a></li>
                            <li><a href="#" class="drop_list">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_list">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_list">Blazers</a></li>
                            <li><a href="#" class="drop_list">Denim</a></li>
                            <li><a href="#" class="drop_list">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_list">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_list">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop_column">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_menu">
                            <li><a href="#" class="drop_list">Dresses</a></li>
                            <li><a href="#" class="drop_list">Tops</a></li>
                            <li><a href="#" class="drop_list">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_menu">
                            <li><a href="#" class="drop_list">Dresses</a></li>
                            <li><a href="#" class="drop_list">Tops</a></li>
                            <li><a href="#" class="drop_list">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                    <div class="drop_column">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_menu">
                            <li><a href="#" class="drop_list">Dresses</a></li>
                            <li><a href="#" class="drop_list">Tops</a></li>
                            <li><a href="#" class="drop_list">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_list">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_list">Jackets/Coats</a></li>
                        </ul>
                        <img class="menu_img" src="img/super_sale.jpg" alt="super_sale">

                    </div>
                </div>
            </li>
            <li class="menu_list"><a href="#" class="menu_link">Kids</a></li>
            <li class="menu_list"><a href="#" class="menu_link">Accoseriese</a></li>
            <li class="menu_list"><a href="#" class="menu_link">Featured</a></li>
            <li class="menu_list"><a href="#" class="menu_link">Hot Deals </a></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "Navigation",
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; }

    body {
        font-family: "Lato", sans-serif; }

    .container {
        width: 1140px;
        margin: 0 auto; }

    .menu {
        list-style: none;
        display: flex;
        justify-content: center; }
    .menu_link {
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        color: #222222;
        font-size: 14px;
        font-weight: 700;
        line-height: 26px;
        padding: 20px;
        border: 3px solid transparent; }
    .menu_link:hover {
        border-bottom: 3px solid #f16d7f;
        color: #f16d7f; }


    .drop {
        display: none;
        border-radius: 5px;
        background-color: #ffffff;
        border: 1px solid #ececec;
        padding: 10px 20px;
        position: absolute;
        top: 48px; }
    .drop:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        position: absolute;
        top: -6px;
        left: 31px;
        transform: rotate(45deg);
        border-top: 1px solid #e8e8e8;
        border-left: 1px solid #e8e8e8; }
    .drop_h3 {
        color: #232323;
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        text-transform: uppercase;
        letter-spacing: 0.35px;
        border-bottom: 1px solid #e8e8e8;
        padding: 8px 0; }
    .drop_list {
        color: #646464;
        font-size: 14px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.35px;
        text-decoration: none; }
    .drop_list:hover {
        color: #f16d7f; }
    .drop_menu {
        list-style-type: none; }
    .drop_column {
        width: 235px;
        margin-right: 46px; }

    .drop_column:last-of-type {
        margin-right: 20px; }

    .menu_list {
        position: relative; }

    .menu_list:hover .drop {
        display: flex; }

    .menu_img {
        padding-top: 8px;
        padding-bottom: 10px; }
</style>

