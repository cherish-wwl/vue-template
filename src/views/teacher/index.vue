<template>
  <div class="teacher-container">
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
      leftData: {
        clockin: {
          //考勤
          date: "2022-06-07", //日期
          leave: 0, //请假
          away: 0, //外出
          travel: 0, //出差
          not: 41, //未出勤
          normal: 0, //正常
        },
        evaluate: {
          //评教
          start: 2021, //年份
          end: 2022, //年份
          term: 2, //学期
          count: 0, //条数
          grade: 0, //班级
          user: 0, //学生
          teacher: 0, //老师
        },
        teach: [],
        education: {
          //德育教育
          start: 2021, //年份
          end: 2022, //年份
          list: [],
        },
        training: 2, //实训方案
      },
      rightData: {
        now: "2022-06-08 16:04:18", //右上角时间
        course: {
          //课程
          start: 2021, //年份
          end: 2022, //年份
          term: 2, //学期
          count: [],
          type_bar: {
            //课程类别
            axis: ["公共基础", "专业实训"],
            series: [],
          },
          optional_bar: {
            //课程种类
            axis: ["必修课", "选修课"],
            series: [],
          },
        },
        consult: {
          //招生
          year: 2022, //年份
          online: 22, //咨询人数
          form_0: 28, //报名人数
          form_1: 7, //待审核人数
          form_2: 16, //批准人数
          form_3: 11, //录取人数
          apply: 194, //志愿采集人数
        },
        textbook: [],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getLeft();
      this.getRight();
    },
    getLeft() {
      // screen/third/left
      this.leftData = {
        clockin: {
          //考勤
          date: "2022-06-07", //日期
          leave: 0, //请假
          away: 0, //外出
          travel: 0, //出差
          not: 41, //未出勤
          normal: 0, //正常
        },
        evaluate: {
          //评教
          start: 2021, //年份
          end: 2022, //年份
          term: 2, //学期
          count: 0, //条数
          grade: 0, //班级
          user: 0, //学生
          teacher: 0, //老师
        },
        teach: [
          {
            //教研组
            name: "文化基础", //分类
            counts: 5, //数量
            users: 37, //人数
          },
          {
            name: "专业基础",
            counts: 6,
            users: 33,
          },
        ],
        education: {
          //德育教育
          start: 2021, //年份
          end: 2022, //年份
          list: [
            {
              name: "军训活动",
              value: 1,
            },
            {
              name: "安全教育",
              value: 2000,
            },
            {
              name: "法制教育",
              value: 10,
            },
            {
              name: "道德教育",
              value: 23,
            },
            {
              name: "行为规范",
              value: 2,
            },
            {
              name: "常识教育",
              value: 5,
            },
            {
              name: "心理健康",
              value: 9,
            },
            {
              name: "其他",
              value: 12,
            },
          ],
        },
        training: 2, //实训方案
      };
    },
    getRight() {
      // screen/third/right
      this.rightData = {
        now: "2022-06-08 16:04:18", //右上角时间
        course: {
          //课程
          start: 2021, //年份
          end: 2022, //年份
          term: 2, //学期
          count: [
            {
              //课程数量
              name: "一年级",
              count: 42,
            },
            {
              name: "二年级",
              count: 16,
            },
            {
              name: "三年级",
              count: 6,
            },
          ],
          type_bar: {
            //课程类别
            axis: ["一年级", "二年级", "三年级"],
            series: [{name: "必修课", data: [2, 3, 0]}, {name: "选修课", data: [0, 0, 0]}]
          },
          optional_bar: {
            //课程种类
            axis: ["一年级", "二年级", "三年级"],
            series:[{name: "必修课", data: [2, 3, 0]}, {name: "选修课", data: [0, 0, 0]}]
          },
        },
        consult: {
          //招生
          year: 2022, //年份
          online: 22, //咨询人数
          form_0: 28, //报名人数
          form_1: 7, //待审核人数
          form_2: 16, //批准人数
          form_3: 11, //录取人数
          apply: 194, //志愿采集人数
        },
        textbook: [
          {
            //教材
            name: "专业教材",
            value: 4,
          },
          {
            name: "普通教材",
            value: 1,
          },
          {
            name: "选读教材",
            value: 0,
          },
          {
            name: "辅助教材",
            value: 0,
          },
          {
            name: "校本教材",
            value: 1,
          },
        ],
      };
    },
  },
};
</script>
<style scoped>
.teacher-container {
  display: flex;
  justify-content: space-between;
  padding: 10rem 40rem;
}
</style>
