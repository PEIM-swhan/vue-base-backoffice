<script setup>
import {RouterLink, RouterView} from 'vue-router'   // vueRouter - 페이지 이동을 위해 관련 객체 불러오기


</script>


<template>
  <v-main>
    <v-container>
      <v-row no-gutters>
        <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            One of three columns
          </v-sheet>
        </v-col>
      </v-row>

      <RouterView/>
    </v-container>
  </v-main>

</template>


<style scoped>

</style>

