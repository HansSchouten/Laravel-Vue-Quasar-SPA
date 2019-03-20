<template>
  <div class="q-pa-md q-gutter-md">
    <q-chip icon="add" size="10px" clickable @click="$router.push({ name: 'websites.create' })">Website toevoegen</q-chip>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('dashboard') }
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>
