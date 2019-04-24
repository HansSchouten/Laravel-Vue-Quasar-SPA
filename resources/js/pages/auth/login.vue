<template>

    <div class="q-pa-md q-mt-xl">
        <div class="row justify-center">
            <div class="col-12" style="max-width: 500px;">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">
                            {{ $t('login') }}
                        </div>
                    </q-card-section>

                    <q-separator/>

                    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                        <div class="q-pa-lg">
                            <div class="col-12 q-pb-lg q-mb-md">
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

                                <div class="row">
                                    <div class="col-6">
                                        <q-checkbox v-model="remember" name="remember" :label="$t('remember_me')"/>
                                    </div>
                                    <div class="col-6 q-pt-sm">
                                        <router-link :to="{ name: 'password.request' }" class="forgot-password">
                                            {{ $t('forgot_password') }}
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <q-btn type="submit" color="primary" :label="$t('login')" :loading="form.busy"/>
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
        return { title: this.$t('login') }
    },

    data: () => ({
        form: new Form({
            email: '',
            password: ''
        }),
        remember: false
    }),

    methods: {
        async login () {
            // Submit the form.
            const { data } = await this.form.post('/api/login')

            // Save the token.
            this.$store.dispatch('auth/saveToken', {
                token: data.token,
                remember: this.remember
            })

            // Fetch the user.
            await this.$store.dispatch('auth/fetchUser')

            // Redirect dashboard.
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>

<style scoped>
    .forgot-password {
        float: right;
        color: #828c91;
        text-decoration: none;
    }
</style>
