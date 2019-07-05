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
    root.CloudmersiveValidateApiClient.AddressVerifySyntaxOnlyResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressVerifySyntaxOnlyResponse model module.
   * @module model/AddressVerifySyntaxOnlyResponse
   * @version 1.1.5
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
    }
    return obj;
  }

  /**
   * True if the email address is syntactically valid, false if it is not
   * @member {Boolean} ValidAddress
   */
  exports.prototype['ValidAddress'] = undefined;



  return exports;
}));


