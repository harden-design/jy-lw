//配置axios
import axios from "axios";
import qs from "qs";
import { baseURL, token, time } from "./config.js";
//创建实例
const instance = axios.create({
  baseURL,
  headers: {
    Authorization: sessionStorage.getItem(token),
  },
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (config.method == "post" && config.url != "/user/login") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return {
      ...response,
      data: response.data.data,
      status: response.data.status,
      statusText: response.data.message,
    };
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
