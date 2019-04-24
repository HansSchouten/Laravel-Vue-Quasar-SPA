<template>

    <div class="q-pa-md q-mt-xl">
        <div class="row justify-center">
            <div class="col-12" style="max-width: 500px;">
                <q-card>
                    <q-banner inline-actions class="text-white bg-red">
                        {{ $t('page_not_found') }}
                    </q-banner>

                    <q-separator/>

                    <div class="q-pa-lg">
                        <!-- Authenticated -->
                        <q-btn v-if="user" color="primary" :label="$t('go_dashboard')" :to="{ name: 'dashboard' }"/>
                        <!-- Guest -->
                        <template v-else>
                            <q-btn color="primary" :label="$t('login')" :to="{ name: 'login' }"/>
                        </template>
                    </div>
                </q-card>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'NotFound',
    layout: 'guest',

    computed: mapGetters({
        user: 'auth/user'
    })
}
</script>
