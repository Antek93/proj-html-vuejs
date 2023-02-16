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
@import "../../styles/partials/FooterAttributes/FooterAttributes.scss";
</style>
