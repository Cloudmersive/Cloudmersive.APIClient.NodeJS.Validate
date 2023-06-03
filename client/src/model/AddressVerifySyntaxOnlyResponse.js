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
    root.CloudmersiveValidateApiClient.AddressVerifySyntaxOnlyResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressVerifySyntaxOnlyResponse model module.
   * @module model/AddressVerifySyntaxOnlyResponse
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>AddressVerifySyntaxOnlyResponse</code>.
   * Syntactic validity of email address
   * @alias module:model/AddressVerifySyntaxOnlyResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AddressVerifySyntaxOnlyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressVerifySyntaxOnlyResponse} obj Optional instance to populate.
   * @return {module:model/AddressVerifySyntaxOnlyResponse} The populated <code>AddressVerifySyntaxOnlyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidAddress')) {
        obj['ValidAddress'] = ApiClient.convertToType(data['ValidAddress'], 'Boolean');
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
   * True if the email address is syntactically valid, false if it is not
   * @member {Boolean} ValidAddress
   */
  exports.prototype['ValidAddress'] = undefined;
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


