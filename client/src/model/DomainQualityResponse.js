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
    root.CloudmersiveValidateApiClient.DomainQualityResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DomainQualityResponse model module.
   * @module model/DomainQualityResponse
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>DomainQualityResponse</code>.
   * Result of performing a domain quality score operation
   * @alias module:model/DomainQualityResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DomainQualityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainQualityResponse} obj Optional instance to populate.
   * @return {module:model/DomainQualityResponse} The populated <code>DomainQualityResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DomainQualityScore')) {
        obj['DomainQualityScore'] = ApiClient.convertToType(data['DomainQualityScore'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The quality score of the domain name; possible values are 0.0 to 10.0 with 10.0 being the highest and 0.0 being the lowest quality.
   * @member {Number} DomainQualityScore
   */
  exports.prototype['DomainQualityScore'] = undefined;



  return exports;
}));

