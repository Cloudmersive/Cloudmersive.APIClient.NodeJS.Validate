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
    root.CloudmersiveValidateApiClient.VatLookupResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VatLookupResponse model module.
   * @module model/VatLookupResponse
   * @version 1.1.4
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
    }
    return obj;
  }

  /**
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * @member {String} VatNumber
   */
  exports.prototype['VatNumber'] = undefined;
  /**
   * @member {Boolean} IsValid
   */
  exports.prototype['IsValid'] = undefined;
  /**
   * @member {String} BusinessName
   */
  exports.prototype['BusinessName'] = undefined;
  /**
   * @member {String} BusinessAddress
   */
  exports.prototype['BusinessAddress'] = undefined;



  return exports;
}));


