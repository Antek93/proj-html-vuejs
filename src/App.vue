<script>
import { store } from "./store"
import AppMain from "./components/Main/AppMain.vue";
import AppHeader from "./components/Header/AppHeader.vue";
import AppFooter from "./components/Footer/AppFooter.vue"

export default {
    name: 'ciao',
    data () {
        return {
            menuList: [
                'Home',
                'Shop',
                'Blog',
                'Media',
                'ShortCode',
                'Features'
            ],
            phoneNumber: "24/7 . 800-8754-987",
            store
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
        :menuList="menuList"
        :phoneNumber="phoneNumber"/>
    </div>
    <div>
        <AppMain />
    </div>
    <div>
        <AppFooter />
    </div>
</template>

<style lang="scss">
@use "./styles/main.scss" as *;
</style>
