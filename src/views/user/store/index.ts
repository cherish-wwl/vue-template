import Vue from 'vue'


export const state = Vue.observable({
  count: 0
})



export const mutations = {
  SET_COUNT(count:number){
    state.count = count
  }
}

export const actions = {
  async getCountSync(data:number) {
    setTimeout(() => {
      mutations.SET_COUNT(data)
    },1000)
  }
}