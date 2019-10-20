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

<style lang="sass">
    @import "vars"
    *
        margin: 0
        padding: 0
        box-sizing: border-box

    body
        font-family: 'Lato', sans-serif

    .container
        width: 1140px
        margin: 0 auto

    .footer_bottom
        margin-top: 89px
        display: flex
        align-items: center
        justify-content: space-between
        height: 80px
        background-color: #e6e6e6

    .footer_slaider
        height: 438px
        background-image: url(img/subscribe.jpg)

    .footer_botto_left
        color: #7a7a7a
        font-size: 16px
        font-weight: 400
        line-height: 42px
        letter-spacing: 0.4px

    .slaider_subscribe__flex
        display: flex
        justify-content: space-between
        align-items: center

    .slaider_subscribe
        display: flex
        height: 438px
        background: url(img/subscribe.jpg)
        background-size: cover
        justify-content: space-between
        align-items: center
        margin: 97px auto auto



</style>