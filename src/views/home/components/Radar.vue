<template>
	<div class="card">
		<div
			ref="radar"
			class="radar"
			style="height:100%; width:90%; margin: auto;"
		></div>
	</div>
</template>
<script>
import * as echarts from "echarts";
export default {
	data() {
		return {
			myChart: "",
			option: {
				textStyle: {
					color: ["#00FFFF"],
					fontSize: this.remFontSize(),
					fontWeight: 500,
					margin: [
						0, // 上
						10, // 右
						5, // 下
						0 // 左
					]
				},
        grid: {
          width: '100px'
        },
				radar: {
          radius: 90 ,
					center: ["50%", "50%"],
					splitArea: {
						show: true,
						areaStyle: {
							color: "#0A0C63",
							opacity: 1
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							width: 1,
							color: "#0085FB",
							opacity: 1
						}
					},
					// shape: 'circle',
					indicator: [
						{ name: "睡眠时长", max: 6500 },
						{ name: "入睡时刻", max: 16000 },
						{ name: "入睡时长", max: 30000 },
						{ name: "深度睡眠", max: 38000 },
						{ name: "做梦多少", max: 52000 },
						{ name: "睡中觉醒", max: 52000 },
						{ name: "躁动不安", max: 52000 },
						{ name: "睡眠中断", max: 25000 }
					]
				},
				series: [
					{
						type: "radar",
            symbolSize: 6,
						data: [
							{
								value: [
									4200,
									3000,
									20000,
									35000,
									50000,
									18000,
									3000,
									20000,
									35000
								],
								name: "",
								areaStyle: {
									color: "#FC7369",
									opacity: 0.2
								},
								itemStyle: {
									normal: {
										color: "#FC7369",

										areaStyle: {
											type: "default"
										}
									}
								}
							}
						]
					}
				]
			}
		};
	},
	methods: {
		remFontSize() {
			let oWidth = document.body.clientWidth || document.documentElement.clientWidth
			let base = 16
			if(oWidth <= 1280){
				var fontSize = document.documentElement.style.fontSize;
				return  Math.floor(base * fontSize * 0.5)
			}else {
				return base
			}
		}
	},
	mounted() {
		this.myChart = echarts.init(this.$refs.radar);
		this.$nextTick(() => {
			this.myChart.setOption(this.option);
		})
		window.addEventListener('resize',() => {
			this.myChart.resize()
		})
	}
};
</script>
<style lang="scss">
.card {
	background-image: url("~@/assets/radar.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 380px;
}
</style>
