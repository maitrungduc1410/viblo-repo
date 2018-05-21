
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueContentPlaceholders from 'vue-content-placeholders'
const Push = require('push.js')

Vue.use(VueContentPlaceholders)
import VueEcho from 'vue-echo';
  
Vue.use(VueEcho, {
    broadcaster: 'socket.io',
    host: { path: window.location.hostname + ':6001/socket.io' },
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('my-component', require('./components/MyComponent.vue'));
Vue.component('chat-layout', require('./components/ChatLayout.vue'));

const app = new Vue({
    el: '#app',
    data: {
        currentUserLogin: {},
        push: Push
    },
    created() {
        this.getCurrentUserLogin()
    },
    methods: {
        getCurrentUserLogin() {
            axios.get('/getUserLogin')
            .then(response => {
                this.currentUserLogin = response.data
            })
        }
    }
});
