<template>
  <h2>
    实习档案
     <el-cascader
      v-model="major"
      :options="majors"
      @change="handleChange"
      placeholder="全部专业"></el-cascader>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="实习情况">
          <Pie4
            :pieData="state_list"
            title="应实习人数"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="人"
          />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="已实习人数">
          <Bar2 class="barC" title="已实习人数" :barData="persons_list" unit="人" :yAxis="{ minInterval:1, showMinLabel:false,name:'（人）' }" />
        </Card>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="实习测评">
          <Pie4
            :pieData="assess_list"
            title="应提交人数"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="人"
          />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="实习成绩">
          <Pie4
            :pieData="result_list"
            title="应提交人数"
            :startAngle="60"
            :formatter="'{name|{b}}\n{time|{c}人} {time|{d}%}'"
            unit="人"
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
  props:['majors'],
  components: {
    Card,
    Pie4,
    Bar2,
  },
  data() {
    return {
      major: "",
      params: {},
      state_list: [],
      persons_list:[],
      assess_list:[],
      result_list: [],
    };
  },
   methods: {
    loadingData(params){
      
      if(params){
        this.params = params
      }
      this.params.major_id = this.major[1] || ''
      console.log('Archives params',this.params)
      // return  axios.get('/screen/practice-census/archives',params).then(res => {
      //   if(res.data.code === 1000) {
      //     this.state_list = res.data.data.state_list
      //     this.persons_list = res.data.data.persons_list
      //     this.assess_list = res.data.data.assess_list
      //     this.result_list = res.data.data.result_list
      //   }
      // })
      setTimeout(() =>{
  this.state_list =[ {
                "name": "未实习",
                "value": 10,
                type:4,
            }]
       this.persons_list =[{
                "name": "2022-06",
                "value": 100
            }]
       this.assess_list =[  {
                "name": "未提交",
                "value": 100,
            }]
       this.result_list =[ {
                "name": "优秀",
                "value": 100,
            }]
      },3000)
     

    },
    handleChange() {
      this.loadingData()
    }
  }
};
</script>
<style scoped>
h2 {
  font-size: 20px;
  margin-top: 20px;
}
</style>
