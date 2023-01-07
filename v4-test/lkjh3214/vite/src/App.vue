<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">GoHome</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main_content">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
  nav {
    padding: 10px;
  }
}
.main_content {
  padding-top: 50px;
  overflow: auto;
}
</style>
