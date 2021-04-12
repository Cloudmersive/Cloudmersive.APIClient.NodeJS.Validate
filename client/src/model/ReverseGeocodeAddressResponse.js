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
    root.CloudmersiveValidateApiClient.ReverseGeocodeAddressResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReverseGeocodeAddressResponse model module.
   * @module model/ReverseGeocodeAddressResponse
   * @version 1.4.2
   */

  /**
   * Constructs a new <code>ReverseGeocodeAddressResponse</code>.
   * Result of reverse geocoding a street address
   * @alias module:model/ReverseGeocodeAddressResponse
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ReverseGeocodeAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReverseGeocodeAddressResponse} obj Optional instance to populate.
   * @return {module:model/ReverseGeocodeAddressResponse} The populated <code>ReverseGeocodeAddressResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('StreetAddress')) {
        obj['StreetAddress'] = ApiClient.convertToType(data['StreetAddress'], 'String');
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
      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the address operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Street address to validate, such as '2950 Buskirk Ave.'
   * @member {String} StreetAddress
   */
  exports.prototype['StreetAddress'] = undefined;
  /**
   * City part of the addrerss to validate, such as 'Walnut Creek'
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * State or province of the address to validate, such as 'CA' or 'California'
   * @member {String} StateOrProvince
   */
  exports.prototype['StateOrProvince'] = undefined;
  /**
   * Zip code or postal code of the address to validate, such as '94597'
   * @member {String} PostalCode
   */
  exports.prototype['PostalCode'] = undefined;
  /**
   * Name of the country, such as 'United States'.  Global countries are supported.
   * @member {String} CountryFullName
   */
  exports.prototype['CountryFullName'] = undefined;
  /**
   * Three-letter ISO 3166-1 country code
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;



  return exports;
}));


