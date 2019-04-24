<template>
    <div>
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="$store.dispatch('drawer/toggleDrawer')" class="q-mr-sm"/>

            <q-btn flat no-caps stretch :to="{ name: 'dashboard' }" class="gt-sm">
                <q-avatar>
                    <img src="https://cdn.quasar-framework.org/logo/svg/quasar-logo.svg">
                </q-avatar>
                <q-toolbar-title>
                    {{ appName }}
                </q-toolbar-title>
            </q-btn>

            <q-space/>

            <div class="self-stretch row no-wrap" v-if="user">
                <q-btn-dropdown flat no-caps stretch :label="user.name">
                    <q-list>
                        <q-item clickable v-close-popup :to="{ name: 'settings.profile' }">
                            <q-item-section>
                                <q-item-label>
                                    {{ $t('settings') }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup @click.prevent="logout">
                            <q-item-section>
                                <q-item-label>
                                    {{ $t('logout') }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
        </q-toolbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        appName: window.config.appName
    }),

    computed: mapGetters({
        user: 'auth/user'
    }),

    methods: {
        async logout() {
            // Log out the user.
            await this.$store.dispatch('auth/logout')

            // Redirect to login.
            this.$router.push({ name: 'login' })
        }
    }
}
</script>
