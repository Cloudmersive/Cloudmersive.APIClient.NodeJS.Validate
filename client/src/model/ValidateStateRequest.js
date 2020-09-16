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
    root.CloudmersiveValidateApiClient.ValidateStateRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateStateRequest model module.
   * @module model/ValidateStateRequest
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>ValidateStateRequest</code>.
   * Request to Validate a State or Province in a country
   * @alias module:model/ValidateStateRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ValidateStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateStateRequest} obj Optional instance to populate.
   * @return {module:model/ValidateStateRequest} The populated <code>ValidateStateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('StateOrProvince')) {
        obj['StateOrProvince'] = ApiClient.convertToType(data['StateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('CountryFullName')) {
        obj['CountryFullName'] = ApiClient.convertToType(data['CountryFullName'], 'String');
      }
      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Required: State or province of the address to validate, such as 'California' or 'CA'
   * @member {String} StateOrProvince
   */
  exports.prototype['StateOrProvince'] = undefined;
  /**
   * Optional (recommended); Name of the country, such as 'United States'.  If left blank, and CountryCode is also left blank, will default to United States.  Global countries are supported.
   * @member {String} CountryFullName
   */
  exports.prototype['CountryFullName'] = undefined;
  /**
   * Optional; two-letter country code (Two-letter ISO 3166-1 country code) of the country.  If left blank, and CountryFullName is also left blank, will default to United States.  Global countries are supported.
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;



  return exports;
}));


