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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.UrlSsrfResponseFull = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UrlSsrfResponseFull model module.
   * @module model/UrlSsrfResponseFull
   * @version 1.3.9
   */

  /**
   * Constructs a new <code>UrlSsrfResponseFull</code>.
   * Result of checking a URL for SSRF threats
   * @alias module:model/UrlSsrfResponseFull
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UrlSsrfResponseFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlSsrfResponseFull} obj Optional instance to populate.
   * @return {module:model/UrlSsrfResponseFull} The populated <code>UrlSsrfResponseFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CleanURL')) {
        obj['CleanURL'] = ApiClient.convertToType(data['CleanURL'], 'Boolean');
      }
      if (data.hasOwnProperty('ThreatLevel')) {
        obj['ThreatLevel'] = ApiClient.convertToType(data['ThreatLevel'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the URL is clean, false if it is at risk of containing an SSRF threat or attack
   * @member {Boolean} CleanURL
   */
  exports.prototype['CleanURL'] = undefined;
  /**
   * Threat level of the URL; possible values are High, Medium, Low and None
   * @member {String} ThreatLevel
   */
  exports.prototype['ThreatLevel'] = undefined;



  return exports;
}));


