<template>
  <div class="subpageContainer">
    <SubTitle />

    <Rates ref="rates" :majors="majors"/>
    <div style="margin-top:30px;">
         <span class="labelText">时间选择</span>
      <el-radio-group v-model="radio" @change="change">
        <el-radio :label="1">近3年</el-radio>
        <el-radio :label="2">近1年</el-radio>
        <el-radio :label="3">近半年</el-radio>
        <el-radio :label="4">近一季度</el-radio>
        <el-radio :label="5">近一月</el-radio>
        <el-radio :label="6">自定义</el-radio>
      </el-radio-group>

      <el-date-picker
        v-model="date"
        :disabled="radio != '6'"
        type="daterange"
        class="customDaterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="change"
      >
      </el-date-picker>
    </div>
    <Archives ref="archives" :majors="majors"/>
    <Enterprise ref="enterprise"/>
  </div>
</template>
<script>
import SubTitle from "../../UI/SubTitle.vue";
import Rates from "./components/Rates.vue";
import Archives from "./components/Archives.vue"
import Enterprise from "./components/Enterprise.vue"
export default {
  layout: "subPage",
  components: {
    SubTitle,
    Rates,
    Archives,
    Enterprise
  },
  data() {
    return {
      radio: 2,
      date: "",
      scheme: "",
      majors:[]
    };
  },
   async mounted() {
    await this.getMajors()
    this.$refs.rates.loadingData()
    this.init()
  },
  methods:{
    getMajors() {
      //return  axios.get('/screen/league-census/major').then(res => {
      //   if(res.data.code === 1000) {
      //     this.majors = res.data.data
      //   }
      // })
      this.majors = [{
            "value": 2017,
            "label": "2017级",
            "children": [
                {
                    "value": 2, //--专业id,
                    "label": "电子技术应用--专业名称"
                }
            ]
        },
        {
            "value": 2018,
            "label": "2018级",
            "children": [
                {
                    "value": 21, //--专业id,
                    "label": "电子技"
                },
                  {
                    "value": 5, //--专业id,
                    "label": "电子12技"
                }
            ]
        }]
    },
init() {
      if(this.radio === 6 && !this.date) return
      const params = this.getSearchData()
      this.$refs.archives.loadingData(params)
      this.$refs.enterprise.loadingData(params)
    },
    getSearchData() {
      const params = {
        type: this.radio
      }
      if(this.radio === 6 ) {
        params.sdate = this.date[0]
        params.edate = this.date[1]
      }
      return params
    },
    change() {
      this.init()
    }
  }
};
</script>
<style scoped>
.subpageContainer {
  padding: 0 50px 30px;
}
.labelText {
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
}
.customDaterange {
  margin-left: 20px;
}

</style>
