<template>
	<div>
		<div :class="[$style.welcome_text]">
			This is parent
			<div :class="[$style.text]">
				hey
			</div>
		</div>
		<Child></Child>
	</div>
</template>

<script>
	import Child from './Child.vue'
	export default {
		components: {
			Child
		}
	}
</script>

<style lang="scss" scoped module>
.welcome_text {
	color: red;
	.text {
		color: blue;
	}
}
</style>