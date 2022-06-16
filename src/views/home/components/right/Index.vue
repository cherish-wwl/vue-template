<template>
  <div class="right-container">
    <Achievements />
    <Construct />
    <Competition />
  </div>
</template>
<script>
import Achievements from './Achievements.vue'
import Construct from './Construct.vue'
import Competition from './Competition.vue'
export default {

  components: {
    Achievements,
    Construct,
    Competition
  },
  props:['fetchData'],
  provide(){
    return {
      fetchData: () => this.fetchData
    }
  }
}
</script>
<style scoped>
.right-container {
   background-image: url('./../../../../assets/dataview/left-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:420rem;
  padding: 14rem 10rem 0;
  height: 100%;
}
</style>