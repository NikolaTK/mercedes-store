<template>
    <div>
        <h1>Products List</h1>
        <prodName />
    </div>
</template>

<script>

import prodName from '../components/displayProductsList.vue'

export default {
  name: 'ProductListView',
   components: {
     prodName
   }
}
</script>