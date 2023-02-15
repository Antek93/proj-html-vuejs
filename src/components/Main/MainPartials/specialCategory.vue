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

.cardsContainer {
    width: 100%;

    .card {
        width: calc(33.3333333333% - 8px);
        border-radius: 0px;
        height: 479px;
        background-color: white;
        border: 0px;
        position: relative;

        .collapsing {
            width: 18%;
            height: 20px;
            line-height: 20px;
            vertical-align: middle;
            color: black;
            font-size: 30px;
            font-weight: bold;
            border-radius: 6px;
            border: 0.5px solid gray;
            background-color: white;
            position: absolute;
            transform: translate(-50%, .50%);
            top: 50%;
            left: 50%;

            div {
                font-size: 11px;
                text-align: center;
            }
        }

        img {
            width: 100%;
            height: 100%;
        }

        .purpleOverlay {
            width: 100%;
            height: 79px;
            position: absolute;
            background-color: #2b012b8f;
            bottom: 0%;

            .game-title {
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 2px;
            }

            .shopping {
                a {
                    text-decoration: underline;
                    color: white;
                }
                a:hover {
                    color: #F9AA01;
                }
            }
        }

        .purpleOverlay:hover {
            background-color: black;
        }

    }

    .invisible {
        display: none;

    }
}
</style>