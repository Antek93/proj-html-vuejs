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
        builded (item) {
            if (item == 'immagineUno') {
                let firstOne = document.getElementById('immagineUno');
                firstOne.classList.remove('invisible')
            } else if (item == 'immagineDue') {
                let secondOne = document.getElementById('immagineDue');
                secondOne.classList.remove('invisible')
            } else if (item == 'immagineTre') {
                let thirdOne = document.getElementById('immagineTre');
                thirdOne.classList.remove('invisible')
            } else {
                console.log('errore')
            }
        },
        unbuilded (item) {
            if (item == 'immagineUno') {
                let firstOne = document.getElementById('immagineUno');
                firstOne.classList.add('invisible')
            } else if (item == 'immagineDue') {
                let secondOne = document.getElementById('immagineDue');
                secondOne.classList.add('invisible')
            } else if (item == 'immagineTre') {
                let thirdOne = document.getElementById('immagineTre');
                thirdOne.classList.add('invisible')
            } else {
                console.log('errore')
            }
        }
    },
    components: {
    }

};
</script>

<template>
    <div class="blogBox py-4 text-white">
        <div class="d-flex justify-content-center">
            <h1>
                Our Products
            </h1>
        </div>
        <div class="trattoBox d-flex justify-content-center">
            <div class="tratto"></div>
        </div>
        <div class="newsContainer d-flex justify-content-between text-white">
            <div @mouseover="builded('immagineUno')" @mouseleave="unbuilded('immagineUno')" class="news">
                <div>
                    <img src="../../../assets/bph/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="blogInfo d-flex">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Anyway REPS is a NYC agency repres enting photohraphers
                    </div>
                    <div id="immagineUno" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
                    </div>
                </div>
            </div>
            <div @mouseover="builded('immagineDue')" @mouseleave="unbuilded('immagineDue')" class="news">
                <div>
                    <img src="../../../assets/bph/Illo-inventore-veritatis-quasi-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="d-flex blogInfo">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Nasual risus suscipit Lorem Ipsum is simply text
                    </div>
                    <div id="immagineDue" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
                    </div>
                </div>
            </div>
            <div @mouseover="builded('immagineTre')" @mouseleave="unbuilded('immagineTre')" class="news">
                <div>
                    <img src="../../../assets/bph/At-vero-eos-et-accusamus-1400x878_t.jpg" alt="">
                </div>
                <div>
                    <div class="blogInfo d-flex">
                        <div class="px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </div>
                        <div class="px-1 text-secondary">
                            Jan 18,2021
                        </div>
                        <div class="ps-4 px-1 gold">
                            <font-awesome-icon icon="fa-solid fa-comments" />
                        </div>
                        <div class="px-1 text-secondary">
                            0 Comment
                        </div>
                    </div>
                    <div class="blogText">
                        Nostrum lesum Christum Lorem Ipsum is simply text
                    </div>
                    <div id="immagineTre" class="invisible iconeSospese d-flex justify-content-center">
                        <div class="iconContainer">
                            <font-awesome-icon class="icn-due" icon="fa-solid fa-plus" />
                        </div>
                        <div class="iconContainer">
                            <font-awesome-icon class="icn" icon="fa-solid fa-link" />
                        </div>
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

    h1 {
        letter-spacing: 4px;
    }

    .trattoBox {
        margin-bottom: 34px;
        margin-top: 4px;

        .tratto {
            width: 7.5%;
            border: 2px solid #F9AA01;
            border-radius: 10px;
        }
    }
}


.newsContainer {
    width: 100%;
    padding-top: 8px;

    .news {
        width: calc(33.3333333333% - 8px);
        border-radius: 0px;
        height: 270px;
        background-color: white;
        border: 0px;
        font-size: 13px;
        position: relative;

        .blogText {
            font-size: 19px;
            font-weight: 200;
        }

        .iconeSospese {
            position: absolute;
            top: 41%;
            left: 41%;
            transform: transform(-50%, -50%);

            .iconContainer {
                width: 49px;
                height: 49px;
                border: 1px solid white;
                border-radius: 50%;

                .icn {
                    padding: 16px 0px 0px 11px;
                }
                .icn-due {
                    padding: 15px;
                }
                .icn:hover, .icn-due:hover {
                    cursor: pointer;
                    color: #F9AA01;
                }
            }

        }
        .invisible {
            display: none;
        }

        .blogInfo {
            padding-top: 8px;

            .gold {
                color: #F9AA01;
            }
        }

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
    border: 0px 0px 0px 0px solid white;
    padding: 30px 0px;
    border-bottom: 1px solid white;
}
</style>