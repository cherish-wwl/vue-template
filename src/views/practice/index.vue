<template>
  <div class="practice-job-container">
    <Practice :fetchData="leftData" />
    <Post :fetchData="leftData" />
    <Job :fetchData="rightData" />
  </div>
</template>
<script>
import Practice from './components/practice'
import Job from './components/job'
import Post from './components/post'
export default {
    components: {
      Practice,
      Job,
      Post
    },
    data() {
      return {
        leftData:{
          "profile": {//左边
            "year": 2022,//年份
            "status_pipe": [],
            "assess_pipe": [],
            "gain_pipe": []
          },
          "policy": { //右边
            "year": 2022,//年份
            "count": 6,//实习政策
            "company_pipe": [],
            "plan_pipe": [],
            "post_success": 59,//申请通过
            "post_all": 105,//申请总数
            "post_user": 16,//贫困生数
            "post_job": "6"//岗位数
          }
        },
        rightData: {
          "now": "2022-06-07 01:27:05",//当前时间
          "work": {//左边
            "year": 2022,//年份
            "count": 7,//就业政策
            "company_pipe": [],
            "cooperation_pipe": []
          },
          "profile": {//右边
            "year": 2021,//年份
            "graduate_pipe": [],
            "job_pipe": [],
            "company_pipe": []
          }
        }
      }
    },
    mounted(){
      this.init()
    },
    methods: {
      init() {
        this.getLeft()
        this.getRight()
      },
      getLeft(){
        // screen/third/left
        this.leftData= {
        "profile": {//左边
            "year": 2022,//年份
            "status_pipe": [{//实习情况
                "name": "未实习",
                "value": 0
            }, {
                "name": "实习中",
                "value": 0
            }, {
                "name": "已实习",
                "value": 225
            }],
            "assess_pipe": [{//实习测评
                "name": "已提交",
                "value": 32
            }, {
                "name": "未提交",
                "value": 2926
            }],
            "gain_pipe": [{//实习成绩
                "name": "优秀",
                "value": 4
            }, {
                "name": "良好",
                "value": 5
            }, {
                "name": "及格",
                "value": 12
            }, {
                "name": "不及格",
                "value": 4
            }]
        },
        "policy": { // 右边
            "year": 2022,//年份
            "count": 6,//实习政策
            "company_pipe": [{//实习企业
                "name": "0-49人",
                "value": 1
            }, {
                "name": "50-99人",
                "value": 0
            }, {
                "name": "100-299人",
                "value": 1
            }, {
                "name": "300-499人",
                "value": 4
            }, {
                "name": "500人以上",
                "value": 1
            }],
            "plan_pipe": [{//实习方案
                "name": "自主实习",
                "value": 4
            }, {
                "name": "统一实习",
                "value": 4
            }],
            "post_success": 59,//申请通过
            "post_all": 105,//申请总数
            "post_user": 16,//贫困生数
            "post_job": "6"//岗位数
        }
    }

      },
      getRight(){
        // screen/third/right
        this.rightData =  {
        "now": "2022-06-07 01:27:05",//当前时间
        "work": {//左边
            "year": 2022,//年份
            "count": 7,//就业政策
            "company_pipe": [{//合作企业
                "name": "0-49人",
                "value": 0
            }, {
                "name": "50-99人",
                "value": 3
            }, {
                "name": "100-299人",
                "value": 1
            }, {
                "name": "300-499人",
                "value": 0
            }, {
                "name": "500人以上",
                "value": 1
            }],
            "cooperation_pipe": [{//校企合作
                "name": "0-49人",
                "value": 1
            }, {
                "name": "50-99人",
                "value": 0
            }, {
                "name": "100-299人",
                "value": 3
            }, {
                "name": "300-499人",
                "value": 1
            }, {
                "name": "500人以上",
                "value": 1
            }]
        },
        "profile": {//右边
            "year": 2021,//年份
            "graduate_pipe": [{//就业情况
                "name": "已就业",
                "value": 20
            }, {
                "name": "待就业",
                "value": 1799
            }],
            "job_pipe": [{//就业方式
                "name": "直接就业",
                "value": 6
            }, {
                "name": "短训就业",
                "value": 6
            }, {
                "name": "学徒就业",
                "value": 6
            }, {
                "name": "弹性学籍就业",
                "value": 6
            }, {
                "name": "其他方式就业",
                "value": 6
            }],
            "company_pipe": [{//就业单位
                "name": "国有企业",
                "value": 5
            }, {
                "name": "国有控股企业",
                "value": 5
            }, {
                "name": "外资企业",
                "value": 5
            }, {
                "name": "合资企业",
                "value": 5
            }, {
                "name": "私营企业",
                "value": 5
            }, {
                "name": "国家行政机关",
                "value": 5
            }, {
                "name": "事业单位",
                "value": 5
            }]
        }
    }
      }
    },
}
</script>
<style scoped>
.practice-job-container {
  display: flex;
  justify-content: space-between;
  padding: 0 40rem;
  position: relative;
}
</style>
