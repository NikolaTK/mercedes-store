<template>
    <span class="go-back">
        <button @click="$router.back()">Return</button>
    </span>
</template>

<script>
export default {
  name: 'GoBack'
}
</script>