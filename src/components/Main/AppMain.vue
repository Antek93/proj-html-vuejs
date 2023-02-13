<script>
//Import da store.js
import { store } from "../../store"
import BachecaAds from "./MainPartials/BachecaAds.vue"
import infoMain from "./MainPartials/infoMain.vue"
import specialCategory from "./MainPartials/specialCategory.vue";

export default {
    name: 'AppMain',
    data() {
        return {
            msg: 'Ciao',
            store,
            benefits: [
                {
                    title: "Free Delivery",
                    subtitle: "Free Shipping On All Order"
                },
                {
                    title: "Money Return",
                    subtitle: "Back Guarantee in 7 days"
                },
                {
                    title: "Member Discount",
                    subtitle: "On every order over $130.00"
                },
                {
                    title: "Return Policy",
                    subtitle: "Support 24 hours a day"
                }
            ]
        }
    },
    created() {

    },
    methods: {
    },
    components: {
        BachecaAds,
        infoMain,
        specialCategory
    }

};
</script>

<template>

    <!-- CONTAINER CON GIOCO IN USCITA -->
    <div>
        <BachecaAds />
    </div>
    <!-- CONTAINER CON SFONDO violaPLaystaion PER LA PARTE RESTANTE DEL MAIN  -->
    <div class="mainBackground container-fluid py-5">

        <!-- CONTAINER CON: "INFO" + "MOST POPULAR" + "LATEST GAME"-->
        <infoMain :benefits="benefits" />

        <!-- CONTAINER SPECIAL CATERGORY -->
        <specialCategory />

        

    </div>


</template>

<style lang="scss" scoped>
.mainBackground {
    width: 100%;
    background-image: url('../../assets/bph/body-bg.jpg');
}
</style>