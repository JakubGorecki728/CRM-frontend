import App from './App.vue'
import { createApp, reactive } from 'vue'
import router from './router/router'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './samples/node-api'
import "reflect-metadata"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css";
import _ from 'lodash'

const vuetify = createVuetify({
  components,
  directives,
  ssr: true
})

const app = createApp(App)
app.config.globalProperties.$router = router

  app.use(vuetify)
  app.use(router)
  app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
