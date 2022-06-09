<template>
  <div class="part2">
    <TitleC size="small">
      本校团员
    </TitleC>
    <SchoolPie :pieData="pieData" />
    <TitleC size="small">
      社团数量
    </TitleC>
    <div class="num">
      <div class="flex">
        <img
          style="width: 50rem;"
          src="../../../../assets/dataview/icon3.png"
        />
        <span>学生会</span>
      </div>
      <span>{{ fdata.college.count_1 }}个</span>
    </div>
    <div class="num">
      <div class="flex">
        <img
          style="width: 50rem;"
          src="../../../../assets/dataview/icon4.png"
        /><span> 社团</span>
      </div>
      <span>{{ fdata.college.count_2 }}个</span>
    </div>
    <TitleC size="small">
      团务知识数量
    </TitleC>
    <CircleNum> {{ fdata.knowledge }}份 </CircleNum>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import CircleNum from "@/UI/CircleNum.vue";
import SchoolPie from "./SchoolPie.vue";
export default {
  inject: ["fetchData"],
  computed: {
    fdata() {
      return this.fetchData();
    },
    pieData() {
      return [
        {
          value: this.fdata.member.reunion,
          name: "团员总人数",
        },
        {
          value: this.fdata.member.student - this.fdata.member.reunion,
          name: "",
          label: {
            show: false,
          },
        },
      ];
    },
  },
  components: {
    TitleC,
    SchoolPie,
    CircleNum,
  },
};
</script>
<style scoped>
.part2 {
  width: 420rem;
  /* height: 645rem; */
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
  width: 320rem;
  margin: 40rem auto;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(9, 108, 175, 0.3) 52%,
    rgba(0, 0, 0, 0.2) 100%
  );
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  font-size: 26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 26rem;
  /* text-shadow: 0rem 1rem 2rem #6af9ff; */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  display: flex;
  justify-content: space-between;
  align-items:center ;
  padding-right: 10rem;
}
.flex::before{
  content: "";
  display: inline-block;
  width: 6rem;
  height: 50rem;
  background: #6AF9FF;
}
.flex {
  display: flex;
  align-items: center;
}
</style>
