<script>
//Import da store.js
import { store } from "../../store";
import OverSegment from "../Header/OverSegment.vue"
import UnderSegment from "../Header/UnderSegment.vue"

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    components: {
        OverSegment,
        UnderSegment,
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
        <div class="mainContainer container-fluid">
            
            <!-- SEGMENTO SUPERIORE: WISHLIST - NEED HELP ? - PHONE NUMBER -->
            <OverSegment
            :phoneNumber="phoneNumber"
            />
            
            <!-- LINEA SEPARE' -->
            <hr class="text-light">

            <!-- SEGMENTO INFERIORE: IMMAGINE - MENU NAVIGAZIONE - ICONE CERCA/PROFILO/CARRELLO   -->
            <UnderSegment
            :menu-list="menuList"
            />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.mainContainer {
    background-color:#201424;
}
</style>
