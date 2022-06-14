<template>
    <div>
        <GoBack />
        <ProductInfo />
    </div>
</template>

<script>
import GoBack from '../components/BackButton.vue'
import ProductInfo from '../components/ProductInfo.vue'

export default {
    data: {        
        productId: 0
    },
    name: 'ProductDetailsView',
    components: {
      GoBack, ProductInfo
    }
}
</script>