<template>
  <div class="five-container">
    <Part1 :fetchData="leftData"/>
    <Part2 :fetchData="leftData"/>
    <Part3 :fetchData="rightData"/>
    <Part4 :fetchData="rightData"/>
  </div>
</template>
<script>
import Part1 from "./components/Part1.vue";
import Part2 from "./components/Part2.vue";
import Part3 from "./components/Part3.vue";
import Part4 from "./components/Part4.vue";
export default {
  components: {
    Part1,
    Part2,
    Part3,
    Part4,
  },
  data() {
    return {
      leftData:  {
        "report": {//教学总结
            "year": 2022,
            "pie": [{
                "name": "已发布",
                "value": 2
            }, {
                "name": "未发布",
                "value": 5
            }]
        },
        "plan": {//教案管理
            "start": 2021,
            "end": 2022,
            "today": 0,
            "pie": [{
                "name": "已检查",
                "value": 10
            }, {
                "name": "未检查",
                "value": 2
            }]
        },
        "reform": {//教学改革
            "year": 2022,
            "count": 20
        },
        "project": {//教研项目
            "year": 2022,
            "count_1": 0,//进行中
            "count_2": 0,//未开始
            "count_3": 31//已结束
        },
        "paper": {//论文
            "year": 2022,
            "list": [{
                "name": "国家级",
                "value": 10
            }, {
                "name": "省级",
                "value": 9
            }, {
                "name": "市级",
                "value": 9
            }, {
                "name": "县级",
                "value": 13
            }, {
                "name": "校级",
                "value": 14
            }]
        },
        "subject": {//课题
            "year": 2022,
            "list": [{
                "name": "申报",
                "value": 12
            }, {
                "name": "立项",
                "value": 17
            }, {
                "name": "开题",
                "value": 5
            }, {
                "name": "实施",
                "value": 2
            }, {
                "name": "结题",
                "value": 0
            }]
        }
      },
      rightData:  {
        "homework": { // 作业练习
            "date": "2022-06-22",//日期
            "exam_1": 0,//作业1年级
            "test_1": 0,//练习1年级
            "exam_2": 0,//作业2年级
            "test_2": 0,//练习2年级
            "exam_3": 0,//作业3年级
            "test_3": 0//练习3年级
        },
        "micro": {//微课
            "year": 2022,//年份
            "count": 11,//微课数量
            "teacher": "郝小海",//突出教师
            "subject": [{//学科排名
                "count": 5,
                "name": "理学"
            }, {
                "count": 4,
                "name": "文学"
            }, {
                "count": 1,
                "name": "历史学"
            }]
        },
        "lecture": {//教学资料
            "year": 2022,//年份
            "pie": [{
                "name": "课前预习",
                "value": 18
            }, {
                "name": "课中课件",
                "value": 19
            }, {
                "name": "复习汇总",
                "value": 21
            }, {
                "name": "实训文档",
                "value": 25
            }]
        },
        "exam": {//近期考试
            "title": "化学考试",
            "date": "2022-08-03"
        },
        "signin": {//出勤
            "date": "2022-06-22",//日期
            "list": [{
                "name": "一年级",
                "signin": 0,//出勤人数
                "total": 0//总人数
            }, {
                "name": "二年级",
                "signin": 0,
                "total": 0
            }, {
                "name": "三年级",
                "signin": 0,
                "total": 0
            }]
        },
        "score": {//考试成绩
            "start": 2021,//开始年份
            "end": 2022,//结束年份
            "term": 2,//学期
            "list": [{
                "grade": "一年级",
                "exam": "2021级模拟考",
                "rank1": {//第一名
                    "score": "90.0",
                    "users": ["王冲", "刘永进"]
                },
                "rank2": {//第二名
                    "score": "70.0",
                    "users": ["王永进"]
                },
                "rank3": []//第三名
            }, {
                "grade": "二年级",
                "exam": "2020级模拟考",
                "rank1": {
                    "score": "95.0",
                    "users": ["王江海"]
                },
                "rank2": {
                    "score": "85.0",
                    "users": ["彭程"]
                },
                "rank3": {
                    "score": "75.0",
                    "users": ["康贵荣"]
                }
            }, {
                "grade": "三年级",
                "exam": "2019级期末考试",
                "rank1": {
                    "score": "90.0",
                    "users": ["许明霞"]
                },
                "rank2": {
                    "score": "80.0",
                    "users": ["薛妹"]
                },
                "rank3": {
                    "score": "70.0",
                    "users": ["薛富云"]
                }
            }]
        }
    }

    }
  },

}
</script>
<style scoped>
.five-container {
  display: flex;
  justify-content: space-between;
  padding: 10rem 40rem;
}
</style>
