<template>
    <footer class="footer">
        <div class="slaider_subscribe">
            <div class="container slaider_subscribe__flex">
                <div class="slaider">
                    <img class="slaider_photo" src="img/Phono_1.png" alt="photo">
                    <div class="slaider_text">
                        <div class="slaider_main_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </div>
                        <div class="slaider_text_author">
                            <p class="author_name">Bin Burhan</p>
                            <p class="author_place">Dhaka, Bd</p>
                        </div>
                    </div>
                </div>
                <div class="subsribe">
                    <div class="subscribe_text">
                        <div class="sub_tex_big">Subscribe</div>
                        <div class="sub_text_smal">FOR OUR NEWLETTER AND PROMOTION</div>
                    </div>
                    <div class="subscribe_form">
                        <input class="email" type="email" placeholder="Enter Your Email">
                        <a href="#" class="subscribe_button">Subscribe</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer_about container">
            <div class="about">
                <a href="#" class="about_logo"><img class="logo_img" src="img/logo.png" alt="logo">BRAN<span
                        class="red_symbol">D</span></a>
                <div class="about_text">Objectively transition extensive data rather than cross functional solutions.
                    Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate
                    an expanded array of processes and cross-unit partnerships.
                </div>
                <div class="about_text">Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                </div>
            </div>
            <div class="quick_menu">
                <div class="quick_menu_colomn">
                    <h3 class="quck_menu_h3">COMPANY</h3>
                    <ul class="ul_qick_menu">
                        <li><a href="index.html" class="quick_link">Home</a></li>
                        <li><a href="#" class="quick_link">Shop</a></li>
                        <li><a href="#" class="quick_link">About</a></li>
                        <li><a href="#" class="quick_link">How It Works</a></li>
                        <li><a href="#" class="quick_link">Contact</a></li>

                    </ul>
                </div>
                <div class="quick_menu_colomn">
                    <h3 class="quck_menu_h3">INFORMATION</h3>
                    <ul class="ul_qick_menu">
                        <li><a href="#" class="quick_link">Tearms & Condition</a></li>
                        <li><a href="#" class="quick_link">Privacy Policy</a></li>
                        <li><a href="#" class="quick_link">How to Buy</a></li>
                        <li><a href="#" class="quick_link">How to Sell</a></li>
                        <li><a href="#" class="quick_link">Promotion</a></li>

                    </ul>
                </div>
                <div class="quick_menu_colomn">
                    <h3 class="quck_menu_h3">SHOP CATEGORY</h3>
                    <ul class="ul_qick_menu">
                        <li><a href="#" class="quick_link">Men</a></li>
                        <li><a href="#" class="quick_link">Women</a></li>
                        <li><a href="#" class="quick_link">Child</a></li>
                        <li><a href="#" class="quick_link">Apparel</a></li>
                        <li><a href="#" class="quick_link">Brows All</a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="footer_bottom container">
            <div class="footer_botto_left">
                <i class="far fa-copyright"></i> 2017 Brand All Rights Reserved.
            </div>
            <div class="footer_bottom_rigeht">
                <a href="#" class="fab_block"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="fab_block"><i class="fab fa-twitter"></i></a>
                <a href="#" class="fab_block"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="fab_block"><i class="fab fa-pinterest-p"></i></a>
                <a href="#" class="fab_block"><i class="fab fa-google-plus-g"></i></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'Footer',
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


    .red_symbol {
        color: #f16d7f; }

    .logo_img {
        margin-right: 13px;
        transition: transform 1s; }
    .logo_img:hover {
        transform: rotate(360deg); }

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

</style>