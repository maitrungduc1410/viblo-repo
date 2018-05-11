<template>
	<div class="chat-item">
		<div class="chat-item-container">
			<span class="message-time">{{ message.created_at }} | </span>
			<span class="user-name" :class="{'current-user': message.user.id == $root.currentUserLogin.id}">{{ message.user.name }}: </span>
			<span class="message-text">{{ message.message }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['message']
	}
</script>

<style lang="scss" scoped>
	.current-user {
		color: red;
	}
</style>