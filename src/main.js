/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import {faPercent} from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'


library.add(faUserSecret,
    faMagnifyingGlass,
    faUser,
    faShoppingBag,
    faTruckFast,
    faSackDollar,
    faPercent,
    faHandHoldingDollar,
    faHeart,
    faMaximize,
    faEye
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')