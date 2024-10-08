<script setup>

import {ref} from "vue";
import AdTestMobonAd from "@/views/adtest/component/AdTestMobonAd.vue";

const breadcrumbs = {
  items: [
    {
      title: '광고 테스트',
      disabled: false,
    },
    {
      title: '프레임 O',
      disabled: false,
      color: 'green-accent-4'
    },
  ],
};

const inputRules = {
  required: value => !!value || '필수 입력 값!!',
}


// adTestForm 받기
const adTestForm = ref(null);

// adTestForm 입력 값 초기화
const adTestFormReset = () => adTestForm.value.reset();

// FIXME adTestForm 입력 값 검증 (axios 사용해서 서버쪽에서 검증하고 오기)
const adTestFormValid = () => isAdTestRequest.value = false;

const isAdTestRequest = ref(false);

// adTestForm 입력 값 사용해서 모비온 서버로 광고요청
const adTestFormADRequset = () => {

  isAdTestRequest.value = true;
};

// 테스트 광고 요청 응답 결과
const testResultMessage = "";

</script>


<template>
  <!-- Current Menu Indicator -->
  <v-breadcrumbs
      :items="breadcrumbs.items"
      density="compact"
      class="border-b-md mb-5"
  >
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right" size="small"></v-icon>
    </template>
  </v-breadcrumbs>

  <v-row no-gutters>

    <!-- 광고 테스트 요청 입력 Form 영역 -->
    <v-col
        cols="12"
        class="border-e-lg pr-4 mb-5"
        lg="5"
    >

      <v-form ref="adTestForm" @submit.prevent>
        <!-- Device 환경 선택 -->
        <v-radio-group
            prepend-icon="mdi-monitor-cellphone"
            inline
            color="green-accent-4"
            :rules="[inputRules.required]"
        >
          <v-radio
              label="Web"
              value="W"
              class="mr-4"
          />
          <v-radio
              disabled
              label="Mobile"
              value="M"
          />
        </v-radio-group>

        <!-- 지면 번호 입력 -->
        <v-text-field
            clearable
            variant="outlined"
            density="compact"
            color="green-accent-4"
            prepend-icon="mdi-alpha-m"
            hint="지면 번호 입력"
            label="지면번호"
            :rules="[inputRules.required]"
            class="mb-3"
        />

        <!-- 광고주 계정 입력 -->
        <v-text-field
            clearable
            variant="outlined"
            density="compact"
            color="green-accent-4"
            prepend-icon="mdi-identifier"
            hint="광고주 계정 입력"
            label="광고주 계정"
            :rules="[inputRules.required]"
            class="mb-3"
        />

        <!-- 타겟팅 구분 코드 선택 -->
        <v-select
            :items="['HC', 'TC', 'WC', 'MC', 'CW']"
            density="compact"
            variant="outlined"
            label="타겟팅 구분 코드"
            prepend-icon="mdi-alpha-t"
            color="green-accent-4"
            hint="SiteCode가 속한 타겟팅 코드 선택"
            :rules="[inputRules.required]"
            class="mb-3"

        />

        <!-- 이벤트 SiteCode 입력 -->
        <v-text-field
            clearable
            variant="outlined"
            density="compact"
            color="green-accent-4"
            prepend-icon="mdi-alpha-s"
            hint="이벤트의 siteCode 입력"
            label="SiteCode"
            :rules="[inputRules.required]"
        />

        <!-- 초기화, 검증, 테스트 버튼 -->
        <v-row
            no-gutters
            justify="end"
        >
          <v-btn
              color="error"
              text="초기화"
              class="mx-2"
              @click="adTestFormReset"
          >
          </v-btn>

          <v-btn
              color="warning"
              text="검증"
              class="mx-2"
              @click="adTestFormValid"
          >
          </v-btn>
          <v-btn
              color="success"
              text="광고 요청"
              class="ml-2"
              @click="adTestFormADRequset"
          >
          </v-btn>
        </v-row>
      </v-form>


      <v-sheet
          border
          rounded="lg"
          height="300px"
          elevation="3"
          class="mt-5 border-md border-double align-content-center text-center"
      >
        <AdTestMobonAd
            v-if="isAdTestRequest"
        />
      </v-sheet>

    </v-col>

    <!-- 광고 응답 결과, 광고 정보 표시 -->
    <v-col
        cols="12"
        class="pl-3"
        lg="7"
    >
      <v-text-field
          variant="outlined"
          label="광고 응답 결과"
          persistent-hint
          readonly
          hint="의도한 광고가 아닌 경우 결과 값을 확인 후 셋팅 수정 필요"
          color="green-accent-4"
          v-model="testResultMessage"
      />

      <v-divider
          class="my-5"
      />

      <v-textarea
          variant="outlined"
          color="green-accent-4"
          label="광고 정보(JSON) "
          rows="23"
          readonly
      >
      </v-textarea>

    </v-col>

  </v-row>


</template>


<style scoped>

</style>




