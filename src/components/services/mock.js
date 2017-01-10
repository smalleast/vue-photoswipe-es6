import Http from './http';
export default class {
  static enterAuction_100(inData) {
    return Http.get('./src/components/_data/enterAuction_100.json',inData);
  }
  static refreshBidInfo_100(inData) {
    return Http.get('./src/components/_data/refreshBidInfo_100.json',inData);
  }
  static deleteMyLotBidPrice_100(inData){
    return Http.get('./src/components/_data/deleteMyLotBidPrice_100.json',inData);
  }
  static bidPrice_100(inData){
    return Http.get('./src/components/_data/deleteMyLotBidPrice_100.json',inData)
  }
}
