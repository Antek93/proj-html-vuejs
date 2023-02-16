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
        <div class="icon"> <!-- ICONA WHITE WOLFS  -->
            <img src="../../../assets/bph/brand-01.png" alt="">
        </div>
        <div class="icon"> <!-- ICONA FIGHTERS1  -->
            <img src="../../../assets/bph/brand-02.png" alt="">
        </div>
        <div class="icon"> <!-- ICONA TIGERS  -->
            <img src="../../../assets/bph/brand-03.png" alt="">
        </div>
        <div class="icon"> <!-- ICONA RHINO  -->
            <img src="../../../assets/bph/brand-04.png" alt="">
        </div>
        <div class="icon"> <!-- ICONA B2 JERSEY  -->
            <img src="../../../assets/bph/brand-05.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/sponsorIcon.scss";
</style>
