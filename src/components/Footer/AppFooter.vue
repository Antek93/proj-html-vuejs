<script>
import { stringifyExpression } from '@vue/compiler-core';



export default {
    name: 'AppFooter',
    data() {
        return {
            msg: 'Ciao',
        }
    },
    created() {

    },
    methods: {
    },
    props: {
        addressInfo: {
            type: Array,
        },
        extras: {
            type: Array,
        },
        info: {
            type: Array,
        }
    },

};
</script>

<template>
    <div class="container-fluid">
        <div class="text-white d-flex align-items-center">
            <div class="footContainer d-flex justify-content-between">
                <div class="address">
                    <div>Address Info</div>
                    <ul class="ulStyle" v-for="element in addressInfo">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="info">
                    <div>Information</div>
                    <ul class="ulStyle" v-for="element in info">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="extras d-flex flex-column">
                    <div>Extras</div>
                    <ul class="ulStyle" v-for="element in extras">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="newsletter">
                    <div>Our Newsletter</div>
                    <p>There are many variations of passages of <br> form humour or randomised</p>
                    <form @submit.prevent class="inputContainer">
                        <input type="text">
                        <button>
                            <font-awesome-icon class="paper" icon="fa-regular fa-paper-plane" />
                        </button>
                    </form>
                    <div class="icone d-flex justify-content-start align-items-baseline">
                        <div>
                            <font-awesome-icon icon="fa-brands fa-facebook" />
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-google-plus-g" />
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-skype" />
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr id="hrStyle">
        <div class="downFooter d-flex justify-content-between">
            <div class="copyright">
                <a href="#">Copyright @ 2023 Codezeel</a>
            </div>
            <div class="creditCards d-flex justify-content-evenly">
                <div class="payBox">
                    <img src="../../assets/bph/american.png" alt="">
                </div>
                <div class="payBox">
                    <img src="../../assets/bph/discover.png" alt="">
                </div>

                <div class="payBox">
                    <img src="../../assets/bph/mastercard.png" alt="">
                </div>

                <div class="payBox">
                    <img src="../../assets/bph/paypal.png" alt="">
                </div>

                <div class="payBox">
                    <img src="../../assets/bph/visa.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-image: url('../../assets/bph/footer-bg.png');
    background-size: cover;
    --bs-gutter-x: 0rem;


    .footContainer {
        width: 80%;
        margin: 0 auto;

        ul {
            list-style: none;
            padding: 2px 0px;
            height: 17px;

            li {

                a {
                    text-decoration: none;
                    color: white;
                    font-size: 17px;
                }

                a:hover {
                    color: rgb(249, 207, 0);
                }
            }
        }
    }

    .address div:first-child,
    .newsletter div:first-child,
    .extras div:first-child,
    .info div:first-child {
        padding: 20px 0px;
        font-size: 25px;
    }

    hr {
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid white;
        margin-top: 101px;
    }

    .downFooter {
        width: 80%;
        margin: 0 auto;
        color: white;

        div {
            a {
                text-decoration: none;
                color: white;
            }

        }
    }

    .payBox {
        width: calc((100% / 5) - 20px);
        height: 80%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .copyright {
        width: 75%;
    }

    .creditCards {
        width: 25%;
    }
}

// .ulStyle {
//     height: 17px;
// }

p {
    font-size: 17px;
}

.inputContainer {
    position: relative;

    input {
        width: 270px;
    }

    button {
        width: 38px;
        height: 32px;
        border: none;
        position: absolute;
        top: 3.9%;
        left: 231px;
        z-index: 1;
        background-color: inherit;
    }

    .paper {
        top: 19%;
        position: absolute;
        left: 8%;
        color: black;
    }

}

.icone {
    div {
        width: calc((100% / 5) - 15px);
    }
    div:hover {
        color: rgb(249, 207, 0);
        cursor: pointer;
    }
}
</style>
