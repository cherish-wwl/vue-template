<template>
  <div class="part2">
    <TitleC size="small">
      {{ fdata.award.start }}-{{ fdata.award.end }}年 荣获奖项
    </TitleC>
    <div class="num">
      <div class="flex">
        <img
          style="width: 50rem;"
          src="../../../../assets/dataview/icon5.png"
        />
        <span>奖项数量</span>
      </div>
      <span>{{ fdata.award.count }}个</span>
    </div>
    <TitleC size="small">
      {{ fdata.project.start }}-{{ fdata.project.end }}年 优秀项目
    </TitleC>
    <div class="num">
      <div class="flex">
        <img
          style="width: 50rem;"
          src="../../../../assets/dataview/icon6.png"
        /><span>优秀项目</span>
      </div>
      <span>{{ fdata.project.count }}个</span>
    </div>
    <TitleC size="small"> {{ fdata.photo.year }}年度 党员风采 </TitleC>
    <div class="num">
      <div class="flex">
        <img
          style="width: 50rem;"
          src="../../../../assets/dataview/icon7.png"
        />
        <span>启用风采</span>
      </div>
      <span>{{ fdata.photo.count }}个</span>
    </div>
    <TitleC size="small"> {{ fdata.outlay.month }} 党费缴纳 </TitleC>
    <Pie2 :pieData="fdata.outlay.pipe" title="应缴人数" />
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import Pie2 from "@/UI/Pie2.vue";
export default {
  inject: ["fetchData"],
  computed: {
    fdata() {
      return this.fetchData();
    },
  },
  components: {
    TitleC,
    Pie2,
  },
};
</script>
<style scoped>
.part2 {
  width: 420rem;
  height: 645rem;
  padding: 14rem 10rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  text-align: center;
}
.num {
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 2rem solid #6af9ff;
  width: 280rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 24rem;
  padding-right: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20rem auto;
}
.flex {
  display: flex;
  align-items: center;
}
</style>
