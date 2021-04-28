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
    define(['ApiClient', 'model/LeadEnrichmentRequest', 'model/LeadEnrichmentResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LeadEnrichmentRequest'), require('../model/LeadEnrichmentResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.LeadEnrichmentApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.LeadEnrichmentRequest, root.CloudmersiveValidateApiClient.LeadEnrichmentResponse);
  }
}(this, function(ApiClient, LeadEnrichmentRequest, LeadEnrichmentResponse) {
  'use strict';

  /**
   * LeadEnrichment service.
   * @module api/LeadEnrichmentApi
   * @version 1.4.5
   */

  /**
   * Constructs a new LeadEnrichmentApi. 
   * @alias module:api/LeadEnrichmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the leadEnrichmentEnrichLead operation.
     * @callback module:api/LeadEnrichmentApi~leadEnrichmentEnrichLeadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeadEnrichmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enrich an input lead with additional fields of data
     * @param {module:model/LeadEnrichmentRequest} request Input lead with known fields set, and unknown fields left blank (null)
     * @param {module:api/LeadEnrichmentApi~leadEnrichmentEnrichLeadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeadEnrichmentResponse}
     */
    this.leadEnrichmentEnrichLead = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling leadEnrichmentEnrichLead");
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
      var returnType = LeadEnrichmentResponse;

      return this.apiClient.callApi(
        '/validate/lead-enrichment/lead/enrich', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
