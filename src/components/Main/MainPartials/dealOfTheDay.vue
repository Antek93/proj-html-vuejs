<script>
export default {
    name: 'dealOfTheDay',
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
       
    }

};
</script>

<template>

        <!-- CONTAINER OUR PRODUCTS -->
        <div class="specialBox py-3 my-3 text-white">
            <div class="d-flex justify-content-center">
                <h1>
                    Deal Of The Day
                </h1>
            </div>
            <div class="d-flex justify-content-center my-3">
                <div class="tratto"></div>
            </div>
            <div class="btnContainer d-flex justify-content-center align-items-center text-center">
                <div>
                    1026 days
                </div>
                <div>
                    13 hours
                </div>
                <div>
                    24 mins
                </div>
                <div>
                    17 secs
                </div>
            </div>
            <div class="onSale d-flex justify-content-between py-3 my-3">
                <div class="product">
                    <img src="../../../assets/bph/04-768x768.jpg" alt="">
                    <div class="blackOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img src="../../../assets/bph/09-768x768.jpg" alt="">
                    <div class="blackOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img src="../../../assets/bph/03-768x768.jpg" alt="">
                    <div class="blackOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <img src="../../../assets/bph/11-768x768.jpg" alt="">
                    <div class="blackOverlay">
                        <div>
                            <div>Stars</div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.mainBackground {
    width: 100%;
    background-image: url('../../assets/bph/body-bg.jpg');
}

.specialBox {
    width: 80%;
    margin: 0 auto;

    .tratto {
        border: 2px solid #c2c402;
        width: 7%;
        border-radius: 10px;
    }
}

.btnContainer {
    div {
        padding: 10px;
        width: calc((100% / 3) - 280px);
        border: 1px solid white;
    }
}

.onSale {
    width: 100%;

    .product {
        width: calc((100% / 4) - 20px);
        border-radius: 0px;
        height: 280px;
        background-color: white;
        border: 0px;

        img {
            width: 100%;
            height: 100%;
        }

        .blackOverlay {
            width: 100%;
            height: 79px;
            background-color: #3700377a;
            bottom: 0%;
        }

    }
}
</style>