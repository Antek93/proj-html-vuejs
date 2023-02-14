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
    props : {
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
                        <div>#Simbolo#</div>
                    </div>
                    <div>
                        <div> {{ element.title }} </div>
                        <div> {{ element.subtitle }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.mainBox {
    width: 80%;
    margin: 0 auto;
    font-size: 15px;
    padding-top: 2%;
    color: white;
}

.info {
    widows: calc(100% / 4);
}


</style>
