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
            }, 500);
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
                <li><a href="#">Vendi Usato</a></li>
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
        <div class="moreIcons d-flex justify-content-end">
            <div class="thisIcon">
                <font-awesome-icon icon="hov fa-solid fa-magnifying-glass" />
            </div>
            <div class="thisIcon">
                <font-awesome-icon icon="hov fa-regular fa-user" />
            </div>
            <div class="bagShop thisIcon d-flex align-items-center hov">
                <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                <div class="priceCart"> (0) £0.00 </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/partials/HeaderAttributes/HeaderPartialsAttributes/UnderSegmentAttributes.scss";
</style>
