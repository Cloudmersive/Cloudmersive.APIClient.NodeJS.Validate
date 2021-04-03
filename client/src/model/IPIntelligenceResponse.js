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
    define(['ApiClient', 'model/GeolocateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeolocateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.IPIntelligenceResponse = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.GeolocateResponse);
  }
}(this, function(ApiClient, GeolocateResponse) {
  'use strict';




  /**
   * The IPIntelligenceResponse model module.
   * @module model/IPIntelligenceResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>IPIntelligenceResponse</code>.
   * IP address intelligence result
   * @alias module:model/IPIntelligenceResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>IPIntelligenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IPIntelligenceResponse} obj Optional instance to populate.
   * @return {module:model/IPIntelligenceResponse} The populated <code>IPIntelligenceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsBot')) {
        obj['IsBot'] = ApiClient.convertToType(data['IsBot'], 'Boolean');
      }
      if (data.hasOwnProperty('IsTorNode')) {
        obj['IsTorNode'] = ApiClient.convertToType(data['IsTorNode'], 'Boolean');
      }
      if (data.hasOwnProperty('IsThreat')) {
        obj['IsThreat'] = ApiClient.convertToType(data['IsThreat'], 'Boolean');
      }
      if (data.hasOwnProperty('IsEU')) {
        obj['IsEU'] = ApiClient.convertToType(data['IsEU'], 'Boolean');
      }
      if (data.hasOwnProperty('Location')) {
        obj['Location'] = GeolocateResponse.constructFromObject(data['Location']);
      }
      if (data.hasOwnProperty('CurrencyCode')) {
        obj['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('CurrencyName')) {
        obj['CurrencyName'] = ApiClient.convertToType(data['CurrencyName'], 'String');
      }
      if (data.hasOwnProperty('RegionArea')) {
        obj['RegionArea'] = ApiClient.convertToType(data['RegionArea'], 'String');
      }
      if (data.hasOwnProperty('SubregionArea')) {
        obj['SubregionArea'] = ApiClient.convertToType(data['SubregionArea'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the IP address is a known bot, otherwise false
   * @member {Boolean} IsBot
   */
  exports.prototype['IsBot'] = undefined;
  /**
   * True if the IP address is a known Tor exit node, otherwise false
   * @member {Boolean} IsTorNode
   */
  exports.prototype['IsTorNode'] = undefined;
  /**
   * True if the IP address is a known threat IP, otherwise false
   * @member {Boolean} IsThreat
   */
  exports.prototype['IsThreat'] = undefined;
  /**
   * True if the IP address is in the European Union, otherwise false
   * @member {Boolean} IsEU
   */
  exports.prototype['IsEU'] = undefined;
  /**
   * Returns the location of the IP address
   * @member {module:model/GeolocateResponse} Location
   */
  exports.prototype['Location'] = undefined;
  /**
   * ISO 4217 currency code for the IP address location
   * @member {String} CurrencyCode
   */
  exports.prototype['CurrencyCode'] = undefined;
  /**
   * Name of the currency in English
   * @member {String} CurrencyName
   */
  exports.prototype['CurrencyName'] = undefined;
  /**
   * Region (continent) in which the country is located; possible values are None, Europe, Americas, Asia, Africa, Oceania
   * @member {String} RegionArea
   */
  exports.prototype['RegionArea'] = undefined;
  /**
   * Subregion in which the country is located; possible values are None, NorthernEurope, WesternEurope, SouthernEurope, EasternEurope, CentralAmerica, NorthernAmerica, SouthAmerica, EasternAfrica, MiddleAfrica, NorthernAfrica , SouthernAfrica , WesternAfrica , CentralAsia , EasternAsia , SouthernAsia , SouthEasternAsia , WesternAsia , Southern , Middle , AustraliaandNewZealand , Melanesia , Polynesia , Micronesia , Caribbean,
   * @member {String} SubregionArea
   */
  exports.prototype['SubregionArea'] = undefined;



  return exports;
}));


