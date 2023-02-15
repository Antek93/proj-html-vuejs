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
            benefits: [
                {
                    title: "Free Delivery",
                    subtitle: "Free Shipping On All Order",
                    icon: "fa-solid fa-truck-fast"
                },
                {
                    title: "Money Return",
                    subtitle: "Back Guarantee in 7 days",
                    icon: "fa-solid fa-sack-dollar",
                },
                {
                    title: "Member Discount",
                    subtitle: "On every order over $130.00",
                    icon: 'fa-solid fa-percent',
                },
                {
                    title: "Return Policy",
                    subtitle: "Support 24 hours a day",
                    icon: 'fa-solid fa-hand-holding-dollar',
                }
            ],
            slides: [
                {
                    image: '../../../src/assets/bph/04-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Shopping Mahjong conncet',
                    price: '100.00 - £1̶̶8̶̶0̶̶ ',
                }, {
                    image: '../../../src/assets/bph/01-768x768.jpg',
                    rating: '★★★★★',
                    title: 'BangBangShooting',
                    price: '83.00 - £90.00',
                }, {
                    image: '../../../src/assets/bph/03-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Buddy and Lucky Solitaire',
                    price: "74.00",
                }, {
                    image: '../../../src/assets/bph/11-768x768.jpg',
                    rating: '★★★★☆',
                    title: 'Taishou x Alice Epilogue',
                    price: '160.00',
                },
                {
                    image: '../../../src/assets/bph/01-768x768.jpg',
                    rating: '★★★★★',
                    title: 'BangBangShooting',
                    price: '33.00',
                }, {
                    image: '../../../src/assets/bph/05-768x768.jpg',
                    rating: '★★☆☆☆',
                    title: 'Shopping Mahjong conncet',
                    price: '19.00',
                }, {
                    image: '../../../src/assets/bph/08-768x768.jpg',
                    rating: '★★★☆☆',
                    title: 'Taishou x Alice Epilogue',
                    price: "28.00",
                }, {
                    image: '../../../src/assets/bph/13-768x768.jpg',
                    rating: '★★★★☆',
                    title: 'Buddy and Lucky Solitaire',
                    price: '74.00',
                }
            ],
            photos: [
                {
                    image: '../../../src/assets/bph/18-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/16-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/17-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/14-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/10-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/07-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/08-768x768.jpg',
                }, {
                    image: '../../../src/assets/bph/13-768x768.jpg',
                }
            ],
            team: [
                {
                    image: '../../../src/assets/bph/t2-1-100x100_left.jpg',
                    name: 'Luies Charls',
                    job: '   (Web Designer)'
                }, {
                    image: '../../../src/assets/bph/t4-1-100x100_left.jpg',
                    name: 'Mark Harry',
                    job: '   (Front-end Developer)',
                }, {
                    image: '../../../src/assets/bph/t5-1-100x100_left.jpg',
                    name: 'Harry Mark',
                    job: '   (Project Manager)',
                }, {
                    image: '',
                    name: '',
                    job: '',
                }
            ],

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
.mainBackground {
    width: 100%;
    background-image: url('../../assets/bph/body-bg.jpg');
    padding: 0px;
}
</style>