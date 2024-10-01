<script setup>
import {RouterLink, RouterView} from 'vue-router'   // vueRouter - 페이지 이동을 위해 관련 객체 불러오기
import TheHeader from "@/layout/TheHeader.vue";



</script>

<template>
  <v-app>
  <TheHeader />


  <v-main>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <v-divider />
          <v-spacer />
          <RouterLink to="/about">About</RouterLink>
        </nav>
    <RouterView/>
  </v-main>
  </v-app>
</template>


