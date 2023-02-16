<script>
//Import da store.js

export default {
    name: 'teamInfo',
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        builded (item) {
            if (item == 'immagineUno') {
                let firstOne = document.getElementById('immagineUno');
                firstOne.classList.remove('invisible')
            } else if (item == 'immagineDue') {
                let secondOne = document.getElementById('immagineDue');
                secondOne.classList.remove('invisible')
            } else if (item == 'immagineTre') {
                let thirdOne = document.getElementById('immagineTre');
                thirdOne.classList.remove('invisible')
            } else {
                console.log('errore')
            }
        },
        unbuilded (item) {
            if (item == 'immagineUno') {
                let firstOne = document.getElementById('immagineUno');
                firstOne.classList.add('invisible')
            } else if (item == 'immagineDue') {
                let secondOne = document.getElementById('immagineDue');
                secondOne.classList.add('invisible')
            } else if (item == 'immagineTre') {
                let thirdOne = document.getElementById('immagineTre');
                thirdOne.classList.add('invisible')
            } else {
                console.log('errore')
            }
        }
    },
    components: {
    }

};
</script>

<template>
    <div class="blogBox py-4 text-white">
        <div class="d-flex justify-content-center">
            <h1>
                New Game Blog
            </h1>
        </div>
        <div class="trattoBox d-flex justify-content-center">
            <div class="tratto"></div>
        </div>
        <div class="newsContainer d-flex justify-content-between text-white">
            <div @mouseover="builded('immagineUno')" @mouseleave="unbuilded('immagineUno')" class="news">
                <div>
                    <img src="../../../assets/bph/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="blogInfo d-flex">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Anyway REPS is a NYC agency repres enting photohraphers
                    </div>
                    <div id="immagineUno" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
                    </div>
                </div>
            </div>
            <div @mouseover="builded('immagineDue')" @mouseleave="unbuilded('immagineDue')" class="news">
                <div>
                    <img src="../../../assets/bph/Illo-inventore-veritatis-quasi-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="d-flex blogInfo">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Nasual risus suscipit Lorem Ipsum is simply text
                    </div>
                    <div id="immagineDue" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
                    </div>
                </div>
            </div>
            <div @mouseover="builded('immagineTre')" @mouseleave="unbuilded('immagineTre')" class="news">
                <div>
                    <img src="../../../assets/bph/At-vero-eos-et-accusamus-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="blogInfo d-flex">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Nostrum lesum Christum Lorem Ipsum is simply text
                    </div>
                    <div id="immagineTre" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/newGameBlog.scss";
</style>