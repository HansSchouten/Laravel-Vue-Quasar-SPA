<template>

    <div class="self-stretch row no-wrap">
        <q-btn-dropdown flat no-caps stretch :label="locales[locale]">
            <q-list>

                <q-item clickable v-close-popup v-for="(value, key) in locales"
                        :key="key" @click.prevent="setLocale(key)">
                    <q-item-section>
                        <q-item-label>
                            {{ value }}
                        </q-item-label>
                    </q-item-section>
                </q-item>

            </q-list>
        </q-btn-dropdown>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
    computed: mapGetters({
        locale: 'lang/locale',
        locales: 'lang/locales'
    }),

    methods: {
        setLocale (locale) {
            if (this.$i18n.locale !== locale) {
                loadMessages(locale)

                this.$store.dispatch('lang/setLocale', { locale })
            }
        }
    }
}
</script>
