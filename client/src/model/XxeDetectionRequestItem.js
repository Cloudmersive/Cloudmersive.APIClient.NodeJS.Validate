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
    root.CloudmersiveValidateApiClient.XxeDetectionRequestItem = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XxeDetectionRequestItem model module.
   * @module model/XxeDetectionRequestItem
   * @version 1.4.2
   */

  /**
   * Constructs a new <code>XxeDetectionRequestItem</code>.
   * Individual item to detect for XXE
   * @alias module:model/XxeDetectionRequestItem
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>XxeDetectionRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XxeDetectionRequestItem} obj Optional instance to populate.
   * @return {module:model/XxeDetectionRequestItem} The populated <code>XxeDetectionRequestItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputText')) {
        obj['InputText'] = ApiClient.convertToType(data['InputText'], 'String');
      }
      if (data.hasOwnProperty('AllowInternetUrls')) {
        obj['AllowInternetUrls'] = ApiClient.convertToType(data['AllowInternetUrls'], 'Boolean');
      }
      if (data.hasOwnProperty('KnownSafeUrls')) {
        obj['KnownSafeUrls'] = ApiClient.convertToType(data['KnownSafeUrls'], ['String']);
      }
      if (data.hasOwnProperty('KnownUnsafeUrls')) {
        obj['KnownUnsafeUrls'] = ApiClient.convertToType(data['KnownUnsafeUrls'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Individual input text item to protect from XXE
   * @member {String} InputText
   */
  exports.prototype['InputText'] = undefined;
  /**
   * Optional: Set to true to allow Internet-based dependency URLs for DTDs and other XML External Entitites, set to false to block.  Default is false.
   * @member {Boolean} AllowInternetUrls
   */
  exports.prototype['AllowInternetUrls'] = undefined;
  /**
   * Optional: Comma separated list of fully-qualified URLs that will automatically be considered safe.
   * @member {Array.<String>} KnownSafeUrls
   */
  exports.prototype['KnownSafeUrls'] = undefined;
  /**
   * Optional: Comma separated list of fully-qualified URLs that will automatically be considered unsafe.
   * @member {Array.<String>} KnownUnsafeUrls
   */
  exports.prototype['KnownUnsafeUrls'] = undefined;



  return exports;
}));


