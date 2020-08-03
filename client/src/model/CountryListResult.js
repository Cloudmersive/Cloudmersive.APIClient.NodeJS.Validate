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
    define(['ApiClient', 'model/CountryDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CountryDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.CountryListResult = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.CountryDetails);
  }
}(this, function(ApiClient, CountryDetails) {
  'use strict';




  /**
   * The CountryListResult model module.
   * @module model/CountryListResult
   * @version 1.2.6
   */

  /**
   * Constructs a new <code>CountryListResult</code>.
   * Result of enumerating available countries
   * @alias module:model/CountryListResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CountryListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryListResult} obj Optional instance to populate.
   * @return {module:model/CountryListResult} The populated <code>CountryListResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Countries')) {
        obj['Countries'] = ApiClient.convertToType(data['Countries'], [CountryDetails]);
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * List of current ISO 3166-1 countries in the world
   * @member {Array.<module:model/CountryDetails>} Countries
   */
  exports.prototype['Countries'] = undefined;



  return exports;
}));

