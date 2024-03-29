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
    root.CloudmersiveValidateApiClient.ValidatePostalCodeResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidatePostalCodeResponse model module.
   * @module model/ValidatePostalCodeResponse
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>ValidatePostalCodeResponse</code>.
   * Result of validating a postal code
   * @alias module:model/ValidatePostalCodeResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ValidatePostalCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidatePostalCodeResponse} obj Optional instance to populate.
   * @return {module:model/ValidatePostalCodeResponse} The populated <code>ValidatePostalCodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidPostalCode')) {
        obj['ValidPostalCode'] = ApiClient.convertToType(data['ValidPostalCode'], 'Boolean');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('StateOrProvince')) {
        obj['StateOrProvince'] = ApiClient.convertToType(data['StateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the Postal Code is valid, false otherwise
   * @member {Boolean} ValidPostalCode
   */
  exports.prototype['ValidPostalCode'] = undefined;
  /**
   * If valid, City corresponding to the input postal code, such as 'Walnut Creek'
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * If valid; State or province corresponding to the input postal code, such as 'CA' or 'California'
   * @member {String} StateOrProvince
   */
  exports.prototype['StateOrProvince'] = undefined;
  /**
   * If the postal code is valid, the degrees latitude of the centroid of the postal code, null otherwise
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * If the postal code is valid, the degrees longitude of the centroid of the postal code, null otherwise
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


