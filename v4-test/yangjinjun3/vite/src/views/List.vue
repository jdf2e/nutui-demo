<script setup lang="ts">
import Config from '../config.json';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="list">
    <div class="item" v-for="item in Config.list">
      <nut-cell @click="router.push(`/${item}`)">{{ item }}</nut-cell>
    </div>
  </div>
</template>

<style>
</style>