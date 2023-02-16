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
</style>
