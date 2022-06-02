<template>
    <div>
        <GoBack />
        <h1>Product Details Page</h1>
    </div>
</template>

<script>

import GoBack from '../components/BackButton.vue'

export default {
  name: 'ProductDetailsView',
   components: {
      GoBack
   }
}
</script>