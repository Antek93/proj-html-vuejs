<script>

export default {
    name: 'mostPopular',
    data() {
        return {
            msg: 'Ciao',
        }
    },
    created() {

    },
    methods: {
    },
    components: {
    },
    props: {
        benefits: {
            type: Array,
        }
    }

};
</script>

<template>
    <!-- CONTAINER CON: "INFO" + "MOST POPULAR" + "LATEST GAME"-->
    <div class="mainBox">

        <div class="d-flex justify-content-between py-3">
            <!-- "MOST POPULAR" CONTAINER-->
            <div class="cards">
                <div>
                    <img src="../../../assets/bph/cms-banner-03.jpg" alt="">
                </div>
                <div class="adContainer">
                    <div class="goldenAd"></div>
                    <div class="titleBanner">20% Discount</div>
                </div>
                <div class="adTitle">
                    <div class="fw-bold">
                        Dragon's Dogma<br>
                        Video Game
                    </div>
                </div>
            </div>
            <!-- LATEST GAME -->
            <div class="cards">
                <div>
                    <img src="../../../assets/bph/cms-banner-04.jpg" alt="">
                </div>
                <div class="adContainer">
                    <div class="goldenAd"></div>
                    <div class="titleBanner">30% Discount</div>
                </div>
                <div class="adTitle">
                    <div class="fw-bold">
                        World of Tanks <br>
                        New Game
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/discountCards.scss";
</style>
