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
    root.CloudmersiveValidateApiClient.FullNameValidationRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FullNameValidationRequest model module.
   * @module model/FullNameValidationRequest
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>FullNameValidationRequest</code>.
   * Request to validate a full name string
   * @alias module:model/FullNameValidationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FullNameValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullNameValidationRequest} obj Optional instance to populate.
   * @return {module:model/FullNameValidationRequest} The populated <code>FullNameValidationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FullNameString')) {
        obj['FullNameString'] = ApiClient.convertToType(data['FullNameString'], 'String');
      }
    }
    return obj;
  }

  /**
   * Full name to process as a free-form string; supports many components such as First Name, Middle Name, Last Name, Title, Nickname, Suffix, and Display Name
   * @member {String} FullNameString
   */
  exports.prototype['FullNameString'] = undefined;



  return exports;
}));


