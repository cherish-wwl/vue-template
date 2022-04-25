<template>
  <div class="container">
    HOME PAGE; 
    <br />
    count: {{ count }};
     <br />
    <button class="btn" @click="change">change</button>
    <Test />
  </div>
</template>
<script>
import { state, actions, mutations } from "./store";
import Test from "./components/test";
export default {
  components: {
    Test
  },
  computed: {
    count() {
      return state.count;
    }
  },
  mounted() {
    actions.getCountSync(111);
  },
  methods: {
    change() {
      mutations.SET_COUNT(this.count + 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.container{
.btn{
  background-color: aquamarine;
}
}
</style>
