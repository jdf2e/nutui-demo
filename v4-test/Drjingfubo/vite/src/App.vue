<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
const themeVars = {
        commentHeaderUserNameColor:'blue',
        commentHeaderTimeColor:'blue',
        commentBottomLabelColor:'blue',
        commentShopColor:'blue'
      };
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">GoHome</RouterLink> -->
      </nav>
    </div>
  </header>
  <main class="main_content">
    <!-- <nut-config-provider :theme-vars="themeVars"> -->
      <RouterView />
    <!-- </nut-config-provider> -->
   
  </main>
</template>

<style  lang="scss">
.wrapper {
  top: 10px;
  right: 10px;
  z-index: 100;
  nav {
    padding: 10px;
  }
}
.main_content {
  // overflow: auto;
}
</style>