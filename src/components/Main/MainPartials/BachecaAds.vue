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
    <div class="mainContainer container-fluid text-light">

        <!-- CONTAINER CON "DISCLAIMER" + "TITOLO GIOCO IN USCITA" + "TASTO SHOPNOW" -->
        <div class="container">

            <!-- DISCLAIMER -->
            <div>
                Upcoming Stock
            </div>
            <!-- TITOLO GIOCO IN USCITA -->
            <div>
                <h3>
                    Resident Evil 3
                </h3>
                <h3>
                    Remake
                </h3>
            </div>
            <!-- TASTO SHOP NOW -->
            <div>
                <a href="#">Shop Now</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mainContainer {
    background-image: url("../../../assets/bph/mainwallpaper.jpg");
    background-size: cover;
    height: 100vh;

    .container {
        width: 70%;
        margin: 0 auto;
        height: 100px;
        padding-top: 20%;
    }

}
</style>
