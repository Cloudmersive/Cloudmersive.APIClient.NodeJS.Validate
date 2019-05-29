/**
 * validateapi
 * The validation APIs help you validate data. Check if an E-mail address is real. Check if a domain is real. Check up on an IP address, and even where it is located. All this and much more is available in the validation API.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VatLookupRequest', 'model/VatLookupResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VatLookupRequest'), require('../model/VatLookupResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.VatApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.VatLookupRequest, root.CloudmersiveValidateApiClient.VatLookupResponse);
  }
}(this, function(ApiClient, VatLookupRequest, VatLookupResponse) {
  'use strict';

  /**
   * Vat service.
   * @module api/VatApi
   * @version 1.1.4
   */

  /**
   * Constructs a new VatApi. 
   * @alias module:api/VatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the vatVatLookup operation.
     * @callback module:api/VatApi~vatVatLookupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VatLookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lookup a VAT code
     * Checks if a VAT code is valid, and if it is, returns more information about it
     * @param {module:model/VatLookupRequest} input Input VAT code
     * @param {module:api/VatApi~vatVatLookupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VatLookupResponse}
     */
    this.vatVatLookup = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling vatVatLookup");
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
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = VatLookupResponse;

      return this.apiClient.callApi(
        '/validate/vat/lookup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
