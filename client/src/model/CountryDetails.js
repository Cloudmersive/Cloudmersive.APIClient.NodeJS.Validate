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
    root.CloudmersiveValidateApiClient.CountryDetails = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CountryDetails model module.
   * @module model/CountryDetails
   * @version 1.2.8
   */

  /**
   * Constructs a new <code>CountryDetails</code>.
   * Details of one country
   * @alias module:model/CountryDetails
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CountryDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryDetails} obj Optional instance to populate.
   * @return {module:model/CountryDetails} The populated <code>CountryDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CountryName')) {
        obj['CountryName'] = ApiClient.convertToType(data['CountryName'], 'String');
      }
      if (data.hasOwnProperty('ThreeLetterCode')) {
        obj['ThreeLetterCode'] = ApiClient.convertToType(data['ThreeLetterCode'], 'String');
      }
      if (data.hasOwnProperty('ISOTwoLetterCode')) {
        obj['ISOTwoLetterCode'] = ApiClient.convertToType(data['ISOTwoLetterCode'], 'String');
      }
      if (data.hasOwnProperty('IsEuropeanUnionMember')) {
        obj['IsEuropeanUnionMember'] = ApiClient.convertToType(data['IsEuropeanUnionMember'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of the country
   * @member {String} CountryName
   */
  exports.prototype['CountryName'] = undefined;
  /**
   * Three-letter ISO 3166-1 country code
   * @member {String} ThreeLetterCode
   */
  exports.prototype['ThreeLetterCode'] = undefined;
  /**
   * Two-letter ISO 3166-1 country code
   * @member {String} ISOTwoLetterCode
   */
  exports.prototype['ISOTwoLetterCode'] = undefined;
  /**
   * True if this country is currently a member of the European Union (EU), false otherwise
   * @member {Boolean} IsEuropeanUnionMember
   */
  exports.prototype['IsEuropeanUnionMember'] = undefined;



  return exports;
}));


