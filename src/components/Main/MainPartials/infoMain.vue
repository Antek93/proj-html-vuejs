<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'infoMain',
    data() {
        return {
            msg: 'Ciao',
            store,
        }
    },
    created() {

    },
    methods: {
    },
    components: {
    },
    props: {
        benefits: {
            type: Array,
        }
    }

};
</script>

<template>
    <!-- CONTAINER CON: "INFO" + "MOST POPULAR" + "LATEST GAME"-->
    <div class="mainBox">

        <!-- "INFO CONTAINER" -->
        <div class="d-flex justify-content-between py-3">
            <div v-for="element in benefits">
                <div class="info d-flex">
                    <div>
                        <font-awesome-icon class="simbolo" :icon="`${element.icon}`" />
                    </div>
                    <div>
                        <div class="infoTitle">
                            {{ element.title }}
                        </div>
                        <div class="infoSubtitle">
                            {{ element.subtitle }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/partials/MainAttributes/MainAttributesPartials/infoMain.scss";

.mainBox {
    width: 80%;
    margin: 0 auto;
    font-size: 15px;
    padding-top: 2%;
    color: white;
}

.info {
    widows: calc(100% / 4);

    .simbolo {
        font-size: 40px;
        padding: 4px 16px;

    }

    .infoTitle {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1.5px;

    }

    .infoSubtitle {
        font-size: 15px;
        color: gray;
        letter-spacing: 1px;
    }
}
.info:hover {
        color: rgb(249, 207, 0);
        cursor: pointer;
    }
</style>
