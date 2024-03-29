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
    define(['ApiClient', 'model/HtmlSsrfDetectionResult', 'model/SqlInjectionCheckBatchRequest', 'model/SqlInjectionCheckBatchResponse', 'model/SqlInjectionDetectionResult', 'model/XssProtectionBatchRequest', 'model/XssProtectionBatchResponse', 'model/XssProtectionResult', 'model/XxeDetectionBatchRequest', 'model/XxeDetectionBatchResponse', 'model/XxeDetectionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HtmlSsrfDetectionResult'), require('../model/SqlInjectionCheckBatchRequest'), require('../model/SqlInjectionCheckBatchResponse'), require('../model/SqlInjectionDetectionResult'), require('../model/XssProtectionBatchRequest'), require('../model/XssProtectionBatchResponse'), require('../model/XssProtectionResult'), require('../model/XxeDetectionBatchRequest'), require('../model/XxeDetectionBatchResponse'), require('../model/XxeDetectionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.TextInputApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.HtmlSsrfDetectionResult, root.CloudmersiveValidateApiClient.SqlInjectionCheckBatchRequest, root.CloudmersiveValidateApiClient.SqlInjectionCheckBatchResponse, root.CloudmersiveValidateApiClient.SqlInjectionDetectionResult, root.CloudmersiveValidateApiClient.XssProtectionBatchRequest, root.CloudmersiveValidateApiClient.XssProtectionBatchResponse, root.CloudmersiveValidateApiClient.XssProtectionResult, root.CloudmersiveValidateApiClient.XxeDetectionBatchRequest, root.CloudmersiveValidateApiClient.XxeDetectionBatchResponse, root.CloudmersiveValidateApiClient.XxeDetectionResult);
  }
}(this, function(ApiClient, HtmlSsrfDetectionResult, SqlInjectionCheckBatchRequest, SqlInjectionCheckBatchResponse, SqlInjectionDetectionResult, XssProtectionBatchRequest, XssProtectionBatchResponse, XssProtectionResult, XxeDetectionBatchRequest, XxeDetectionBatchResponse, XxeDetectionResult) {
  'use strict';

  /**
   * TextInput service.
   * @module api/TextInputApi
   * @version 1.4.8
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
     * Callback function to receive the result of the textInputCheckHtmlSsrf operation.
     * @callback module:api/TextInputApi~textInputCheckHtmlSsrfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HtmlSsrfDetectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Protect html input from Server-side Request Forgery (SSRF) attacks
     * Detects SSRF (Server-side request forgery) attacks and unsafe URL attacks from HTML text input, where attackers can attempt to access unsafe local or network paths in the server environment by injecting them into HTML.
     * @param {String} value User-facing HTML input.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowCidScheme Optional: Set to true to allow cid: scheme URLs for email message attachments.  Default is false.
     * @param {module:api/TextInputApi~textInputCheckHtmlSsrfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HtmlSsrfDetectionResult}
     */
    this.textInputCheckHtmlSsrf = function(value, opts, callback) {
      opts = opts || {};
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckHtmlSsrf");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'allowCidScheme': opts['allowCidScheme']
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = HtmlSsrfDetectionResult;

      return this.apiClient.callApi(
        '/validate/text-input/html/check/ssrf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textInputCheckSqlInjection operation.
     * @callback module:api/TextInputApi~textInputCheckSqlInjectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlInjectionDetectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check text input for SQL Injection (SQLI) attacks
     * Detects SQL Injection (SQLI) attacks from text input.
     * @param {String} value User-facing text input.
     * @param {Object} opts Optional parameters
     * @param {String} opts.detectionLevel Set to Normal to target a high-security SQL Injection detection level with a very low false positive rate; select High to target a very-high security SQL Injection detection level with higher false positives.  Default is Normal (recommended).
     * @param {module:api/TextInputApi~textInputCheckSqlInjectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlInjectionDetectionResult}
     */
    this.textInputCheckSqlInjection = function(value, opts, callback) {
      opts = opts || {};
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckSqlInjection");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'detectionLevel': opts['detectionLevel']
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = SqlInjectionDetectionResult;

      return this.apiClient.callApi(
        '/validate/text-input/check/sql-injection', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textInputCheckSqlInjectionBatch operation.
     * @callback module:api/TextInputApi~textInputCheckSqlInjectionBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlInjectionCheckBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check and protect multiple text inputs for SQL Injection (SQLI) attacks in batch
     * Detects SQL Injection (SQLI) attacks from multiple text inputs.  Output preverses order of input items.
     * @param {module:model/SqlInjectionCheckBatchRequest} value User-facing text input.
     * @param {module:api/TextInputApi~textInputCheckSqlInjectionBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlInjectionCheckBatchResponse}
     */
    this.textInputCheckSqlInjectionBatch = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckSqlInjectionBatch");
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
      var returnType = SqlInjectionCheckBatchResponse;

      return this.apiClient.callApi(
        '/validate/text-input/check/sql-injection/batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * Detects XSS (Cross-Site-Scripting) attacks from multiple text inputs.  Output preverses order of input items.
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
     * Callback function to receive the result of the textInputCheckXxe operation.
     * @callback module:api/TextInputApi~textInputCheckXxeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XxeDetectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Protect text input from XML External Entity (XXE) attacks
     * Detects XXE (XML External Entity) attacks from text input.
     * @param {String} value User-facing text input.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowInternetUrls Optional: Set to true to allow Internet-based dependency URLs for DTDs and other XML External Entitites, set to false to block.  Default is false.
     * @param {String} opts.knownSafeUrls Optional: Comma separated list of fully-qualified URLs that will automatically be considered safe.
     * @param {String} opts.knownUnsafeUrls Optional: Comma separated list of fully-qualified URLs that will automatically be considered unsafe.
     * @param {module:api/TextInputApi~textInputCheckXxeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XxeDetectionResult}
     */
    this.textInputCheckXxe = function(value, opts, callback) {
      opts = opts || {};
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling textInputCheckXxe");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'allowInternetUrls': opts['allowInternetUrls'],
        'knownSafeUrls': opts['knownSafeUrls'],
        'knownUnsafeUrls': opts['knownUnsafeUrls']
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XxeDetectionResult;

      return this.apiClient.callApi(
        '/validate/text-input/check/xxe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textInputCheckXxeBatch operation.
     * @callback module:api/TextInputApi~textInputCheckXxeBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XxeDetectionBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Protect text input from XML External Entity (XXE) attacks
     * Detects XXE (XML External Entity) attacks from text input.
     * @param {module:model/XxeDetectionBatchRequest} request 
     * @param {module:api/TextInputApi~textInputCheckXxeBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XxeDetectionBatchResponse}
     */
    this.textInputCheckXxeBatch = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling textInputCheckXxeBatch");
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
      var returnType = XxeDetectionBatchResponse;

      return this.apiClient.callApi(
        '/validate/text-input/check/xxe/batch', 'POST',
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
