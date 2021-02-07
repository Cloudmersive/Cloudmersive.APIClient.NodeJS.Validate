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
    root.CloudmersiveValidateApiClient.ParseAddressResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ParseAddressResponse model module.
   * @module model/ParseAddressResponse
   * @version 1.3.9
   */

  /**
   * Constructs a new <code>ParseAddressResponse</code>.
   * Result of parsing an address into its component parts
   * @alias module:model/ParseAddressResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ParseAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParseAddressResponse} obj Optional instance to populate.
   * @return {module:model/ParseAddressResponse} The populated <code>ParseAddressResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Building')) {
        obj['Building'] = ApiClient.convertToType(data['Building'], 'String');
      }
      if (data.hasOwnProperty('StreetNumber')) {
        obj['StreetNumber'] = ApiClient.convertToType(data['StreetNumber'], 'String');
      }
      if (data.hasOwnProperty('Street')) {
        obj['Street'] = ApiClient.convertToType(data['Street'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('StateOrProvince')) {
        obj['StateOrProvince'] = ApiClient.convertToType(data['StateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('PostalCode')) {
        obj['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
      }
      if (data.hasOwnProperty('CountryFullName')) {
        obj['CountryFullName'] = ApiClient.convertToType(data['CountryFullName'], 'String');
      }
      if (data.hasOwnProperty('ISOTwoLetterCode')) {
        obj['ISOTwoLetterCode'] = ApiClient.convertToType(data['ISOTwoLetterCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the parsing operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * The name of the building, house or structure if applicable, such as \"Cloudmersive Building 2\".  This will often by null.
   * @member {String} Building
   */
  exports.prototype['Building'] = undefined;
  /**
   * The street number or house number of the address.  For example, in the address \"1600 Pennsylvania Avenue NW\" the street number would be \"1600\".  This value will typically be populated for most addresses.
   * @member {String} StreetNumber
   */
  exports.prototype['StreetNumber'] = undefined;
  /**
   * The name of the street or road of the address.  For example, in the address \"1600 Pennsylvania Avenue NW\" the street number would be \"Pennsylvania Avenue NW\".
   * @member {String} Street
   */
  exports.prototype['Street'] = undefined;
  /**
   * The city of the address.
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * The state or province of the address.
   * @member {String} StateOrProvince
   */
  exports.prototype['StateOrProvince'] = undefined;
  /**
   * The postal code or zip code of the address.
   * @member {String} PostalCode
   */
  exports.prototype['PostalCode'] = undefined;
  /**
   * Country of the address, if present in the address.  If not included in the address it will be null.
   * @member {String} CountryFullName
   */
  exports.prototype['CountryFullName'] = undefined;
  /**
   * Two-letter ISO 3166-1 country code
   * @member {String} ISOTwoLetterCode
   */
  exports.prototype['ISOTwoLetterCode'] = undefined;



  return exports;
}));


