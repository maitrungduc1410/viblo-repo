import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
    // base: '/app',
    linkActiveClass: 'active',
	routes: [
	    { 
	    	path: '/', 
	    	components: "../components/Home.vue"
		},
	 //    "/": () => import("../components/Home.vue"),
		// "/articles": () => import("../components/Articles.vue")
    ]
})