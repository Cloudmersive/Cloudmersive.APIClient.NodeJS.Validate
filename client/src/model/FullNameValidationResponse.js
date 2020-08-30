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
    root.CloudmersiveValidateApiClient.FullNameValidationResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FullNameValidationResponse model module.
   * @module model/FullNameValidationResponse
   * @version 1.2.7
   */

  /**
   * Constructs a new <code>FullNameValidationResponse</code>.
   * Result of a full name validation operation
   * @alias module:model/FullNameValidationResponse
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>FullNameValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullNameValidationResponse} obj Optional instance to populate.
   * @return {module:model/FullNameValidationResponse} The populated <code>FullNameValidationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ValidationResult_FirstName')) {
        obj['ValidationResult_FirstName'] = ApiClient.convertToType(data['ValidationResult_FirstName'], 'String');
      }
      if (data.hasOwnProperty('ValidationResult_LastName')) {
        obj['ValidationResult_LastName'] = ApiClient.convertToType(data['ValidationResult_LastName'], 'String');
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('MiddleName')) {
        obj['MiddleName'] = ApiClient.convertToType(data['MiddleName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('NickName')) {
        obj['NickName'] = ApiClient.convertToType(data['NickName'], 'String');
      }
      if (data.hasOwnProperty('Suffix')) {
        obj['Suffix'] = ApiClient.convertToType(data['Suffix'], 'String');
      }
      if (data.hasOwnProperty('DisplayName')) {
        obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
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
   * @member {String} ValidationResult_FirstName
   */
  exports.prototype['ValidationResult_FirstName'] = undefined;
  /**
   * Possible values are: ValidLastName, ValidUnknownLastName, InvalidSpamInput, InvalidCharacters, InvalidEmpty
   * @member {String} ValidationResult_LastName
   */
  exports.prototype['ValidationResult_LastName'] = undefined;
  /**
   * The person's title (if supplied), e.g. \"Mr.\" or \"Ms.\"
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * The first name (given name)
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * The middle name(s); if there are multiple names they will be separated by spaces
   * @member {String} MiddleName
   */
  exports.prototype['MiddleName'] = undefined;
  /**
   * The last name (surname)
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * Nickname (if supplied)
   * @member {String} NickName
   */
  exports.prototype['NickName'] = undefined;
  /**
   * Suffix to the name, e.g. \"Jr.\" or \"Sr.\"
   * @member {String} Suffix
   */
  exports.prototype['Suffix'] = undefined;
  /**
   * The full display name of the name
   * @member {String} DisplayName
   */
  exports.prototype['DisplayName'] = undefined;



  return exports;
}));


