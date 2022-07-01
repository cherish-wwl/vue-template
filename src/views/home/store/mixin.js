import _ from 'lodash'

export default {

  methods: {
    resizeZoom() {
      const cw = document.documentElement.clientWidth; // 可视宽度
      const ow = 1920 // 设计图宽度
      const doc = document.documentElement;
      const scaleRatio = ((cw * 6.25) / ow).toFixed(2)
      // console.log(scaleRatio,'resizeZoom',cw,ow)
      doc.style.fontSize = scaleRatio + "%";
      doc.dataset.ratio = scaleRatio;
    },
    transformFontSize(fontsize) {
      const ratio = document.documentElement.dataset.ratio || 6.25
      // console.log('transformFontSize',ratio)
      return parseInt((fontsize * ratio * 16 / 100)) ;
    },
    resizeDataview:_.debounce(function(){
      this.resizeZoom()
      // console.log('resizeEchart',this.resizeEchart, document.documentElement.dataset.ratio)
      // if (this.resizeEchart) {
      //   this.resizeEchart();
      // }
      this.$eventBus.$emit('resize')
    },1000)
  }
};
