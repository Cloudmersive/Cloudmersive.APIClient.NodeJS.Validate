/**
 * validateapi
 * The validation APIs help you validate data. Check if an E-mail address is real. Check if a domain is real. Check up on an IP address, and even where it is located. All this and much more is available in the validation API.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserAgentValidateRequest', 'model/UserAgentValidateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserAgentValidateRequest'), require('../model/UserAgentValidateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.UserAgentApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.UserAgentValidateRequest, root.CloudmersiveValidateApiClient.UserAgentValidateResponse);
  }
}(this, function(ApiClient, UserAgentValidateRequest, UserAgentValidateResponse) {
  'use strict';

  /**
   * UserAgent service.
   * @module api/UserAgentApi
   * @version 1.2.0
   */

  /**
   * Constructs a new UserAgentApi. 
   * @alias module:api/UserAgentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userAgentParse operation.
     * @callback module:api/UserAgentApi~userAgentParseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAgentValidateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse an HTTP User-Agent string, identify robots
     * Uses a parsing system and database to parse the User-Agent into its structured component parts, such as Browser, Browser Version, Browser Engine, Operating System, and importantly, Robot identification.
     * @param {module:model/UserAgentValidateRequest} request Input parse request
     * @param {module:api/UserAgentApi~userAgentParseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAgentValidateResponse}
     */
    this.userAgentParse = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userAgentParse");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = UserAgentValidateResponse;

      return this.apiClient.callApi(
        '/validate/useragent/parse', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
