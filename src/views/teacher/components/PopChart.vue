<!-- d3js 气泡图 -->
<template>
  <div>
    <div id="bubble" style="width: 100%;height:420rem"></div>
    <div class="education-list">
      <div
        class="education-item"
        v-for="(item, index) in popData"
        :key="index"
        :style="{ color: colorList[index % colorList.length].borderColor }"
      >
        <span class="dot" :style="{ background: colorList[index % colorList.length].borderColor }"></span>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { CustomChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  DatasetComponent,
  TooltipComponent,
  VisualMapComponent,
  CustomChart,
  CanvasRenderer,
]);
import * as d3 from "d3";
export default {
  props: ["popData"],
  data() {
    return {
      myChart: null,
      option: {},
      colorList: [
        {
          borderColor: "#FF4242",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#FF0000", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.3)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255, 0, 0, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(10, 176, 91, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(96, 255, 174, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(54, 255, 152, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(10, 176, 174, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(60, 255, 253, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(10, 255, 252, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(10, 86, 176, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(56, 147, 255, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(14, 124, 255, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(223, 165, 22, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 146, 56, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255, 172, 0, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(176, 10, 136, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 59, 237, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(254, 9, 255, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(120, 176, 10, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(192, 255, 69, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.3)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(184, 255, 44, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
        {
          borderColor: "rgba(13, 176, 10, 1)",
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(79, 255, 75, 0.7)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(0, 0, 0, 0.3)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(38, 255, 107, 0.7)", // 100% 处的颜色
            },
          ],
          global: false,
        },
      ],
    };
  },
  watch: {
    popData() {
      this.resizeEchart();
    },
  },
  mounted() {
    this.init();
    this.initEcharts();
  },

  methods: {
    resizeEchart() {
      this.init();
      this.myChart.setOption(this.option);
      this.myChart.resize();
    },
    init() {
      let that = this;
      let seriesData = [
        {
          depth: 0,
          id: "option",
          index: 0,
          value: 0,
        },
      ];
      that.popData.forEach((e, i) => {
        seriesData = seriesData.concat([
          {
            depth: 1,
            id: "option." + i,
            index: 1,
            value: "",
          },
          {
            depth: 2,
            id: "option." + i + "." + e.name,
            index: 2,
            value: e.value,
          },
        ]);
      });
      let displayRoot = stratify1();
      function stratify1() {
        return d3
          .stratify()
          .parentId(function(d) {
            return d.id.substring(0, d.id.lastIndexOf("."));
          })(seriesData)
          .sum(function(d) {
            return d.value || 0;
          })
          .sort(function(a, b) {
            return b.value - a.value;
          });
      }
      function overallLayout(params, api) {
        let context = params.context;
        d3
          .pack()
          .size([api.getWidth() - 2, api.getHeight() - 2])
          .padding(5)(displayRoot);
        context.nodes = {};

        displayRoot.descendants().forEach(function(node) {
          context.nodes[node.id] = node;
        });
      }
      function renderItem(params, api) {
        let context = params.context;
        // let idx = params.dataIndex;

        // Only do that layout once in each time `setOption` called.
        // 每次调用“setOption”时，只能进行一次布局。
        if (!context.layout) {
          context.layout = true;

          overallLayout(params, api);
        }

        let nodePath = api.value("id");
        let nodeValue = api.value("value");
        // let nodeName = nodePath
        //   .slice(nodePath.lastIndexOf(".") + 1)
        //   .split(/(?=[A-Z][^A-Z])/g)
        //   .join("\n");
        let node = context.nodes[nodePath];
        if (node.id === "option") {
          node.r = 0;
        }
        if (!node) {
          // Reder nothing.
          return;
        }
        const nodeCatalog = nodePath.split(".")[1];
        let isLeaf = !node.children || !node.children.length;
        let z2 = api.value("depth") * 2;

        return {
          type: "circle",
          shape: {
            cx: node.x,
            cy: node.y,
            r: !isLeaf ? (node.r > 2 ? node.r - 2 : node.r) : node.r,
          },
          transition: ["shape"],
          z2: z2,
          textContent: {
            type: "text",
            style: {
              // transition: isLeaf ? "fontSize" : null,
              text: isLeaf ? nodeValue : "",
              fill: (that.colorList[nodeCatalog] || {}).borderColor || "#fff",
              fontFamily: "Arial",
              fontWeight: 400,
              // width: node.r * 1.3,
              // overflow: "truncate",
              fontSize: that.transformFontSize(30),
              // fontSize: node.r / 3,
            },
            // emphasis: {
            //   style: {
            //     overflow: null,
            //     fontSize: Math.max(node.r / 3, 12),
            //   },
            // },
          },
          textConfig: {
            position: "inside",
          },
          style: {
            fill: isLeaf ? that.colorList[nodeCatalog] : null,
            // fill:isLeaf ? that.colorList[idx % that.colorList.length] :null,
            stroke: !isLeaf
              ? (that.colorList[nodeCatalog] || {}).borderColor
              : "",
            lineWidth: !isLeaf ? 1 : 0,
          },
          // emphasis: {
          //   style: {
          //     fontFamily: "Arial",
          //     fontSize: 12,
          //     shadowBlur: 20,
          //     shadowOffsetX: 3,
          //     shadowOffsetY: 5,
          //     shadowColor: "rgba(0,0,0,0.3)",
          //   },
          // },
        };
      }
      this.option = {
        title: {
          show: true,
          top: this.transformFontSize(15),
          text: "德育活动数量",
          left: "center",
          padding: [this.transformFontSize(10), this.transformFontSize(20)],
          borderRadius: 5,
          borderColor: "#6AF9FF",
          borderWidth: 1,
          shadowColor: "#6AF9FF",
          shadowBlur: this.transformFontSize(6),

          width: this.transformFontSize(200),
          textStyle: {
            color: "#fff",

            fontSize: this.transformFontSize(18),
            lineHeight: this.transformFontSize(20),
          },
        },
        legend: {
          bottom: 20,
        },
        dataset: {
          source: seriesData,
        },
        tooltip: {},
        hoverLayerThreshold: Infinity,

        series: [
          {
            top: this.transformFontSize(15),
            type: "custom",
            colorBy: "data",
            renderItem: renderItem,
            progressive: 0,
            coordinateSystem: "none",
            encode: {
              tooltip: "value",
              itemName: "id",
            },
          },
        ],
      };
    },
    initEcharts() {
      this.myChart = echarts.init(document.getElementById("bubble"));
      this.myChart.setOption(this.option);
    },
  },
};
</script>
<style scoped>
.education-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40rem;

  margin-left: 20rem;
}
.education-item {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ff0000;
  line-height: 28rem;
  margin-right: 20rem;
  margin-bottom: 6rem;
}
.education-item .dot {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: #ff0000;
  margin-right: 10rem;
}
</style>
