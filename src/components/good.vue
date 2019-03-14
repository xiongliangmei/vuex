<template>
  <div id="app">
  <table>
    <thead>
      <tr>
        <th>商品id</th>
        <th>商品名称</th>
        <th>单价</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in goodList">
         <td>{{product.id}}</td>
         <td>{{product.name}}</td>
         <td>{{product.price}}</td>
         <td><button @click="addToCart(product)">加入购物车</button></td>
      </tr>
    </tbody>
  </table>
  <hr/>
  <h4>购物车</h4>
    <table>
      <thead>
      <tr>
        <th>商品id</th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>单个商品总价</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cartProducts">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.num}}</td>
        <td>{{product.total_num}}</td>
        <td><button @click="delProduct(product)">删除</button></td>
      </tr>
      </tbody>
    </table>

    <div><span>总价:</span>{{totalPrice}}</div>
    <div><span>总数量:</span>{{total_num}}</div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name:'',
  computed:{
    ...mapGetters([
      'goodList',
      'totalPrice',
      'total_num',
      'cartProducts'
    ])
  },
  methods:{
    ...mapActions([
      'addToCart',
      'delProduct'
    ])
  }
}
</script>
