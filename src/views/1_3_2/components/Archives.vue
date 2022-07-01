<template>
  <h2>
    就业档案
    <el-cascader
      v-model="major"
      :options="majors"
      @change="handleChange"
      placeholder="全部专业"
    ></el-cascader>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="就业情况">
          <Pie4
            :pieData="situation_list"
            title="毕业生总数"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="人"
          />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="已就业人数">
          <Bar2 class="barC" title="已就业人数" :barData="obtain_list" unit="人" :yAxis="{ minInterval:1, showMinLabel:false,name:'（人）' }" />
        </Card>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="就业方式">
          <Pie4
            :pieData="mode_list"
            title="已就业学生"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="人"
          />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="就业单位">
          <Pie4
            :pieData="company_list"
            title="就业去向"
            :startAngle="60"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="份"
          />
        </Card>
      </el-col>
    </el-row>
  </h2>
</template>
<script>
import Card from "../../../UI/Card.vue";
import Pie4 from "../../../UI/Pie4.vue";
import Bar2 from "../../../UI/Bar2.vue";
export default {
  props: ["majors"],
  components: {
    Card,
    Pie4,
    Bar2,
  },
  data() {
    return {
      major: "",
      params: "",
      pieData1: [
        //实习测评
        {
          name: "已提交",
          value: 32,
        },
        {
          name: "未提交",
          value: 26,
        },
      ],
      pieData2: [
        {
          name: "优秀",
          value: 32,
        },
        {
          name: "及格",
          value: 26,
        },
        {
          name: "良好",
          value: 6,
        },
        {
          name: "不及格",
          value: 23,
        },
      ],
      barData: {
        //课程类别
        axis: [
          "2021-01",
          "2021-02",
          "2021-03",
          "2021-04",
          "2021-05",
          "2021-06",
          "2021-07",
          "2021-08",
          "2021-09",
          "2021-10",
          "2021-01",
          "2021-02",
          "2021-03",
          "2021-04",
          "2021-05",
          "2021-06",
          "2021-07",
          "2021-08",
          "2021-09",
          "2021-10",
        ],
        series: [
          {
            name: "已实习人数",
            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70,120, 200, 150, 80, 70, 110, 130, 150, 80, 70],
          },
        ],
      },
      situation_list: [],
      obtain_list: [],
      mode_list: [],
      company_list: [],
    };
  },
  methods: {
    loadingData(params) {
      if (params) {
        this.params = params;
      }
      this.params.major_id = this.major[1] || "";
      console.log("Archives params", this.params);
      // return  axios.get('/screen/work-census/archives',params).then(res => {
      //   if(res.data.code === 1000) {
      //     this.situation_list = res.data.data.situation_list
      //     this.obtain_list = res.data.data.obtain_list
      //     this.mode_list = res.data.data.mode_list
      //     this.company_list = res.data.data.company_list
      //   }
      // })
      this.situation_list = [{ name: "待就业", value: 26 }];
      this.obtain_list = [{ name: "待就业", value: 26 }];
      this.mode_list = [{ name: "待就业", value: 26 }];
      this.company_list = [{ name: "待就业", value: 26 }];
    },
    handleChange() {
      this.loadingData();
    },
  },
};
</script>
<style scoped>
h2 {
  font-size: 20px;
  margin-top: 20px;
}
</style>
