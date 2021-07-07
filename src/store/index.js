import {
  createStore
} from 'vuex'

// Create a new store instance.
//vite下无法使用模块拆分
const store = createStore({
  state: {
    txt: 'hello',
    num:0
  },
  mutations: {
    SET_TXT(state,txt) {
      state.txt = txt;
    },
    SET_NUM(state,num) {
      state.num = num;
    },
  },
  actions: {
    setNum({commit}){
      let timer = setTimeout(()=>{
        clearTimeout(timer);
        commit('SET_NUM',Math.random()*100+1)
      },3000)
    }
  },
  modules: {}
})
export default store