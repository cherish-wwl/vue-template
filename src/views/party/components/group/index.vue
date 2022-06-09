<template>
  <div class="group-content">
     <div class="group-title">
      <img style="width:448rem;" src="./../../../../assets/dataview/group.png"/>
    </div>
    <div class="flex-content">
        <Part1/>
        <Part2/>
    </div>
  </div>
</template>
<script>
import Part1 from './Part1.vue'
import Part2 from './Part2.vue'
export default {
  props:['fetchData'],
  provide(){
    return {
      fetchData: () => this.fetchData
    }
  },
  components:{
    Part1,
    Part2
  }
}
</script>
<style scoped>
.group-content {
  text-align: center;
}
.group-content .flex-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -27rem;
}
</style>