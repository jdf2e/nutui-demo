<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="route.name" v-if="route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss">
</style>
