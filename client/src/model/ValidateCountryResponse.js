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
    define(['ApiClient', 'model/Timezone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Timezone'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.ValidateCountryResponse = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.Timezone);
  }
}(this, function(ApiClient, Timezone) {
  'use strict';




  /**
   * The ValidateCountryResponse model module.
   * @module model/ValidateCountryResponse
   * @version 1.4.7
   */

  /**
   * Constructs a new <code>ValidateCountryResponse</code>.
   * Result of performing a country validation operation
   * @alias module:model/ValidateCountryResponse
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ValidateCountryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateCountryResponse} obj Optional instance to populate.
   * @return {module:model/ValidateCountryResponse} The populated <code>ValidateCountryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('CountryFullName')) {
        obj['CountryFullName'] = ApiClient.convertToType(data['CountryFullName'], 'String');
      }
      if (data.hasOwnProperty('ISOTwoLetterCode')) {
        obj['ISOTwoLetterCode'] = ApiClient.convertToType(data['ISOTwoLetterCode'], 'String');
      }
      if (data.hasOwnProperty('FIPSTwoLetterCode')) {
        obj['FIPSTwoLetterCode'] = ApiClient.convertToType(data['FIPSTwoLetterCode'], 'String');
      }
      if (data.hasOwnProperty('ThreeLetterCode')) {
        obj['ThreeLetterCode'] = ApiClient.convertToType(data['ThreeLetterCode'], 'String');
      }
      if (data.hasOwnProperty('IsEuropeanUnionMember')) {
        obj['IsEuropeanUnionMember'] = ApiClient.convertToType(data['IsEuropeanUnionMember'], 'Boolean');
      }
      if (data.hasOwnProperty('Timezones')) {
        obj['Timezones'] = ApiClient.convertToType(data['Timezones'], [Timezone]);
      }
      if (data.hasOwnProperty('ISOCurrencyCode')) {
        obj['ISOCurrencyCode'] = ApiClient.convertToType(data['ISOCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('CurrencySymbol')) {
        obj['CurrencySymbol'] = ApiClient.convertToType(data['CurrencySymbol'], 'String');
      }
      if (data.hasOwnProperty('CurrencyEnglishName')) {
        obj['CurrencyEnglishName'] = ApiClient.convertToType(data['CurrencyEnglishName'], 'String');
      }
      if (data.hasOwnProperty('Region')) {
        obj['Region'] = ApiClient.convertToType(data['Region'], 'String');
      }
      if (data.hasOwnProperty('Subregion')) {
        obj['Subregion'] = ApiClient.convertToType(data['Subregion'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Full name of the country
   * @member {String} CountryFullName
   */
  exports.prototype['CountryFullName'] = undefined;
  /**
   * Two-letter ISO 3166-1 country code
   * @member {String} ISOTwoLetterCode
   */
  exports.prototype['ISOTwoLetterCode'] = undefined;
  /**
   * Two-letter FIPS 10-4 country code
   * @member {String} FIPSTwoLetterCode
   */
  exports.prototype['FIPSTwoLetterCode'] = undefined;
  /**
   * Three-letter ISO 3166-1 country code
   * @member {String} ThreeLetterCode
   */
  exports.prototype['ThreeLetterCode'] = undefined;
  /**
   * True if this country is currently a member of the European Union (EU), false otherwise
   * @member {Boolean} IsEuropeanUnionMember
   */
  exports.prototype['IsEuropeanUnionMember'] = undefined;
  /**
   * Time zones (IANA/Olsen) in the country
   * @member {Array.<module:model/Timezone>} Timezones
   */
  exports.prototype['Timezones'] = undefined;
  /**
   * ISO 4217 currency three-letter code associated with the country
   * @member {String} ISOCurrencyCode
   */
  exports.prototype['ISOCurrencyCode'] = undefined;
  /**
   * Symbol associated with the currency
   * @member {String} CurrencySymbol
   */
  exports.prototype['CurrencySymbol'] = undefined;
  /**
   * Full name of the currency
   * @member {String} CurrencyEnglishName
   */
  exports.prototype['CurrencyEnglishName'] = undefined;
  /**
   * Region (continent) in which the country is located; possible values are None, Europe, Americas, Asia, Africa, Oceania
   * @member {String} Region
   */
  exports.prototype['Region'] = undefined;
  /**
   * Subregion in which the country is located; possible values are None, NorthernEurope, WesternEurope, SouthernEurope, EasternEurope, CentralAmerica, NorthernAmerica, SouthAmerica, EasternAfrica, MiddleAfrica, NorthernAfrica , SouthernAfrica , WesternAfrica , CentralAsia , EasternAsia , SouthernAsia , SouthEasternAsia , WesternAsia , Southern , Middle , AustraliaandNewZealand , Melanesia , Polynesia , Micronesia , Caribbean,
   * @member {String} Subregion
   */
  exports.prototype['Subregion'] = undefined;



  return exports;
}));


