<template>
  <div class="pic-compose">
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
    <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
  </div>
</template>
<style lang="scss">
.pic-compose {
  display: flex;
  justify-content: space-between;
  .item {
    width: 47%;
  }
}
</style>