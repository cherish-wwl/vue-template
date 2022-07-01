<template>
  <div
    class="map-container"
    id="map"
    :style="{
      backgroundImage: activeId
        ? 'url(/img/map/building' + activeId + '.png)'
        : '',
    }"
  >
    <div class="hots">
      <div v-for="(item, index) in hots" :key="index">
        <div
          class="hot-area"
          v-for="(box, bi) in item.boxs"
          :key="bi"
          @mouseenter="enterHot(item)"
          @mouseleave="leaveHot"
          :style="{
            top: box[0] + 'rem',
            left: box[1] + 'rem',
            width: box[2] + 'rem',
            height: box[3] + 'rem',
            transform: 'rotate(' + box[4] + 'deg)',
          }"
        ></div>
      </div>
    </div>
    <div class="tooltips">
      <template v-for="(item, index) in hots">
        <div
          :key="'_hots' + index"
          class="tooltip"
          v-if="
            activeId ? activeId === item.id : item.tooltip && item.tooltip.show
          "
        >
          <div
            class="tooltip-dot"
            :style="{
              top: item.tooltip.point[0] + 'rem',
              left: item.tooltip.point[1] + 'rem',
            }"
          ></div>
          <div
            class="tooltip-line"
            v-for="(l, li) in item.tooltip.line"
            :key="'_tooltip' + li"
            :style="{
              top: l[0] + 'rem',
              left: l[1] + 'rem',
              width: l[2] + 'rem',
              height: l[3] + 'rem',
            }"
          ></div>
          <el-popover
            :popper-options="options"
            trigger="hover"
            popper-class="popover-content"
            :visible-arrow="false"
            :fallback-placements="['bottom', 'top', 'right', 'left']"
          >
            <div
              class="tooltip-box"
              slot="reference"
              :style="{
                top: item.tooltip.rect[0] + 'rem',
                left: item.tooltip.rect[1] + 'rem',
                minWidth: item.tooltip.rect[2] + 'rem',
                height: item.tooltip.rect[3] + 'rem',
              }"
            >
              <div>
                <span class="tooltip-box-title">{{ item.name }}</span
                ><span class="tooltip-box-type">（{{ item.typeName }}）</span>
              </div>

              <div>
                房<span style="    opacity: 0;">房</span>间：{{ item.rooms }}
              </div>
              <div>可容纳：{{ item.count }}</div>
            </div>
            <div v-if="item.list && item.list.length">
              <div
                class="popover-content-item"
                v-for="(c, ci) in item.list"
                :key="'_popover' + ci"
              >
                <span>{{ c.name }} </span> <span>{{ c.count }}间</span>
              </div>
              <div class="popover-content-item total">
                <span>合计 </span>
                <span>{{ item.list.reduce((t, c) => c.count + t, 0) }}间</span>
              </div>
            </div>
          </el-popover>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { Popover } from "element-ui";
export default {
  components: {
    [Popover.name]: Popover,
  },
  data() {
    return {
      activeId: 0,
      options: {},
      hots: [],
    };
  },
  mounted() {
    this.options = {
      boundariesElement: document.getElementById("map"),
      gpuAcceleration: false,
    };
    this.init();
  },
  methods: {
    init() {
      this.hots = [
        {
          id: 2,
          boxs: [
            [137, 138, 99, 54, 30],
            [181, 177, 60, 80, 0],
          ],
          type: 1,
          name: "蓝月楼2",
          rooms: 9,
          count: 100,
          typeName: "宿舍楼",
          tooltip: {
            point: [110, 171],
            line: [
              [44, 175, 2, 74],
              [44, 175, 33, 2],
            ],
            rect: [24, 208, 164, 84],
          },
        },
        {
          id: 1,
          boxs: [
            [160, 79, 77, 42, 28],
            [182, 77, 100, 76, 0],
            [234, 78, 77, 42, 28],
            [250, 136, 35, 42, 339],
          ],
          name: "蓝月楼",
          rooms: 9,
          count: 100,
          type: 1,
          typeName: "宿舍楼",
          tooltip: {
            point: [148, 96],
            line: [
              [152, 40, 58, 2],
              [152, 40, 2, 234],
            ],
            rect: [385, 12, 164, 84],
          },
        },

        {
          id: 3,
          boxs: [[125, 251, 124, 163, 15]],
          name: "B区教学楼",
          rooms: 46,
          count: 2760,
          type: 2,
          typeName: "会堂/食堂/会议室",
          tooltip: {
            show: true,
            point: [153, 318],
            line: [[155, 322, 2, 113]],
            rect: [268, 80, 164, 84],
          },
          list: [
            {
              name: "教室",
              count: 28,
            },
            {
              name: "教师办公室",
              count: 13,
            },
            {
              name: "实训室",
              count: 3,
            },
            {
              name: "微机室",
              count: 1,
            },
            {
              name: "其他",
              count:1,
            }
          ],
        },
        {
          id: 4,
          boxs: [[232, 355, 144, 177, 26]],
          name: "A区教学楼",
          rooms: 9,
          count: 100,
          type: 2,
          typeName: "会堂/食堂/会议室",
          tooltip: {
            show: true,

            point: [294, 463],
            line: [[298, 467, 2, 87]],
            rect: [385, 270, 164, 84],
          },
          list: [
            {
              name: "教室",
              count: 32,
            },
            {
              name: "教师办公室",
              count: 9,
            },
            {
              name: "仓库",
              count: 1,
            },
            {
              name: "实训室",
              count: 2,
            },
            {
              name: "微机室",
              count: 3,
            },
            {
              name: "其他",
              count:2,
            }
          ],
        },
        {
          id: 5,
          boxs: [[187, 462, 140, 89, 22]],
          name: "综合楼",
          rooms: 65,
          count: 3900,
          type: 2,
          typeName: "会堂/食堂/会议室",
          tooltip: {
            show: true,
            point: [244, 577],
            line: [
              [248, 581, 2, 109],
              [357, 581, 42, 2],
            ],
            rect: [345, 622, 164, 84],
          },
          list: [
            {
              name: "教室",
              count: 2,
            },
            {
              name: "会议室",
              count: 2,
            },
            {
              name: "教师办公室",
              count: 31,
            },
            {
              name: "仓库",
              count: 2,
            },
            {
              name: "实训室",
              count: 16,
            },
            {
              name: "其他",
              count: 12,
            },
          
          ],
        },
        {
          id: 6,
          boxs: [[118, 447, 253, 89, 26]],
          name: "实训楼",
          rooms: 90,
          count: 5400,
          type: 2,
          typeName: "会堂/食堂/会议室",
          tooltip: {
            show: true,
            point: [107, 515],
            line: [
              [15, 518, 2, 100],
              [15, 518, 30, 2],
            ],
            rect: [10, 548, 164, 84],
          },
          list: [
            {
              name: "教室",
              count: 3,
            },

            {
              name: "智慧教室",
              count: 1,
            },
            {
              name: "教师办公室",
              count: 4,
            },
            {
              name: "实训室",
              count: 44,
            },
            {
              name: "微机室",
              count: 3,
            },
            {
              name: "其他",
              count: 35,
            },
          ],
        },
        // {
        //   id: 7,
        //   boxs: [[208, 695, 186, 112, 26]],
        //   name: "蓝月楼6",
        //   rooms: 9,
        //   count: 100,
        //   type: 2,
        //   typeName: "会堂/食堂/会议室",
        //   tooltip: {
        //     show: true,
        //     point: [243, 803],
        //     line: [[190, 807, 2, 55]],
        //     rect: [107, 717, 164, 84],
        //   },
        //   list: [
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "学生宿舍",
        //       count: 9,
        //     },
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "教师办公室",
        //       count: 9,
        //     },
        //     {
        //       name: "微机室",
        //       count: 9,
        //     },
        //     {
        //       name: "教室",
        //       count: 9,
        //     },
        //     {
        //       name: "其他",
        //       count: 9,
        //     },
        //   ],
        // },
      ];
    },
    enterHot(item) {
      console.log("item", item);
      // if(item.type === 2) return
      this.activeId = item.id;
    },
    leaveHot() {
      this.activeId = "";
    },
  },
};
</script>
<style scoped>
.map-container {
  height: 686rem;
  width: 973rem;
  background: url("/img/map/map.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
  /* margin-top: 23rem; */
}
.hot-area {
  position: absolute;
  /* background-color: #faebd77d; */
}
/* .hot-area:hover {
  background-color: #faebd77d;
} */
.tooltip-dot {
  width: 10rem;
  height: 10rem;
  background: #6af9ff;
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #ffffff;
  border-radius: 50%;
  position: absolute;
}
.tooltip-line {
  background: #6af9ff;
  position: absolute;
}
.tooltip-box {
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 2rem solid #6af9ff;
  position: absolute;
  padding: 8rem 0 8rem 15rem;
  font-size: 18rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tooltip-box-title {
  font-size: 18rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 18rem;
}
.tooltip-box-type {
  font-size: 18rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #6af9ff;
  line-height: 18rem;
}

.popover-content-item {
  margin: 10rem 0;
  display: flex;
  justify-content: space-between;
}
.popover-content-item.total {
  color: #6af9ff;
}
</style>

<style>
.el-popover.popover-content {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 2rem solid #6af9ff;
  padding: 0rem 10rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  min-width: 198rem;
  max-width: 300rem;
}
</style>
