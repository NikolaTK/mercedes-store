<template>
  <div class="productItem">
    <img :src="product.images[0]" :alt="product.name" />
    <h2>{{ product.name }}</h2>
    <router-link :to="productDetails + product.id">
      Go to product
    </router-link>
  </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    computed: {
        productDetails: function() {
            return 'productDetails/'
        }
    }
};
</script>

<style scoped>
    h2{
        color: blue;
    }
</style>
