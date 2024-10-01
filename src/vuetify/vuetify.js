import 'vuetify/styles'     // vuetify 모든 css 스타일 사용
import '@mdi/font/css/materialdesignicons.css' // vuetify 아이콘 폰트 사용
import * as components from 'vuetify/components'    // vuetify 모든 컴포넌트 사용
import * as directives from 'vuetify/directives'    // vuetify 모든 디렉티브 사용

import {createVuetify} from "vuetify";

const vuetify = createVuetify({
    components, // vuetify 모든 컴포넌트 사용
    directives, // vuetify 모든 디렉티브 사용
    icons: {    // vuetify 아이콘 폰트 사용
        defaultSet: 'mdi',
    },
    theme:{
        defaultTheme: 'light'
    }



});

export default vuetify;
