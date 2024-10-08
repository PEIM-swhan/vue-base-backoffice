<script setup>
import {onMounted} from "vue";

onMounted(async () => {
  const script = document.createElement('script');  // script 태그 생성
  script.src = 'https://img.mobon.net/js/common/HawkEyesMaker.js'; // 모비온 호크아이 스크립트 경로
  script.onload = () => {
    console.log("호크아이 load 완료");

    const createHawkEyesSyntax = 'new HawkEyes({"type":"banner","responsive":"N","platform":"W","scriptCode":"634076","frameCode":"74","width":"300","height":"250","settings":{"cntad":"1","cntsr":"3"}});';
    const script2 = document.createElement('script');
    script2.text = createHawkEyesSyntax;

    document.getElementById('ad-test-mobon').appendChild(script2);


  };

  document.getElementById('ad-test-mobon').appendChild(script);
  // await axios.get()
});



</script>

<template>
  <v-container
      id="ad-test-mobon"
  />
</template>

<style scoped>

</style>
