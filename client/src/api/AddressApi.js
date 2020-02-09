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
    define(['ApiClient', 'model/GetTimezonesRequest', 'model/GetTimezonesResponse', 'model/ParseAddressRequest', 'model/ParseAddressResponse', 'model/ValidateAddressRequest', 'model/ValidateAddressResponse', 'model/ValidateCountryRequest', 'model/ValidateCountryResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetTimezonesRequest'), require('../model/GetTimezonesResponse'), require('../model/ParseAddressRequest'), require('../model/ParseAddressResponse'), require('../model/ValidateAddressRequest'), require('../model/ValidateAddressResponse'), require('../model/ValidateCountryRequest'), require('../model/ValidateCountryResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.AddressApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.GetTimezonesRequest, root.CloudmersiveValidateApiClient.GetTimezonesResponse, root.CloudmersiveValidateApiClient.ParseAddressRequest, root.CloudmersiveValidateApiClient.ParseAddressResponse, root.CloudmersiveValidateApiClient.ValidateAddressRequest, root.CloudmersiveValidateApiClient.ValidateAddressResponse, root.CloudmersiveValidateApiClient.ValidateCountryRequest, root.CloudmersiveValidateApiClient.ValidateCountryResponse);
  }
}(this, function(ApiClient, GetTimezonesRequest, GetTimezonesResponse, ParseAddressRequest, ParseAddressResponse, ValidateAddressRequest, ValidateAddressResponse, ValidateCountryRequest, ValidateCountryResponse) {
  'use strict';

  /**
   * Address service.
   * @module api/AddressApi
   * @version 1.2.4
   */

  /**
   * Constructs a new AddressApi. 
   * @alias module:api/AddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addressCountry operation.
     * @callback module:api/AddressApi~addressCountryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCountryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate and normalize country information, return ISO 3166-1 country codes and country name
     * Validates and normalizes country information, and returns key information about a country.  Also returns distinct time zones in the country.
     * @param {module:model/ValidateCountryRequest} input Input request
     * @param {module:api/AddressApi~addressCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCountryResponse}
     */
    this.addressCountry = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressCountry");
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
      var returnType = ValidateCountryResponse;

      return this.apiClient.callApi(
        '/validate/address/country', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressGetTimezone operation.
     * @callback module:api/AddressApi~addressGetTimezoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTimezonesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets IANA/Olsen time zones for a country
     * Gets the IANA/Olsen time zones for a country.
     * @param {module:model/GetTimezonesRequest} input Input request
     * @param {module:api/AddressApi~addressGetTimezoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTimezonesResponse}
     */
    this.addressGetTimezone = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressGetTimezone");
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
      var returnType = GetTimezonesResponse;

      return this.apiClient.callApi(
        '/validate/address/country/get-timezones', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressParseString operation.
     * @callback module:api/AddressApi~addressParseStringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParseAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse an unstructured input text string into an international, formatted address
     * Uses machine learning and Natural Language Processing (NLP) to handle a wide array of cases, including non-standard and unstructured address strings across a wide array of countries and address formatting norms.
     * @param {module:model/ParseAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressParseStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParseAddressResponse}
     */
    this.addressParseString = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressParseString");
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
      var returnType = ParseAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/parse', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressValidateAddress operation.
     * @callback module:api/AddressApi~addressValidateAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a street address
     * Determines if an input structured street address is valid or invalid.  If the address is valid, also returns the latitude and longitude of the address.
     * @param {module:model/ValidateAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressValidateAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateAddressResponse}
     */
    this.addressValidateAddress = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressValidateAddress");
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
      var returnType = ValidateAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/street-address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
