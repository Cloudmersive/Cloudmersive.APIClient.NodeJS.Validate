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
    root.CloudmersiveValidateApiClient.ValidateIdentifierResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateIdentifierResponse model module.
   * @module model/ValidateIdentifierResponse
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>ValidateIdentifierResponse</code>.
   * Result of performing an identifier validation operation
   * @alias module:model/ValidateIdentifierResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ValidateIdentifierResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateIdentifierResponse} obj Optional instance to populate.
   * @return {module:model/ValidateIdentifierResponse} The populated <code>ValidateIdentifierResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidIdentifier')) {
        obj['ValidIdentifier'] = ApiClient.convertToType(data['ValidIdentifier'], 'Boolean');
      }
      if (data.hasOwnProperty('Error')) {
        obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the input identifier is valid, false otherwise
   * @member {Boolean} ValidIdentifier
   */
  exports.prototype['ValidIdentifier'] = undefined;
  /**
   * Resulting error from the identifier validation; possible errors are: \"InputIsEmpty\", \"ContainsWhitespace\", \"ContainsNumbers\", \"ContainsHyphen\", \"ContainsUnderscore\", \"ContainsPeriod\", \"TooShort\", \"TooLong\", \"ContainsSpecialCharacters\"
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;



  return exports;
}));


