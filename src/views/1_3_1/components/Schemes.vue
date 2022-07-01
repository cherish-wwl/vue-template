<template>
  <h2>
    实习方案
     <el-cascader
      v-model="major"
      :options="majors"
      @change="handleChange"
      placeholder="全部专业"></el-cascader>
   
    <el-row type="flex" style="margin-top:30px;" :gutter="30">
      <el-col :span="12">
        <Card title="实习方式">
          <Pie4 :pieData="mode_list" title="方案总数" :formatter='"{name|{b}}\n{time|{c}份} {time|{d}%}"' unit="份" />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="Top5实习方案">
          <div style="margin: -15px 0;">
            <DotLabel v-for="(item,index) in plan_list" :key="index" class="dot_label">{{item.name}} <span>{{item.value}}个班级适用</span></DotLabel>
          </div>
        </Card>
      </el-col>
    </el-row>
  </h2>
</template>
<script>
import Card from "../../../UI/Card.vue";
import Pie4 from "../../../UI/Pie4.vue";
import DotLabel from "../../../UI/DotLabel.vue";
export default {
  props:['majors'],
  components: {
    Card,
    Pie4,
    DotLabel
  },
  data() {
    return {
      major: "",
      mode_list:[],
      plan_list:[],
      params: {}
    };
  },
  methods: {
    loadingData(params){
      
      if(params){
        this.params = params
      }
      this.params.major_id = this.major[1] || ''
      console.log('Schemes params',this.params)
      //return  axios.get('/screen/practice-census/scheme').then(res => {
      //   if(res.data.code === 1000) {
      //     this.mode_list = res.data.data.mode_list
      //     this.plan_list = res.data.data.plan_list
      //   }
      // })

      setTimeout(() =>{
      this.mode_list = [ 
          {type: 4, name: "统一实习", value: 0},
          {type: 3, name: "自主实习", value: 0}
      ]
      this.plan_list= [   {
          "name": "方案标题",
          "value": 2
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
.dot_label {
  width: 80%;
  margin: 5px 10%;
}
</style>
