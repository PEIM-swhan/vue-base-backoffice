<script setup>
import {useDisplay, useTheme} from 'vuetify'

/** 테마 동적 변경 (다크모드, 라이트모드 지원) **/
const theme = useTheme()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// vuetify - width < 600px 이하 인 경우를 판단하기 위한 값
const isMobile = useDisplay().xs;

</script>


<template>
    <v-app-bar color="green-lighten-1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="isMobile" />
        <v-app-bar-nav-icon icon="mdi-home" v-if="!isMobile" />
      </template>

      <v-app-bar-title>MobWorks</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
        <v-btn
            :prepend-icon="theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="toggleTheme"
        ></v-btn>
      </template>
    </v-app-bar>

</template>


<style scoped>

</style>

