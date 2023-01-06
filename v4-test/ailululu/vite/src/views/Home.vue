<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:48:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 11:23:45
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
        <RouterLink to="/menu">menu</RouterLink>
        <RouterLink to="/checkbox">checkbox</RouterLink>
        <RouterLink to="/actionSheet">actionSheet</RouterLink>
        <RouterLink to="/popup">popup</RouterLink>
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
