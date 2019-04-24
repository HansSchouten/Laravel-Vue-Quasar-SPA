<template>
    <q-banner v-if="form.successful" inline-actions class="text-white bg-green">
        {{ message }}
        <template v-if="dismissible" v-slot:action>
            <q-btn flat color="white" label="Dismiss" @click="dismiss"/>
        </template>
    </q-banner>
</template>

<script>
export default {
    name: 'alert-success',
    props: {
        form: {
            type: Object,
            required: true
        },
        message: {
            type: String,
            default: ''
        },
        dismissible: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        dismiss () {
            if (this.dismissible) {
                this.form.clear()
            }
        }
    }
}
</script>
