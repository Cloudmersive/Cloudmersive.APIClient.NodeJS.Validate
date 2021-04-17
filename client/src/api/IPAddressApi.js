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
    define(['ApiClient', 'model/BotCheckResponse', 'model/GeolocateResponse', 'model/GeolocateStreetAddressResponse', 'model/IPIntelligenceResponse', 'model/IPReverseDNSLookupResponse', 'model/IPThreatResponse', 'model/TorNodeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BotCheckResponse'), require('../model/GeolocateResponse'), require('../model/GeolocateStreetAddressResponse'), require('../model/IPIntelligenceResponse'), require('../model/IPReverseDNSLookupResponse'), require('../model/IPThreatResponse'), require('../model/TorNodeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.IPAddressApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.BotCheckResponse, root.CloudmersiveValidateApiClient.GeolocateResponse, root.CloudmersiveValidateApiClient.GeolocateStreetAddressResponse, root.CloudmersiveValidateApiClient.IPIntelligenceResponse, root.CloudmersiveValidateApiClient.IPReverseDNSLookupResponse, root.CloudmersiveValidateApiClient.IPThreatResponse, root.CloudmersiveValidateApiClient.TorNodeResponse);
  }
}(this, function(ApiClient, BotCheckResponse, GeolocateResponse, GeolocateStreetAddressResponse, IPIntelligenceResponse, IPReverseDNSLookupResponse, IPThreatResponse, TorNodeResponse) {
  'use strict';

  /**
   * IPAddress service.
   * @module api/IPAddressApi
   * @version 1.4.3
   */

  /**
   * Constructs a new IPAddressApi. 
   * @alias module:api/IPAddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iPAddressGeolocateStreetAddress operation.
     * @callback module:api/IPAddressApi~iPAddressGeolocateStreetAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeolocateStreetAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Geolocate an IP address to a street address
     * Identify an IP address&#39;s street address.  Useful for security and UX applications.
     * @param {String} value IP address to geolocate, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressGeolocateStreetAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeolocateStreetAddressResponse}
     */
    this.iPAddressGeolocateStreetAddress = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressGeolocateStreetAddress");
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
      var returnType = GeolocateStreetAddressResponse;

      return this.apiClient.callApi(
        '/validate/ip/geolocate/street-address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressIpIntelligence operation.
     * @callback module:api/IPAddressApi~iPAddressIpIntelligenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IPIntelligenceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get intelligence on an IP address
     * Identify key intelligence about an IP address, including if it is a known threat IP, known bot, Tor exit node, as well as the location of the IP address.
     * @param {String} value IP address to process, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressIpIntelligenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IPIntelligenceResponse}
     */
    this.iPAddressIpIntelligence = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressIpIntelligence");
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
      var returnType = IPIntelligenceResponse;

      return this.apiClient.callApi(
        '/validate/ip/intelligence', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressIsBot operation.
     * @callback module:api/IPAddressApi~iPAddressIsBotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BotCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if IP address is a Bot client
     * Check if the input IP address is a Bot, robot, or otherwise a non-user entity.  Leverages real-time signals to check against known high-probability bots..
     * @param {String} value IP address to check, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressIsBotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BotCheckResponse}
     */
    this.iPAddressIsBot = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressIsBot");
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
      var returnType = BotCheckResponse;

      return this.apiClient.callApi(
        '/validate/ip/is-bot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressIsThreat operation.
     * @callback module:api/IPAddressApi~iPAddressIsThreatCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IPThreatResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if IP address is a known threat
     * Check if the input IP address is a known threat IP address.  Checks against known bad IPs, botnets, compromised servers, and other lists of threats.
     * @param {String} value IP address to check, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressIsThreatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IPThreatResponse}
     */
    this.iPAddressIsThreat = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressIsThreat");
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
      var returnType = IPThreatResponse;

      return this.apiClient.callApi(
        '/validate/ip/is-threat', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressIsTorNode operation.
     * @callback module:api/IPAddressApi~iPAddressIsTorNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TorNodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if IP address is a Tor node server
     * Check if the input IP address is a Tor exit node server.  Tor servers are a type of privacy-preserving technology that can hide the original IP address who makes a request.
     * @param {String} value IP address to check, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressIsTorNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TorNodeResponse}
     */
    this.iPAddressIsTorNode = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressIsTorNode");
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
      var returnType = TorNodeResponse;

      return this.apiClient.callApi(
        '/validate/ip/is-tor-node', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressPost operation.
     * @callback module:api/IPAddressApi~iPAddressPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeolocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Geolocate an IP address
     * Identify an IP address Country, State/Provence, City, Zip/Postal Code, etc.  Useful for security and UX applications.
     * @param {String} value IP address to geolocate, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeolocateResponse}
     */
    this.iPAddressPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressPost");
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
      var returnType = GeolocateResponse;

      return this.apiClient.callApi(
        '/validate/ip/geolocate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPAddressReverseDomainLookup operation.
     * @callback module:api/IPAddressApi~iPAddressReverseDomainLookupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IPReverseDNSLookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a reverse domain name (DNS) lookup on an IP address
     * Gets the domain name, if any, associated with the IP address.
     * @param {String} value IP address to check, e.g. \&quot;55.55.55.55\&quot;.  The input is a string so be sure to enclose it in double-quotes.
     * @param {module:api/IPAddressApi~iPAddressReverseDomainLookupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IPReverseDNSLookupResponse}
     */
    this.iPAddressReverseDomainLookup = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressReverseDomainLookup");
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
      var returnType = IPReverseDNSLookupResponse;

      return this.apiClient.callApi(
        '/validate/ip/reverse-domain-lookup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
