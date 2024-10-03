<script setup>
import {useDisplay, useTheme} from 'vuetify'
import {ref} from "vue";
import {RouterLink} from "vue-router";

/** 테마 동적 변경 (다크모드, 라이트모드 지원) **/
const theme = useTheme()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// vuetify - width < 600px 이하 인 경우를 판단하기 위한 값
const isMobile = useDisplay().xs;

// 사이드 메뉴 열고 닫는 반응성 변수
const drawer = ref(true);

</script>


<template>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer=!drawer" />
        <v-app-bar-nav-icon icon="mdi-home" v-if="!isMobile"/>
      </template>

      <template v-slot:default>
        <v-app-bar-title text="MobWorks"/>

        <v-btn prepend-icon="mdi-clipboard-text-clock-outline"
               size="x-large"
               text="배치"
               to="/homea"
        />

        <v-btn prepend-icon="mdi-application-outline"
               size="x-large"
               text="광고 테스트"
               to="/batch"
        />

        <v-btn prepend-icon="mdi-toolbox-outline"
               size="x-large"
               text="유틸"
               to="/batch"
        />

        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
      </template>


      <template v-slot:append>
        <v-btn
            :prepend-icon="theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="toggleTheme"
        ></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
        mobile-breakpoint="sm"
        v-model="drawer"
    >
      <v-list nav>
        <v-list-item link prepend-icon="mdi-view-dashboard" title="Dashboard" value="" to=""></v-list-item>
        <v-divider/>
        <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
        <v-divider/>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>
    </v-navigation-drawer>




</template>


<style scoped>
.custom-font {
  font-family: "NotoSansM"
}


</style>

