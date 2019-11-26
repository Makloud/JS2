<template>
    <div>
        <div class="sidebar container">
            <ul class="sidebar_menu">
                <li class="sidebar_menu_list"><a href="#" class="sidebar_menu_link"><span class="sb_head"><span class="sb_txt">Category</span>
            <span class="sb_triang"><i class="fas fa-caret-down"></i></span></span></a>
                    <div class="sidebar_drop">
                        <div class="drop_colomn">
                            <ul class="drop_menu">
                                <li><a href="#" class="drop_list">New Arrivals </a></li>
                                <li><a href="#" class="drop_list">Accessories</a></li>
                                <li><a href="#" class="drop_list">Bags</a></li>
                                <li><a href="#" class="drop_list">Denim</a></li>
                                <li><a href="#" class="drop_list">Hoodies & Sweatshirts</a></li>
                                <li><a href="#" class="drop_list">Jackets & Coats</a></li>
                                <li><a href="#" class="drop_list">Pants</a></li>
                                <li><a href="#" class="drop_list">Polos</a></li>
                                <li><a href="#" class="drop_list">Shirts</a></li>
                                <li><a href="#" class="drop_list">Shoes</a></li>
                                <li><a href="#" class="drop_list">Shorts</a></li>
                                <li><a href="#" class="drop_list">Sweaters & Knits</a></li>
                                <li><a href="#" class="drop_list">T-Shirts</a></li>
                                <li><a href="#" class="drop_list">Tanks</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="sidebar_menu_list"><a href="#" class="sidebar_menu_link"><span class="sb_head"><span class="sb_txt">BRAND</span> <span
                        class="sb_tiang"><i class="fas fa-caret-down"></i></span></span></a></li>
                <li class="sidebar_menu_list"><a href="#" class="sidebar_menu_link"><span class="sb_head"><span class="sb_txt">dESIGNER</span> <span
                        class="sb_tiang"><i class="fas fa-caret-down"></i></span></span></a>
                    <div class="sidebar_drop">
                        <div class="drop_colomn">
                            <ul class="drop_menu">
                                <li><a href="#" class="drop_list">New Arrivals </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="top_filter">
                <div class="filter_chek">
                    <div class="trending">
                        <div class="filter_chek_text">Trending now</div>
                        <div class="filter_chek_names">
                            <ul class="trends">
                                <li><a href="#" class="trend">Bohemian</a></li>
                                <li><a href="#" class="trend">Floral</a></li>
                                <li><a href="#" class="trend">Lace</a></li>
                            </ul>
                            <ul class="trends">
                                <li><a href="#" class="trend">Floral</a></li>
                                <li><a href="#" class="trend">Lace</a></li>
                                <li><a href="#" class="trend">Bohemian</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="size">
                        <div class="filter_chek_text">Size</div>
                        <div class="filter_chek_names">
                            <form class="form_select" action="#">
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="xxs"/>
                                    <label for="xxs">xxs</label>
                                </div>
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="xs"/>
                                    <label for="xs">xs</label>
                                </div>
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="s"/>
                                    <label for="s">s</label>
                                </div>
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="m"/>
                                    <label for="m">m</label>
                                </div>
                            </form>
                            <form class="form_select" action="#">
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="l"/>
                                    <label for="l">L</label>
                                </div>
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="xl"/>
                                    <label for="xl">xL</label>
                                </div>
                                <div class="form_select_checkbox">
                                    <input type="checkbox" id="xxl"/>
                                    <label for="xxl">xxL</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="price">
                        <div class="filter_chek_text">price</div>
                        <div class="filter_chek_names">
                            Ползунок через JS?
                        </div>
                    </div>
                </div>
                <div class="sort">
                    <div class="sort_by">
                        <p>Sort By</p>
                    </div>
                    <div class="name_select">
                        <select name="trend" id="trend">
                            <option selected value="Name" disabled>Name</option>
                            <option value="Bohemian">Bohemian</option>
                            <option value="Floral">Floral</option>
                            <option value="Lace">Lace</option>
                        </select>
                    </div>
                    <div class="show">Show</div>
                    <div class="show_count">
                        <select name="count" id="cout">
                            <option selected value="Count" disabled>Count</option>
                            <option value="03">03</option>
                            <option value="06">06</option>
                            <option value="09">09</option>
                        </select>
                    </div>
                </div>
                <items-list-component :items="filteredItems" @buy="handleBuyClick"></items-list-component>
            </div>
        </div>
        <div class="pagination container">
            <div class="pagination_pages">
                Эти ссылки через JS?
            </div>
            <div class="pagination_view_all"><a class="view_all" href="#">View All</a></div>
        </div>
        <div class="bonuses">
            <div class="container all_bonuses">
                <div class="bonuses_small">
                    <div class="svg"><img class="hot_svg" src="img/Delivery.svg" alt="delivery"></div>
                    <div class="bonuses_text">
                        <div class="bonuses_text_big">Free Delivery</div>
                        <div class="bonuses_text_small">Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </div>
                    </div>
                </div>
                <div class="bonuses_small">
                    <div class="svg"><img class="hot_svg" src="img/Sales.svg" alt="delivery"></div>
                    <div class="bonuses_text">
                        <div class="bonuses_text_big">Sales & discounts</div>
                        <div class="bonuses_text_small">Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </div>
                    </div>
                </div>
                <div class="bonuses_small">
                    <div class="svg"><img class="hot_svg" src="img/quality.svg" alt="delivery"></div>
                    <div class="bonuses_text">
                        <div class="bonuses_text_big">Quality assurance</div>
                        <div class="bonuses_text_small">Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Catalog',
        components:{
            "items-list-component": ItemsListComponent,
        }
    }
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

    .header {
        height: 100px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
        border: 1px solid #ececec;
        background-color: #ffffff; }
    .header_left {
        display: flex;
        align-items: center; }
    .header_right {
        display: flex;
        align-items: center; }

    .head_cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%; }

    .form {
        height: 38px;
        display: flex;
        text-align: center; }
    .form_browse {
        margin-left: 37px;
        width: 87px;
        height: 100%;
        border-radius: 3px 0 0 3px;
        border: 1px solid #e6e6e6;
        background-color: #cdcdcc;
        background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%);
        line-height: 35px; }
    .form_search {
        width: 280px;
        height: 100%;
        border: 1px solid #e6e6e6; }
    .form_button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 100%;
        border: 1px solid #e6e6e6; }

    .form input {
        padding: 0 16px; }

    .red_symbol {
        color: #f16d7f; }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #222222;
        font-size: 27px;
        font-weight: 300;
        line-height: 32px; }
    .logo_img {
        margin-right: 13px;
        transition: transform 1s; }
    .logo_img:hover {
        transform: rotate(360deg); }

    .cart {
        margin-right: 26px;
        transition: 3s; }
    .cart:hover {
        box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.16);
        transform: rotate(-360deg); }
    .cart__item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        margin-bottom: 16px; }
    .cart__delete {
        display: flex;
        justify-content: center;
        align-items: center; }

    .account {
        display: block;
        width: 130px;
        height: 38px;
        background: #f16d7f;
        color: #ffffff;
        text-align: center;
        line-height: 35px;
        text-decoration: none; }
    .account_checkout {
        display: table-cell;
        width: 225px;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        line-height: 35px;
        text-decoration: none;
        background: #ffffff;
        color: #4a4a4a;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid #eaeaea;
        margin-bottom: 11px; }
    .account_checkout:hover {
        color: #f16d7f;
        border: 1px solid #f16d7f; }

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

    .promo {
        height: 614px;
        background-color: #e8e8e8; }
    .promo_text {
        text-transform: uppercase;
        color: #222222;
        border-left: 12px solid #f16d7f;
        padding-left: 12px;
        line-height: 43px;
        margin-top: 224px;
        float: left; }
    .promo_text_big {
        font-size: 60px;
        font-weight: 700; }
    .promo_text_small {
        font-size: 40px;
        font-weight: 400; }
    .promo_cont {
        height: 100%;
        background-image: url(img/promo.jpg);
        background-position: 0 -51px; }

    .offer {
        display: flex;
        justify-content: space-between;
        padding-top: 80px; }

    .offer_cont_big {
        height: 542px;
        width: 560px;
        margin-top: 20px; }

    .offer_cont_small {
        height: 261px;
        width: 560px;
        margin-top: 20px; }

    .offer_cont_men {
        background-image: url(img/for_men.jpg); }

    .offer_cont_acces {
        background-image: url(img/accesories.jpg); }

    .offer_cont_weman {
        background-image: url(img/weman.jpg); }

    .offer_cont_kids {
        background-image: url(img/kids.jpg); }

    .offer_text {
        background-color: #ffffff;
        padding: 16px 20px;
        float: left;
        margin-top: 26px;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: #222222; }

    .top_big {
        color: #222222;
        font-size: 30px;
        font-weight: 700;
        line-height: 54px;
        display: flex;
        justify-content: center; }

    .fetured_items {
        margin-top: 100px; }

    .top_small {
        color: #9f9f9f;
        font-size: 14px;
        font-weight: 400;
        line-height: 54px;
        display: flex;
        justify-content: center; }

    .item {
        margin-bottom: 39px;
        width: 263px;
        position: relative;
        transition: transform 0.3s; }

    .item:hover {
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
        transform: scale(1.01); }

    .item:hover .add_item {
        display: block; }

    .item:hover .item_star {
        display: block; }

    .item:hover .item_img {
        filter: brightness(50%); }

    .items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; }

    .browse_all {
        display: block;
        width: 212px;
        height: 48px;
        background: #f16d7f;
        color: #ffffff;
        text-align: center;
        line-height: 50px;
        text-decoration: none; }

    .browse_button {
        display: flex;
        justify-content: center;
        margin-bottom: 113px; }

    .arrow_right {
        margin-left: 9px; }

    .item_name {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        margin-bottom: 15px; }

    .item_img {
        width: 100%; }

    .item_text {
        padding: 20px 14px; }

    .item_price {
        color: #f16d7f;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        margin-top: 16px; }

    .item_star {
        display: none; }

    .footer_bottom {
        margin-top: 89px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        background-color: #e6e6e6; }

    .footer_slaider {
        height: 438px;
        background-image: url(img/subscribe.jpg); }

    .add_item {
        color: #ffffff;
        font-size: 13px;
        font-weight: 700;
        width: 123px;
        height: 39px;
        border-radius: 3px;
        border: 1px solid #ffffff;
        text-align: center;
        line-height: 39px;
        display: none;
        position: absolute;
        top: 98px;
        left: 70px;
        text-decoration: none; }

    .add_item:hover {
        box-shadow: 0 0 10px #fff; }

    .add_item_img {
        padding-top: 8px;
        padding-left: 12px;
        float: left; }

    .hot_big {
        float: left;
        height: 100%;
        width: 767px;
        background-image: url(img/Feature.jpg);
        background-repeat: no-repeat; }

    .hot {
        display: flex;
        background-color: #222224;
        height: 529px; }

    .hot_big_text {
        color: #ffffff;
        font-size: 54px;
        font-weight: 700;
        text-transform: uppercase; }

    .hot_small_text {
        font-size: 32px;
        letter-spacing: 0.9px;
        color: #ffffff; }

    .hot_text {
        padding-top: 146px;
        padding-left: 39px; }

    .bonus_text {
        color: #fbfbfb;
        margin-left: 78px;
        margin-right: 43px;
        margin-top: -35px; }

    .bonus_text_big {
        font-size: 20px;
        font-weight: 700; }

    .bonus_text_small {
        padding-top: 17px;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px; }

    .hot_bonuses {
        width: 373px; }

    .hot_bonus {
        padding-top: 48px;
        padding-left: 36px; }

    .slaider_subscribe__flex {
        display: flex;
        justify-content: space-between;
        align-items: center; }

    .slaider_subscribe {
        display: flex;
        height: 438px;
        background: url(img/subscribe.jpg);
        background-size: cover;
        justify-content: space-between;
        align-items: center;
        margin: 97px auto auto; }

    .subscribe_button {
        display: block;
        width: 104px;
        height: 46px;
        border-radius: 0 23px 23px 0;
        background-color: #f16d7f;
        color: #ffffff;
        text-align: center;
        line-height: 45px;
        text-decoration: none; }

    .email {
        display: block;
        width: 282px;
        height: 46px;
        border-radius: 23px 0 0 23px;
        background-color: #e1e1e1;
        border: 0; }

    .subscribe_form {
        display: flex;
        padding-top: 35px; }

    .subscribe_form input {
        padding: 0 28px; }

    .sub_tex_big {
        color: #222224;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.6px;
        line-height: 40px;
        text-transform: uppercase; }

    .sub_text_smal {
        letter-spacing: 0.35px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 400; }

    .subsribe {
        display: flex;
        flex-direction: column; }

    .subscribe_text {
        display: block;
        text-align: center; }

    .footer_botto_left {
        color: #7a7a7a;
        font-size: 16px;
        font-weight: 400;
        line-height: 42px;
        letter-spacing: 0.4px; }

    .fab_block {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        width: 32px;
        height: 32px;
        background-color: #ffffff;
        color: #b2b2b2;
        border-left: 8px solid #e6e6e6; }
    .fab_block:hover {
        background-color: #f16d7f; }

    .slaider_photo {
        float: left; }

    .sl_sub {
        background-image: url(img/subscribe.jpg);
        background-repeat: no-repeat;
        display: flex; }

    .slaider_text {
        margin-left: 101px; }

    .slaider_main_text {
        display: block;
        width: 386px;
        color: #222224;
        font-size: 16px;
        font-style: italic;
        line-height: 26px;
        letter-spacing: -0.4px;
        text-align: justify; }

    .author_name {
        color: #f16d7f;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.4px;
        line-height: 26px; }

    .author_place {
        color: #222224;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.3px;
        line-height: 14px; }

    .quck_menu_h3 {
        color: #f16d7f;
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
        text-transform: uppercase;
        letter-spacing: 0.45px; }

    .quick_link {
        text-decoration: none;
        color: #898989;
        font-size: 16px;
        font-weight: 400;
        line-height: 42px; }
    .quick_link:hover {
        color: #f16d7f; }

    .ul_qick_menu {
        list-style-type: none;
        margin-top: 30px; }

    .footer_about {
        display: flex;
        flex-wrap: wrap;
        margin-top: 109px; }

    .about {
        width: 428px;
        color: #898989;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.35px; }

    .about_text {
        margin-top: 20px; }

    .quick_menu_colomn {
        margin-left: 50px; }

    .quick_menu {
        display: flex;
        flex-wrap: wrap; }

    .about_logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #3e3e40;
        font-size: 27px;
        font-weight: 300;
        line-height: 32px;
        text-transform: uppercase; }

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
    .drop_colomn {
        width: 235px;
        margin-right: 46px; }

    .drop_colomn:last-of-type {
        margin-right: 20px; }

    .menu_list {
        position: relative; }

    .menu_list:hover .drop {
        display: flex; }

    .menu_img {
        padding-top: 8px;
        padding-bottom: 10px; }

    .breadcrumb {
        height: 148px;
        background-color: #e8e8e8; }

    .breadcrumb_text {
        color: #f16d7f;
        font-size: 24px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }

    .breadcrumbs_box {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center; }

    .bonuses {
        height: 341px;
        background-color: #222224; }

    .all_bonuses {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center; }

    .bonuses_small {
        width: 308px;
        display: flex;
        align-items: center;
        flex-direction: column; }

    .bonuses_text_big {
        padding-top: 32px;
        text-align: center;
        color: #fbfbfb;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.5px; }

    .bonuses_text_small {
        text-align: justify-all;
        color: #fbfbfb;
        font-size: 14px;
        font-weight: 300;
        line-height: 23.95px;
        padding-top: 17px; }

    .sidebar_menu {
        width: 243px;
        list-style: none;
        display: flex;
        flex-direction: column; }

    .sidebar_drop {
        display: none;
        background-color: #ffffff;
        padding: 10px 20px;
        top: 48px; }

    .sidebar_menu_list:hover .sidebar_drop {
        display: flex; }

    .sidebar_menu_list {
        padding-bottom: 18px; }

    .sidebar_menu_link {
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase;
        height: 20px;
        text-decoration: none;
        display: block;
        padding: 16px 8px 32px 16px;
        border-left: 5px solid #f16d7f;
        border-bottom: 1px solid #ebebeb; }

    .sidebar_menu_link:hover {
        color: #f16d7f; }

    .sidebar {
        padding-top: 59px;
        display: flex; }

    .sb_head {
        display: flex;
        justify-content: space-between; }

    .trend {
        text-decoration: none;
        color: #6f6e6e;
        font-size: 15px;
        font-weight: 400;
        line-height: 26px;
        display: flex;
        justify-content: space-between; }
    .trend:hover {
        color: #f16d7f; }

    .trends {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; }
    .trends ul {
        padding: 5px; }
    .trends li {
        display: inline;
        border-left: 1px solid #bbb;
        padding-left: 8px; }
    .trends li:first-child {
        border: none; }

    .filter_chek_names {
        margin-top: 25px; }

    .filter_chek_text {
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }

    .trending {
        margin-left: 50px;
        width: 176px; }

    .filter_chek {
        display: flex;
        justify-content: space-between; }

    .size {
        margin-left: 114px; }

    .form_select {
        width: 263px;
        display: flex; }

    .form_select_checkbox {
        display: block;
        width: 65px;
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase; }

    .price {
        margin-left: 58px; }

    .sort {
        margin-left: 50px;
        margin-top: 42px;
        width: 846px;
        height: 50px;
        background-color: #f3f3f3;
        display: flex;
        align-items: center; }

    .sort_by p {
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        width: 66px;
        height: 30px;
        display: block;
        border: 1px solid #ebebeb;
        background-color: #ffffff;
        text-align: center;
        margin-left: 10px; }

    .prod_cont {
        width: 846px;
        margin-top: 48px;
        margin-left: 50px; }

    .favor_item:hover {
        box-shadow: 0 0 10px #fff; }

    .favor_item {
        color: #ffffff;
        width: 57px;
        height: 38px;
        border-radius: 3px;
        border: 1px solid #ffffff;
        text-align: center;
        line-height: 39px;
        display: none;
        position: absolute;
        top: 145px;
        left: 136px;
        text-decoration: none; }

    .item:hover .favor_item {
        display: block; }

    .favor_item_img {
        display: flex;
        padding-top: 10px;
        padding-left: 19px; }

    .ref_item:hover {
        box-shadow: 0 0 10px #fff; }

    .ref_item {
        color: #ffffff;
        width: 57px;
        height: 38px;
        border-radius: 3px;
        border: 1px solid #ffffff;
        text-align: center;
        line-height: 39px;
        display: none;
        position: absolute;
        top: 145px;
        left: 70px;
        text-decoration: none; }

    .item:hover .ref_item {
        display: block; }

    .ref_item_img {
        display: flex;
        padding-top: 10px;
        padding-left: 19px; }

    .pagination {
        display: flex;
        justify-content: space-between;
        height: 44px;
        margin-bottom: 110px; }
    .pagination_pages {
        border-radius: 3px;
        border: 1px solid #ebebeb;
        background-color: #ffffff;
        margin-left: 292px;
        width: 261px; }
    .pagination_view_all {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 44px;
        border-radius: 3px;
        border: 1px solid #ef5b70;
        background-color: #ffffff; }

    .view_all {
        color: #ef5b70;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
        text-decoration: none; }

    .deliveryInfo {
        padding-top: 33px;
        padding-bottom: 33px;
        border-bottom: 1px solid #e8e8e8; }
    .deliveryInfo h1 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase; }

    .shipping {
        padding-top: 56px; }
    .shipping__check {
        margin-top: 39px;
        width: 940px;
        display: flex; }
    .shipping__check h5 {
        color: #b3b2b2;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px; }
    .shipping__bonuses {
        padding-top: 15px; }
    .shipping__guest {
        margin-left: 35px;
        width: 50%;
        height: 309px; }
    .shipping__guest h3 {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase; }
    .shipping__guest p {
        color: #222222;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        padding-left: 14px;
        padding-top: 10px; }
    .shipping__guest span {
        padding-left: 10px; }
    .shipping__guest h5 {
        margin-top: 15px;
        color: #b3b2b2;
        font-size: 13px;
        font-weight: 400; }

    .h5_bonuses {
        margin-bottom: -15px; }

    .typeOfRegistration {
        padding-top: 23px; }

    .registered {
        width: 50%;
        height: 309px; }
    .registered span {
        color: #ff0d0d; }
    .registered h3 {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase; }
    .registered h5 {
        margin-top: 15px; }
    .registered h4 {
        color: #222222;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase; }

    .shipping__button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 180px;
        height: 50px;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        color: #4a4a4a;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 25px; }

    .registered h4 {
        margin-top: 15px; }
    .registered_logIn {
        display: flex; }
    .registered input {
        height: 45px;
        width: 100%;
        border: 1px solid #eaeaea;
        background-color: #ffffff; }

    .reset_pas {
        text-decoration: none;
        color: #222222;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin-top: 24px;
        margin-left: 32px; }

    .login__button {
        margin-top: 7px; }

    .breadcrumb_ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: #636363;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }

    .breadcrumb__list {
        text-decoration: none;
        color: #636363;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }
    .breadcrumb__list:hover {
        color: #f16d7f; }

    .show {
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        width: 66px;
        height: 30px;
        display: block;
        border: 1px solid #ebebeb;
        background-color: #ffffff;
        text-align: center;
        margin-left: 10px; }

    .name_select select {
        display: block;
        width: 86px;
        height: 32px;
        border: 1px solid #ebebeb;
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px; }

    .show_count select {
        display: block;
        width: 86px;
        height: 32px;
        border: 1px solid #ebebeb;
        color: #6f6e6e;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px; }

    .imageSlide {
        width: 1607px;
        height: 777px;
        border: 1px solid #eaeaea;
        background-color: #f7f7f7; }
    .imageSlide_cont {
        background-image: url(img/single.jpg);
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: -27px; }

    .addToCart {
        margin-top: -96px;
        width: 1141px;
        height: 730px;
        border: 1px solid #eaeaea;
        background-color: #ffffff; }
    .addToCart__choose {
        margin-left: 302px;
        margin-top: 63px;
        width: 538px;
        height: 144px; }
    .addToCart__options {
        display: flex;
        justify-content: space-between; }
    .addToCart__options select {
        display: inline-block;
        width: 100%;
        cursor: pointer;
        margin-top: 10px;
        padding: 4px 15px;
        outline: 0;
        border: 1px solid #eaeaea;
        background: #ffffff;
        color: #bcbcbc; }
    .addToCart__color {
        width: 144px;
        height: 61px;
        color: #2f2f2f;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase; }
    .addToCart__color_red {
        background-size: 12px;
        padding-left: 12px;
        background: red 0 1px; }
    .addToCart__color_green {
        background-color: green;
        background-size: 20px;
        padding-left: 20px;
        background-position: 0 1px; }
    .addToCart__size {
        width: 144px;
        height: 61px;
        color: #2f2f2f;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase; }
    .addToCart__quantity {
        width: 144px;
        height: 61px;
        color: #2f2f2f;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase; }
    .addToCart__button {
        margin-top: 25px; }
    .addToCart__button a {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        width: 536px;
        height: 55px;
        text-decoration: none;
        color: #b9b9b9;
        font-size: 16px;
        font-weight: 700;
        border: 1px solid #b9b9b9; }
    .addToCart__button a:hover {
        color: #f16d7f;
        border: 1px solid #f16d7f; }

    .checkout_drop {
        display: none;
        border-radius: 5px;
        background-color: #ffffff;
        border: 1px solid #ececec;
        padding: 10px 20px;
        position: absolute;
        top: 72px;
        margin-left: -20px; }
    .checkout_drop:before {
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
    .checkout_drop_list {
        color: #646464;
        font-size: 14px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.35px;
        text-decoration: none; }
    .checkout_drop_list:hover {
        color: #f16d7f; }
    .checkout_drop_menu {
        list-style-type: none; }
    .checkout_drop_colomn {
        width: 262px;
        margin-right: 46px; }

    .total {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 32px; }

    .checkout_buttons {
        display: flex;
        flex-direction: column; }

    .checkout_button {
        margin-bottom: 15px;
        list-style-type: none; }

    .alsoLike {
        margin-top: 119px; }
    .alsoLike h1 {
        margin-bottom: 72px;
        text-align: center;
        color: #4d4d4d;
        font-size: 24px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase; }

    .collectionSlider {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 73px; }
    .collectionSlider h3 {
        color: #f16d7f;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase; }

    .collectionSlider_slider {
        display: flex; }
    .collectionSlider_slider ul {
        list-style: none;
        display: flex;
        justify-content: center; }
    .collectionSlider_slider_link {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 14px;
        font-weight: 300;
        line-height: 26px;
        color: #b9b9b9; }
    .collectionSlider_slider_link:hover {
        color: #f16d7f;
        font-weight: 700; }

    .collectionText {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 13px; }
    .collectionText h3 {
        color: #4d4d4d;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        text-transform: uppercase; }
    .collectionText h5 {
        width: 618px;
        color: #5e5e5e;
        font-size: 15px;
        font-weight: 300;
        line-height: 24px;
        padding-top: 67px;
        text-align: center; }
    .collectionText__info {
        padding-top: 28px;
        display: flex;
        justify-content: center;
        color: #b9b9b9;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase; }
    .collectionText__info span {
        color: #2f2f2f; }
    .collectionText__designer {
        padding-left: 44px; }
    .collectionText__price {
        display: flex;
        justify-content: center;
        width: 618px;
        padding-top: 37px;
        padding-bottom: 53px;
        margin: 0 auto;
        color: #ef5b70;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
        border-bottom: 1px solid #eaeaea; }

    .shoppingCartContent__details {
        margin-left: 400px;
        display: flex; }
    .shoppingCartContent__details_quantity {
        margin-left: 98px; }
    .shoppingCartContent__details_shipping {
        margin-left: 80px; }
    .shoppingCartContent__details_subtotal {
        margin-left: 80px; }
    .shoppingCartContent__details_action {
        margin-left: 45px; }
    .shoppingCartContent__head {
        margin-top: 90px;
        padding-bottom: 20px;
        display: flex;
        color: #222222;
        font-size: 13px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase;
        border-bottom: 1px solid #eaeaea; }
    .shoppingCartContent__items {
        display: flex;
        border-bottom: 1px solid #eaeaea; }
    .shoppingCartContent__product {
        display: flex;
        align-items: center;
        width: 460px;
        height: 162px; }
    .shoppingCartContent__product_text {
        margin-left: 21px; }
    .shoppingCartContent__product_text img {
        padding-top: 5px;
        padding-bottom: 5px; }
    .shoppingCartContent__product_name {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: -25px; }
    .shoppingCartContent__product_description {
        font-size: 13px;
        color: #222222;
        font-weight: 400;
        line-height: 20px; }
    .shoppingCartContent__price {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 162px;
        color: #656565;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px; }
    .shoppingCartContent__quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 162px; }
    .shoppingCartContent__quantity input {
        width: 54px;
        height: 30px;
        border: 1px solid #e6e6e6;
        text-align: center;
        color: #656565;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px; }
    .shoppingCartContent__shipping {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 162px;
        color: #656565;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase; }
    .shoppingCartContent__subtotal {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 162px;
        color: #656565;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px; }
    .shoppingCartContent__action {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px; }

    .shoppingType {
        display: flex;
        justify-content: space-between;
        margin-top: 44px; }
    .shoppingType a {
        text-decoration: none;
        color: #4a4a4a;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 39px;
        padding-right: 39px;
        height: 50px;
        border: 1px solid #eaeaea; }
    .shoppingType a:hover {
        border: 1px solid #f16d7f;
        color: #f16d7f; }

    .shippingCheck {
        display: flex;
        justify-content: space-between;
        margin-top: 63px; }
    .shippingCheck__adress {
        width: 355px;
        height: 268px; }
    .shippingCheck__adress_quote {
        margin-top: 23px; }
    .shippingCheck__adress select {
        border: 1px solid #eaeaea;
        color: #b1b1b1;
        font-size: 13px;
        font-weight: 300;
        margin-top: 20px;
        padding: 14px;
        width: 100%; }
    .shippingCheck__adress input {
        border: 1px solid #eaeaea;
        color: #b1b1b1;
        font-size: 13px;
        font-weight: 300;
        margin-top: 20px;
        padding: 14px;
        width: 100%; }
    .shippingCheck__adress h3 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase; }
    .shippingCheck__adress a {
        text-decoration: none;
        font-size: 11px;
        font-weight: 700;
        color: #4a4a4a;
        border: 1px solid #eaeaea;
        padding: 12px;
        text-transform: uppercase; }
    .shippingCheck__adress a:hover {
        color: #f16d7f;
        border: 1px solid #f16d7f; }
    .shippingCheck__coupon {
        width: 355px;
        height: 268px; }
    .shippingCheck__coupon input {
        border: 1px solid #eaeaea;
        color: #b1b1b1;
        font-size: 13px;
        font-weight: 300;
        margin-top: 20px;
        padding: 14px;
        width: 100%; }
    .shippingCheck__coupon h3 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase; }
    .shippingCheck__coupon h5 {
        color: #000000;
        font-size: 14px;
        font-weight: 300;
        margin-top: 24px; }
    .shippingCheck__coupon_button {
        margin-top: 25px; }
    .shippingCheck__coupon a {
        text-decoration: none;
        font-size: 11px;
        font-weight: 700;
        color: #4a4a4a;
        border: 1px solid #eaeaea;
        padding: 12px;
        text-transform: uppercase; }
    .shippingCheck__coupon a:hover {
        color: #f16d7f;
        border: 1px solid #f16d7f; }
    .shippingCheck__proceed {
        display: flex;
        flex-direction: column;
        width: 360px;
        height: 214px;
        background-color: #f5f3f3; }
    .shippingCheck__proceed_button {
        margin-top: 34px; }
    .shippingCheck__proceed_position {
        padding: 40px; }
    .shippingCheck__proceed h5 {
        color: #4a4a4a;
        font-size: 11px;
        font-weight: 400;
        text-transform: uppercase;
        text-align: right;
        margin-bottom: 14px; }
    .shippingCheck__proceed h3 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 1px solid #e2e2e2;
        width: 100%;
        text-align: right;
        padding-bottom: 22px; }
    .shippingCheck__proceed a {
        text-decoration: none;
        width: 100%;
        color: #4a4a4a;
        font-size: 16px;
        font-weight: 700;
        padding: 16px 44px;
        text-transform: uppercase;
        border: 1px solid #4a4a4a; }
    .shippingCheck__proceed a:hover {
        color: #ffffff;
        border: 1px solid #f16d7f;
        background-color: #f16d7f; }

    /*# sourceMappingURL=style.css.map */

</style>

