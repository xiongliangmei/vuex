<template>
  <div id="app">
    Count is{{$store.state.count}}
    <button @click="increment">+5</button>
    <button @click="decrement">-1</button>
  </div>
</template>
<script>
  //引入mapActions,
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:mapGetters([
    ]),
    methods:mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
