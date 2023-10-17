import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import CardDetail from './components/CardDetail.vue'
import SpaceData from './components/SpaceData.vue'
import store from './store.js';
import router from './router.js';


const app = createApp(App)

app.use(store)
app.use(router)
app.component("card-detail", CardDetail)
app.component('space-data', SpaceData)
app.mount('#app')

