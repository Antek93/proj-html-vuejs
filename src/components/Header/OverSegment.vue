<script>
//Import da store.js
import { store } from "../../store"

export default {
    name: 'OverSegment',
    data() {
        return {
            store
        }
    },
    created() {

    },
    methods: {
    },
    props: {
        phoneNumber: {
            type: String,
        }
    }


};
</script>

<template> <!-- SEGMENTO SUPERIORE HEADER -->
    <div class="over d-flex justify-content-center align-items-center text-light py-3">
        <!-- WISHLIST -->
        <div class="wishlist">
            <div>
                wishlist(0)
            </div>
        </div>
        <!-- LINEA SEPARATRICE  -->
        <div class="splitter">
            <div>
                |
            </div>
        </div>
        <!-- NEED HELP BUTTON  -->
        <div class="needHelp">
            <div>
                Need Help?
            </div>
        </div>
        <!-- PHONE NUMBERS DISPLAYED -->
        <div class="phoneNumbers">
            <div>
                Call {{ phoneNumber }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.over {
    width: 80%;
    height: 3vh;
    margin: 0 auto;
    text-align: center;

    .wishlist {
        width: 8%;

        div {
            cursor: pointer;
        }
    }

    .splitter {
        width: 4%;

    }

    .needHelp {
        width: 8%;

        div {
            cursor: pointer;

        }
    }

    .phoneNumbers {
        width: 80%;
        text-align: end;
    }
}
</style>
