import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import '@/sass/main.sass' vite特殊寫法 @ 指向 src 資料夾
import '@/sass/main.sass'

const app = createApp(App)

app.use(router)

app.mount('#app')
