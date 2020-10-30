import Vue from 'vue'

import "@quasar/extras/material-icons"
import "@quasar/extras/material-icons-outlined"
import "@quasar/extras/material-icons-round"
import "@quasar/extras/material-icons-sharp"
import "@quasar/extras/fontawesome-v5"
import "@quasar/extras/mdi-v5"
import "@quasar/extras/ionicons-v5"
import Quasar, * as All from 'quasar/dist/quasar.umd'

require('quasar/dist/quasar.css')

Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All,
  animations: All,
  icons: All
})
