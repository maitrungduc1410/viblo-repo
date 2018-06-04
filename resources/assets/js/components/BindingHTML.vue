<template>
	<div class="form-input-binding">
		<div class="text">
			{{ message }}
		</div>
		<div class="input-form">
			<input type="number" v-model.trim="message" name="">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
				placeholder: 'This is placeholder',
				value: 'This is value'
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>