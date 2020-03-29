import {statusHandler} from './statusHandler';

/**
 * Success Response Handler
 *
 * @param {*} response
 * @returns
 * @memberof RestClient
 */
export const responseHandler = (response: any) => {
  console.log('rest client response ', response);
  const {hasError, errorMessage} = statusHandler(response);
  if (hasError) {
    return {hasError: true, errorMessage: errorMessage};
  } else {
    if (response.data.status.code == 0) {
      //console.log('response validate', response.data);
      return {
        hasError: false,
        errorMessage: '',
        data: response.data,
      };
    } else {
      return {
        hasError: true,
        errorMessage: response.data.status.message,
      };
    }
  }
};
