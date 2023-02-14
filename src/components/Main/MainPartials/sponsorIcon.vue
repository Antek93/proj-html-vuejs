<script>
//Import da store.js

export default {
    name: 'sponsorIcon',
    data() {
        return {
        }
    },
    created() {

    },
    methods: {
    },

};
</script>

<template>
    <div class="sponsorBox d-flex justify-content-between">
        <div class="icon">
            <img src="" alt="">
        </div>
        <div class="icon">
            <img src="" alt="">
        </div>
        <div class="icon">
            <img src="" alt="">
        </div>
        <div class="icon">
            <img src="" alt="">
        </div>
        <div class="icon">
            <img src="" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sponsorBox {
    width: 80%;
    margin: 0 auto;
    height: 10vh;

    .icon {
        width: calc((100% / 5) - 50px);
        height: 100px;
        background-color: red;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
