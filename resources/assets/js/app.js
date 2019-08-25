
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router/routes'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue').default);
// Vue.component('my-component', require('./components/MyComponent.vue').default);
// Vue.component('chat-layout', require('./components/ChatLayout.vue').default);
// Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);
// Vue.component('life-cycle', require('./components/LifeCycle.vue').default);
// Vue.component('binding-html', require('./components/BindingHTML.vue').default);
// Vue.component('event-handling', require('./components/EventHandling.vue').default);
// Vue.component('parent', require('./components/Parent.vue').default);
// Vue.component('api-calling', require('./components/ApiCalling.vue').default);
// Vue.component('blog', require('./components/Blog.vue').default);
Vue.component('User', require('./components/User.vue').default);

const app = new Vue({
    el: '#app',
});
