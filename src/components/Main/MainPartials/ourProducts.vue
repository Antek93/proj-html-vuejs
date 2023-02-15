<script>
export default {
    name: 'ourProducts',
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

            let nextArrow = document.getElementById('next');
            let previousArrow = document.getElementById('previous');
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
                nextArrow.classList.add('hidden')
                previousArrow.classList.remove('hidden')
                this.IndexQuattro = 7
            }

        },
        clicBackward: function () {

            let nextArrow = document.getElementById('next');
            let previousArrow = document.getElementById('previous');

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
                nextArrow.classList.remove('hidden')
                previousArrow.classList.add('hidden')
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
                Our Products
            </h1>
        </div>
        <div class="trattoBox d-flex justify-content-center">
            <div class="tratto"></div>
        </div>
        <div class="btnContainer d-flex justify-content-center align-items-center text-center">
            <button class="buttonz" v-on:click="clicBackward()">
                Featured
            </button>
            <button class="buttonz" v-on:click="clicForward()">
                New Arrival
            </button>
            <button class="buttonz" v-on:click="clicBackward()">
                Best Sellers
            </button>
        </div>
        <div class="onSale d-flex justify-content-between py-3 my-3">
            <div class="product">
                <img :src="slides[IndexUno].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexUno].title }}</div>
                        <div>£{{ slides[IndexUno].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexDue].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexDue].title }}</div>
                        <div>£{{ slides[IndexDue].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexTre].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexTre].title }}</div>
                        <div>£{{ slides[IndexTre].price }}</div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img :src="slides[IndexQuattro].image" alt="">
                <div class="blackOverlay">
                    <div>
                        <div>{{ slides[IndexQuattro].title }}</div>
                        <div>£{{ slides[IndexQuattro].price }}</div>
                    </div>
                </div>
            </div>
            <div>
                <button id="previous" v-on:click="clicBackward()" class="prev button"> &lt </button>
                <button id="next" v-on:click="clicForward()" class="next button"> > </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.specialBox {
    width: 80%;
    margin: 0 auto;

    h1 {
        letter-spacing: 4px;
    }

    .trattoBox {
        margin-bottom: 34px;
        margin-top: 4px;

        .tratto {
            width: 7.5%;
            border: 2px solid #F9AA01;
            border-radius: 10px;
        }
    }
}

.btnContainer {
    background-color: none;
    .buttonz {
        width: calc(33.3333333333% - 221px);
        background-color: inherit;
        padding: 12px 38px;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 21px;
        border: 0.5px solid rgba(128, 128, 128, 0.218);
        color: white;
    }
    .buttonz:hover {
        color:#F9AA01;
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
    left: -2.52%;
}

.next {
    right: -4%;
}

.button {
    top: 59%;
    padding: 1px 13px;
    position: absolute;
    transform: translate(-50%, -50%);
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: inherit;
    color: white;
    border: 1px solid white;
}

.hidden {
    visibility: hidden;
}
</style>