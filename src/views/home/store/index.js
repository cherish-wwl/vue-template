import Vue from 'vue'


export const state = Vue.observable({
  devList: [
    '40F5200F855E-PZ03-0000001094-YSDZ-SXB',
   '40F5200E6E01-PZ03-0000001116-YSDZ-SXB',
   '40F5200EF336-PZ03-0000001113-YSDZ-SXB',
    '40F5200FD01F-PZ03-0000000282-YSDZ-SXB',
    '40F5200FE309-PZ03-0000001115-YSDZ-SXB',
    '40F5200FD476-PZ03-0000001123-YSDZ-SXB',
    '40F5200E3B8E-PZ03-0000000283-YSDZ-SXB',
    '40F5200EFA7B-PZ03-0000000245-YSDZ-SXB',
    '40F5200E879A-PZ03-0000000289-YSDZ-SXB',
    '40F5200E2EDA-PZ03-0000001032-YSDZ-SXB'
  ]
})



export const mutations = {
  SET_COUNT(count){
    state.count = count
  }
}

export const actions = {
  async getCountSync(data) {
    setTimeout(() => {
      mutations.SET_COUNT(data)
    },1000)
  }
}