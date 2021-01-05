import Vue from 'vue'


export const state = Vue.observable({
  count: 0
})



export const mutations = {
  SET_COUNT(count:number): void{
    state.count = count
  }
}

export const actions = {
  async getCountSync(data:number): Promise<void> {
    setTimeout(() => {
      mutations.SET_COUNT(data)
    },1000)
  }
}