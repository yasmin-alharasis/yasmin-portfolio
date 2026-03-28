import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faStar, faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faHotjar } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// إضافة الأيقونات للمكتبة
library.add(faHome, faUser, faCode, faHotjar, faStar, faEnvelope, faMoon, faSun)

const app = createApp(App)

app.use(createPinia())
app.use(router)
// تسجيل الكمبوننت
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
