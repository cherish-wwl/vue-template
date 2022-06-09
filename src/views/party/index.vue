<template>
  <div class="party-container">
    <div style="flex:.49"><Part :fetchData="leftData"/></div>
    <div style="flex:.49"><Group :fetchData="rightData" /></div>
  </div>
</template>
<script>
import Group from "./components/group";
import Part from "./components/party";
export default {
  components: {
    Part,
    Group,
  },
  data() {
    return {
      leftData: {
        party: {
          //本校党员
          pie1: [
            {
              name: "党员人数",
              value: 66,
            },
            {
              name: "职工人数",
              value: 290,
            },
          ],
          pie2: [
            {
              name: "正式党员",
              value: 41,
            },
            {
              name: "预备党员",
              value: 25,
            },
            {
              name: "优秀党员",
              value: 9,
            },
          ],
          man: 40,
          woman: 26,
        },
        birthday: {
          //党员生日
          count: 0,
          list: [],
        },
        award: {
          //荣获奖项
          start: 2020,
          end: 2022,
          count: 1,
        },
        project: {
          //优秀项目
          start: 2020,
          end: 2022,
          count: 1,
        },
        photo: {
          //党员风采
          year: 2022,
          count: 4,
        },
        outlay: {
          //党费
          month: "2022-06",
          pipe: [
            {
              name: "未缴费",
              value: 0,
            },
            {
              name: "已缴费",
              value: 0,
            },
          ],
        },
      },
      rightData: {
        now: "2022-06-03 23:16:45", //当前时间
        league: {
          //团支动态
          year: 2022,
          special: 0, //专题
          dynamic: 0, //动态
        },
        practice: {
          //社会实践
          year: 2022,
          list: [
            {
              name: "成长类",
              count: 0,
            },
            {
              name: "立志类",
              count: 0,
            },
            {
              name: "环保类",
              count: 0,
            },
            {
              name: "科普类",
              count: 0,
            },
            {
              name: "爱心类",
              count: 0,
            },
            {
              name: "其他",
              count: 0,
            },
          ],
        },
        member: {
          reunion: 0, //团员人数
          student: 3223, //总人数
        },
        college: {
          count_1: 6, //学生会
          count_2: 28, //社团
        },
        knowledge: 0, //知识
      },
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getLeft()
      this.getRight()
    },
    getLeft() {
      // screen/second/left
      this.leftData = {
        party: {
          //本校党员
          pie1: [
            {
              name: "党员人数",
              value: 66,
            },
            {
              name: "职工人数",
              value: 290,
            },
          ],
          pie2: [
            {
              name: "正式党员",
              value: 41,
            },
            {
              name: "预备党员",
              value: 25,
            },
            {
              name: "优秀党员",
              value: 9,
            },
          ],
          man: 40,
          woman: 26,
        },
        birthday: {
          //党员生日
          count: 0,
          list: [],
        },
        award: {
          //荣获奖项
          start: 2020,
          end: 2022,
          count: 1,
        },
        project: {
          //优秀项目
          start: 2020,
          end: 2022,
          count: 1,
        },
        photo: {
          //党员风采
          year: 2022,
          count: 4,
        },
        outlay: {
          //党费
          month: "2022-06",
          pipe: [
            {
              name: "未缴费",
              value: 0,
            },
            {
              name: "已缴费",
              value: 0,
            },
          ],
        },
      }
    },
    getRight() {
      // screen/second/right
      this.rightData = {
        now: "2022-06-03 23:16:45", //当前时间
        league: {
          //团支动态
          year: 2022,
          special: 0, //专题
          dynamic: 0, //动态
        },
        practice: {
          //社会实践
          year: 2022,
          list: [
            {
              name: "成长类",
              count: 10,
            },
            {
              name: "立志类",
              count: 20,
            },
            {
              name: "环保类",
              count: 0,
            },
            {
              name: "科普类",
              count: 0,
            },
            {
              name: "爱心类",
              count: 0,
            },
            {
              name: "其他",
              count: 0,
            },
          ],
        },
        member: {
          reunion: 0, //团员人数
          student: 3223, //总人数
        },
        college: {
          count_1: 6, //学生会
          count_2: 28, //社团
        },
        knowledge: 0, //知识
      }
    },
  },
};
</script>
<style scoped>
.party-container {
  display: flex;
  justify-content: space-between;
  padding: 10rem 40rem;
}
</style>
