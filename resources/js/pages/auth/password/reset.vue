<template>

    <div class="q-pa-md q-mt-lg">
        <div class="row justify-center">
            <div class="col-12" style="max-width: 500px;">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">
                            {{ $t('reset_password') }}
                        </div>
                    </q-card-section>

                    <q-separator/>

                    <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="status"/>

                        <div class="q-pa-lg">
                            <div class="col-12 q-pb-lg q-mb-sm">
                                <div class="q-pl-xs q-pr-xs">
                                    <q-input v-model="form.email" type="email" bottom-slots
                                             :label="$t('email')" :error="form.errors.has('email')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="email"/>
                                        </template>
                                    </q-input>
                                </div>
                                <div class="q-pl-xs q-pr-xs">
                                    <q-input v-model="form.password" type="password" bottom-slots
                                             :label="$t('password')" :error="form.errors.has('password')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="password"/>
                                        </template>
                                    </q-input>
                                </div>
                                <div class="q-pl-xs q-pr-xs">
                                    <q-input v-model="form.password_confirmation" type="password" bottom-slots
                                             :label="$t('confirm_password')"
                                             :error="form.errors.has('password_confirmation')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="password_confirmation"/>
                                        </template>
                                    </q-input>
                                </div>
                            </div>

                            <div class="col-12">
                                <q-btn type="submit" color="primary"
                                       :label="$t('reset_password')" :loading="form.busy"/>
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

export default {
    middleware: 'guest',
    layout: 'guest',

    metaInfo () {
        return { title: this.$t('reset_password') }
    },

    data: () => ({
        status: '',
        form: new Form({
            token: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }),

    created () {
        this.form.email = this.$route.query.email
        this.form.token = this.$route.params.token
    },

    methods: {
        async reset () {
            const { data } = await this.form.post('/api/password/reset')

            this.status = data.status

            this.form.reset()
        }
    }
}
</script>
