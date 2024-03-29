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
    root.CloudmersiveValidateApiClient.FullEmailValidationResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FullEmailValidationResponse model module.
   * @module model/FullEmailValidationResponse
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>FullEmailValidationResponse</code>.
   * Full email addresss validation result
   * @alias module:model/FullEmailValidationResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>FullEmailValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullEmailValidationResponse} obj Optional instance to populate.
   * @return {module:model/FullEmailValidationResponse} The populated <code>FullEmailValidationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidAddress')) {
        obj['ValidAddress'] = ApiClient.convertToType(data['ValidAddress'], 'Boolean');
      }
      if (data.hasOwnProperty('MailServerUsedForValidation')) {
        obj['MailServerUsedForValidation'] = ApiClient.convertToType(data['MailServerUsedForValidation'], 'String');
      }
      if (data.hasOwnProperty('Valid_Syntax')) {
        obj['Valid_Syntax'] = ApiClient.convertToType(data['Valid_Syntax'], 'Boolean');
      }
      if (data.hasOwnProperty('Valid_Domain')) {
        obj['Valid_Domain'] = ApiClient.convertToType(data['Valid_Domain'], 'Boolean');
      }
      if (data.hasOwnProperty('Valid_SMTP')) {
        obj['Valid_SMTP'] = ApiClient.convertToType(data['Valid_SMTP'], 'Boolean');
      }
      if (data.hasOwnProperty('IsCatchallDomain')) {
        obj['IsCatchallDomain'] = ApiClient.convertToType(data['IsCatchallDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('Domain')) {
        obj['Domain'] = ApiClient.convertToType(data['Domain'], 'String');
      }
      if (data.hasOwnProperty('IsFreeEmailProvider')) {
        obj['IsFreeEmailProvider'] = ApiClient.convertToType(data['IsFreeEmailProvider'], 'Boolean');
      }
      if (data.hasOwnProperty('IsDisposable')) {
        obj['IsDisposable'] = ApiClient.convertToType(data['IsDisposable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * True if the email address is valid overall, false otherwise
   * @member {Boolean} ValidAddress
   */
  exports.prototype['ValidAddress'] = undefined;
  /**
   * Email server connected to for verification
   * @member {String} MailServerUsedForValidation
   */
  exports.prototype['MailServerUsedForValidation'] = undefined;
  /**
   * True if the syntax of the email address is valid, false otherwise.  This is one component of ValidAddress, but not the only one.
   * @member {Boolean} Valid_Syntax
   */
  exports.prototype['Valid_Syntax'] = undefined;
  /**
   * True if the domain name of the email address is valid, false otherwise.  This is one component of ValidAddress, but not the only one.
   * @member {Boolean} Valid_Domain
   */
  exports.prototype['Valid_Domain'] = undefined;
  /**
   * True if the email address was verified by the remote server, false otherwise.  This is one component of ValidAddress, but not the only one.
   * @member {Boolean} Valid_SMTP
   */
  exports.prototype['Valid_SMTP'] = undefined;
  /**
   * True if the domain is a catch-all domain name, false otherwise.  Catch-all domain names, while rare, always accept inbound email to ensure they do not lose any potentially useful emails.  Catch-all domain names can occassionally be configured to first accept and store all inbound email, but then later send a bounce email back to the sender after a delayed period of time.
   * @member {Boolean} IsCatchallDomain
   */
  exports.prototype['IsCatchallDomain'] = undefined;
  /**
   * Domain name of the email address
   * @member {String} Domain
   */
  exports.prototype['Domain'] = undefined;
  /**
   * True if the email domain name is a free provider (typically a free to sign up web email provider for consumers / personal use), false otherwise.
   * @member {Boolean} IsFreeEmailProvider
   */
  exports.prototype['IsFreeEmailProvider'] = undefined;
  /**
   * True if the email address is a disposable email address, false otherwise; these disposable providers are not typically used to receive email and so will have a low likelihood of opening mail sent there.
   * @member {Boolean} IsDisposable
   */
  exports.prototype['IsDisposable'] = undefined;



  return exports;
}));


