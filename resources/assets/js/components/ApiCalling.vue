<template>
	<div class="api-calling">
		<div class="error" v-if="errors.length">
			<span v-for="err in errors">
				{{ err }}
			</span>
			<hr>
		</div>
		<div class="create-form">
			<div class="product-name-input form-group">
				<input class="form-control" type="text" v-model="product.name">
			</div>
			<div class="product-name-input form-group">
				<input class="form-control" type="text" v-model.number="product.price">
			</div>
			<div class="button-create form-group">
				<button class="btn btn-primary" @click="createProduct">Create</button>
			</div>
		</div>
		<hr>
		<div class="list-products">
			<h2>LIST PRODUCT</h2>
			<div class="product-table">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Date created</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(prod, index) in list_products">
							<td>{{ prod.id }}</td>
							<td v-if="!prod.isEdit">
								{{ prod.name }}
							</td>
							<td v-else>
								<input type="text" class="form-control" v-model="prod.name">
							</td>
							<td v-if="!prod.isEdit">
								{{ prod.price }}
							</td>
							<td v-else>
								<input type="text" class="form-control" v-model.number="prod.price">
							</td>
							<td>{{ prod.created_at }}</td>
							<td v-if="!prod.isEdit">
								<button class="btn btn-success" @click="prod.isEdit = true">Edit</button>
								<button class="btn btn-danger" @click="deleteProduct(prod, index)">Delete</button>
							</td>
							<td v-else>
								<button class="btn btn-primary" @click="updateProduct(prod)">Save</button>
								<button class="btn btn-danger" @click="prod.isEdit = false">Cancel</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				product: {
					name: '',
					price: 0
				},
				errors: [],
				list_products: []
			}
		},
		created() {
			this.getListProducts()
		},
		methods: {
			formatDate(d) {
				var dformat = [ d.getFullYear(), (d.getMonth()+1),
                    d.getDate()
                    ].join('/')+
                    ' ' +
                  [ d.getHours(),
                    d.getMinutes(),
                    d.getSeconds()].join(':');
                    return dformat
			},
			createProduct() {
				this.errors = []
				axios.post('/products', {name: this.product.name, price: this.product.price})
				.then(response => {
					console.log(response.data.result)
					this.list_products.push({
						id: this.list_products.length + 1,
						name: this.product.name,
						price: this.product.price,
						created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
						isEdit: false
					})
				})
				.catch(error => {
					this.errors = error.response.data.errors.name
				})
			},
			getListProducts() {
				axios.get('/products')
				.then(response => {
					this.list_products = response.data
					this.list_products.forEach(item => {
						Vue.set(item, 'isEdit', false)
					})
				})
				.catch(error => {
					this.errors = error.response.data.errors.name
				})
			},
			updateProduct(product) {
				axios.put('/products/' + product.id, {name: product.name, price: product.price})
				.then(response => {
					console.log(response.data.result)
					product.isEdit = false
				})
				.catch(error => {
					this.errors = error.response.data.errors.name
				})
			},
			deleteProduct(product, index) {
				axios.delete('/products/' + product.id)
				.then(response => {
					console.log(response.data.result)
					this.list_products.splice(index, 1)
				})
				.catch(error => {
					this.errors = error.response.data.errors.name
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.error {
	span {
		color: red;
	}
}
</style>