<template>
    <div>
        <ul>
            <product-item v-for="item in productsData"
                :key="item.id" :product = item>
            </product-item>
        </ul>
        <h2>
            Test
        </h2>
    </div>
</template>

<script>

import productsList from '../data.json'
import productItem from './productItem.vue'

export default {
    data() {
        return {
            productsData: productsList.data
        }
    },
    components: {productItem},
    name: 'productsData'
}

</script>

<style>
    h2{
        color:red
    }
</style>