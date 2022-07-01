<template>
  <h2>
    就业率
    <el-cascader
      v-model="major"
      :options="majors"
      @change="handleChange"
      placeholder="全部专业"
    ></el-cascader>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="就业率">
          <Bar2 class="barC" title="就业率" :barData="work_list"  unit="%" :yAxis="{  showMinLabel:false,name:'（%）' }"/>
        </Card>
      </el-col>
      <el-col :span="12"> </el-col>
    </el-row>
  </h2>
</template>
<script>
import Card from "../../../UI/Card.vue";
import Bar2 from "../../../UI/Bar2.vue";
export default {
  props: ["majors"],
  components: {
    Card,
    Bar2,
  },
  data() {
    return {
      major: "",
      params: {},
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
        ],
        series: [
          {
            name: "就业率",
            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70],
          },
        ],
      },
      work_list:[]
    };
  },
  methods: {
    loadingData(params) {
      if (params) {
        this.params = params;
      }
      this.params.major_id = this.major[1] || "";
      console.log("Rates params", this.params);
      // return  axios.get('/screen/work-census/rates',params).then(res => {
      //   if(res.data.code === 1000) {
      //     this.work_list = res.data.data.state_list
      //   }
      // })
      this.work_list = [
        {
          name: "2020",
          value: 3000,
        },
      ];
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
