<template>
  <div class="part-content">
    <TitleC size="small">
      {{profile.year}}年 团总支动态
    </TitleC>
      <Pie3  title="实习情况" :pieData="profile.status_pipe" totalTitel="应实习人数" totalUnit="人" unit="人"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
    <Pie3 title="实习测评" :pieData="profile.assess_pipe" totalTitel="应提交人数" totalUnit="人" unit="人"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
      <Pie3 title="实习成绩" :pieData="profile.gain_pipe" totalTitel="共有成绩"  totalUnit="份" unit="人"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import Pie3 from '@/UI/Pie3.vue';
export default {
  props:['profile'],
  components: {
    TitleC,
    Pie3
  },
  data() {
    return {
      pieData:  [
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
            ]
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
  margin-right: 40rem;
  padding: 14rem 10rem;
}
</style>
