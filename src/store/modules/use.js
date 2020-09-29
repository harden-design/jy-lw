//user的仓库 src命名为了@
import { findAllUser } from "@/api/user.js";
export default {
  namespace: true,
  state: {
    userMsg: "user仓库的数据",
    userData: [],
  },
  getters: {},
  mutations: {
    changeUserData(state, payload) {
      state.userData = payload;
    },
  },
  actions: {
    async findAllUserA({ commit, dispatch }, payload) {
      let res = await findAllUser(payload); //这是api内导入的方法
      commit("changeUserData", res.data);
    },
  },
};
