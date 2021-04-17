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
    define(['ApiClient', 'model/UrlSsrfResponseFull'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UrlSsrfResponseFull'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.UrlSsrfResponseBatch = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.UrlSsrfResponseFull);
  }
}(this, function(ApiClient, UrlSsrfResponseFull) {
  'use strict';




  /**
   * The UrlSsrfResponseBatch model module.
   * @module model/UrlSsrfResponseBatch
   * @version 1.4.4
   */

  /**
   * Constructs a new <code>UrlSsrfResponseBatch</code>.
   * Result of performing SSRF threat checks on multiple URLs
   * @alias module:model/UrlSsrfResponseBatch
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UrlSsrfResponseBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlSsrfResponseBatch} obj Optional instance to populate.
   * @return {module:model/UrlSsrfResponseBatch} The populated <code>UrlSsrfResponseBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OutputItems')) {
        obj['OutputItems'] = ApiClient.convertToType(data['OutputItems'], [UrlSsrfResponseFull]);
      }
    }
    return obj;
  }

  /**
   * Results of the operation, with indexes matched to input values
   * @member {Array.<module:model/UrlSsrfResponseFull>} OutputItems
   */
  exports.prototype['OutputItems'] = undefined;



  return exports;
}));


