<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <guest-toolbar />
        </q-header>

        <q-page-container>
            <child />
        </q-page-container>

    </q-layout>
</template>

<script>
import GuestToolbar from '../components/GuestToolbar';

export default {
    name: 'guest',

    components: {
        GuestToolbar
    },
    data () {
        return {}
    }
}
</script>
