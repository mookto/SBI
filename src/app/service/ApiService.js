import axios from "axios";
import LocalStorageService from "./localStorageService";
import { Redirect } from "react-router-dom";
const https = require("https");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//const baseURL = "https://mdm.commlinkinfotech.com:8443/mdm";
export const baseURL = "https://10.50.1.212:8443";
// const baseURL = "https://103.88.137.186:8443";
// const baseURL = "http://180.210.129.103:8080/mdm";
// const baseURL = "http://localhost:8080"
const loginURL = "/oauth/token";
const logoutURL = "/oauth/revoke";

const client_id = "my-trusted-client";
const client_secret = "secret";
// const client_id = "my-trusted-client";
// const client_secret = "secret";

// export default axios.create({
//   baseURL: baseURL
// }) ;

const caxios = axios.create({
  baseURL: baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
caxios.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token && config.url !== loginURL) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor

caxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.config.url === loginURL) {
      localStorageService.setToken(response.data);
      return response;
    }

    if (response.status === 400 && response.config.url === loginURL) {
      return response;
    }
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (!error.response) {
      console.log("!error.response", error);
      return Promise.reject(error);
    }

    if (error.response.status === 400 && originalRequest.url === loginURL) {
      console.log("error 400", error);
      return Promise.reject(error);
    }

    if (error.response.status === 401 && originalRequest.url === loginURL) {
      //router.push('/login');
      console.log("error 401", error);
      return Promise.reject(error);
    }

    if (error.response.status === 401 && originalRequest.url === logoutURL) {
      localStorageService.clearToken();
      localStorage.setItem("loggedIn", false);
      window.location = `${process.env.PUBLIC_URL}/login`;
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      let token = getBasicToken();
      const rtoken = localStorageService.getRefreshToken();
      let reqData = `grant_type=refresh_token&refresh_token=${rtoken}&client_id=${client_id}`;
      let config = {
        headers: {
          Authorization: `Basic ${token}`,
          //'Content-Type': 'application/x-www-form-urlencoded'
        },
      };
      return axios
        .post(baseURL + loginURL, reqData, config)
        .then((res) => {
          if (res.status === 200) {
            localStorageService.setToken(res.data);
            //axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
            return caxios(originalRequest);
          } else {
            localStorageService.clearToken();
          }
        })
        .catch(function (err) {
          // 26/07/20-e nazmun-er sathe discussion
          localStorageService.clearToken();
          localStorage.setItem("loggedIn", false);
          window.location = `${process.env.PUBLIC_URL}/login`;
          return Promise.reject(err);
        });
    }
    console.log("error out side", error);
    return Promise.reject(error);
  }
);

function getBasicToken() {
  let temp = client_id + ":" + client_secret;
  let token = btoa(temp);

  return token;
}

export function login(userId, password, callback) {
  let reqData = `grant_type=password&username=${userId}&password=${password}&client_id=${client_id}`;
  let token = getBasicToken();
  let config = {
    headers: {
      Authorization: `Basic ${token}`,
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
  };
  caxios
    .post("/oauth/token", reqData, config)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}

//export default caxios, login;
export default caxios;

//sample
//import -
//import api, {login} from './service/ApiService';
//login -
//login(cuser,cpass, (response) => {
//  console.log(response);
//})
//get -
// api.get(<url>)
// .then(res => {
//   console.log(res);
// })
//post -
//api.post(<url>, data, config)
//  .then(res => {
//     console.log(res);
//   })
