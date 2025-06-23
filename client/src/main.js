import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/route";
import store from "./store/store";
// import 'tiptap/style.css'

createApp(App).use(router).use(store).mount('#app')
