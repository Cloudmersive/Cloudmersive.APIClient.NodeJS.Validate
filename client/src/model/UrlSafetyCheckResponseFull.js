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
    root.CloudmersiveValidateApiClient.UrlSafetyCheckResponseFull = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UrlSafetyCheckResponseFull model module.
   * @module model/UrlSafetyCheckResponseFull
   * @version 1.4.4
   */

  /**
   * Constructs a new <code>UrlSafetyCheckResponseFull</code>.
   * Result of checking a URL for safety threats
   * @alias module:model/UrlSafetyCheckResponseFull
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UrlSafetyCheckResponseFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlSafetyCheckResponseFull} obj Optional instance to populate.
   * @return {module:model/UrlSafetyCheckResponseFull} The populated <code>UrlSafetyCheckResponseFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CleanURL')) {
        obj['CleanURL'] = ApiClient.convertToType(data['CleanURL'], 'Boolean');
      }
      if (data.hasOwnProperty('ThreatType')) {
        obj['ThreatType'] = ApiClient.convertToType(data['ThreatType'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the URL is clean, false if it is at risk of containing a safety threat or attack
   * @member {Boolean} CleanURL
   */
  exports.prototype['CleanURL'] = undefined;
  /**
   * Threat type identified, if any; possible values are \"ForcedDownload\", \"VirusesAndMalware\", \"Phishing\"
   * @member {String} ThreatType
   */
  exports.prototype['ThreatType'] = undefined;



  return exports;
}));


