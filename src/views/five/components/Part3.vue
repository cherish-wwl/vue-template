<template>
  <div class="part-content">
    <TitleC size="small"> {{fetchData.homework.date}} 作业练习布置 </TitleC>
    <div class="lianxi">
      <table class="lianxi-table" cellspacing="0">
        <tbody>
          <tr>
            <th>年级</th>
            <th>作业</th>
            <th>练习</th>
          </tr>
          <tr>
            <th>一年级</th>
            <th>{{fetchData.homework.exam_1}}次</th>
            <th>{{fetchData.homework.test_1}}次</th>
          </tr>
          <tr>
            <th>二年级</th>
            <th>{{fetchData.homework.exam_2}}次</th>
            <th>{{fetchData.homework.test_2}}次</th>
          </tr>
          <tr>
            <th>三年级</th>
            <th>{{fetchData.homework.exam_3}}次</th>
            <th>{{fetchData.homework.test_3}}次</th>
          </tr>
        </tbody>
      </table>
    </div>
    <TitleC size="small"> {{fetchData.micro.year}}年 微课数量及top3科目 </TitleC>
    <div>
      <div class="weike">
        <div>当前共有微课</div>
        <div class="v">{{fetchData.micro.count}}个</div>
      </div>
      <div class="jiaoshi">
        <div class="t">
          <img src="@/assets/dataview/five4.png" />突出贡献教师
        </div>
        <div class="n">{{fetchData.micro.teacher}}</div>
      </div>
      <div :class="'paihang paihang' + index" v-for="(item,index) in fetchData.micro.subject" :key="index">
        <span>{{item.name}}</span>
        <span class="v">{{item.count}}个</span>
      </div>
    </div>
    <TitleC size="small"> {{fetchData.lecture.year}}年 教学资料 </TitleC>
    <Pie2
      :pieData="fetchData.lecture.pie"
      title="总份数"
      unit="份"
      startAngle="90"
      height="250rem"
      :formatter="'{name|{b}}\n{time|{c}份} {time|{d}%}'"
    />
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import Pie2 from "@/UI/Pie2.vue";
export default {
  props: ["fetchData"],
  components: {
    TitleC,
    Pie2,
  },
  data() {
    return {
      pieData: [
        {
          name: "课前预习",
          value: 12,
        },
        {
          name: "复习汇总",
          value: 17,
        },
        {
          name: "课中课件",
          value: 5,
        },
        {
          name: "实训文档",
          value: 2,
        },
      ],
    };
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
.lianxi {
  padding: 15rem 50rem;
}
.lianxi-table {
  width: 100%;
  table-layout: fixed;
  border: 2rem solid #6af9ff;
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
}
.lianxi-table tr:not(:last-child) th,
.lianxi-table tr:not(:last-child) td {
  border-bottom: 2rem solid #6af9ff;
}

.lianxi-table td:not(:last-child),
.lianxi-table th:not(:last-child) {
  border-right: 2rem solid #6af9ff;
}
.lianxi-table th,
.lianxi-table td {
  padding: 10rem 0;
}
.lianxi-table th {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 0rem 1rem #6af9ff, 0rem 0rem 1rem #6af9ff;
}
.lianxi-table td {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 28rem;
}
.weike {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  margin: 15rem 117rem;
  text-align: center;
  font-size: 20rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 1rem 2rem #6af9ff;
  padding: 6rem 0;
}
.weike .v {
  font-size: 26rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 26rem;
  margin-top: 6rem;
}
.jiaoshi {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border-radius: 8rem;
  border: 1rem solid #6af9ff;
  margin: 15rem 117rem;
  text-align: center;
  padding-bottom: 12rem;
}
.jiaoshi img {
  width: 40rem;
}
.jiaoshi .t {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  display: flex;
  align-items: center;
}
.jiaoshi .n {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 0rem 1rem #6af9ff, 0rem 0rem 1rem #6af9ff;
  /* -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */
}

.paihang {
  background-image: url("../../../assets/dataview/five5.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 352rem;
  height: 54rem;
  padding: 0 16rem 0 57rem;
  font-size: 24rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 30rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  /* -webkit-background-clip: text;
-webkit-text-fill-color: transparent; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto;
}
.paihang .v {
  font-size: 24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 24rem;
  text-shadow: none;
}
.paihang1 {
  width: 300rem;
  background-image: url("../../../assets/dataview/five6.png");
}
.paihang2 {
  width: 300rem;
  background-image: url("../../../assets/dataview/five7.png");
  margin-bottom: 14rem;
}
</style>
