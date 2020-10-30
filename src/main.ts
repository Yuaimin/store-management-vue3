import 'reset.css'
import 'ant-design-vue/dist/antd.css'

import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ui from '@/plugins/ui'

const app = createApp(App)
app.use(ui)
app.use(store)
app.use(router)
app.mount('#app')

// app.config.globalProperties = {
//   validateForm: (form: HTMLFormElement) =>
//     new Promise(reslove =>
//       form
//         .validate()
//         .then(() => reslove(true))
//         .catch(() => reslove(false))
//     )
// }
