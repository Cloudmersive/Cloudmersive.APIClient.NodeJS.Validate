/**
 * validateapi
 * The validation APIs help you validate data. Check if an E-mail address is real. Check if a domain is real. Check up on an IP address, and even where it is located. All this and much more is available in the validation API.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
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
    root.CloudmersiveValidateApiClient.PhoneNumberValidateRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneNumberValidateRequest model module.
   * @module model/PhoneNumberValidateRequest
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>PhoneNumberValidateRequest</code>.
   * Request to validate a phone number
   * @alias module:model/PhoneNumberValidateRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PhoneNumberValidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneNumberValidateRequest} obj Optional instance to populate.
   * @return {module:model/PhoneNumberValidateRequest} The populated <code>PhoneNumberValidateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PhoneNumber')) {
        obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('DefaultCountryCode')) {
        obj['DefaultCountryCode'] = ApiClient.convertToType(data['DefaultCountryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Raw phone number string to parse as input for validation
   * @member {String} PhoneNumber
   */
  exports.prototype['PhoneNumber'] = undefined;
  /**
   * Optional, default country code.  If left blank, will default to \"US\".
   * @member {String} DefaultCountryCode
   */
  exports.prototype['DefaultCountryCode'] = undefined;



  return exports;
}));


