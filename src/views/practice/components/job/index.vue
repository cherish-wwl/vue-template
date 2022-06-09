
<template>
  <div class="job-content">
     <div class="job-title">
      <img style="width:448rem;" src="./../../../../assets/dataview/job.png"/>
    </div>
    <div class="flex-content">
      <Part1 :work="fetchData.work"/>
      <Part2 :profile="fetchData.profile"/>
    </div>
  </div>
</template>
<script>
import Part1 from "./Part1.vue";
import Part2 from "./Part2.vue";
export default {
  props:['fetchData'],
  components: {
    Part1,
    Part2
  },
};
</script>
<style scoped>
.job-content {
  text-align: center;
}
.job-content .flex-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -27rem;
}
</style>