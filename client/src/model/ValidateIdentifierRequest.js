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
    root.CloudmersiveValidateApiClient.ValidateIdentifierRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateIdentifierRequest model module.
   * @module model/ValidateIdentifierRequest
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>ValidateIdentifierRequest</code>.
   * Identifier validation request, including the input identifier as well as various identifier rules
   * @alias module:model/ValidateIdentifierRequest
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ValidateIdentifierRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateIdentifierRequest} obj Optional instance to populate.
   * @return {module:model/ValidateIdentifierRequest} The populated <code>ValidateIdentifierRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Input')) {
        obj['Input'] = ApiClient.convertToType(data['Input'], 'String');
      }
      if (data.hasOwnProperty('AllowWhitespace')) {
        obj['AllowWhitespace'] = ApiClient.convertToType(data['AllowWhitespace'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowHyphens')) {
        obj['AllowHyphens'] = ApiClient.convertToType(data['AllowHyphens'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowUnderscore')) {
        obj['AllowUnderscore'] = ApiClient.convertToType(data['AllowUnderscore'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowNumbers')) {
        obj['AllowNumbers'] = ApiClient.convertToType(data['AllowNumbers'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowPeriods')) {
        obj['AllowPeriods'] = ApiClient.convertToType(data['AllowPeriods'], 'Boolean');
      }
      if (data.hasOwnProperty('MaxLength')) {
        obj['MaxLength'] = ApiClient.convertToType(data['MaxLength'], 'Number');
      }
      if (data.hasOwnProperty('MinLength')) {
        obj['MinLength'] = ApiClient.convertToType(data['MinLength'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Text string identifier input
   * @member {String} Input
   */
  exports.prototype['Input'] = undefined;
  /**
   * True if whitespace is allowed in the identifier, false otherwise
   * @member {Boolean} AllowWhitespace
   */
  exports.prototype['AllowWhitespace'] = undefined;
  /**
   * True if hyphens are allowd in the identifier, false otherwise
   * @member {Boolean} AllowHyphens
   */
  exports.prototype['AllowHyphens'] = undefined;
  /**
   * True if underscores are allowed in the identifier, false otherwise
   * @member {Boolean} AllowUnderscore
   */
  exports.prototype['AllowUnderscore'] = undefined;
  /**
   * True if numbers are allowed in the identifier, false otherwise
   * @member {Boolean} AllowNumbers
   */
  exports.prototype['AllowNumbers'] = undefined;
  /**
   * True if periods are allowed in the identifier, false otherwise
   * @member {Boolean} AllowPeriods
   */
  exports.prototype['AllowPeriods'] = undefined;
  /**
   * Optional; maximum length, if any, of the identifier
   * @member {Number} MaxLength
   */
  exports.prototype['MaxLength'] = undefined;
  /**
   * Optional; minimum length, if any, of the identifier
   * @member {Number} MinLength
   */
  exports.prototype['MinLength'] = undefined;



  return exports;
}));


