<template>
  <div class="practice-content">
    <div class="practice-title">
      <img
        style="width:448rem;"
        src="./../../../../assets/dataview/practice.png"
      />
    </div>
    <div class="flex-content">
      <Part1 :profile="fetchData.profile"/>
      <Part2 :policy="fetchData.policy"/>
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
.practice-content {
  text-align: center;
}
.practice-content .flex-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -27rem;
}
</style>
