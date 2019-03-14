import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//初始化状态
const state = {
  //数组-商品
   good_list:[
     {
       id:'1',
       name:'护手霜',
       price: 9.9
     },
     {
       id:'2',
       name:'植物精华',
       price: 12.8
     },
     {
       id:'3',
       name:'洁面乳',
       price: 3.9
     },
     {
       id:'4',
       name:'保湿水',
       price: 5.6
     },
   ],
  added:[]
}

const getters = {
  //商品列表
  goodList: state => {
    return state.good_list.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: item.price.toFixed(2)
      }
    })
  },
  //购物车的列表
  cartProducts: state =>{
    return state.added.map(({id,num})=>{
      let product = state.good_list.find(item => item.id ==id)
      return{
        id: product.id,
        name: product.name,
        price: product.price.toFixed(2),
        num,
        total_num: (product.price*num)
      }
    })
  },
  //计算总价
  totalPrice:(state,getters)=>{
    let total = 0;
    getters.cartProducts.forEach(item =>{
       total += item.price * item.num
    })
    return total.toFixed(2);
  },
  //计算总数量
  total_num: (state,getters)=>{
    let total = 0;
    getters.cartProducts.forEach(item =>{
      total += item.num;
    })
    return total;
  }
}
//改变值的方法
const mutations = {
  ADD_TO_CART(state,{id}){
    let record = state.added.find(item => item.id == id); // 查询购物车是否存在

    if (!record){
       state.added.push({
         id,
         num:1
       })
    }else {
       record.num ++
    }
  },
  //购物车数量改变
  NUM_CHANGE(state,{id,value}){
    state.added.forEach((item,index)=>{
      if (item.id == id){
        item.num = value;
      }
    })
  },
  DELETE(state,product){
    state.added.forEach((item,index)=>{
      if (item.id ==product.id){
        state.added.splice(index,1);
      }
    })
  },
  CLEAR(state){
    state.added = [];
  }
};
//注册事件
const actions = {
  addToCart({commit}, product) {
    commit('ADD_TO_CART', {
      id: product.id
    })
  },
  numChange({commit},data){
    commit('NUM_CHANGE',{
      id: data.id,
      value:data.value
    })
  },
  delProduct({commit},product){
     commit("DELETE",product)
  },
  clearAllCart({commit}){
    commit("CLEAR")
  }

}


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})



