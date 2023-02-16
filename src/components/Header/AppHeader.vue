<script>
import OverSegment from "../Header/OverSegment.vue"
import UnderSegment from "../Header/UnderSegment.vue"

export default {
    name: 'AppHeader',
    data() {
        return {
        }
    },
    components: {
        OverSegment,
        UnderSegment
    },
    created() {

    },
    methods: {

    },
    props: {
        navigator: {
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
        <div id="head" class="mainContainer container-fluid">

            <!-- SEGMENTO SUPERIORE: WISHLIST - NEED HELP ? - PHONE NUMBER -->
            <OverSegment :phoneNumber="phoneNumber" />

            <!-- LINEA SEPARE' -->
            <hr class="text-light">

            <!-- SEGMENTO INFERIORE: IMMAGINE - MENU NAVIGAZIONE - ICONE CERCA/PROFILO/CARRELLO   -->
            <UnderSegment :navigator="navigator" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "../../styles/partials/HeaderAttributes/HeaderAttributes.scss";
</style>
