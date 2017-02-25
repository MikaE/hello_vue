var Vue = require('vue/dist/vue')
new Vue({
  el: '#app',
  components: {
    MyMessage: require('./components/message.vue')
  }
})
