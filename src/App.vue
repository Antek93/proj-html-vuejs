<script>
import { store } from "./store"
import AppMain from "./components/Main/AppMain.vue";
import AppHeader from "./components/Header/AppHeader.vue";
import AppFooter from "./components/Footer/AppFooter.vue"

export default {
    name: 'ciao',
    data () {
        return {
            msg: 'Ciao',
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
<AppHeader/>
<AppMain />
<AppFooter />
</template>

<style lang="scss">
@use "./styles/main.scss" as *;
</style>
