import Vue from 'vue'

import "quasar-extras/material-icons"
import "quasar-extras/fontawesome"
import "quasar-extras/mdi"
import "quasar-extras/ionicons"
import "quasar-extras/roboto-font"
import "quasar-extras/animate"
import Quasar, * as All from 'quasar/dist/quasar.umd'

require('quasar/dist/quasar.css');

Vue.use(Quasar, {
    components: All,
    directives: All,
    plugins: All,
    animations: All
})