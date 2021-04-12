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
    define(['ApiClient', 'model/FirstNameValidationRequest', 'model/FirstNameValidationResponse', 'model/FullNameValidationRequest', 'model/FullNameValidationResponse', 'model/GetGenderRequest', 'model/GetGenderResponse', 'model/LastNameValidationRequest', 'model/LastNameValidationResponse', 'model/ValidateIdentifierRequest', 'model/ValidateIdentifierResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FirstNameValidationRequest'), require('../model/FirstNameValidationResponse'), require('../model/FullNameValidationRequest'), require('../model/FullNameValidationResponse'), require('../model/GetGenderRequest'), require('../model/GetGenderResponse'), require('../model/LastNameValidationRequest'), require('../model/LastNameValidationResponse'), require('../model/ValidateIdentifierRequest'), require('../model/ValidateIdentifierResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.NameApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.FirstNameValidationRequest, root.CloudmersiveValidateApiClient.FirstNameValidationResponse, root.CloudmersiveValidateApiClient.FullNameValidationRequest, root.CloudmersiveValidateApiClient.FullNameValidationResponse, root.CloudmersiveValidateApiClient.GetGenderRequest, root.CloudmersiveValidateApiClient.GetGenderResponse, root.CloudmersiveValidateApiClient.LastNameValidationRequest, root.CloudmersiveValidateApiClient.LastNameValidationResponse, root.CloudmersiveValidateApiClient.ValidateIdentifierRequest, root.CloudmersiveValidateApiClient.ValidateIdentifierResponse);
  }
}(this, function(ApiClient, FirstNameValidationRequest, FirstNameValidationResponse, FullNameValidationRequest, FullNameValidationResponse, GetGenderRequest, GetGenderResponse, LastNameValidationRequest, LastNameValidationResponse, ValidateIdentifierRequest, ValidateIdentifierResponse) {
  'use strict';

  /**
   * Name service.
   * @module api/NameApi
   * @version 1.4.2
   */

  /**
   * Constructs a new NameApi. 
   * @alias module:api/NameApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the nameGetGender operation.
     * @callback module:api/NameApi~nameGetGenderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGenderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the gender of a first name
     * Determines the gender of a first name (given name)
     * @param {module:model/GetGenderRequest} input Gender request information
     * @param {module:api/NameApi~nameGetGenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGenderResponse}
     */
    this.nameGetGender = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling nameGetGender");
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
      var returnType = GetGenderResponse;

      return this.apiClient.callApi(
        '/validate/name/get-gender', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nameIdentifier operation.
     * @callback module:api/NameApi~nameIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateIdentifierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a code identifier
     * Determines if the input name is a valid technical / code identifier.  Configure input rules such as whether whitespace, hyphens, underscores, etc. are allowed.  For example, a valid identifier might be \&quot;helloWorld\&quot; but not \&quot;hello*World\&quot;.
     * @param {module:model/ValidateIdentifierRequest} input Identifier validation request information
     * @param {module:api/NameApi~nameIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateIdentifierResponse}
     */
    this.nameIdentifier = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling nameIdentifier");
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
      var returnType = ValidateIdentifierResponse;

      return this.apiClient.callApi(
        '/validate/name/identifier', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nameValidateFirstName operation.
     * @callback module:api/NameApi~nameValidateFirstNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirstNameValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a first name
     * Determines if a string is a valid first name (given name)
     * @param {module:model/FirstNameValidationRequest} input Validation request information
     * @param {module:api/NameApi~nameValidateFirstNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirstNameValidationResponse}
     */
    this.nameValidateFirstName = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling nameValidateFirstName");
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
      var returnType = FirstNameValidationResponse;

      return this.apiClient.callApi(
        '/validate/name/first', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nameValidateFullName operation.
     * @callback module:api/NameApi~nameValidateFullNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullNameValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse and validate a full name
     * Parses a full name string (e.g. \&quot;Mr. Jon van der Waal Jr.\&quot;) into its component parts (and returns these component parts), and then validates whether it is a valid name string or not
     * @param {module:model/FullNameValidationRequest} input Validation request information
     * @param {module:api/NameApi~nameValidateFullNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullNameValidationResponse}
     */
    this.nameValidateFullName = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling nameValidateFullName");
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
      var returnType = FullNameValidationResponse;

      return this.apiClient.callApi(
        '/validate/name/full-name', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nameValidateLastName operation.
     * @callback module:api/NameApi~nameValidateLastNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LastNameValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a last name
     * Determines if a string is a valid last name (surname)
     * @param {module:model/LastNameValidationRequest} input Validation request information
     * @param {module:api/NameApi~nameValidateLastNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LastNameValidationResponse}
     */
    this.nameValidateLastName = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling nameValidateLastName");
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
      var returnType = LastNameValidationResponse;

      return this.apiClient.callApi(
        '/validate/name/last', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
