//https://github.com/mzabriskie/axios
export default class Interceptors {
  static requestSuccess(inRequest) {
    console.log('interceptors-request-success:');
    console.log(inRequest);
    return inRequest;
  }

  static requestError(inRequest) {
    console.log('interceptors-request-error:');
    console.log(inRequest);
    return inRequest;
  }

  static responseSuccess(inResponse) {
    console.log('interceptors-response-success:');
    console.log(inResponse);
    let response = Interceptors.toData(inResponse);
    //swithc case...
    return response;
  }

  static responseError(inResponse) {
    console.log('interceptors-response-error:');
    console.log(inResponse.response);
    return inResponse.response;
  }


  static toData(inResponse) {
    return inResponse.data;
  }
}
