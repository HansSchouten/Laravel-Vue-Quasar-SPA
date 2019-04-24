<template>

    <div class="q-pa-md q-mt-lg">
        <div class="row justify-center">
            <div class="col-12" style="max-width: 500px;">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">
                            {{ $t('register') }}
                        </div>
                    </q-card-section>

                    <q-separator/>

                    <form @submit.prevent="register" @keydown="form.onKeydown($event)">
                        <div class="q-pa-lg">
                            <div class="col-12 q-pb-lg q-mb-sm">
                                <div class="q-pl-xs q-pr-xs">
                                    <q-input v-model="form.name" type="text" bottom-slots
                                             :label="$t('name')" :error="form.errors.has('name')">
                                        <template v-slot:error>
                                            <has-error :form="form" field="name"/>
                                        </template>
                                    </q-input>
                                </div>
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
                                <q-btn type="submit" color="primary" :label="$t('register')" :loading="form.busy"/>
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
        return { title: this.$t('register') }
    },

    data: () => ({
        form: new Form({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }),

    methods: {
        async register () {
            // Register the user.
            const { data } = await this.form.post('/api/register')

            // Log in the user.
            const { data: { token } } = await this.form.post('/api/login')

            // Save the token.
            this.$store.dispatch('auth/saveToken', { token })

            // Update the user.
            await this.$store.dispatch('auth/updateUser', { user: data })

            // Redirect dashboard.
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>
