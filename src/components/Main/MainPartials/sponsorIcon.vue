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
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/sponsorIcon.scss";
</style>
