import axios from 'axios';
import {responseHandler} from './responseHandler';
import {errorHandler} from './errorHandler';

let _this;

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

class RestClient {
  constructor() {
    _this = this;

    axios.interceptors.response.use(
      response => {
        return responseHandler(response);
      },
      error => {
        return Promise.reject(errorHandler(error));
      },
    );
  }

  /**
   * Main method call for all rest calls with in logic
   *
   * @param {any} method
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  API(method: string, url: string, body: any, header: any, timeout?: number) {
    switch (method) {
      case METHODS.GET:
        return this._get(url, header, timeout);
      case METHODS.POST:
        body = body || {};
        return this._post(url, body, header, timeout);
      case METHODS.PUT:
        return this._put(url, body, header, timeout);
      case METHODS.DELETE:
        return this._delete(url, body, header, timeout);
      default:
        break;
    }
  }

  /**
   * GET Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _get(url: string, header: string, timeout = 25000) {
    axios.defaults.timeout = timeout;
    return axios
      .get(url, {headers: header})
      .then(response => response)
      .catch(error => error);
  }

  /**
   * POST Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _post(url: string, body: any, header: any, timeout = 25000) {
    axios.defaults.timeout = timeout;
    return axios
      .post(url, body, header)
      .then(response => response)
      .catch(error => error);
  }

  /**
   * PUT Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _put(url: string, body: any, header: any, timeout = 25000) {
    axios.defaults.timeout = timeout;
    return axios
      .put(url, body, {headers: header})
      .then(response => response)
      .catch(error => error);
  }

  /**
   * DELETE Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _delete(url: string, body: any, header: any, timeout = 25000) {
    axios.defaults.timeout = timeout;
    return axios
      .delete(url, {headers: header, data: body})
      .then(response => response)
      .catch(error => error);
  }
}

export const client = new RestClient();
