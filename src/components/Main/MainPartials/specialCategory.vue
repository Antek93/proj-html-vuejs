<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'specialCategory',
    data() {
        return {
            msg: 'Ciao',
            store,
        }
    },
    created() {

    },
    methods: {
        buildDiv(element) {
            if (element == 'gameUno') {
                let gameUno = document.getElementById('gameUno');
                gameUno.classList.remove('invisible');
            } else if (element == 'gameDue') {
                let gameDue = document.getElementById('gameDue');
                gameDue.classList.remove('invisible');
            } else if (element == 'gameTre') {
                let gameTre = document.getElementById('gameTre');
                gameTre.classList.remove('invisible')
            } else {
                console.log('error')
            }

        },
        removeDiv(element) {
            if (element == 'gameUno') {
                let gameUno = document.getElementById('gameUno');
                gameUno.classList.add('invisible');
            } else if (element == 'gameDue') {
                let gameDue = document.getElementById('gameDue');
                gameDue.classList.add('invisible');
            } else if (element == 'gameTre') {
                let gameTre = document.getElementById('gameTre');
                gameTre.classList.add('invisible')
            } else {
                console.log('error')
            }
        }
    },


};
</script>

<template>
    <!-- CONTAINER SPECIAL CATERGORY -->
    <div class="specialBox my-3 text-white">
        <div class="d-flex justify-content-center">
            <h1>
                Special Category
            </h1>
        </div>
        <div class="trattoBox d-flex justify-content-center">
            <div class="tratto"></div>
        </div>
        <div class="cardsContainer d-flex justify-content-between">
            <div @mouseleave="removeDiv('gameUno')" @mouseover="buildDiv('gameUno')" class="card">
                <img src="../../../assets/bph/category-image-02-446x550_t.jpg" alt="">
                <div class="purpleOverlay">
                    <div>
                        <div class="game-title px-2 py-1">Battlefield III</div>
                        <div class="shopping px-2">
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div id="gameUno" class="collapsing invisible">
                    <div>
                        Battlefield
                    </div>
                </div>
            </div>
            <div @mouseleave="removeDiv('gameDue')" @mouseover="buildDiv('gameDue')" class="card">
                <img src="../../../assets/bph/category-image-01-446x550_t.jpg" alt="">
                <div class="purpleOverlay">
                    <div>
                        <div class="game-title px-2 py-1">Sniper II</div>
                        <div class="shopping px-2">
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div id="gameDue" class="collapsing invisible">
                    <div>
                        Sniper
                    </div>
                </div>
            </div>
            <div @mouseleave="removeDiv('gameTre')" @mouseover="buildDiv('gameTre')" class="card">
                <img src="../../../assets/bph/category-image-03-446x550_t.jpg" alt="">
                <div class="purpleOverlay">
                    <div>
                        <div class="game-title px-2 py-1">DragonBall: Kakarot</div>
                        <div class="shopping px-2">
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div id="gameTre" class="collapsing invisible">
                    <div>
                        Kakarot
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/specialCategory.scss";
</style>