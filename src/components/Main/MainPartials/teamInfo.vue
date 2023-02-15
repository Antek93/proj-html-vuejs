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
        changeDots () {
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
.container-fluid {
    height: 60vh;
    position: relative;
    --bs-gutter-x: 0rem !important;
    margin-top: 67px;
    margin-bottom: 13px;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .teamProfile {
        width: 70%;
        height: 269px;
        position: absolute;
        top: 18%;
        left: 14%;
        text-align: center;
        z-index: 2;

        .teamProfilePhoto {
            width: 130px;
            height: 130px;
            clip-path: circle(38%);

            img {
                width: 100%;
                height: 100%;
            }
        }

    }

    .infoProfile {
        position: absolute;
        top: 52%;
        left: 8%;
        text-align: center;
        width: 78%;
    }

    .textProfile {
        width: 77%;
        color: rgb(128, 128, 128);
        padding: 1px -33px;
        margin: 0 auto;
    }

    .nameProfile {
        position: absolute;
        padding: 5px 0px;
        top: -44%;
        left: 45%;
        font-size: 23px;

        .name {
            color: white;
        }

        .job {
            color: rgb(249, 207, 0);
        }

    }

    .circle {
        width: 106px;
        height: 106px;
        background-color: rgb(249, 207, 0);
        border-radius: 50%;
        position: absolute;
        bottom: 134%;
        left: 48.1%;
    }

    .threeDots {
        width: calc(16.6666666667% - 162px);
        position: absolute;
        top: 77%;
        color: white;
        left: 46%;

        .dotstyle {
            color: white;
        }

        .newDotStyle {
            color: rgb(249, 207, 0);
        }
    }
}
</style>