<script>
import { store } from "../../store"

export default {
    name: 'AppHeader',
    data () {
        return {
            store
        }
    },
    created () {
        
    },
    methods: {
    },
    props: {
        menuList: {
            type: Array,
        },
    }

    
};
</script>

<template>
    <header>
        <div v-for="element in this.menuList">
            {{ element }}
        </div>
    </header>
</template>

<style lang="scss">
</style>
