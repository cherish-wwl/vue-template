<template>
  <div class="left-content">
    
    <Notices />
    <Visiters />
    <Projects />
    <News />
  </div>
</template>
<script>
import Notices from './Notices.vue'
import Visiters from './Visiters.vue'
import Projects from './Projects.vue'
import News from './New.vue'
export default {
  props:['fetchData'],
  provide(){
    return {
      fetchData: () => this.fetchData
    }
  },
  components: {
    Notices,
    Visiters,
    Projects,
    News
  }
}
</script>
<style scoped>
.left-content {
  background-image: url('./../../../../assets/dataview/left-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:420rem;
  padding: 14rem 10rem 0;
}
</style>