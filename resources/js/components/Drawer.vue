<template>
    <q-scroll-area id="app-menu">

        <div id="searchbox">
            <q-input standout square dense v-model="searchModel" placeholder="Search...">
                <template v-slot:append>
                    <q-icon name="search"/>
                </template>
            </q-input>
        </div>

        <q-item clickable icon="dashboard" class="non-selectable top-level" :to="{ name: 'dashboard' }">
            <q-item-section avatar>
                <q-icon color="primary" name="dashboard"/>
            </q-item-section>
            <q-item-section>
                {{ $t('dashboard') }}
            </q-item-section>
        </q-item>

        <q-expansion-item :label="$t('settings')" icon="settings" class="non-selectable top-level">
            <q-list>
                <q-item clickable :insetLevel="1" dense :to="{ name: 'settings.profile' }">
                    <q-item-section>
                        {{ $t('profile') }}
                    </q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>

    </q-scroll-area>
</template>

<script>
export default {
    data () {
        return {
            searchModel: null
        }
    }
}
</script>
