<template>
  <div class="part-content">
    <TitleC size="small">
      {{policy.year}}年 实习政策
    </TitleC>
    <div style="padding: 20rem 0;">
      <DashLabel>
        <span> {{policy.count}}个</span>
      </DashLabel>
    </div>
    <TitleC size="small">
      {{policy.year}}年 实习企业
    </TitleC>
    <Pie3 :pieData="policy.company_pipe" height="240rem" :radius='["45%", "60%"]' totalTitel="企业数" totalUnit="个" unit="个"/>
    <TitleC size="small">
      {{policy.year}}年 实习方案
    </TitleC>
    <Pie2 :pieData="policy.plan_pipe" title="方案总数"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import DashLabel from "@/UI/DashLabel.vue";
import Pie2 from "@/UI/Pie2.vue";
import Pie3 from "@/UI/Pie3.vue";
export default {
  props:['policy'],
  components: {
    TitleC,
    DashLabel,
    Pie2,
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
  height: 673rem;
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
