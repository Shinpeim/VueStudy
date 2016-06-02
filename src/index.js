const Vue = require('vue');
const NyanComponent = require('./nyan.vue');
Vue.component('nyan-component', NyanComponent);

const app = new Vue({
  template: '<nyan-component></nyan-component>',
  el: "#main"
});
