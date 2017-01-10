import axios from 'axios';
import Interceptors from './interceptors';
import httpConfig from './http.config';
import config from './config'
class Http {

  static initDefaults() {
    axios.defaults.baseURL = config.API_SERVER;
    axios.defaults.timeout = 2500;
    //axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  static initRequestInterceptor() {
    axios.interceptors.request.use(Interceptors.requestSuccess, Interceptors.requestError)
  }

  static initResponseInterceptor() {
    axios.interceptors.response.use(Interceptors.responseSuccess, Interceptors.responseError);
  }

  static post(inName, inData) {
    console.log('1:' + this.props);
    return axios.post(`/${inName}`, inData, httpConfig);
  }

  static get(inName, inData) {
    return axios.get(`/${inName}`, inData, httpConfig);
  }


}

//intial configs:
Http.initDefaults();
Http.initRequestInterceptor();
Http.initResponseInterceptor();

export default Http;
