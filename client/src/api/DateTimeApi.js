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
    define(['ApiClient', 'model/DateTimeNaturalLanguageParseRequest', 'model/DateTimeNowResult', 'model/DateTimeStandardizedParseRequest', 'model/DateTimeStandardizedParseResponse', 'model/GetPublicHolidaysRequest', 'model/PublicHolidaysResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DateTimeNaturalLanguageParseRequest'), require('../model/DateTimeNowResult'), require('../model/DateTimeStandardizedParseRequest'), require('../model/DateTimeStandardizedParseResponse'), require('../model/GetPublicHolidaysRequest'), require('../model/PublicHolidaysResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.DateTimeApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.DateTimeNaturalLanguageParseRequest, root.CloudmersiveValidateApiClient.DateTimeNowResult, root.CloudmersiveValidateApiClient.DateTimeStandardizedParseRequest, root.CloudmersiveValidateApiClient.DateTimeStandardizedParseResponse, root.CloudmersiveValidateApiClient.GetPublicHolidaysRequest, root.CloudmersiveValidateApiClient.PublicHolidaysResponse);
  }
}(this, function(ApiClient, DateTimeNaturalLanguageParseRequest, DateTimeNowResult, DateTimeStandardizedParseRequest, DateTimeStandardizedParseResponse, GetPublicHolidaysRequest, PublicHolidaysResponse) {
  'use strict';

  /**
   * DateTime service.
   * @module api/DateTimeApi
   * @version 1.4.8
   */

  /**
   * Constructs a new DateTimeApi. 
   * @alias module:api/DateTimeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dateTimeGetNowSimple operation.
     * @callback module:api/DateTimeApi~dateTimeGetNowSimpleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DateTimeNowResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current date and time as of now
     * Gets the current date and time.  Response time is syncronized with atomic clocks, and represents a monotonic, centrally available, consistent clock.
     * @param {module:api/DateTimeApi~dateTimeGetNowSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DateTimeNowResult}
     */
    this.dateTimeGetNowSimple = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DateTimeNowResult;

      return this.apiClient.callApi(
        '/validate/date-time/get/now', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dateTimeGetPublicHolidays operation.
     * @callback module:api/DateTimeApi~dateTimeGetPublicHolidaysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicHolidaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public holidays in the specified country and year
     * Enumerates all public holidays in a given country for a given year.  Supports over 100 countries.
     * @param {module:model/GetPublicHolidaysRequest} input Input request
     * @param {module:api/DateTimeApi~dateTimeGetPublicHolidaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicHolidaysResponse}
     */
    this.dateTimeGetPublicHolidays = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling dateTimeGetPublicHolidays");
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
      var returnType = PublicHolidaysResponse;

      return this.apiClient.callApi(
        '/validate/date-time/get/holidays', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dateTimeParseNaturalLanguageDateTime operation.
     * @callback module:api/DateTimeApi~dateTimeParseNaturalLanguageDateTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DateTimeStandardizedParseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parses a free-form natural language date and time string into a date and time
     * Parses an unstructured, free-form, natural language date and time string into a date time object.  This is intended for lightweight human-entered input, such as \&quot;tomorrow at 3pm\&quot; or \&quot;tuesday\&quot;.
     * @param {module:model/DateTimeNaturalLanguageParseRequest} input Input request
     * @param {module:api/DateTimeApi~dateTimeParseNaturalLanguageDateTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DateTimeStandardizedParseResponse}
     */
    this.dateTimeParseNaturalLanguageDateTime = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling dateTimeParseNaturalLanguageDateTime");
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
      var returnType = DateTimeStandardizedParseResponse;

      return this.apiClient.callApi(
        '/validate/date-time/parse/date-time/natural-language', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dateTimeParseStandardDateTime operation.
     * @callback module:api/DateTimeApi~dateTimeParseStandardDateTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DateTimeStandardizedParseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parses a standardized date and time string into a date and time
     * Parses a structured date and time string into a date time object.  This is intended for standardized date strings that adhere to formatting conventions, rather than natural language input.
     * @param {module:model/DateTimeStandardizedParseRequest} input Input request
     * @param {module:api/DateTimeApi~dateTimeParseStandardDateTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DateTimeStandardizedParseResponse}
     */
    this.dateTimeParseStandardDateTime = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling dateTimeParseStandardDateTime");
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
      var returnType = DateTimeStandardizedParseResponse;

      return this.apiClient.callApi(
        '/validate/date-time/parse/date-time/structured', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
