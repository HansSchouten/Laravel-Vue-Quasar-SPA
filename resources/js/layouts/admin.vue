<template>
    <q-layout view="Lhh lpr lFf">

        <q-header elevated class="bg-primary text-white">
            <toolbar/>
        </q-header>

        <q-drawer v-model="leftDrawer" bordered show-if-above>
            <drawer/>
        </q-drawer>

        <q-page-container>
            <child/>
        </q-page-container>

    </q-layout>
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Drawer from '~/components/Drawer'

export default {
    name: 'admin',

    components: {
        Toolbar,
        Drawer
    },

    computed: {
        leftDrawer: {
            get () {
                return this.$store.state.drawer.leftDrawer
            },
            set (v) {
                this.$store.dispatch('drawer/setDrawer', v)
            }
        }
    }
}
</script>
