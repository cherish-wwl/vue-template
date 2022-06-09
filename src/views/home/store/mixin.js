import _ from 'lodash'

export default {
  data() {
    return {
      scaleRatio: 6.25
    }
  },
  methods: {
    resizeZoom:_.debounce(function(){
      // const ch = document.documentElement.clientHeight; // 可视高度
      const cw = document.documentElement.clientWidth; // 可视宽度
      // const oh = document.documentElement.offsetHeight;
      const ow = 1920 // 设计图宽度
      const doc = document.documentElement;
      const scaleRatio = ((cw * 6.25) / ow).toFixed(2) 
      console.log(scaleRatio,'resizeZoom',cw,ow)
      doc.style.fontSize = scaleRatio + "%";
      this.$eventBus.$emit("resizeEchart",scaleRatio);
    },1000),
    transformFontSize(fontsize) {
      return parseInt((fontsize * this.scaleRatio * 16 / 100)) ;
    },
    resize(r) {
      this.scaleRatio = r
      // console.log('resizeEchart',this.scaleRatio)
      
      if (this.resizeEchart) {
        this.resizeEchart();
      }
    }
  },
  mounted() {
    this.$eventBus.$on("resizeEchart", (data) => {
      // console.log('data',data)
     this.resize(data)
    });
  },
  destroyed() {}
};
