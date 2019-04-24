<template>
    <div class="q-pa-md q-mt-lg">
        <div class="row justify-center">
            <div class="col-12" style="max-width: 800px;">
                <p class="text-subtitle1">
                    {{ $t('your_info') }}
                </p>
                <q-card>
                    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="$t('info_updated')"/>

                        <div class="q-pa-lg">
                            <div class="col-12 q-pb-md">
                                <div class="q-pa-xs">
                                    <q-input v-model="form.name" type="text" bottom-slots
                                             :label="$t('name')" :error="form.errors.has('name')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="name"/>
                                        </template>
                                    </q-input>
                                </div>
                                <div class="q-pa-xs">
                                    <q-input v-model="form.email" type="email" bottom-slots
                                             :label="$t('email')" :error="form.errors.has('email')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="email"/>
                                        </template>
                                    </q-input>
                                </div>
                            </div>

                            <div class="col-12">
                                <q-btn type="submit" color="primary" :label="$t('update')" :loading="form.busy"/>
                            </div>
                        </div>

                    </form>
                </q-card>
            </div>

        </div>
    </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
    scrollToTop: false,

    metaInfo () {
        return { title: this.$t('settings') }
    },

    data: () => ({
        form: new Form({
            name: '',
            email: ''
        })
    }),

    computed: mapGetters({
        user: 'auth/user'
    }),

    created () {
        // Fill the form with user data.
        this.form.keys().forEach(key => {
            this.form[key] = this.user[key]
        })
    },

    methods: {
        async update () {
            const { data } = await this.form.patch('/api/settings/profile')

            this.$store.dispatch('auth/updateUser', { user: data })
        }
    }
}
</script>
