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
    define(['ApiClient', 'model/UrlSsrfRequestFull'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UrlSsrfRequestFull'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.UrlSsrfRequestBatch = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.UrlSsrfRequestFull);
  }
}(this, function(ApiClient, UrlSsrfRequestFull) {
  'use strict';




  /**
   * The UrlSsrfRequestBatch model module.
   * @module model/UrlSsrfRequestBatch
   * @version 1.4.7
   */

  /**
   * Constructs a new <code>UrlSsrfRequestBatch</code>.
   * Batch operation to perform SSRF threat checks on multiple URLs
   * @alias module:model/UrlSsrfRequestBatch
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UrlSsrfRequestBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlSsrfRequestBatch} obj Optional instance to populate.
   * @return {module:model/UrlSsrfRequestBatch} The populated <code>UrlSsrfRequestBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputItems')) {
        obj['InputItems'] = ApiClient.convertToType(data['InputItems'], [UrlSsrfRequestFull]);
      }
    }
    return obj;
  }

  /**
   * Input URLs to check for SSRF threats
   * @member {Array.<module:model/UrlSsrfRequestFull>} InputItems
   */
  exports.prototype['InputItems'] = undefined;



  return exports;
}));


