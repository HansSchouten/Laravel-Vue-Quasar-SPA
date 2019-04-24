<template>
    <div></div>
</template>

<script>
export default {
    middleware: 'auth',

    metaInfo () {
        return { title: this.$t('dashboard') }
    },
    data () {
        return {
            text: ''
        }
    }
}
</script>
