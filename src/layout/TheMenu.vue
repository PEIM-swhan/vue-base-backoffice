<script setup>
import {useDisplay, useTheme} from 'vuetify'
import {reactive, ref} from "vue";

/** 테마 동적 변경 (다크모드, 라이트모드 지원) **/
const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// vuetify - width < 600px 이하 인 경우를 판단하기 위한 값
const isMobile = useDisplay().smAndDown;

// 사이드 메뉴 열고 닫는 반응성 변수
const drawer = ref(true);

const batchMenu = reactive([{"id": "1", "title": "스케줄링 목록", "path": "schedule"},
  {"id": "2", "title": "배치 등록 및 수정", "path": "batches"},
  {"id": "3", "title": "배치 로그", "path": "batch-log"}
]);
const utilMenu = reactive([{"id": "1", "title": "최후의 순간", "path": "last-moment"},
  {"id": "2", "title": "프로퍼티 리로드", "path": "property-reload"},
  {"id": "3", "title": "프로퍼티 정보 조회", "path": "properties"},
  {"id": "4", "title": "배포 버전 조회", "path": "commit-ids"}
]);
const adTestMenu = reactive([{"id": "1", "title": "프레임 O", "path": "/adtest/frame"},
  {"id": "2", "title": "프레임 X", "path": "/adtest/non-frame"},
]);

</script>


<template>
  <!-- Top Menu -->
  <v-app-bar density="compact"
             border
             elevation="1"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer=!drawer"/>
      <v-app-bar-nav-icon readonly icon="mdi-home" v-if="!isMobile" />
    </template>

    <v-app-bar-title text="MobWorks" class="text-h5 font-weight-bold text-green-accent-4"/>

    <template v-slot:append>
      <!-- 계정 정보 버튼-->
      <v-btn
          size="50"
          color="green-accent-4"
          prepend-icon="mdi-account-circle"
          @click="toggleTheme"
      ></v-btn>

      <!-- 테마 변경 버튼-->
      <v-btn
          size="50"
          color="green-accent-4"
          :prepend-icon="theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          @click="toggleTheme"
      ></v-btn>
    </template>
  </v-app-bar>

  <!-- Side Menu -->
  <v-navigation-drawer
      mobile-breakpoint="md"
      elevation="2"
      border
      v-model="drawer"
  >

    <v-list
        lines="two"
        density="compact"
        nav
    >
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              prepend-icon="mdi-application-outline"
          >
            <v-list-item-title class="py-1" style="font-size: medium">광고 테스트</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item
            color="green-accent-4"
            link
            v-for="a in adTestMenu"
            :key="a.id"
            :title="a.title"
            :to="a.path"
            :value="a.title"
        />
      </v-list-group>

      <v-divider/>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              prepend-icon="mdi-clipboard-text-clock-outline"
          >
            <v-list-item-title class="py-1" style="font-size: medium">배치</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item
            color="green-accent-4"
            link
            v-for="b in batchMenu"
            :key="b.id"
            :title="b.title"
            :to="b.path"
            :value="b.title"
        />
      </v-list-group>

      <v-divider/>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-toolbox-outline"
            >
              <v-list-item-title class="py-1" style="font-size: medium">유틸</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
              color="green-accent-4"
              link
              v-for="u in utilMenu"
              :key="u.id"
              :title="u.title"
              :to="u.path"
              :value="u.title"
          />
        </v-list-group>
    </v-list>
  </v-navigation-drawer>


</template>


<style scoped>

</style>

