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
    define(['ApiClient', 'model/PhoneNumberValidateRequest', 'model/PhoneNumberValidationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PhoneNumberValidateRequest'), require('../model/PhoneNumberValidationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.PhoneNumberApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.PhoneNumberValidateRequest, root.CloudmersiveValidateApiClient.PhoneNumberValidationResponse);
  }
}(this, function(ApiClient, PhoneNumberValidateRequest, PhoneNumberValidationResponse) {
  'use strict';

  /**
   * PhoneNumber service.
   * @module api/PhoneNumberApi
   * @version 1.4.2
   */

  /**
   * Constructs a new PhoneNumberApi. 
   * @alias module:api/PhoneNumberApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the phoneNumberSyntaxOnly operation.
     * @callback module:api/PhoneNumberApi~phoneNumberSyntaxOnlyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneNumberValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate phone number (basic)
     * Validate a phone number by analyzing the syntax
     * @param {module:model/PhoneNumberValidateRequest} value Phone number to validate in a PhoneNumberValidateRequest object.  Try a phone number such as \&quot;1.800.463.3339\&quot;, and either leave DefaultCountryCode blank or use \&quot;US\&quot;.
     * @param {module:api/PhoneNumberApi~phoneNumberSyntaxOnlyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneNumberValidationResponse}
     */
    this.phoneNumberSyntaxOnly = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling phoneNumberSyntaxOnly");
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
      var returnType = PhoneNumberValidationResponse;

      return this.apiClient.callApi(
        '/validate/phonenumber/basic', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
