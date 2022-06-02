<template>
    <div>
        <ul>
            <div>
                <router-link
                    v-for="product in productsData"
                    :key="product.id"
                    :to="product.name">
                    <img :src="product.images[0]" :alt="product.name">
                    <h2>{{ product.name }} </h2>
                    <h3>{{ product.price }}€ </h3>
                </router-link>
            </div>
            <div>
                <router-link to="/productDetails"><img :src="pic"></router-link>
            </div>
        </ul>
    </div>
</template>

<script>

import productsList from '../data.json'
import pic from '../../public/images/Cap/0.png'

let productsData = Object.values(productsList.data)
console.log('productImage[0] ', productsData[0].images[0])
console.log('productsData: ', productsData);
console.log('displayProductsList.vue data: ', productsList.data[0].name)

export default {
    data() {
        return {
            productsData, pic
        }
    },
  name: 'productsData',
  image() {
      return productsData.images[0]
  }
}

</script>