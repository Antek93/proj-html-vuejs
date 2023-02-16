<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'BachecaAds',
    data() {
        return {
            msg: 'Ciao',
            store
        }
    },
    created() {

    },
    methods: {
    },

};
</script>

<template>
    <div class="mainContainer container-fluid">
        <img src="../../../assets/bph/mainwallpaper.jpg" alt="">
        <!-- CONTAINER CON "DISCLAIMER" + "TITOLO GIOCO IN USCITA" + "TASTO SHOPNOW" -->
        <div class="container">
            <img src="../../../assets/bph/mainwallpaper.jpg" alt="">
            <!-- DISCLAIMER -->
            <div class="adContainer">
                <div class="goldenAd"></div>
                <div class="upComing">Upcoming Stock</div>
            </div>
            <!-- TITOLO GIOCO IN USCITA -->
            <div class="gameTitle">
                <div class="fw-bold">
                    Resident Evil 3 <br>
                    Remake
                </div>
            </div>
            <!-- TASTO SHOP NOW -->
            <button type="button" class="shopNow fw-bold">
                Shop Now
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/BachecaAds.scss";
</style>
