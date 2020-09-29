//维护项目的配置文件，公共的将来可能发生改变的数据
//后台服务器地址
const baseURL = "http://127.0.0.1:8899";
//提示时间
const time = 5000;
//token字符串 sessionStorage里存储的key值记录一下
const token = "token";
export default {
  baseURL,
  time,
  token,
};
