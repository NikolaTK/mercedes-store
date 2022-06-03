<template>
    <div>
        <GoBack />                
        <h1>Product Details Page</h1>
        <h2>Product Id: {{ product.id }}</h2>
        <h2>Product Name: {{ product.name }}</h2>
        <h2>Product Sizes: {{ product.sizes }}</h2>
        <h2>Product Colors: {{ product.colors }}</h2>
        <h2>Product Material: {{ product.material }}</h2>
        <h4>Product Description: {{ product.description }}</h4>
        <img v-bind:src="image">
    </div>
</template>

<script>
import productsList from '../data.json'
import GoBack from '../components/BackButton.vue'

let productsData = productsList
let productName = productsData.data[0].name
console.log('productName', productName)

export default {
    data: {        
        productId: 0        
    },
    created() {
        this.productId = this.$route.params.id - 1;
        console.log('this.$router.params: ', this.$route.params)
    },
    name: 'ProductDetailsView',
    components: {
      GoBack
    },
    computed: {
        product: function() {
            return this.getProduct(this.productId)
        },
        image: function() {
            return this.getProduct(this.productId).images[0]
        }
    },
    methods: {
        getProduct(id) {
            return productsData.data[id]
        }
    }
}
</script>