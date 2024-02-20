import { createApp } from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

import './assets/main.css'
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.mount("#app");
