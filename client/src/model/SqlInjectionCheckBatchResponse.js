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
    define(['ApiClient', 'model/SqlInjectionDetectionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SqlInjectionDetectionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.SqlInjectionCheckBatchResponse = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.SqlInjectionDetectionResult);
  }
}(this, function(ApiClient, SqlInjectionDetectionResult) {
  'use strict';




  /**
   * The SqlInjectionCheckBatchResponse model module.
   * @module model/SqlInjectionCheckBatchResponse
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>SqlInjectionCheckBatchResponse</code>.
   * Result of performing a batch XSS protection operation
   * @alias module:model/SqlInjectionCheckBatchResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SqlInjectionCheckBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SqlInjectionCheckBatchResponse} obj Optional instance to populate.
   * @return {module:model/SqlInjectionCheckBatchResponse} The populated <code>SqlInjectionCheckBatchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultItems')) {
        obj['ResultItems'] = ApiClient.convertToType(data['ResultItems'], [SqlInjectionDetectionResult]);
      }
    }
    return obj;
  }

  /**
   * Results from performing a batch SQL Injection detection operation; order is preserved from input data
   * @member {Array.<module:model/SqlInjectionDetectionResult>} ResultItems
   */
  exports.prototype['ResultItems'] = undefined;



  return exports;
}));


