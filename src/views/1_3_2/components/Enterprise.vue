<template>
  <h2>
    就业合作企业
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="企业规模">
          <Pie4 
            :pieData="scale_list"
            title="scale_list"
            :startAngle="60"
            :formatter="'{name|{b}}\n{time|{c}个} {time|{d}%}'"
            unit="个"
            />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="企业数量Top5行业">
          <ProcessList2 :list="trade_list"  unit="个"/>
        </Card>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="岗位数量Top5企业">
          <ProcessList2 :list="post_list"  unit="个"/>
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="岗位薪资">
            <Pie4 
            :pieData="salary_list"
            title="共有岗位"
            :startAngle="60"
            :formatter="'{name|{b}}\n{time|{c}个} {time|{d}%}'"
            unit="个"
            />
        </Card>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="岗位数量Top5行业">
          <ProcessList2 :list="position_list"  unit="个"/>
        </Card>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
  </h2>
</template>
<script>
import Card from "../../../UI/Card.vue";

import Pie4 from "../../../UI/Pie4.vue";
import ProcessList2 from "../../../UI/ProcessList2.vue";
export default {
  components: {
    Card,
    Pie4,
    ProcessList2
  },
  data() {
    return {
        pieData: [
         {
          name: "优秀",
          value: 0,
        },
        {
          name: "及格",
          value: 0,
        },
        {
          name: "良好",
          value: 0,
        },
        {
          name: "不及格",
          value: 23,
        },
      ],
      list: [
        {
          value:1,
          percent:12,
          count:123,
          name:'制造业制造业'
        },
        {
          value:1,
          percent:12,
          count:123,
          name:'制造业'
        },
        {
          value:1,
          percent:12,
          count:123,
          name:'制造业'
        },
        {
          value:1,
          percent:12,
          count:123,
          name:'制造业'
        },
        {
          value:1,
          percent:12,
          count:123,
          name:'制造业'
        }
      ],
      state_list:[],
      trade_list:[],
      post_list:[],
      salary_list:[],
      position_list:[]
    };
  },
  methods:{
    loadingData(params) {
      console.log("Enterprise params", params);
      // return  axios.get('/screen/practice-census/enterprise',params).then(res => {
      //   if(res.data.code === 1000) {
      //     this.state_list = res.data.data.state_list
      //     this.trade_list = res.data.data.trade_list
        //     this.post_list = res.data.data.post_list
      //     this.salary_list = res.data.data.salary_list
      //     this.position_list = res.data.data.position_list
      //   }
      // })
      this.state_list =[{ name: "待就业", value: 26 }];
      this.trade_list = [{ name: "待就业", value: 26 }];
      this.salary_list =[{ name: "待就业", value: 26 }];
      this.post_list =[{ name: "待就业", value: 26 }];
      this.position_list = [{ name: "待就业", value: 26 }];
    },
  }
};
</script>
<style scoped>
h2 {
  font-size: 20px;
  margin-top: 20px;
}
</style>
