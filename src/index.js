const Vue = require('vue');
const VueRouter = require('vue-router')

Vue.use(VueRouter)

const App = Vue.extend({
  components: {
    "global-navigation": require('./global_navigation.vue')
  }
});

const router = new VueRouter

router.map({
  '/menu1': {
    component: require('./menu1.vue')
  },
  '/menu2': {
    component: require('./menu2.vue')
  },
  '/menu3': {
    component: require('./menu3.vue')
  }
})
router.start(App, '#main')
