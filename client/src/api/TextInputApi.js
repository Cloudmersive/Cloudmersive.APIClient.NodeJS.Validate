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
    define(['ApiClient', 'model/XssProtectionBatchRequest', 'model/XssProtectionBatchResponse', 'model/XssProtectionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/XssProtectionBatchRequest'), require('../model/XssProtectionBatchResponse'), require('../model/XssProtectionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.TextInputApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.XssProtectionBatchRequest, root.CloudmersiveValidateApiClient.XssProtectionBatchResponse, root.CloudmersiveValidateApiClient.XssProtectionResult);
  }
}(this, function(ApiClient, XssProtectionBatchRequest, XssProtectionBatchResponse, XssProtectionResult) {
  'use strict';

  /**
   * TextInput service.
   * @module api/TextInputApi
   * @version 1.3.6
   */

  /**
   * Constructs a new TextInputApi. 
   * @alias module:api/TextInputApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the textInputCheckXss operation.
     * @callback module:api/TextInputApi~textInputCheckXssCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XssProtectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check text input for Cross-Site-Scripting (XSS) attacks
     * Detects XSS (Cross-Site-Scripting) attacks from text input.
     * @param {String} value User-facing text input.
     * @param {module:api/TextInputApi~textInputCheckXssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XssProtectionResult}
     */
    this.textInputCheckXss = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckXss");
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
      var returnType = XssProtectionResult;

      return this.apiClient.callApi(
        '/validate/text-input/check/xss', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textInputCheckXssBatch operation.
     * @callback module:api/TextInputApi~textInputCheckXssBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XssProtectionBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check and protect multiple text inputs for Cross-Site-Scripting (XSS) attacks in batch
     * Detects XSS (Cross-Site-Scripting) attacks from multiple text input.  Output preverses order of input items.
     * @param {module:model/XssProtectionBatchRequest} value User-facing text input.
     * @param {module:api/TextInputApi~textInputCheckXssBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XssProtectionBatchResponse}
     */
    this.textInputCheckXssBatch = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckXssBatch");
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
      var returnType = XssProtectionBatchResponse;

      return this.apiClient.callApi(
        '/validate/text-input/check-and-protect/xss/batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textInputProtectXss operation.
     * @callback module:api/TextInputApi~textInputProtectXssCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XssProtectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Protect text input from Cross-Site-Scripting (XSS) attacks through normalization
     * Detects and removes XSS (Cross-Site-Scripting) attacks from text input through normalization.  Returns the normalized result, as well as information on whether the original input contained an XSS risk.
     * @param {String} value User-facing text input.
     * @param {module:api/TextInputApi~textInputProtectXssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XssProtectionResult}
     */
    this.textInputProtectXss = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputProtectXss");
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
      var returnType = XssProtectionResult;

      return this.apiClient.callApi(
        '/validate/text-input/protect/xss', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
