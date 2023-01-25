<template>
  <div class="centerx labelx">
    <vs-input label="Name*" placeholder="Name" :danger="errors.name" v-model="item.name"/>
	<price-range-slider :errors="errors.name"></price-range-slider>

    <vs-textarea class="mt-2" label="Description*" placeholder="Description" :danger="errors.description" v-model="item.description"/>
	<price-range-slider :errors="errors.description"></price-range-slider>

	<label for="">Status*</label>
	<vs-switch v-model="item.status"/>
	<price-range-slider :errors="errors.status"></price-range-slider>

	<div class="row mt-2">
		<vs-button color="primary" @click="updateItem(item.id)" type="filled">Save</vs-button>
		<vs-button color="danger" @click="deleteItem(item.id)" type="filled">Delete</vs-button>
	</div>
  </div>
</template>

<script>

import PriceRangeSlider from '../../components/Error.vue';

export default {
	components: {
		PriceRangeSlider
	},

	data() {
		return {
			item: {},
			errors: {},
		}
	},
	created() {
		axios
			.get(`/api/v1/products/${this.$route.params.id}/record`)
			.then((response) => {
				this.item = response.data.item;
			});
	},

	methods: {
		updateItem(id) {
			this.errors = {};

			this.item.status = Number(this.item.status);
			
			this.$vs.dialog({
				type: 'confirm',
				color: 'warning',
				title: `Confirm save`,
				text: 'The element will be updated',
				accept: () => {
					axios
						.patch(`/api/v1/products/${id}`, this.item)
						.then(response => {
							this.$vs.notify({
								title: 'Item updated successfully',
								color:'success'
							})
						}).catch(({ response: { data: { fails } } }) => {
							this.$vs.notify({
								title: 'Error!',
								color: 'danger'
							});

							this.errors = fails;
						});
				}
			})
		},

		deleteItem(id) {
			this.$vs.dialog({
				type:'confirm',
				color: 'danger',
				title: `Confirm delete`,
				text: 'The element will be removed',
				accept: () => {
					axios
						.delete(`/api/v1/products/${id}/detete`)
						.then(response => {
							this.$router.replace({ path: '/product-list' });
							this.$vs.notify({
								title: 'Item deleted successfully'
							})
						});
				}
			})
		}
	}
}
</script>

<style scoped>
.border-danger {
	border: 1px solid red;
}
</style>