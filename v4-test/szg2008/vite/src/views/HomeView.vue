<script setup lang="ts">
import { routes } from "../router/index";
</script>

<template>
  <main>
    <div class="wrapper">
      <nav>
        <template v-for="item in routes" :key="item.path">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </template>
      </nav>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.wrapper {
  padding: 10px 20px;
  overflow: auto;
  > nav {
    a {
      display: block;
    }
  }
}
</style>
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
