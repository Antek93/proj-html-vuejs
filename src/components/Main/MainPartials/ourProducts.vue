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
                let uno = document.getElementById('blockUno');
                uno.classList.remove('invisible')
            } else if (element == 'blockDue') {
                let due = document.getElementById('blockDue');
                due.classList.remove('invisible')

            } else if (element == 'blockTre') {
                let tre = document.getElementById('blockTre')
                tre.classList.remove('invisible')
            } else if (element == 'blockQuattro') {
                let quattro = document.getElementById('blockQuattro')
                quattro.classList.remove('invisible')
            } else {
                console.log ('errore')
            }
        },
        dismount(element) {
            if (element == 'blockUno') {
                let uno = document.getElementById('blockUno');
                uno.classList.add('invisible')
            } else if (element == 'blockDue') {
                let due = document.getElementById('blockDue');
                due.classList.add('invisible')

            } else if (element == 'blockTre') {
                let tre = document.getElementById('blockTre')
                tre.classList.add('invisible')
            } else if (element == 'blockQuattro') {
                let quattro = document.getElementById('blockQuattro')
                quattro.classList.add('invisible')
            } else {
                console.log ('errore')
            }
        },
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
            <div @mouseleave="dismount('blockUno')"  @mouseover="mount('blockUno')" class="product">
                <img :src="slides[IndexUno].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexUno].rating }}</div>
                        <div>{{ slides[IndexUno].title }}</div>
                        <div class="golden">£{{ slides[IndexUno].price }}</div>
                    </div>
                </div>
                <div id="blockUno" class=" invisible product-interation-box d-flex justify-content-between">
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
                <img :src="slides[IndexDue].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexDue].rating }}</div>
                        <div>{{ slides[IndexDue].title }}</div>
                        <div class="golden">£{{ slides[IndexDue].price }}</div>
                    </div>
                </div>
                <div id="blockDue" class="invisible product-interation-box d-flex justify-content-between">
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
                <img :src="slides[IndexTre].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexTre].rating }}</div>
                        <div>{{ slides[IndexTre].title }}</div>
                        <div class="golden">£{{ slides[IndexTre].price }}</div>
                    </div>
                </div>
                <div id="blockTre" class="invisible product-interation-box d-flex justify-content-between">
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
                <img :src="slides[IndexQuattro].image" alt="">
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexQuattro].rating }}</div>
                        <div>{{ slides[IndexQuattro].title }}</div>
                        <div class="golden">£{{ slides[IndexQuattro].price }}</div>
                    </div>
                </div>
                <div id="blockQuattro" class="invisible product-interation-box d-flex justify-content-between">
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
                <button id="previous" v-on:click="clicBackward()" class="prev button"> &lt </button>
                <button id="next" v-on:click="clicForward()" class="next button"> > </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/ourProducts.scss";
</style>