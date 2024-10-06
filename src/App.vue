<script setup>

import TheHeader from "@/layout/TheMenu.vue";
import TheMain from "@/layout/TheMain.vue";
import TheFooter from "@/layout/TheFooter.vue";

</script>

<template>
  <v-app>
    <TheHeader />
    <TheMain />
    <TheFooter/>
  </v-app>
</template>


<style>
/** Gmarket Sans 폰트 **/
@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'GmarketSansMedium', sans-serif;
}

</style>

