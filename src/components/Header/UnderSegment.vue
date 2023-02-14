<script>

export default {
    name: 'UnderSegment',
    data() {
        return {
            visible: false,
        }
    },
    created() {

    },
    methods: {
        collapse(item) {
            if (item == 'Home') {
                if (this.visible == false) {
                    let home = document.getElementById('home');
                    this.visible = true;
                    home.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    home.classList.add('invisible');
                }

            };
            if (item == 'Shop') {
                if (this.visible == false) {
                    let shop = document.getElementById('shop');
                    this.visible = true;
                    shop.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    shop.classList.add('invisible');
                }

            };
            if (item == 'Blog') {
                if (this.visible == false) {
                    let blog = document.getElementById('blog');
                    this.visible = true;
                    blog.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    blog.classList.add('invisible');
                }

            };
            if (item == 'Media') {
                if (this.visible == false) {
                    let media = document.getElementById('media');
                    this.visible = true;
                    media.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    media.classList.add('invisible');
                }

            };
            if (item == 'ShortCode') {
                if (this.visible == false) {
                    let short = document.getElementById('short');
                    this.visible = true;
                    short.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    short.classList.add('invisible');
                }

            };
            if (item == 'Features') {
                if (this.visible == false) {
                    let features = document.getElementById('features');
                    this.visible = true;
                    features.classList.remove('invisible');
                } else if (this.visible == true) {
                    this.visible = false;
                    features.classList.add('invisible');
                }
            }
        },
        build(item) {
            setTimeout(() => {
                if (item == 'Home') {
                    let home = document.getElementById('home');
                    if (this.visible == false) {
                        this.visible = true;
                        home.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        home.classList.add('invisible');
                    }
                } else if (item == 'Shop') {
                    let shop = document.getElementById('shop');
                    if (this.visible == false) {
                        this.visible = true;
                        shop.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        shop.classList.add('invisible');
                    }
                } else if (item == 'Blog') {
                    let blog = document.getElementById('blog');
                    if (this.visible == false) {
                        this.visible = true;
                        blog.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        blog.classList.add('invisible');
                    }
                } else if (item == 'Media') {
                    let media = document.getElementById('media');
                    if (this.visible == false) {
                        this.visible = true;
                        media.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        media.classList.add('invisible');
                    }
                } else if (item == 'ShortCode') {
                    let short = document.getElementById('short');
                    if (this.visible == false) {
                        this.visible = true;
                        short.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        short.classList.add('invisible');
                    }
                } else if (item == 'Features') {
                    let features = document.getElementById('features');
                    if (this.visible == false) {
                        this.visible = true;
                        features.classList.remove('invisible');
                    } else {
                        this.visible = false;
                        features.classList.add('invisible');
                    }
                }
            }, 1000);
        },
    },
    props: {
        navigator: {
            type: Array,
        }
    }
}
</script>

<template> <!-- SEGMENTO INFERIORE HEADER -->
    <div class="under d-flex justify-content-center align-items-center text-light py-1">

        <!-- ICONA IMMAGINE GAME HDAX  -->
        <div class="iconHDAX d-flex">
            <img src="../../assets/bph/mob-logo.png" alt="">
        </div>

        <!-- NAVIGATORE CENTRALE  -->
        <div class="menuCentrale d-flex justify-content-center align-items-center text-light">
            <ul v-for="item in navigator" class="d-flex justify-content-center align-items-center">
                <li>
                    <a @mouseover="collapse(item)" href="#">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div @mouseleave="build('Home')" id="home" class="menuCollapse invisible">
            <ul>
                <li><a href="#">Info</a></li>
                <li><a href="#">Accedi di nuovo</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
        </div>
        <div @mouseleave="build('Shop')" id="shop" class="menuCollapse invisible">
            <ul>
                <li><a href="#">Acquista</a></li>
                <li><a href="#">Regala ad un amico</a></li>
                <li><a href="#">Carrello</a></li>
            </ul>
        </div>
        <div @mouseleave="build('Blog')" id="blog" class="menuCollapse invisible">
            <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Scopri la rivista!</a></li>
                <li><a href="#">La fine di Conan?</a></li>
            </ul>
        </div>
        <div @mouseleave="build('Media')" id="media" class="menuCollapse invisible">
            <ul>
                <li><a href="#">Follow</a></li>
                <li><a href="#">Youtube Channel</a></li>
                <li><a href="#">Insta-direct</a></li>
            </ul>
        </div>
        <div @mouseleave="build('ShortCode')" id="short" class="menuCollapse invisible">
            <ul>
                <li><a href="#">Vue</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Vanilla</a></li>
            </ul>
        </div>
        <div @mouseleave="build('Features')" id="features" class="menuCollapse invisible">
            <ul>
                <li><a href="#">AmznShop</a></li>
                <li><a href="#">Look Out Art!</a></li>
                <li><a href="#">Detrimental</a></li>
            </ul>
        </div>

        <!-- BLOCCO ICONE AGGIUNTIVE -->
        <div class="moreIcons d-flex justify-content-center">
            <div class="thisIcon">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
            <div class="thisIcon">
                <font-awesome-icon icon="fa-regular fa-user" />
            </div>
            <div class="bagShop thisIcon d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                <div class="priceCart"> (0) £0.00 </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.under {
    width: 80%;
    height: 10vh;
    margin: 0 auto;
    text-align: center;

    .iconHDAX {
        width: 20%;

        img {
            width: 86%;
            padding-left: 17px;
        }
    }
}

.menuCentrale {
    width: 60%;

    ul {
        width: calc((100% / 6) - 13px);
        list-style: none;
        padding: 0px;
        margin: 0;
        position: relative;

        li {
            a {
                text-decoration: none;
                color: white;
                font-size: 21px;
                // rgb(249, 207, 0);

            }

            a:hover {
                color: rgb(249, 207, 0);
            }
        }
    }
}

.moreIcons {
    width: 20%;

    .thisIcon {
        padding: 0px 13px;
    }

}

.bagShop {
    position: relative;

    .priceCart {
        font-size: 13px;
        position: relative;
        width: 100;
        top: 11%;
        left: 5%;
        color: rgb(249, 207, 0);
    }

}

.menuCollapse {
    width: 150px;
    height: 102px;
    background-color: #201424;
    position: absolute;
    top: 17.5%;
    margin: 0;
    text-align: left;
    border: 1px solid gray;

    ul {
        list-style: none;
        margin: 0;
        padding: 5px;

        li {
            text-decoration: none;

            a {
                text-decoration: none;
                color: gray;

            }

            a:hover {
                color: white;
            }
        }
    }
}

#home {
    left: 30%;
}

#shop {
    left: 37.5%;

}

#blog {
    left: 44.5%;

}

#media {
    left: 51.5%;

}

#short {
    left: 57.5%;

}

#features {
    left: 65.5%;
}

.visible {
    display: block;
}

.invisible {
    display: none;
}
</style>
