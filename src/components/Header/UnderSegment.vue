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
        phoneNumber: {
            type: String,
        }
    }


};
</script>

<template> <!-- SEGMENTO INFERIORE HEADER -->
    <div class="under d-flex justify-content-center align-items-center text-light py-1">

        <!-- ICONA IMMAGINE GAME HDAX  -->
        <div class="iconHDAX">
            ciao
        </div>

        <!-- NAVIGATORE CENTRALE  -->
        <div class="menuCentrale d-flex justify-content-center text-light">
            <ul v-for="item in this.menuList" class="d-flex align-items-center">
                <li>
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
        </div>

        <!-- BLOCCO ICONE AGGIUNTIVE -->
        <div class="moreIcons">
            ciao
        </div>
    </div>
</template>

<style lang="scss">
.under {
    width: 80%;
    height: 10vh;
    margin: 0 auto;
    text-align: center;

    .iconHDAX {
        width: 20%;
        background-color: coral;
    }

    .menuCentrale {
        width: 60%;
        background-color: aqua;

        ul {
            width: calc(100% / 6);
            list-style: none;

            li {
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }

    .moreIcons {
        width: 20%;
        background-color: coral;
    }
}
</style>
