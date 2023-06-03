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
    root.CloudmersiveValidateApiClient.GetPublicHolidaysRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetPublicHolidaysRequest model module.
   * @module model/GetPublicHolidaysRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>GetPublicHolidaysRequest</code>.
   * Input parameter to a country validation request
   * @alias module:model/GetPublicHolidaysRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetPublicHolidaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPublicHolidaysRequest} obj Optional instance to populate.
   * @return {module:model/GetPublicHolidaysRequest} The populated <code>GetPublicHolidaysRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RawCountryInput')) {
        obj['RawCountryInput'] = ApiClient.convertToType(data['RawCountryInput'], 'String');
      }
      if (data.hasOwnProperty('Year')) {
        obj['Year'] = ApiClient.convertToType(data['Year'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Two-letter code (FIPS 10-4 or ISO 3166-1) of the country; if not specified, defaults to United States
   * @member {String} RawCountryInput
   */
  exports.prototype['RawCountryInput'] = undefined;
  /**
   * Optional - the year in which to retrieve the holidays; if left blank (0) it will default to the current year
   * @member {Number} Year
   */
  exports.prototype['Year'] = undefined;



  return exports;
}));


