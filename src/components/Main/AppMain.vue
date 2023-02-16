<script>
import BachecaAds from "./MainPartials/BachecaAds.vue"
import infoMain from "./MainPartials/infoMain.vue"
import mostPopular from "./MainPartials/mostPopular.vue"
import specialCategory from "./MainPartials/specialCategory.vue"
import discountCards from "./MainPartials/discountCards.vue"
import ourProducts from "./MainPartials/ourProducts.vue"
import dealOfTheDay from "./MainPartials/dealOfTheDay.vue"
import teamInfo from "./MainPartials/teamInfo.vue"
import newGameBlog from "./MainPartials/newGameBlog.vue"
import sponsorIcon from "./MainPartials/sponsorIcon.vue"

export default {
    name: 'AppMain',
    data() {
        return {
        }

    },
    created() {

    },
    methods: {

    },
    components: {
        BachecaAds,
        infoMain,
        mostPopular,
        specialCategory,
        discountCards,
        ourProducts,
        dealOfTheDay,
        teamInfo,
        newGameBlog,
        sponsorIcon
    },
    props: {
        benefits: {
            type: Array,
        },
        slides: {
            type: Array,
        },
        photos: {
            type: Array,
        },
        team: {
            type: Array,
        }
    },
    


};
</script>

<template>

    <!-- CONTAINER CON GIOCO IN USCITA -->
    <div>
        <BachecaAds />
    </div>

    <!-- CONTAINER CON SFONDO violaPLaystaion PER LA PARTE RESTANTE DEL MAIN  -->
    <div class="mainBackground container-fluid py-5">

        <!-- CONTAINER CON: "INFO"-->
        <infoMain :benefits="benefits" />

        <!-- CONTAINER "MOST POPULAR" + "LATEST GAME -->
        <mostPopular />

        <!-- CONTAINER SPECIAL CATERGORY -->
        <specialCategory />

        <!-- CONTAINER "OUR PRODUCTS" -->
        <ourProducts :slides="slides" />

        <!-- CONTAINER SCHEDE DISCOUNT  -->
        <discountCards />

        <!-- CONTAINER OUR PRODUCTS -->
        <dealOfTheDay
        :slides="slides"
        :photos="photos"/>

        <!-- CONTAINER TEAM DI LAVORO -->
        <teamInfo
        :team="team"/>

        <!-- NEW GAME BLOG -->
        <newGameBlog />

        <!-- SPONSORS ICONS -->
        <sponsorIcon />

    </div>


</template>

<style lang="scss" scoped>

@import "../../styles/partials/MainAttributes/MainAttributes.scss";
</style>