<script>
//Import da store.js
import { store } from "../../store"

export default {
    name: 'AppHeader',
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

<template>
    <header>
        <!-- CONTENITORE PRINCIPALE HEADER: SEGMENTO 1 + SEGMENTO 2 -->
        <div class="container-fluid bg-dark">
            <!-- SEGMENTO SUPERIORE HEADER -->
            <div class="over d-flex justify-content-center align-items-center text-light py-1">
                <div class="wishlist">
                    <div>
                        wishlist(0)
                    </div>
                </div>
                <div class="splitter">
                    <div>
                        |
                    </div>
                </div>
                <div class="needHelp">
                    <div>
                        Need Help?
                    </div>
                </div>
                <div class="phoneNumbers">
                    <div>
                        Call {{ phoneNumber }}
                    </div>
                </div>
            </div>

            <!-- SEGMENTO INFERIORE HEADER -->
            <div class="over d-flex justify-content-center align-items-center text-light py-1">
                <div class="iconHDAX">
                    ciao
                </div>
                <!--Blocco contenente menù di navigazione centrale-->
                <div class="menuCentrale d-flex justify-content-center text-light">
                    <ul v-for="item in this.menuList" class="d-flex align-items-center">
                        <li>
                            <a href="#">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div class="moreIcons">
                    ciao
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.over {
    width: 70%;
    height: 7vh;
    margin: 0 auto;
    text-align: center;

    .wishlist {
        width: 8%;

        div {
            cursor: pointer;
        }
    }

    .splitter {
        width: 4%;

        div {
            cursor: none;
        }
    }

    .needHelp {
        width: 8%;

        div {
            cursor: pointer;

        }
    }

    .phoneNumbers {
        width: 80%;
        text-align: end;
    }

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
