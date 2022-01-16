const state = {
    apple:{
        name:"苹果",
        price:1000,
    }
}

const getters = {
    applePriceToYuan(state){
        // 这里的 `state` 对象是模块的局部状态
        return state.apple.price / 100;
    },
    applePriceToUsaDollar(state, getters, rootState){
        return state.apple.price / 100 * rootState.productModule.usaExchangeRate;
    }
}

const mutations = {
    updateApplePrice(state, obj){
        return state.apple.price = obj.price;
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}