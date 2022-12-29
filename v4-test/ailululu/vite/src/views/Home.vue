<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:48:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 16:01:10
-->
<script setup lang="ts"></script>

<template>
  <main>
    <div class="wrapper">
      <nav>
        <RouterLink to="/button">button</RouterLink>
        <RouterLink to="/audio">audio</RouterLink>
        <RouterLink to="/layout">layout</RouterLink>
        <RouterLink to="/notify">notify</RouterLink>
        <RouterLink to="/picker">picker</RouterLink>
        <RouterLink to="/circleprogress">circleprogress</RouterLink>
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
