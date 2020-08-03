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
    root.CloudmersiveValidateApiClient.VatLookupResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VatLookupResponse model module.
   * @module model/VatLookupResponse
   * @version 1.2.6
   */

  /**
   * Constructs a new <code>VatLookupResponse</code>.
   * @alias module:model/VatLookupResponse
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>VatLookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VatLookupResponse} obj Optional instance to populate.
   * @return {module:model/VatLookupResponse} The populated <code>VatLookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
      if (data.hasOwnProperty('VatNumber')) {
        obj['VatNumber'] = ApiClient.convertToType(data['VatNumber'], 'String');
      }
      if (data.hasOwnProperty('IsValid')) {
        obj['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
      }
      if (data.hasOwnProperty('BusinessName')) {
        obj['BusinessName'] = ApiClient.convertToType(data['BusinessName'], 'String');
      }
      if (data.hasOwnProperty('BusinessAddress')) {
        obj['BusinessAddress'] = ApiClient.convertToType(data['BusinessAddress'], 'String');
      }
      if (data.hasOwnProperty('BusinessBuilding')) {
        obj['BusinessBuilding'] = ApiClient.convertToType(data['BusinessBuilding'], 'String');
      }
      if (data.hasOwnProperty('BusinessStreetNumber')) {
        obj['BusinessStreetNumber'] = ApiClient.convertToType(data['BusinessStreetNumber'], 'String');
      }
      if (data.hasOwnProperty('BusinessStreet')) {
        obj['BusinessStreet'] = ApiClient.convertToType(data['BusinessStreet'], 'String');
      }
      if (data.hasOwnProperty('BusinessCity')) {
        obj['BusinessCity'] = ApiClient.convertToType(data['BusinessCity'], 'String');
      }
      if (data.hasOwnProperty('BusinessStateOrProvince')) {
        obj['BusinessStateOrProvince'] = ApiClient.convertToType(data['BusinessStateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('BusinessPostalCode')) {
        obj['BusinessPostalCode'] = ApiClient.convertToType(data['BusinessPostalCode'], 'String');
      }
      if (data.hasOwnProperty('BusinessCountry')) {
        obj['BusinessCountry'] = ApiClient.convertToType(data['BusinessCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * Two-letter country code
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * VAT number
   * @member {String} VatNumber
   */
  exports.prototype['VatNumber'] = undefined;
  /**
   * True if the VAT code is valid, false otherwise
   * @member {Boolean} IsValid
   */
  exports.prototype['IsValid'] = undefined;
  /**
   * Name of the business
   * @member {String} BusinessName
   */
  exports.prototype['BusinessName'] = undefined;
  /**
   * Business address as a single string
   * @member {String} BusinessAddress
   */
  exports.prototype['BusinessAddress'] = undefined;
  /**
   * For the business address, the name of the building, house or structure if applicable, such as \"Cloudmersive Building 2\".  This will often by null.
   * @member {String} BusinessBuilding
   */
  exports.prototype['BusinessBuilding'] = undefined;
  /**
   * For the business address, the street number or house number of the address.  For example, in the address \"1600 Pennsylvania Avenue NW\" the street number would be \"1600\".  This value will typically be populated for most addresses.
   * @member {String} BusinessStreetNumber
   */
  exports.prototype['BusinessStreetNumber'] = undefined;
  /**
   * For the business address, the name of the street or road of the address.  For example, in the address \"1600 Pennsylvania Avenue NW\" the street number would be \"Pennsylvania Avenue NW\".
   * @member {String} BusinessStreet
   */
  exports.prototype['BusinessStreet'] = undefined;
  /**
   * For the business address, the city of the address.
   * @member {String} BusinessCity
   */
  exports.prototype['BusinessCity'] = undefined;
  /**
   * For the business address, the state or province of the address.
   * @member {String} BusinessStateOrProvince
   */
  exports.prototype['BusinessStateOrProvince'] = undefined;
  /**
   * For the business address, the postal code or zip code of the address.
   * @member {String} BusinessPostalCode
   */
  exports.prototype['BusinessPostalCode'] = undefined;
  /**
   * For the business address, country of the address, if present in the address.  If not included in the address it will be null.
   * @member {String} BusinessCountry
   */
  exports.prototype['BusinessCountry'] = undefined;



  return exports;
}));


