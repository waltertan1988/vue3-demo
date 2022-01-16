import { createStore } from 'vuex';
import product from './module/product';

export default createStore({
  state: {
    productModule:{
      usaExchangeRate: 6.5
    }
  },
  getters:{
    usaExchangeRate(state){
      return state.productModule.usaExchangeRate;
    }
  },
  mutations: {
    updateUsaExchangeRate(state, obj){
      return state.productModule.usaExchangeRate = obj.newVal;
    }
  },
  actions: {
  },
  modules: {
    namespaced: true, // 为了解决不同模块命名冲突的问题
    product
  }
})
