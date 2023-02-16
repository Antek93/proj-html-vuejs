<script>
import AppMain from "./components/Main/AppMain.vue";
import AppHeader from "./components/Header/AppHeader.vue";
import AppFooter from "./components/Footer/AppFooter.vue"

export default {
    name: 'ciao',
    data() {
        return {
            phoneNumber: "24/7 . 800-8754-987",
            slides: [
                {
                    image: '../../../src/assets/bph/04-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Shopping Mahjong conncet',
                    price: '100.00 - £1̶̶8̶̶0̶̶ ',
                }, {
                    image: '../../../src/assets/bph/01-768x768.jpg',
                    rating: '★★★★★',
                    title: 'BangBangShooting',
                    price: '83.00 - £90.00',
                }, {
                    image: '../../../src/assets/bph/03-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Buddy and Lucky Solitaire',
                    price: "74.00",
                }, {
                    image: '../../../src/assets/bph/11-768x768.jpg',
                    rating: '★★★★☆',
                    title: 'Taishou x Alice Epilogue',
                    price: '160.00',
                },
                {
                    image: '../../../src/assets/bph/01-768x768.jpg',
                    rating: '★★★★★',
                    title: 'BangBangShooting',
                    price: '33.00',
                }, {
                    image: '../../../src/assets/bph/05-768x768.jpg',
                    rating: '★★☆☆☆',
                    title: 'Shopping Mahjong conncet',
                    price: '19.00',
                }, {
                    image: '../../../src/assets/bph/08-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Taishou x Alice Epilogue',
                    price: "28.00",
                }, {
                    image: '../../../src/assets/bph/13-768x768.jpg',
                    rating: '★★★★☆',
                    title: 'Buddy and Lucky Solitaire',
                    price: '74.00',
                }
            ],
            photos: [
                {
                    image: '../../../src/assets/bph/18-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/16-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/17-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/14-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/10-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/07-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/08-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/13-768x768.jpg',
                }
            ],
            navigator: [
                'Home',
                'Shop',
                'Blog',
                'Media',
                'ShortCode',
                'Features'
            ],
            addressInfo: [
                '60 29th Street San Francisco, CA 94110',
                '507-Union Trade Center, United States of America',
                '(+00) 123-456-789',
                'demo@example.com'

            ],
            info: [
                'Bookmark',
                'Features',
                'Sitemap',
                'Lists',
                'Contact Us',
            ],
            extras: [
                'Delivery',
                'Cart',
                'Terms conditions',
                'My account',
                'About us'
            ],
            benefits: [
                {
                    title: "Free Delivery",
                    subtitle: "Free Shipping On All Order",
                    icon: "fa-solid fa-truck-fast"
                },
                {
                    title: "Money Return",
                    subtitle: "Back Guarantee in 7 days",
                    icon: "fa-solid fa-sack-dollar",
                },
                {
                    title: "Member Discount",
                    subtitle: "On every order over $130.00",
                    icon: 'fa-solid fa-percent',
                },
                {
                    title: "Return Policy",
                    subtitle: "Support 24 hours a day",
                    icon: 'fa-solid fa-hand-holding-dollar',
                }
            ],
            team: [
                {
                    image: '../../../src/assets/bph/t2-1-100x100_left.jpg',
                    name: 'Luies Charls',
                    job: '   (Web Designer)'
                }, {
                    image: '../../../src/assets/bph/t4-1-100x100_left.jpg',
                    name: 'Mark Harry',
                    job: '   (Front-end Developer)',
                }, {
                    image: '../../../src/assets/bph/t5-1-100x100_left.jpg',
                    name: 'Harry Mark',
                    job: '   (Project Manager)',
                }, {
                    image: '../../../src/assets/bph/t6-1-100x100_left.jpg',
                    name: '',
                    job: '',
                }
            ],
        }
    },
    created() {

    },
    methods: {
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
};
</script>

<template>
    <!-- ICONA RITORNO HOME -->
    <div class="rombo">
        <div class="miniArrow">
            <a href="#head">
                <font-awesome-icon class="diamond" icon="fa-solid fa-diamond" />
            </a>
        </div>
    </div>
    <div>
        <AppHeader
        :navigator="navigator"
        :phoneNumber="phoneNumber" />
    </div>
    <div>
        <AppMain
        :benefits="benefits"
        :slides="slides"
        :photos="photos"
        :team="team" />
    </div>
    <div>
        <AppFooter :extras="extras"
        :addressInfo="addressInfo"
        :info="info" />
    </div>
</template>

<style lang="scss">
@use "./styles/main.scss" as *;

.rombo {
    width: 49px;
    height: 50px;
    background: orange;
    position: fixed;
    top: 88%;
    z-index: 4;
    left: 92%;
    border: 3px solid #201424;
    -moz-transform: rotate(45deg) skew(10deg, 10deg);
    -webkit-transform: rotate(45deg) skew(10deg, 10deg);
    -ms-transform: rotate(45deg) skew(10deg, 10deg);
    -o-transform: rotate(45deg) skew(10deg, 10deg);
    transform: rotate(45deg) skew(10deg, 10deg);

    .miniArrow {
        a {
            color: orange;
            text-decoration: none;

        }

        .diamond {
            font-size: 39px;
            transform: rotate(54deg) skew(10deg, 351deg);
            color: #201424;
        }

    }
}
</style>
