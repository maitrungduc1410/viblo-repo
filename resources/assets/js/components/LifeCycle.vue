<template>
	<div>
		<div>
			Name: {{ person.name }}
		</div>
		<div>
			Nick name: {{ person.nickname }}
		</div>
		<div>
			<Test :nickname="person.nickname"></Test>
		</div>
		<div>
			<button @click="changeName">Change Name</button>
		</div>
		<div>
			<button @click="changeNickname">Change Nick Name</button>
		</div>
		<div>
			<button @click="changeNicknameProperly">Change NIck name properly</button>
		</div>
	</div>
</template>
<script>
import Test from './Test.vue'
export default {
	components: {
		Test
	},
	data() {
		return {
		  person: {
				name: 'Edson'
			}
		}
	},
	methods: {
	    changeName() {
	        this.person.name = 'Arantes';
	    },
	    changeNickname() {
	        this.person.nickname = Math.random().toString(36).substring(7);
	        this.$forceUpdate()
	    },
	    changeNicknameProperly() {
	        Vue.set(this.person, 'nickname', 'Louis');
	    }
	}
}
</script>

<style lang="scss" scoped>
</style>