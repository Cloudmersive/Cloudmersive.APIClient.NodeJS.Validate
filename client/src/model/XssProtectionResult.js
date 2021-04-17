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
    root.CloudmersiveValidateApiClient.XssProtectionResult = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XssProtectionResult model module.
   * @module model/XssProtectionResult
   * @version 1.4.4
   */

  /**
   * Constructs a new <code>XssProtectionResult</code>.
   * Result of performing an XSS protection operation
   * @alias module:model/XssProtectionResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>XssProtectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XssProtectionResult} obj Optional instance to populate.
   * @return {module:model/XssProtectionResult} The populated <code>XssProtectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedXss')) {
        obj['ContainedXss'] = ApiClient.convertToType(data['ContainedXss'], 'Boolean');
      }
      if (data.hasOwnProperty('OriginalInput')) {
        obj['OriginalInput'] = ApiClient.convertToType(data['OriginalInput'], 'String');
      }
      if (data.hasOwnProperty('NormalizedResult')) {
        obj['NormalizedResult'] = ApiClient.convertToType(data['NormalizedResult'], 'String');
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
   * True if the input contained XSS scripting, false otherwise
   * @member {Boolean} ContainedXss
   */
  exports.prototype['ContainedXss'] = undefined;
  /**
   * Original input string
   * @member {String} OriginalInput
   */
  exports.prototype['OriginalInput'] = undefined;
  /**
   * Normalized string result, with XSS removed
   * @member {String} NormalizedResult
   */
  exports.prototype['NormalizedResult'] = undefined;



  return exports;
}));


