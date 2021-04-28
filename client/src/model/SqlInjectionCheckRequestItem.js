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
    root.CloudmersiveValidateApiClient.SqlInjectionCheckRequestItem = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SqlInjectionCheckRequestItem model module.
   * @module model/SqlInjectionCheckRequestItem
   * @version 1.4.5
   */

  /**
   * Constructs a new <code>SqlInjectionCheckRequestItem</code>.
   * Individual item to protect for SQL Injection
   * @alias module:model/SqlInjectionCheckRequestItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SqlInjectionCheckRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SqlInjectionCheckRequestItem} obj Optional instance to populate.
   * @return {module:model/SqlInjectionCheckRequestItem} The populated <code>SqlInjectionCheckRequestItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputText')) {
        obj['InputText'] = ApiClient.convertToType(data['InputText'], 'String');
      }
    }
    return obj;
  }

  /**
   * Individual input text item to check for SQL Injection
   * @member {String} InputText
   */
  exports.prototype['InputText'] = undefined;



  return exports;
}));


