<template>
	<div class="chat-layout">
		<div class="chat-layout-container">
			<div class="user-count">
				<h3>User count: </h3>
			</div>
			<div class="title">
				<h1>Chatroom</h1>
			</div>
			<div class="list-messages">
				<div class="message" v-for="message in list_messages">
					<chat-item :message="message"></chat-item>
				</div>
			</div>
			<div class="input-section">
				<input type="text" v-model="message" class="input-el" placeholder="Enter some mssage..." @keyup.enter="sendMessage">
				<button @click="sendMessage">Send</button>
			</div>
		</div>
	</div>
</template>

<script>
	import ChatItem from './ChatItem.vue'
	export default {
		components: {
			ChatItem
		},
		data() {
			return {
				message: '',
				list_messages: []
			}
		},
		created() {
			this.$root.push.create("Hello world!", {
			    body: "How's it hangin'?",
			    icon: 'http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Notifications-icon.png',
			    timeout: 10000,
			    onClick: function () {
			        window.focus();
			        this.close();
			    }
			});
			this.loadMessage()
			Echo.private('chatroom')
			.listen('MessagePosted', data => {
				console.log(data)
			})
		},
		methods: {
			loadMessage() {
				axios.get('/messages')
			    .then(response => {
			      this.list_messages = response.data
			    })
			    .catch(error => {
			      console.log(error)
			    })
			},
			sendMessage() {
				axios.post('/messages', {message: this.message})
			    .then(response => {
			      console.log('success')
			      this.list_messages.push({
			      	message: this.message,
			      	created_at: new Date().toJSON().replace(/T|Z/gi,' '),
			      	user: this.$root.currentUserLogin
			      })
			      this.message = ''
			    })
			    .catch(error => {
			      console.log(error)
			    })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat-layout {
	    border: solid 1px #ddd;
	    border-radius: 3px;
	    padding: 20px;
		.chat-layout-container {
			.user-count {
				float: right;
			}
			.list-messages {
				.message{
				    padding: 5px 0;
				}
			}
			.input-section {
				.input-el {
				    width: 100%;
					filter: hue-rotate(45deg);
				    font-weight: bold;
				    background-color: transparent;
				    border: 0;
				    border-bottom: 1px solid #404040;
				    outline: none;
			        overflow: visible;
			        font-size: 100%;
				    line-height: 1.15;
				    &:focus {
			    	    border-bottom: 1px solid #e400ff;
				    }
				}
			}
		}
	}
</style>