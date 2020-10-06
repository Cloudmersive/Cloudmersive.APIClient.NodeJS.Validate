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
    define(['ApiClient', 'model/CheckResponse', 'model/DomainQualityResponse', 'model/ValidateUrlRequestFull', 'model/ValidateUrlRequestSyntaxOnly', 'model/ValidateUrlResponseFull', 'model/ValidateUrlResponseSyntaxOnly', 'model/WhoisResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CheckResponse'), require('../model/DomainQualityResponse'), require('../model/ValidateUrlRequestFull'), require('../model/ValidateUrlRequestSyntaxOnly'), require('../model/ValidateUrlResponseFull'), require('../model/ValidateUrlResponseSyntaxOnly'), require('../model/WhoisResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.DomainApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.CheckResponse, root.CloudmersiveValidateApiClient.DomainQualityResponse, root.CloudmersiveValidateApiClient.ValidateUrlRequestFull, root.CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly, root.CloudmersiveValidateApiClient.ValidateUrlResponseFull, root.CloudmersiveValidateApiClient.ValidateUrlResponseSyntaxOnly, root.CloudmersiveValidateApiClient.WhoisResponse);
  }
}(this, function(ApiClient, CheckResponse, DomainQualityResponse, ValidateUrlRequestFull, ValidateUrlRequestSyntaxOnly, ValidateUrlResponseFull, ValidateUrlResponseSyntaxOnly, WhoisResponse) {
  'use strict';

  /**
   * Domain service.
   * @module api/DomainApi
   * @version 1.3.4
   */

  /**
   * Constructs a new DomainApi. 
   * @alias module:api/DomainApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainCheck operation.
     * @callback module:api/DomainApi~domainCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a domain name
     * Check whether a domain name is valid or not.  API performs a live validation by contacting DNS services to validate the existence of the domain name.
     * @param {String} domain Domain name to check, for example \&quot;cloudmersive.com\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/DomainApi~domainCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckResponse}
     */
    this.domainCheck = function(domain, callback) {
      var postBody = domain;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainCheck");
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
      var contentTypes = ['text/javascript', 'application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = CheckResponse;

      return this.apiClient.callApi(
        '/validate/domain/check', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainPost operation.
     * @callback module:api/DomainApi~domainPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhoisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get WHOIS information for a domain
     * Validate whether a domain name exists, and also return the full WHOIS record for that domain name.  WHOIS records include all the registration details of the domain name, such as information about the domain&#39;s owners.
     * @param {String} domain Domain name to check, for example \&quot;cloudmersive.com\&quot;.   The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/DomainApi~domainPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhoisResponse}
     */
    this.domainPost = function(domain, callback) {
      var postBody = domain;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainPost");
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
      var contentTypes = ['text/javascript', 'application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = WhoisResponse;

      return this.apiClient.callApi(
        '/validate/domain/whois', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainQualityScore operation.
     * @callback module:api/DomainApi~domainQualityScoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DomainQualityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a domain name&#39;s quality score
     * Check the quality of a domain name.  Supports over 9 million domain names.  Higher quality scores indicate more trust and authority in the domain name, with values ranging from 0.0 (low quality) to 10.0 (maximum quality).
     * @param {String} domain Domain name to check, for example \&quot;cloudmersive.com\&quot;.
     * @param {module:api/DomainApi~domainQualityScoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DomainQualityResponse}
     */
    this.domainQualityScore = function(domain, callback) {
      var postBody = domain;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainQualityScore");
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
      var contentTypes = ['text/javascript', 'application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DomainQualityResponse;

      return this.apiClient.callApi(
        '/validate/domain/quality-score', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainUrlFull operation.
     * @callback module:api/DomainApi~domainUrlFullCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateUrlResponseFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a URL fully
     * Validate whether a URL is syntactically valid (does not check endpoint for validity), whether it exists, and whether the endpoint is up and passes virus scan checks.  Accepts various types of input and produces a well-formed URL as output.
     * @param {module:model/ValidateUrlRequestFull} request Input URL request
     * @param {module:api/DomainApi~domainUrlFullCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateUrlResponseFull}
     */
    this.domainUrlFull = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling domainUrlFull");
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
      var returnType = ValidateUrlResponseFull;

      return this.apiClient.callApi(
        '/validate/domain/url/full', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainUrlSyntaxOnly operation.
     * @callback module:api/DomainApi~domainUrlSyntaxOnlyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateUrlResponseSyntaxOnly} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a URL syntactically
     * Validate whether a URL is syntactically valid (does not check endpoint for validity).  Accepts various types of input and produces a well-formed URL as output.
     * @param {module:model/ValidateUrlRequestSyntaxOnly} request Input URL information
     * @param {module:api/DomainApi~domainUrlSyntaxOnlyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateUrlResponseSyntaxOnly}
     */
    this.domainUrlSyntaxOnly = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling domainUrlSyntaxOnly");
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
      var returnType = ValidateUrlResponseSyntaxOnly;

      return this.apiClient.callApi(
        '/validate/domain/url/syntax-only', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
