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
    root.CloudmersiveValidateApiClient.ValidateUrlResponseFull = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateUrlResponseFull model module.
   * @module model/ValidateUrlResponseFull
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>ValidateUrlResponseFull</code>.
   * Result of validating a URL with full validation
   * @alias module:model/ValidateUrlResponseFull
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ValidateUrlResponseFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateUrlResponseFull} obj Optional instance to populate.
   * @return {module:model/ValidateUrlResponseFull} The populated <code>ValidateUrlResponseFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidURL')) {
        obj['ValidURL'] = ApiClient.convertToType(data['ValidURL'], 'Boolean');
      }
      if (data.hasOwnProperty('Valid_Syntax')) {
        obj['Valid_Syntax'] = ApiClient.convertToType(data['Valid_Syntax'], 'Boolean');
      }
      if (data.hasOwnProperty('Valid_Domain')) {
        obj['Valid_Domain'] = ApiClient.convertToType(data['Valid_Domain'], 'Boolean');
      }
      if (data.hasOwnProperty('Valid_Endpoint')) {
        obj['Valid_Endpoint'] = ApiClient.convertToType(data['Valid_Endpoint'], 'Boolean');
      }
      if (data.hasOwnProperty('WellFormedURL')) {
        obj['WellFormedURL'] = ApiClient.convertToType(data['WellFormedURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the URL has valid syntax, a valid domain, a valid endpoint, and passes virus scan checks; false otherwise
   * @member {Boolean} ValidURL
   */
  exports.prototype['ValidURL'] = undefined;
  /**
   * True if the URL has valid syntax, false otherwise
   * @member {Boolean} Valid_Syntax
   */
  exports.prototype['Valid_Syntax'] = undefined;
  /**
   * True if the domain name is valid and exists, false otherwise
   * @member {Boolean} Valid_Domain
   */
  exports.prototype['Valid_Domain'] = undefined;
  /**
   * True if the endpoint is up and responsive and passes a virus scan check, false otherwise
   * @member {Boolean} Valid_Endpoint
   */
  exports.prototype['Valid_Endpoint'] = undefined;
  /**
   * Well-formed version of the URL
   * @member {String} WellFormedURL
   */
  exports.prototype['WellFormedURL'] = undefined;



  return exports;
}));


