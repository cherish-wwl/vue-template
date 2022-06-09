<template>
  <div>
    <div class="part-content" style="height:434rem;">
      <TitleC size="small">
        {{work.year}}年 就业政策
      </TitleC>
      <div style="padding: 20rem 0;">
        <DashLabel>
          <span>{{work.count}}个</span>
        </DashLabel>
      </div>
      <TitleC size="small">
         {{work.year}}年 就业合作企业
      </TitleC>
      <Pie3 :pieData="work.company_pipe" height="240rem" :radius="['45%', '60%']" totalTitel="企业数" totalUnit="个" unit="个"/>
    </div>
    <div class="part-content" style="height:295rem;margin-top:28rem;">
      <TitleC size="small">
       校企合作
      </TitleC>
      <Pie3 :pieData="work.cooperation_pipe" height="240rem" :radius="['45%', '60%']" totalTitel="企业数" totalUnit="个" unit="个"/>
    </div>
  </div>
</template>

<script>
import TitleC from "@/UI/Title.vue";

import Pie3 from "@/UI/Pie3.vue";
import DashLabel from "@/UI/DashLabel.vue";
export default {
  props:['work'],
  components: {
    TitleC,
    DashLabel,
    Pie3,
  },
  data() {
    return {
      pieData: [
        {
          value: 26,
          name: "0-49人",
        },
        {
          value: 74,
          name: "50-99人",
        },
        {
          value: 74,
          name: "100-299人",
        },
        {
          value: 74,
          name: "300-499人",
        },
        {
          value: 74,
          name: "500人以上",
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
  height: 434rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  margin-right: 40rem;
  padding: 14rem 10rem;
}
</style>
