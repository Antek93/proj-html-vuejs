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
.mainContainer {
    height: 100vh;
    position: relative;
    --bs-gutter-x: 0rem;


    img {
        width: 100%;
        height: 105%;
        filter: brightness(0.7);
    }

    .container {

        width: 70%;
        margin: 0 auto;
        height: 100px;
        padding-top: 20%;
        position: absolute;
        bottom: 35%;
        left: 12%;

        .gameTitle {
            position: absolute;
            top: 29%;
            left: 0%;

            div {
                color: #FDFEFF;
                font-size: 69px !important;
            }

            br {
                display: block;
                content: "";
                margin-top: -22px;
            }
        }

        .shopNow {
            border: 0px;
            padding: 9px 32px;
            margin-top: 45px;
            position: absolute;
            top: 95%;
            left: 0%;
            background-color: white;
        }
        .shopNow:hover {
            background-color: #F9AA01;
            cursor: pointer;
        }
    }

    .adContainer {
        position: absolute;
        top: 10%;

        .goldenAd {
            width: 270px;
            height: 50px;
            transform: skew(340deg);
            background-color: #F9AA01;


        }

        .upComing {
            bottom: -7%;
            left: 8.5%;
            font-weight: bold;
            position: absolute;
            font-size: 39px;
        }
    }

}
</style>
