<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'teamInfo',
    data() {
        return {
            msg: 'Ciao',
            store,
            activeIndex: 0,

        }
    },
    created() {

    },
    methods: {
        changeDisplay() {
            if (this.activeIndex >= 3) {
                this.activeIndex = 0
            } else {
                this.activeIndex++
                console.log(this.activeIndex)
            }
        },
        changeDots() {
            console.log(this.activeIndex)
            if (this.activeIndex == 0) {
                let one = document.getElementById('dotOne');
                one.classList.remove('dotstyle');
                one.classList.add('newDotStyle');
            } else if (this.activeIndex == 1) {
                let two = document.getElementById('dotTwo');
                two.classList.remove('dotstyle');
                two.classList.add('newDotStyle');
            } else if (this.activeIndex == 2) {
                let three = document.getElementById('dotThree');
                three.classList.remove('dotstyle');
                three.classList.add('newDotStyle');
            } else if (this.activeIndex = 3) {
                let one = document.getElementById('dotOne');
                let two = document.getElementById('dotTwo');
                let three = document.getElementById('dotThree');
                one.classList.remove('newDotStyle');
                two.classList.remove('newDotStyle');
                three.classList.remove('newDotStyle');
                one.classList.add('dotstyle');
                two.classList.add('dotstyle');
                three.classList.add('dotstyle');

            }
        }
    },
    components: {
    },
    props: {
        team: {
            type: Array,
        }
    }

};
</script>

<template>
    <div @click="changeDisplay(), changeDots()" class="teamBox container-fluid">
        <img src="../../../assets/bph/parallax.jpg" alt="">
        <div class="teamProfile d-flex justify-content-center">
            <div class="teamProfilePhoto">
                <img :src="team[activeIndex].image" alt="">
            </div>
        </div>
        <div class="infoProfile">
            <div class="circle"></div>
            <div class="nameProfile">
                <span class="name">{{ team[activeIndex].name }} </span>
                <span class="job"> {{ team[activeIndex].job }}</span>
            </div>
            <div class="textProfile d-flex justify-content-center">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, numquam corporis rerum facilis
                    officiis
                    aperiam consequatur Nemo architecto in neque, delectus, reprehenderit provident nostrum hic
                    similique
                    eaque aut doloribus sit.
                </p>
            </div>
            <div class="quotes">
                <div class="quoteBox">
                    <font-awesome-icon class="thisQuote" icon="fa-solid fa-quote-right" />
                </div>
            </div>
        </div>
        <div class="threeDots d-flex justify-content-evenly">
            <div id="dotOne" class="dotstyle">
                <font-awesome-icon icon="fa-solid fa-circle" />
            </div>
            <div id="dotTwo" class="dotstyle">
                <font-awesome-icon icon="fa-solid fa-circle" />
            </div>
            <div id="dotThree" class="dotstyle">
                <font-awesome-icon icon="fa-solid fa-circle" />
            </div>
        </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/teamInfo.scss";
</style>