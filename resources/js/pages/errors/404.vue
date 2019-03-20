<template>
  <card class="text-center">
    <h3 class="mb-4">{{ $t('page_not_found') }}</h3>

    <div class="links">
      <!-- Authenticated -->
      <router-link v-if="user" :to="{ name: 'dashboard' }">
        {{ $t('go_dashboard') }}
      </router-link>
      <!-- Guest -->
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </router-link>
      </template>
    </div>
  </card>
</template>

<script>
export default {
  name: 'NotFound',
  layout: 'guest'
}
</script>
