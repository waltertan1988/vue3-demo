<template>
  <div class="product">
    <h1>This is the caller of ProductCmp</h1>
    <ProductCmp msg="This is the parameter when calling ProductCmp"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCmp from '@/components/ProductCmp.vue'

export default {
  name: 'Product',
  components: {
    ProductCmp
  }
}
</script>

<style scoped lang="scss">
  .product {
    background-color: cornflowerblue;
  }
</style>
