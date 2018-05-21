<template>
	<div class="my-component">
		<div>{{ reverseMessage() }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'this is text'
			}
		},
		computed: {
			reverseMessage() {
				return this.message.split('').reverse().join('')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-component {
		color: red;
	}
</style>