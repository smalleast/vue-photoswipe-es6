import Http from './http';
import config from './config'
import axios from 'axios'
export default class {
  static auth_100(inData) {
    return Http.get('../../../src/components/_data/auth_100.json', inData);
  }
  static findPostId_100(inData) {
    return Http.post('app/interface/mobile/pmall/findPostById_220', inData);
  }
  static getWeixinShareSign_220(inData) {
    return Http.post('app/interface/mobile/pmall/getWeixinShareSign_220', inData);
  }

}
