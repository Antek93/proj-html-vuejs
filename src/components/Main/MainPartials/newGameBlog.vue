<script>
//Import da store.js

export default {
    name: 'teamInfo',
    data() {
        return {

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
    <div class="blogBox py-4 text-white">
        <div class="d-flex justify-content-center">
            <h1>
                New Game Blog
            </h1>
        </div>
        <div class="d-flex justify-content-center my-3">
            <div class="tratto"></div>
        </div>
        <div class="newsContainer d-flex justify-content-between text-white">
            <div class="news">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <div class="d-flex">
                        <div class="px-1">
                            Jan 18,2021
                        </div>
                        <div class="px-1">
                            0 Comment
                        </div>
                    </div>
                    <div>
                        Anyway REPS is a NYC agency repres enting photohraphers
                    </div>
                </div>
            </div>
            <div class="news">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <div class="d-flex">
                        <div class="px-1">
                            Jan 18,2021
                        </div>
                        <div class="px-1">
                            0 Comment
                        </div>
                    </div>
                    <div>
                        Nasual risus suscipit Lorem Ipsum is simply text
                    </div>
                </div>
            </div><div class="news">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <div class="d-flex">
                        <div class="px-1">
                            Jan 18,2021  
                        </div>
                        <div class="px-1">
                              0 Comment  
                        </div>
                    </div>
                    <div>
                        Nostrum lesum Christum Lorem Ipsum is simply text
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>

<style lang="scss" scoped>
.blogBox {
    width: 80%;
    margin: 0 auto;

    .tratto {
        border: 2px solid #c2c402;
        width: 7%;
        border-radius: 10px;
    }
}


.newsContainer {
    width: 100%;

    .news {
        width: calc(33.3333333333% - 8px);
        border-radius: 0px;
        height: 279px;
        background-color: white;
        border: 0px;
        font-size: 13px;

        >div {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
hr {
    width: 80%;
    margin: 50px auto;
    border: 0.5px solid white;
}
</style>