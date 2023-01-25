<template>
    <div>
        <vx-card title="All Products" code-toggler>
            <vs-table :sst="true" :max-items="items.length" :data="items" @sort="handleSort">

                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="name">Name</vs-th>
                    <vs-th sort-key="description">Description</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].id">
                            {{data[indextr].id}}
                        </vs-td>
                        <vs-td :data="data[indextr].name">
                            {{data[indextr].name}}
                        </vs-td>
                        <vs-td :data="data[indextr].description">
                            {{data[indextr].description}}
                        </vs-td>
                        <vs-td :data="data[indextr].status">
                            {{ data[indextr].status ? 'active' : 'disabled' }}
                        </vs-td>
                        <vs-td>
                            <div class="btn-group" role="group">
                                <router-link :to="{name: 'product-edit', params: { id: data[indextr].id }}" class="btn btn-primary">Edit</router-link>
                                <a href="javascript:void(0)" @click="deleteItem(data[indextr].id)" class="text-danger">Delete</a>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <br>
            <vs-pagination :total="total" v-model="params.page"></vs-pagination>
        </vx-card>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                items: [],
                total: 0,
                params: {
                    page: 1,
                    count: 6,
                    by: 'id',
                    dir: 'asc',
                }
            }
        },
        
        watch: {
            params: {
                handler() {
                    this.getAll();
                },
                deep: true,
            },
        },

        mounted() {
            this.getAll();
        },

        methods: {
            handleSort(field, direction) {
                this.params.by = field;
                this.params.dir = direction;
            },

            getAll() {
                this.$vs.loading();
                
                axios
                    .get('/api/v1/products/list', {params: this.params})
                    .then(response => {
                        this.total = response.data.last_page;

                        this.items = response.data.data;

                        this.$vs.loading.close()
                    });
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
                                this.getAll();
                                this.$vs.notify({
                                    title: 'Item deleted successfully'
                                })
                            });
                    }
                })
            },
        }
    }
</script>