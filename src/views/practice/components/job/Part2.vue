<template>
  <div class="part-content">
    <TitleC size="small">
      {{profile.year}}年 就业档案
    </TitleC>
    <Pie3 title="就业情况" :pieData="profile.graduate_pipe" totalTitel="毕业生总数" totalUnit="人" unit="人"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
     <Pie3 title="就业方式" :pieData="profile.job_pipe" totalTitel="已就业学生" totalUnit="人" unit="人"/>
      <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
     <Pie3 title="就业单位" :pieData="profile.company_pipe" totalTitel="就业去向" totalUnit="份" unit="人"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";

import Pie3 from "@/UI/Pie3.vue";
export default {
  props:['profile'],
  components: {
    TitleC,
    Pie3,
  },
  data() {
    return {
      pieData: [
        {
          value: 26,
          name: "未实习",
        },
        {
          value: 74,
          name: "已实习",
        },
        {
          value: 74,
          name: "实习中",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.part-content {
  width: 420rem;
  height: 827rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  padding: 14rem 10rem;
}
</style>
