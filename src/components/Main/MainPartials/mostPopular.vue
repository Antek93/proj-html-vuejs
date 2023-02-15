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
.mainBox {
    width: 80%;
    margin: 0 auto;
    font-size: 15px;
    padding-top: 2%;
    color: white;
}

.cards {
    width: calc((100% / 2) - 15px);
    height: 45vh;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        filter: brightness(0.8);
    }

    .textOnCards {
        position: absolute;
        top: 33%;
        right: 107px;


    }

    .adContainer {
        position: absolute;
        top: 26%;
        left: 46%;

        .goldenAd {
            width: 219px;
            height: 50px;
            transform: skew(340deg);
            background-color: #F9AA01;
        }

        .titleBanner {
            bottom: -1%;
            left: 8.5%;
            font-weight: bold;
            position: absolute;
            font-size: 39px;
            color: #171717;
            font-size: 34px;
            font-style: italic;
            letter-spacing: 2px;
        }
    }

    .adTitle {
        position: absolute;
        top: 42%;
        left: 44%;

        div {
            font-size: 41px;
            letter-spacing: 3px;

            br {
                display: block;
                content: "";
                margin-top: -22px;
            }
        }
    }
}
</style>
