import axios from 'axios'
var service = axios.create({
  baseURL: 'http://192.168.94.60:8000', // 所有的请求都会 带上 /api
  'Content-Type': 'application/json',
  dataType: 'json',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }

})

// 请求拦截器
// service.interceptors.request.use((config)=>{
//     if(sessionStorage.getItem("token")){
//         config.headers["token"]=sessionStorage.getItem("token");
//     }
//     return config;
// })
export default service
