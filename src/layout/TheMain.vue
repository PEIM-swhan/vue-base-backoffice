<script setup>
import {RouterLink, RouterView} from 'vue-router'   // vueRouter - 페이지 이동을 위해 관련 객체 불러오기


</script>


<template>
  <v-main>
    <v-container
        fluid
        class="mt-8"
    >
      <v-expansion-panels variant="inset">
        <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="배치"

        >
        </v-expansion-panel>

      </v-expansion-panels>


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

