<template>
  <div class="container">
    HOME PAGE; 
    <br />
    count: {{ count }};
     <br />
    <button class="btn" @click="change">change</button>
    <!-- <Test /> -->
    <br />
    <button @click="toPage">home</button>
  </div>
</template>
<script lang="ts">
import { Vue , Component} from 'vue-property-decorator'
import { state, actions, mutations } from "./store/index";
import Test from "./components/test.vue";
@Component({
  components: {
    Test
  }
})
export default class User extends Vue {
  public get count():number{
      return state.count;
 }
  mounted():void {
    actions.getCountSync(111);
  }
  change():void {
    mutations.SET_COUNT(this.count + 1);
  }
  toPage():void {
    this.$router.push('/') 
    console.log(this.$route)
  }
  
}
</script>
<style lang="scss" scoped>
.container{
  .btn{
    background-color: aquamarine;
  }
}
</style>
