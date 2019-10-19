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
    root.CloudmersiveValidateApiClient.WhoisResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WhoisResponse model module.
   * @module model/WhoisResponse
   * @version 1.1.9
   */

  /**
   * Constructs a new <code>WhoisResponse</code>.
   * Result of a WHOIS operation
   * @alias module:model/WhoisResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WhoisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhoisResponse} obj Optional instance to populate.
   * @return {module:model/WhoisResponse} The populated <code>WhoisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidDomain')) {
        obj['ValidDomain'] = ApiClient.convertToType(data['ValidDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('WhoisServer')) {
        obj['WhoisServer'] = ApiClient.convertToType(data['WhoisServer'], 'String');
      }
      if (data.hasOwnProperty('RawTextRecord')) {
        obj['RawTextRecord'] = ApiClient.convertToType(data['RawTextRecord'], 'String');
      }
      if (data.hasOwnProperty('CreatedDt')) {
        obj['CreatedDt'] = ApiClient.convertToType(data['CreatedDt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * True if the domain is valid, false if it is not
   * @member {Boolean} ValidDomain
   */
  exports.prototype['ValidDomain'] = undefined;
  /**
   * Server used to lookup WHOIS information (may change based on lookup).
   * @member {String} WhoisServer
   */
  exports.prototype['WhoisServer'] = undefined;
  /**
   * WHOIS raw text record
   * @member {String} RawTextRecord
   */
  exports.prototype['RawTextRecord'] = undefined;
  /**
   * Creation date for the record
   * @member {Date} CreatedDt
   */
  exports.prototype['CreatedDt'] = undefined;



  return exports;
}));


