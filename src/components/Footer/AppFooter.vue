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
                    <ul v-for="element in addressInfo">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="info">
                    <div>Information</div>
                    <ul v-for="element in info">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="extras d-flex flex-column">
                    <div>Extras</div>
                    <ul v-for="element in extras">
                        <li>
                            <a href="#">{{ element }}</a>
                        </li>
                    </ul>
                </div>
                <div class="newsletter">
                    <div>Our Newsletter</div>
                    <p>There are many variations of passages of <br> form humour or randomised</p>
                    <input type="text">
                    <div class="icone">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="downFooter d-flex justify-content-between">
            <div class="copyright">
                <a href="#">Copyright</a>
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
    height: 45vh;
    background-image: url('../../assets/bph/footer-bg.png');
    background-size: cover;

    .footContainer {
        width: 80%;
        margin: 0 auto;

        ul {
            list-style: none;
            padding: 2px 0px;

            li {

                a {
                    text-decoration: none;
                    color: white;
                    font-size: 15px;
                }
            }
        }
    }

    .address div:first-child,
    .newsletter div:first-child,
    .extras div:first-child,
    .info div:first-child {
        padding: 20px 0px;
        font-size: 20px;
    }

    hr {
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid white;
    }

    .downFooter {
        width: 80%;
        margin: 0 auto;
        color: white;
        div {
            a{
                text-decoration: none;
                color: white;
            }
        }
    }
    .payBox {
        width: calc((100% / 5) - 20px) ;
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
</style>
