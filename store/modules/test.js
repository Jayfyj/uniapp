export default {
  namespaced:true,
  state: {
    a:1
  },
  mutations: {
    ADD(state,v){
      state.a +=v 
    },

    SUB(state,v){
      state.a = v
    }
  },
  actions: {
   
  },
}


