<script>
import AppMain from "./components/Main/AppMain.vue";
import AppHeader from "./components/Header/AppHeader.vue";
import AppFooter from "./components/Footer/AppFooter.vue"

export default {
    name: 'ciao',
    data () {
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
    created () {
        
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
    <div>
        <AppHeader
        :navigator="navigator"
        :phoneNumber="phoneNumber"/>
    </div>
    <div>
        <AppMain />
    </div>
    <div>
        <AppFooter
        :extras="extras"
        :addressInfo="addressInfo"
        :info="info"/>
    </div>
</template>

<style lang="scss">
@use "./styles/main.scss" as *;
</style>
