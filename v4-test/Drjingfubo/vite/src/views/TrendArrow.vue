<template>
  <!-- <nut-cell> -->
    <nut-trend-arrow :digits="4" :sync-text-color="false" :rate="1"/>
    <nut-trend-arrow :sync-text-color="false" :rate="-0.2535"/>
    <nut-trend-arrow :rate="10.2365"/>
    <nut-trend-arrow :rate="-0.2535"/>
    <nut-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)"/>
    <nut-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"/>
    <nut-trend-arrow
      :show-text-color="false"
      showSign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  <!-- </nut-cell> -->
</template>
<style>
:root{
  --nut-trendarrow-before-icon-margin:20px;
  --nut-trendarrow-icon-width:20px;
}

</style>
