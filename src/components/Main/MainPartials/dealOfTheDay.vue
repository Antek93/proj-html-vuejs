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
    <!-- CONTAINER: DEAL OF THE DAY -->
    <div class="specialBox py-3 my-3 text-white">
        <div class="d-flex justify-content-center">
            <!-- TITLE  -->
            <h1>
                Deal Of The Day
            </h1>
        </div>
        <div class="trattoBox d-flex justify-content-center">
            <!-- TRATTINO GIALLO SEPARE' -->
            <div class="tratto"></div> 
        </div>
        <div class="btnContainer d-flex justify-content-center align-items-center text-center">
            <!-- BOTTONI SCADENZA ORARIA -->
            <button class="buttonz" v-on:click="clicBackward()">
                1026 days
            </button>
            <button class="buttonz" v-on:click="clicForward()">
                13 hours
            </button>
            <button class="buttonz" v-on:click="clicBackward()">
                24 mins
            </button>
            <button class="buttonz" v-on:click="clicForward()">
                17 secs
            </button>
        </div>
        <div class="onSale d-flex justify-content-between py-3 my-3">
            <div @mouseleave="dismount('blockUno')"  @mouseover="mount('blockUno')" class="product">
                <img :src="photos[IndexUno].image" alt="">
                <!-- 1) BLOCCO OVERLAY NELLA PARTE INFERIORE DEI PRODOTTI -->
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexUno].rating }}</div>
                        <div>{{ slides[IndexUno].title }}</div>
                        <div class="golden">??{{ slides[IndexUno].price }}</div>
                    </div>
                </div>
                <!-- 1) ELEMENTO NELLA SEZIONE A COMPARSA NELLA PARTE INFERIORE DEI PRODOTTI  -->
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
                <!-- 2) BLOCCO OVERLAY NELLA PARTE INFERIORE DEI PRODOTTI -->
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexDue].rating }}</div>
                        <div>{{ slides[IndexDue].title }}</div>
                        <div class="golden">??{{ slides[IndexDue].price }}</div>
                    </div>
                </div>
                <!-- 2) ELEMENTO NELLA SEZIONE A COMPARSA NELLA PARTE INFERIORE DEI PRODOTTI  -->
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
                <!-- 3) BLOCCO OVERLAY NELLA PARTE INFERIORE DEI PRODOTTI -->
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexTre].rating }}</div>
                        <div>{{ slides[IndexTre].title }}</div>
                        <div class="golden">??{{ slides[IndexTre].price }}</div>
                    </div>
                </div>
                <!-- 3) ELEMENTO NELLA SEZIONE A COMPARSA NELLA PARTE INFERIORE DEI PRODOTTI  -->
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
                <!-- 4) BLOCCO OVERLAY NELLA PARTE INFERIORE DEI PRODOTTI -->
                <div class="blackOverlay">
                    <div class="infoItems">
                        <div class="golden">{{ slides[IndexQuattro].rating }}</div>
                        <div>{{ slides[IndexQuattro].title }}</div>
                        <div class="golden">??{{ slides[IndexQuattro].price }}</div>
                    </div>
                </div>
                <!-- 4) ELEMENTO NELLA SEZIONE A COMPARSA NELLA PARTE INFERIORE DEI PRODOTTI  -->
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
            <!-- FRECCE CON FUNZIONI DI CAMBIO CAROSELLO  -->
            <div>
                <button id="prevArr" v-on:click="clicBackward()" class="prev button"> &lt </button>
                <button id="nextArr" v-on:click="clicForward()" class="next button"> > </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/DealOfTheDay.scss";
</style>