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
                    <img src="../../../assets/bph/cms-banner-01.jpg" alt="">
                </div>
                <div class="adContainer">
                    <div class="goldenAd"></div>
                    <div class="titleBanner">Most Popular</div>
                </div>
                <div class="adTitle">
                    <div class="fw-bold">
                        The Battlefield 4<br>
                        Naval Strike
                    </div>
                </div>
            </div>
            <!-- LATEST GAME -->
            <div class="cards">
                <div>
                    <img src="../../../assets/bph/cms-banner-02.jpg" alt="">
                </div>
                <div class="adContainer">
                    <div class="goldenAd"></div>
                    <div class="titleBanner">Latest Game</div>
                </div>
                <div class="adTitle">
                    <div class="fw-bold">
                        Assassin's Creed <br>
                        Unity Game
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/mostPopular.scss";
</style>
