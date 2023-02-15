<script>

export default {
    name: 'discountCards',
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
    props : {
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
                <div class="textOnCards">
                    ciao
                </div>
            </div>
            <!-- LATEST GAME -->
            <div class="cards">
                <div>
                    <img src="../../../assets/bph/cms-banner-02.jpg" alt="">
                </div>
                <div class="textOnCards">
                    ciao
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
    background-color: red;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }

    .textOnCards {
        position: absolute;
        top: 33%;
        right: 107px;
    }
}
</style>
