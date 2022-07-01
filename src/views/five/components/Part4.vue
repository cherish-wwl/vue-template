<template>
  <div class="part-content">
    <TitleC size="small"> 近期考试 </TitleC>
    <div class="test-one">
      <div class="test-title">{{ fetchData.exam.title }}</div>
      <div>考试开始时间：{{ fetchData.exam.date }}</div>
    </div>
    <TitleC size="small"> {{ fetchData.signin.date }} 各年级出勤率 </TitleC>
    <div class="test-two">
      <div
        class="chuqin"
        v-for="(item, index) in fetchData.signin.list"
        :key="index"
      >
        <div>{{ Math.floor((item.signin / (item.total || 1)) * 100) }}%</div>
        <div style="margin-top:10rem">{{ item.name }}</div>
      </div>
    </div>
    <TitleC size="small">
      {{ fetchData.score.start }}-{{ fetchData.score.end }}学年第{{
        fetchData.score.term
      }}学期 成绩
    </TitleC>
    <div>
      <Podium
        v-for="(item, index) in fetchData.score.list"
        :key="index"
        :title="item.grade"
        :exam="item.exam"
        :rank1="item.rank1"
        :rank2="item.rank2"
        :rank3="item.rank3"
      />
    </div>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import Podium from "./Podium.vue";
export default {
  props: ["fetchData"],
  components: {
    TitleC,
    Podium,
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
}
.test-title {
  font-size: 18rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 26rem;
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: 0rem 0rem 8rem 0rem #6af9ff, inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;

  margin-bottom: 10rem;
  padding: 3rem 0;
}
.test-one {
  padding: 15rem 10rem 20rem;
  text-align: center;
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
}
.test-two {
  display: flex;
  justify-content: space-between;
  padding: 10rem 2rem 15rem;
}
.chuqin {
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  margin: 0 6rem;
  flex: 1;
  text-align: center;
  padding: 10rem 0;
}
</style>
