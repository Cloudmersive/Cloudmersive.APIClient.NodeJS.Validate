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
    root.CloudmersiveValidateApiClient.ValidateCountryRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateCountryRequest model module.
   * @module model/ValidateCountryRequest
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>ValidateCountryRequest</code>.
   * Input parameter to a country validation request
   * @alias module:model/ValidateCountryRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ValidateCountryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateCountryRequest} obj Optional instance to populate.
   * @return {module:model/ValidateCountryRequest} The populated <code>ValidateCountryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RawCountryInput')) {
        obj['RawCountryInput'] = ApiClient.convertToType(data['RawCountryInput'], 'String');
      }
    }
    return obj;
  }

  /**
   * Raw country input - can be a two-letter code (FIPS 10-4 or ISO 3166-1), three-letter code (ISO 3166-1) or country name
   * @member {String} RawCountryInput
   */
  exports.prototype['RawCountryInput'] = undefined;



  return exports;
}));


