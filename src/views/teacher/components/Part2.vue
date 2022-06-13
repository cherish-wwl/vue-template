<template>
  <div class="part-content">
    <TitleC size="small" :hideArrow="true">
      {{fetchData.education.start}}-{{fetchData.education.end}}学年 德育活动
    </TitleC>
     <div style="margin-top: 10rem;">
      <BorderLabel>德育活动数量</BorderLabel>
    </div>
   <PopChart :popData="fetchData.education.list"/>
    <TitleC size="small" :hideArrow="true">
   实训方案
  </TitleC>
  
  <CircleNum>{{fetchData.training}}份</CircleNum>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import PopChart from './PopChart.vue'

import CircleNum from "@/UI/CircleNum.vue";
import BorderLabel from "@/UI/BorderLabel.vue";
export default {
  props:['fetchData'],
  components: {
    TitleC,
    PopChart,
    CircleNum,
    BorderLabel
  },
};
</script>
<style scoped>
.part-content {
  width: 420rem;
 height: 910rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  padding: 14rem 10rem;
  text-align: center;
}
</style>
