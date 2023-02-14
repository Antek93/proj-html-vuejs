<script>
export default {
    name: 'dealOfTheDay',
    data() {
        return {
            IndexUno: 0,
            IndexDue: 1,
            IndexTre: 2,
            IndexQuattro: 3,
        }
    },
    created() {

    },
    methods: {
        clicForward: function () {

            let nexArrow = document.getElementById('nex');
            let preArrow = document.getElementById('pre');
            if (this.IndexUno == 0) {

                this.IndexUno = 4
            };

            if (this.IndexDue == 1) {

                this.IndexDue = 5
            };

            if (this.IndexTre == 2) {

                this.IndexTre = 6
            };

            if (this.IndexQuattro == 3) {
                nexArrow.classList.add('hide')
                preArrow.classList.remove('hide')
                this.IndexQuattro = 7
            }

        },
        clicBackward: function () {

            let nexArrow = document.getElementById('nex');
            let preArrow = document.getElementById('pre');

            if (this.IndexUno == 4) {

                this.IndexUno = 0
            };

            if (this.IndexDue == 5) {

                this.IndexDue = 1
            };

            if (this.IndexTre == 6) {

                this.IndexTre = 2
            };

            if (this.IndexQuattro == 7) {
                nexArrow.classList.remove('hide')
                preArrow.classList.add('hide')
                this.IndexQuattro = 3
            }
        },
    },
    components: {

    },
    props: {
        slides: {
            type: Array,
        }
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
            <button v-on:click="clicBackward()">
                1026 days
            </button>
            <button v-on:click="clicForward()">
                13 hours
            </button>
            <button v-on:click="clicBackward()">
                24 mins
            </button>
            <button v-on:click="clicForward()">
                17 secs
            </button>
        </div>
        <div class="onSale d-flex justify-content-between py-3 my-3">
            <div class="product">
                <img :src="slides[IndexUno].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexDue].title }}</div>
                        <div>£{{ slides[IndexDue].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexDue].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexUno].title }}</div>
                        <div>£{{ slides[IndexUno].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexTre].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexQuattro].title }}</div>
                        <div>£{{ slides[IndexQuattro].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexQuattro].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexTre].title }}</div>
                        <div>£{{ slides[IndexTre].price }}</div>
                    </div>
                </div>
            </div>
            <div>
                <button id="pre" v-on:click="clicBackward()" class="prev button"> ← </button>
                <button id="nex" v-on:click="clicForward()" class="next button"> → </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    position: relative;

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

.prev {
    left: -2%;
}

.next {
    right: -4%;
}

.button {
    top: 50%;
    padding: 1px 10px;
    position: absolute;
    transform: translate(-50%,-50%);
}

.hide {
    visibility: hidden;
}
</style>