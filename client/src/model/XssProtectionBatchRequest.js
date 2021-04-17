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
    define(['ApiClient', 'model/XssProtectionRequestItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XssProtectionRequestItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.XssProtectionBatchRequest = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.XssProtectionRequestItem);
  }
}(this, function(ApiClient, XssProtectionRequestItem) {
  'use strict';




  /**
   * The XssProtectionBatchRequest model module.
   * @module model/XssProtectionBatchRequest
   * @version 1.4.3
   */

  /**
   * Constructs a new <code>XssProtectionBatchRequest</code>.
   * Input to a batch XSS protection operation
   * @alias module:model/XssProtectionBatchRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>XssProtectionBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XssProtectionBatchRequest} obj Optional instance to populate.
   * @return {module:model/XssProtectionBatchRequest} The populated <code>XssProtectionBatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RequestItems')) {
        obj['RequestItems'] = ApiClient.convertToType(data['RequestItems'], [XssProtectionRequestItem]);
      }
    }
    return obj;
  }

  /**
   * Multiple items to protect for XSS
   * @member {Array.<module:model/XssProtectionRequestItem>} RequestItems
   */
  exports.prototype['RequestItems'] = undefined;



  return exports;
}));


