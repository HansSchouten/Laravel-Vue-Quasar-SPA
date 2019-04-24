import Vue from 'vue'
import Child from './Child'
import AlertSuccess from './AlertSuccess'
import { HasError } from 'vform'

// Components that are registered globally.
[
    Child,
    HasError,
    AlertSuccess
].forEach(Component => {
    Vue.component(Component.name, Component)
})
