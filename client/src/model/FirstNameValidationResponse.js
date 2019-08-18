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
    root.CloudmersiveValidateApiClient.FirstNameValidationResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FirstNameValidationResponse model module.
   * @module model/FirstNameValidationResponse
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>FirstNameValidationResponse</code>.
   * Result of a first name validation operation
   * @alias module:model/FirstNameValidationResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FirstNameValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirstNameValidationResponse} obj Optional instance to populate.
   * @return {module:model/FirstNameValidationResponse} The populated <code>FirstNameValidationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ValidationResult')) {
        obj['ValidationResult'] = ApiClient.convertToType(data['ValidationResult'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the validation operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Possible values are: ValidFirstName, ValidUnknownFirstName, InvalidSpamInput, InvalidCharacters, InvalidEmpty
   * @member {String} ValidationResult
   */
  exports.prototype['ValidationResult'] = undefined;



  return exports;
}));


