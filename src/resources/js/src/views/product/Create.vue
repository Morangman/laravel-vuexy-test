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
		<vs-button color="primary" @click="storeItem()" type="filled">Save</vs-button>
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
			item: {
				status: false
			},
			errors: {},
		}
	},

	methods: {
		storeItem() {
			this.errors = {};

			this.item.status = Number(this.item.status);
			
			this.$vs.dialog({
				type: 'confirm',
				color: 'warning',
				title: `Confirm creating`,
				text: 'The element will be created',
				accept: () => {
					axios
						.post(`/api/v1/products`, this.item)
						.then(response => {
							this.$router.replace({ path: '/product-list' });

							this.$vs.notify({
								title: 'Item created successfully',
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
		}
	}
}
</script>

<style scoped>
.border-danger {
	border: 1px solid red;
}
</style>