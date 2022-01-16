<template>
  <div class="productCmp">
    <h1>{{ msg }}</h1>

    <table border="1px" cellspacing="0">
      <tr>
        <td>美元汇率：{{usaExchangeRate}}</td>
        <td>
          <!--不知道为何这里用v-model绑定state的计算属性会报错，所以只好用@input和:value来做双向绑定-->
          <input id="inputUpdateUsaExchangeRate" type="text" @input="updateUsaExchangeRate()" :value="usaExchangeRate">
        </td>
      </tr>
      <tr>
        <td>商品名称：</td><td>{{appleName}}</td>
      </tr>
      <tr>
        <td>商品价格（人民币分）：</td>
        <td>
          <input type="text" v-model="applePrice">
        </td>
      </tr>
      <tr>
        <td>商品价格（人民币元）：</td><td>{{applePriceToYuan}}</td>
      </tr>
      <tr>
        <td>商品价格（美元）：</td><td>{{applePriceToUsaDollar}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ProductCmp',
    props: {
      msg: String
    },

    methods:{
      updateUsaExchangeRate(){
        let newVal = document.getElementById("inputUpdateUsaExchangeRate").value;
        this.$store.commit("updateUsaExchangeRate", {newVal: newVal})
      }
    },

    computed:{
      applePrice:{
        get(){
          return this.$store.state.product.apple.price;
        },
        set(newValue){
          // 通过提交mutations实现对state的更新
          this.$store.commit("product/updateApplePrice", {price: newValue})
        }
      },

      usaExchangeRate(){
        return this.$store.state.productModule.usaExchangeRate;
      },

      appleName(){
        return this.$store.state.product.apple.name;
      },

      applePriceToUsaDollar(){
        return this.$store.getters['product/applePriceToUsaDollar']
      },

      // 以下等价于：...mapGetters({applePriceToYuan:"product/applePriceToYuan"})
      ...mapGetters("product",{
        applePriceToYuan: "applePriceToYuan"
      }),

      ...mapGetters(["usaExchangeRate"])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.productCmp {
  background-color: aquamarine;
}
</style>
