<script setup lang="ts"></script>

<template>
  <main>
    <div class="wrapper">
      <nav>
        <RouterLink to="/button">button</RouterLink>
        <RouterLink to="/price">price</RouterLink>
        <RouterLink to="/layout">layout</RouterLink>
        <RouterLink to="/actionSheet">ActionSheet</RouterLink>
        <RouterLink to="/drag">drag</RouterLink>
        <RouterLink to="/notify">notify</RouterLink>
        <RouterLink to="/popup">popup</RouterLink>
        <RouterLink to="/switch">switch</RouterLink>
      </nav>
    </div>
  </main>
</template>
<style lang="scss" scoped>

.wrapper {
  padding: 10px 20px;
  > nav {
    a {
      display: block;
    }
  }
}
</style>
