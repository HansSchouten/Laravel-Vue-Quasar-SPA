<template>
    <q-toolbar>
        <q-toolbar-title>
            <q-avatar>
                <img src="https://cdn.quasar-framework.org/logo/svg/quasar-logo.svg">
            </q-avatar>
            {{ appName }}
        </q-toolbar-title>

        <locale-dropdown/>
    </q-toolbar>
</template>

<script>
import LocaleDropdown from './LocaleDropdown'

export default {
    components: {
        LocaleDropdown
    },

    data: () => ({
        appName: window.config.appName
    })
}
</script>
