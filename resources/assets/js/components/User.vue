<template>
	<div class="user-management">
		<nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="/">
                        Laravel
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                {{ currentUser.name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/logout">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="create-user container" v-if="checkIsAdmin">
        	<div class="row">
        		<div class="col-md-3">
        			<input type="text" v-model="userCreate.name" class="form-control" placeholder="Name...">
        		</div>
        		<div class="col-md-3">
        			<input type="email" v-model="userCreate.email" class="form-control" placeholder="User email...">
        		</div>
        		<div class="col-md-3">
        			<select class="form-control" v-model="userCreate.role">
        				<option value="employee">Employee</option>
        				<option value="saler">Saler</option>
        				<option value="admin">Admin</option>
        			</select>
        		</div>
        		<div class="col-md-3">
        			<button class="btn btn-primary" @click="createUser">Create</button>
        		</div>
        	</div>
        </div>
        <div class="list_user table-responsive container">
        	<table class="table table-hover">
        		<thead>
        			<tr>
        				<td>ID</td>
        				<td>Name</td>
        				<td>Email</td>
        				<td>Role</td>
        				<td v-if="checkIsAdmin">Action</td>
        			</tr>
        		</thead>
        		<tbody v-if="list_users.length">
        			<tr v-for="user in list_users">
        				<td>{{ user.id }}</td>
        				<td>{{ user.name }}</td>
        				<td>{{ user.email }}</td>
        				<td>
        					<span v-for="role in user.roles">
        						{{ role.name }},
        					</span>
        				</td>
        				<td v-if="checkIsAdmin">
        					<button class="btn btn-success">
        						Edit
        					</button>
        					<button class="btn btn-danger">Delete</button>
        				</td>
        			</tr>
        		</tbody>
        	</table>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userCreate: {
					name: '',
					email: '',
					role: 'employee'
				},
				currentUser: {},
				list_users: []
			}
		},
		created() {
			this.getCurrentUser()
			this.getListUsers()
		},
		methods: {
			getCurrentUser() {
	    		axios.get('/getCurrentUser')
				.then(response => {
					this.currentUser = response.data
				})
				.catch(error => {
					console.log(error)
				})
	    	},
	    	getListUsers() {
				this.$http.get('/users')
				.then(response => {
					this.list_users = response.body
					this.list_users.forEach(user => {
						Vue.set(user, 'isEdit', false)
					})
				}, error => {
					console.log(error)
				})
			},
            createUser() {
                axios.post('/users', {user: this.userCreate})
                .then(response => {
                    console.log(response)
                    this.userCreate = {}
                    this.getListUsers()
                })
                .catch(error => {
                    console.log(error)
                })
            }
		},
		computed: {
			checkIsAdmin() {
				if(this.currentUser.roles) {
					let check = false
					this.currentUser.roles.forEach(role => {
						if(role.name === 'admin') {
							check = true
						}
					})
					return check
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>