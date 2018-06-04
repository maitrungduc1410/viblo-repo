<template>
	<div class="event-handling">
		<div @click.middle="alertHello">
			hehehe
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			alertHello() {
				alert('Hello')
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>