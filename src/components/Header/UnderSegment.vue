<script>
//Import da store.js
import { store } from "../../store"

export default {
    name: 'UnderSegment',
    data() {
        return {
            store
        }
    },
    created() {

    },
    methods: {
    },
    props: {
        menuList: {
            type: Array,
        },
    }


};
</script>

<template> <!-- SEGMENTO INFERIORE HEADER -->
    <div class="under d-flex justify-content-center align-items-center text-light py-1">

        <!-- ICONA IMMAGINE GAME HDAX  -->
        <div class="iconHDAX d-flex">
            <img src="../../assets/bph/mob-logo.png" alt="">
        </div>

        <!-- NAVIGATORE CENTRALE  -->
        <div class="menuCentrale d-flex justify-content-center align-items-center text-light">
            <ul v-for="item in this.menuList" class="d-flex justify-content-center align-items-center">
                <li>
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
        </div>

        <!-- BLOCCO ICONE AGGIUNTIVE -->
        <div class="moreIcons d-flex justify-content-center">
            <div class="thisIcon">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
            <div class="thisIcon">
                <font-awesome-icon icon="fa-regular fa-user" />
            </div>
            <div class="bagShop thisIcon d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                <div class="priceCart"> (0) £0.00 </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.under {
    width: 80%;
    height: 10vh;
    margin: 0 auto;
    text-align: center;

    .iconHDAX {
        width: 20%;

        img {
            width: 86%;
            padding-left: 17px;
        }
    }
}

.menuCentrale {
    width: 60%;

    ul {
        width: calc((100% / 6) - 13px);
        list-style: none;
        padding: 0px;
        margin: 0;

        li {
            a {
                text-decoration: none;
                color: white;
                font-size: 21px;
                // rgb(249, 207, 0);
            }
        }
    }
}

.moreIcons {
    width: 20%;

    .thisIcon {
        padding: 0px 13px;
    }

}

.bagShop {
    position: relative;

    .priceCart {
        font-size: 13px;
        position: relative;
        width: 100;
        top: 11%;
        left: 5%;
        color: rgb(249, 207, 0);
    }

}
</style>
