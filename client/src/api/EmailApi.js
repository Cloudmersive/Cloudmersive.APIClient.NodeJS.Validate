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
    define(['ApiClient', 'model/AddressGetServersResponse', 'model/AddressVerifySyntaxOnlyResponse', 'model/FullEmailValidationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddressGetServersResponse'), require('../model/AddressVerifySyntaxOnlyResponse'), require('../model/FullEmailValidationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.EmailApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.AddressGetServersResponse, root.CloudmersiveValidateApiClient.AddressVerifySyntaxOnlyResponse, root.CloudmersiveValidateApiClient.FullEmailValidationResponse);
  }
}(this, function(ApiClient, AddressGetServersResponse, AddressVerifySyntaxOnlyResponse, FullEmailValidationResponse) {
  'use strict';

  /**
   * Email service.
   * @module api/EmailApi
   * @version 1.1.7
   */

  /**
   * Constructs a new EmailApi. 
   * @alias module:api/EmailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the emailAddressGetServers operation.
     * @callback module:api/EmailApi~emailAddressGetServersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressGetServersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially check whether an email address is valid
     * Validate an email address by identifying whether its parent domain has email servers defined.  This call is less limited than syntaxOnly but not as comprehensive as address/full.
     * @param {String} email Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;.    The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/EmailApi~emailAddressGetServersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressGetServersResponse}
     */
    this.emailAddressGetServers = function(email, callback) {
      var postBody = email;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling emailAddressGetServers");
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
      var returnType = AddressGetServersResponse;

      return this.apiClient.callApi(
        '/validate/email/address/servers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the emailFullValidation operation.
     * @callback module:api/EmailApi~emailFullValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullEmailValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fully validate an email address
     * Performs a full validation of the email address.  Checks for syntactic correctness, identifies the mail server in question if any, and then contacts the email server to validate the existence of the account - without sending any emails.
     * @param {String} email Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;.    The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/EmailApi~emailFullValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullEmailValidationResponse}
     */
    this.emailFullValidation = function(email, callback) {
      var postBody = email;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling emailFullValidation");
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
      var returnType = FullEmailValidationResponse;

      return this.apiClient.callApi(
        '/validate/email/address/full', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the emailPost operation.
     * @callback module:api/EmailApi~emailPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressVerifySyntaxOnlyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate email adddress for syntactic correctness only
     * Validate whether a given email address is syntactically correct via a limited local-only check.  Use the address/full API to do a full validation.
     * @param {String} value Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;.    The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/EmailApi~emailPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressVerifySyntaxOnlyResponse}
     */
    this.emailPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling emailPost");
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
      var returnType = AddressVerifySyntaxOnlyResponse;

      return this.apiClient.callApi(
        '/validate/email/address/syntaxOnly', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
