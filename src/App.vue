<script>
import AppMain from "./components/Main/AppMain.vue";
import AppHeader from "./components/Header/AppHeader.vue";
import AppFooter from "./components/Footer/AppFooter.vue"

export default {
    name: 'ciao',
    data() {
        return {
            phoneNumber: "24/7 . 800-8754-987",
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
        <AppHeader :navigator="navigator" :phoneNumber="phoneNumber" />
    </div>
    <div>
        <AppMain />
    </div>
    <div>
        <AppFooter :extras="extras" :addressInfo="addressInfo" :info="info" />
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
    color: black;
    border: 3px solid black;
    -moz-transform: rotate(45deg) skew(10deg, 10deg);
    -webkit-transform: rotate(45deg) skew(10deg, 10deg);
    -ms-transform: rotate(45deg) skew(10deg, 10deg);
    -o-transform: rotate(45deg) skew(10deg, 10deg);
    transform: rotate(45deg) skew(10deg, 10deg);

    .miniArrow {
        color: black;
        a {
            color: orange;
            text-decoration: none;
            
        }
        .diamond {
            font-size: 39px;
            transform: rotate(54deg) skew(10deg, 351deg);
            color: black;

        }

    }
}
</style>
