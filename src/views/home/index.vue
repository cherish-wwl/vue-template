<template>
  <div class="content">
    <div class="left">
      <Left :fetchData="leftData" />
    </div>
    <div class="center">
      <Center :fetchData="centerData" />
    </div>
    <div class="right">
      <Right :fetchData="rightData" />
    </div>
  </div>
</template>
<script>
import Left from "@/views/home/components/left/Index.vue";
import Center from "@/views/home/components/center/Index.vue";
import Right from "@/views/home/components/right/Index.vue";

export default {
  components: {
    Left,
    Center,
    Right,
  },
  data() {
    return {
      leftData: {
        notice: {},
        visitor: {},
        project: {
          pie: [],
        },
        news: {},
      },
      centerData: {
        now: "",
        school: {},
        pipeline: {
          date: "",
          list: [],
        },
      },
      rightData: {
        introduce: {},
        competition: {},
      },
    };
  },

  mounted() {
    this.init();
  },
  methods: {
  
    init() {
      this.getLeft();
      this.getCenter();
      this.getRight();
    },
    getLeft() {
      // axios.post('/screen/first/left')
      this.leftData = {
        notice: {
          //通知公告
          month: "2022-05", //月份
          type_1: 0, //通知
          type_2: 0, //公告
          type_3: 0, //检查
        },
        visitor: {
          //来访
          date: "2022-05-27", //日期
          type_1: 0, //预约
          type_2: 0, //未到
          type_3: 0, //已到
        },
        project: {
          //项目
          year: "2022", //年份
          status_1: 31, //未开始
          status_2: 6, //进行中
          status_3: 13, //已结束
          pie: [
            {
              name: "招标类",
              value: 0,
            },
            {
              name: "非招标类",
              value: 0,
            },
          ],
        },
        news: {
          //新闻
          year: "2022", //年份
          count: 0, //数量
        },
      };
    },
    getCenter() {
      // axios.post('/screen/first/center')
      this.centerData = {
        now: "2022-05-27 21:52:37", //右上角时间
        school: {
          name: "礼县职业中等专业学校", //学校名
          campuses: 8, //校区
          institute: 4, //学院
          department: 25, //系
          major: 22, //专业
          grade: 19, //班级
          teacher: 258, //教职工
          student: 3223, //学生
        },
        pipeline: {
          //工作流程
          date: "2022-05-27",
          list: [
            {
              name: "财务管理",
              count: 0,
            },
            {
              name: "资产管理",
              count: 0,
            },
            {
              name: "行政管理",
              count: 0,
            },
            {
              name: "考勤管理",
              count: 0,
            },
            {
              name: "人事管理",
              count: 0,
            },
            {
              name: "档案合同",
              count: 0,
            },
            {
              name: "日常事务",
              count: 0,
            },
            {
              name: "贫困补助",
              count: 0,
            },
            {
              name: "教师应用",
              count: 0,
            },
            {
              name: "设备使用",
              count: 0,
            },
          ],
        },
      };
    },
    getRight() {
      // axios.post('/screen/first/right')
      this.rightData = {
        introduce: {
          //建设方案成就
          start: 2020, //开始年份
          end: "2022", //结束年份
          construct: 1, //方案
          attainment: 2, //成就
        },
        competition: {
          //技能大赛
          start: 2020, //开始年份
          end: "2022", //结束年份
          count: 1, //数量
          user: 2, //人数
          prize: 3, //奖品
        },
      };
    },
  },
};
</script>

<style scoped>
.dataview-container {
  color: #fff;
  min-height: 100vh;
  min-width: 100vw;
}

.title {
  font-size: 40rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6af9ff;
  line-height: 40rem;
  text-align: center;
  background-image: url("../../assets/dataview/nav.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 30rem 0 46rem;
  position: relative;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 12rem 29rem;
}
.center {
  flex: 1;
  position: relative;
}
.current_time {
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6af9ff;
  line-height: 30rem;
  position: absolute;
  right: 30rem;
  bottom: 9rem;
}
</style>

