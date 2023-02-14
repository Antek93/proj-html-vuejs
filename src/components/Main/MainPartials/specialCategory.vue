<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'specialCategory',
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
    

};
</script>

<template>
<!-- CONTAINER SPECIAL CATERGORY -->
<div class="specialBox my-3 text-white">
            <div class="d-flex justify-content-center">
                <h1>
                    Special Category
                </h1>
            </div>
            <div class="d-flex justify-content-center my-3">
                <div class="tratto"></div>
            </div>
            <div class="cardsContainer d-flex justify-content-between">
                <div class="card">
                    <img src="../../../assets/bph/category-image-02-446x550_t.jpg" alt="">
                    <div class="purpleOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../assets/bph/category-image-01-446x550_t.jpg" alt="">
                    <div class="purpleOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../assets/bph/category-image-03-446x550_t.jpg" alt="">
                    <div class="purpleOverlay">
                        <div>
                            <div>Battlefiled III</div>
                            <div>Shop now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.specialBox {
    width: 80%;
    margin: 0 auto;

    .tratto {
        border: 2px solid #c2c402;
        width: 7%;
        border-radius: 10px;
    }
}

.cardsContainer {
    width: 100%;

    .card {
        width: calc(33.3333333333% - 8px);
        border-radius: 0px;
        height: 479px;
        background-color: white;
        border: 0px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .purpleOverlay {
            width: 100%;
            height: 79px;
            position: absolute;
            background-color: #3700377a;
            bottom: 0%;
        }

    }
}
</style>