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
            <img src="../../../assets/bph/brand-01.png" alt="">
        </div>
        <div class="icon">
            <img src="../../../assets/bph/brand-02.png" alt="">
        </div>
        <div class="icon">
            <img src="../../../assets/bph/brand-03.png" alt="">
        </div>
        <div class="icon">
            <img src="../../../assets/bph/brand-04.png" alt="">
        </div>
        <div class="icon">
            <img src="../../../assets/bph/brand-05.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sponsorBox {
    width: 80%;
    margin: 0 auto;
    height: 10vh;

    .icon {
        width: calc(20% - 50px);
        height: 120%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
