import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
