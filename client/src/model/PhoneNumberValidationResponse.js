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
    root.CloudmersiveValidateApiClient.PhoneNumberValidationResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneNumberValidationResponse model module.
   * @module model/PhoneNumberValidationResponse
   * @version 1.3.9
   */

  /**
   * Constructs a new <code>PhoneNumberValidationResponse</code>.
   * Result from validating a phone number
   * @alias module:model/PhoneNumberValidationResponse
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PhoneNumberValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneNumberValidationResponse} obj Optional instance to populate.
   * @return {module:model/PhoneNumberValidationResponse} The populated <code>PhoneNumberValidationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsValid')) {
        obj['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('PhoneNumberType')) {
        obj['PhoneNumberType'] = ApiClient.convertToType(data['PhoneNumberType'], 'String');
      }
      if (data.hasOwnProperty('E164Format')) {
        obj['E164Format'] = ApiClient.convertToType(data['E164Format'], 'String');
      }
      if (data.hasOwnProperty('InternationalFormat')) {
        obj['InternationalFormat'] = ApiClient.convertToType(data['InternationalFormat'], 'String');
      }
      if (data.hasOwnProperty('NationalFormat')) {
        obj['NationalFormat'] = ApiClient.convertToType(data['NationalFormat'], 'String');
      }
      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
      if (data.hasOwnProperty('CountryName')) {
        obj['CountryName'] = ApiClient.convertToType(data['CountryName'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the phone number is valid, false otherwise
   * @member {Boolean} IsValid
   */
  exports.prototype['IsValid'] = undefined;
  /**
   * True if the operation was successful, false if there was an error during validation.  See IsValid for validation result.
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Type of phone number; possible values are: FixedLine, Mobile, FixedLineOrMobile, TollFree, PremiumRate,   SharedCost, Voip, PersonalNumber, Pager, Uan, Voicemail, Unknown
   * @member {String} PhoneNumberType
   */
  exports.prototype['PhoneNumberType'] = undefined;
  /**
   * E.164 format of the phone number
   * @member {String} E164Format
   */
  exports.prototype['E164Format'] = undefined;
  /**
   * Internaltional format of the phone number
   * @member {String} InternationalFormat
   */
  exports.prototype['InternationalFormat'] = undefined;
  /**
   * National format of the phone number
   * @member {String} NationalFormat
   */
  exports.prototype['NationalFormat'] = undefined;
  /**
   * Two digit country code of the phone number
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * User-friendly long name of the country for the phone number
   * @member {String} CountryName
   */
  exports.prototype['CountryName'] = undefined;



  return exports;
}));


