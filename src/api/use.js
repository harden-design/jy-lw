//管理user用户模块的请求
import request from "../utils/request";
export default {
  findAllUser(params) {
    return request.get("/user/findall", {
      params, //又一次使用了解构的思想
    });
  },
  saveOrUpdate(params) {
    return request.post("/user/saveOrUpdate", params);
  },
};
