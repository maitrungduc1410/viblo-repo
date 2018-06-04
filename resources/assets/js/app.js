
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueResource from 'vue-resource'
Vue.use(VueResource)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('my-component', require('./components/MyComponent.vue'));
Vue.component('chat-layout', require('./components/ChatLayout.vue'));
Vue.component('user-dashboard', require('./components/UserDashboard.vue'));
Vue.component('life-cycle', require('./components/LifeCycle.vue'));
Vue.component('binding-html', require('./components/BindingHTML.vue'));
Vue.component('event-handling', require('./components/EventHandling.vue'));
Vue.component('parent', require('./components/Parent.vue'));
Vue.component('api-calling', require('./components/ApiCalling.vue'));

const app = new Vue({
    el: '#app'
});
