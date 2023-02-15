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
        mount(element) {
            if (element == 'blockUno') {
                let uno = document.getElementById('Uno');
                uno.classList.remove('invisible')
            } else if (element == 'blockDue') {
                let due = document.getElementById('Due');
                due.classList.remove('invisible')

            } else if (element == 'blockTre') {
                let tre = document.getElementById('Tre')
                tre.classList.remove('invisible')
            } else if (element == 'blockQuattro') {
                let quattro = document.getElementById('Quattro')
                quattro.classList.remove('invisible')
            } else {
                console.log ('errore')
            }
        },
        dismount(element) {
            if (element == 'blockUno') {
                let uno = document.getElementById('Uno');
                uno.classList.add('invisible')
            } else if (element == 'blockDue') {
                let due = document.getElementById('Due');
                due.classList.add('invisible')

            } else if (element == 'blockTre') {
                let tre = document.getElementById('Tre')
                tre.classList.add('invisible')
            } else if (element == 'blockQuattro') {
                let quattro = document.getElementById('Quattro')
                quattro.classList.add('invisible')
            } else {
                console.log ('errore')
            }
        },
        clicForward: function () {

            let nextArrow = document.getElementById('nextArr');
            let previousArrow = document.getElementById('prevArr');
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

            let nextArrow = document.getElementById('nextArr');
            let previousArrow = document.getElementById('prevArr');

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
        },
        photos: {
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
        <div class="trattoBox d-flex justify-content-center">
            <div class="tratto"></div>
        </div>
        <div class="btnContainer d-flex justify-content-center align-items-center text-center">
            <button class="buttonz" v-on:click="clicBackward()">
                1026 days
            </button>
            <button class="buttonz" v-on:click="clicForward()">
                13 hours
            </button>
            <button class="buttonz" v-on:click="clicBackward()">
                24 mins
            </button>
            <button class="buttonz" v-on:click="clicBackward()">
                17 secs
            </button>
        </div>
        <div class="onSale d-flex justify-content-between py-3 my-3">
            <div @mouseleave="dismount('blockUno')"  @mouseover="mount('blockUno')" class="product">
                <img :src="photos[IndexUno].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexUno].rating }}</div>
                        <div>{{ slides[IndexUno].title }}</div>
                        <div class="golden">£{{ slides[IndexUno].price }}</div>
                    </div>
                </div>
                <div id="Uno" class=" invisible product-interation-box d-flex justify-content-between">
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-bag-shopping" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-heart" /> </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-maximize" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-eye" /> </button>
                </div>
            </div>
            <div @mouseleave="dismount('blockDue')" @mouseover="mount('blockDue')" class="product">
                <img :src="photos[IndexDue].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexDue].rating }}</div>
                        <div>{{ slides[IndexDue].title }}</div>
                        <div class="golden">£{{ slides[IndexDue].price }}</div>
                    </div>
                </div>
                <div id="Due" class="invisible product-interation-box d-flex justify-content-between">
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-bag-shopping" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-heart" /> </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-maximize" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-eye" /> </button>
                </div>
            </div>
            <div @mouseleave="dismount('blockTre')" @mouseover="mount('blockTre')" class="product">
                <img :src="photos[IndexTre].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexTre].rating }}</div>
                        <div>{{ slides[IndexTre].title }}</div>
                        <div class="golden">£{{ slides[IndexTre].price }}</div>
                    </div>
                </div>
                <div id="Tre" class="invisible product-interation-box d-flex justify-content-between">
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-bag-shopping" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-heart" /> </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-maximize" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-eye" /> </button>
                </div>
            </div>
            <div @mouseleave="dismount('blockQuattro')" @mouseover="mount('blockQuattro')" class="product">
                <img :src="photos[IndexQuattro].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexQuattro].rating }}</div>
                        <div>{{ slides[IndexQuattro].title }}</div>
                        <div class="golden">£{{ slides[IndexQuattro].price }}</div>
                    </div>
                </div>
                <div id="Quattro" class="invisible product-interation-box d-flex justify-content-between">
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-bag-shopping" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-heart" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-solid fa-maximize" />
                    </button>
                    <button class="productInteration">
                        <font-awesome-icon class="icn" icon="fa-regular fa-eye" />
                    </button>
                </div>
            </div>
            <div>
                <button id="prevArr" v-on:click="clicBackward()" class="prev button"> &lt </button>
                <button id="nextArr" v-on:click="clicForward()" class="next button"> > </button>
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
        width: calc(33.3333333333% - 220px);
        background-color: inherit;
        padding: 12px 38px;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 21px;
        border: 0.5px solid rgba(128, 128, 128, 0.218);
        color: white;
    }

    .buttonz:hover {
        color: #F9AA01;
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
            background-color: #1e001e;
            bottom: 0%;

            .infoItems {
                padding-left: 10px;

                div {
                    font-size: 17px;
                    letter-spacing: 1px;

                }

                .golden {
                    color: #F9AA01;
                }
            }
        }

        .product-interation-box {
            position: absolute;
            width: 23.3%;
            height: 33px;
            z-index: 2;
            background-color: #1e001e;
            bottom: -21%;
            color: white;
            text-align: center;


            .productInteration {
                width: 26%;
                height: 107%;
                border: 1px solid black;
                color: white;
                background-color: inherit;
                padding: 4px;
                .icn:hover {
                    color: #F9AA01;
                }

            }

        }

    }
}

.prev {
    left: -2.52%;
}
.prev:hover {
    border: 1px solid #F9AA01;
    color: #F9AA01;
}
.next {
    right: -4%;
}
.next:hover {
    border: 1px solid #F9AA01;
    color: #F9AA01;
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

.invisible {
    display: none;
}
</style>