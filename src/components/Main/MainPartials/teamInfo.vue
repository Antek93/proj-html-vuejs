<script>
//Import da store.js
import { store } from "../../../store"

export default {
    name: 'teamInfo',
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
    }

};
</script>

<template>
    <div class="teamBox py-">
        <img src="../../../assets/bph/parallax.jpg" alt="">
        <div class="teamProfile">
            <div>
                <img src="" alt="">
            </div>
            <div>
                Luis Charls (Web Designer)
            </div>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, numquam corporis rerum facilis officiis
                aperiam consequatur Nemo architecto in neque, delectus, reprehenderit provident nostrum hic similique
                eaque aut doloribus sit.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.teamBox {
    width: 80%;
    height: 60vh;
    margin: 100px auto;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .teamProfile {
        width: 70%;
        height: 200px;
        background-color: red;
        position: absolute;
        top: 31%;
        left: 14%;
        text-align: center;

    }
}
</style>