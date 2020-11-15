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
    root.CloudmersiveValidateApiClient.ValidateUrlResponseSyntaxOnly = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateUrlResponseSyntaxOnly model module.
   * @module model/ValidateUrlResponseSyntaxOnly
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>ValidateUrlResponseSyntaxOnly</code>.
   * Result of validating a URL with syntax only
   * @alias module:model/ValidateUrlResponseSyntaxOnly
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ValidateUrlResponseSyntaxOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateUrlResponseSyntaxOnly} obj Optional instance to populate.
   * @return {module:model/ValidateUrlResponseSyntaxOnly} The populated <code>ValidateUrlResponseSyntaxOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidURL')) {
        obj['ValidURL'] = ApiClient.convertToType(data['ValidURL'], 'Boolean');
      }
      if (data.hasOwnProperty('WellFormedURL')) {
        obj['WellFormedURL'] = ApiClient.convertToType(data['WellFormedURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the URL is valid, false otherwise
   * @member {Boolean} ValidURL
   */
  exports.prototype['ValidURL'] = undefined;
  /**
   * Well-formed version of the URL
   * @member {String} WellFormedURL
   */
  exports.prototype['WellFormedURL'] = undefined;



  return exports;
}));


