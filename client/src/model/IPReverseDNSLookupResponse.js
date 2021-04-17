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
    root.CloudmersiveValidateApiClient.IPReverseDNSLookupResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IPReverseDNSLookupResponse model module.
   * @module model/IPReverseDNSLookupResponse
   * @version 1.4.3
   */

  /**
   * Constructs a new <code>IPReverseDNSLookupResponse</code>.
   * Result of performing a Reverse Domain (DNS) lookup on an IP address
   * @alias module:model/IPReverseDNSLookupResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>IPReverseDNSLookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IPReverseDNSLookupResponse} obj Optional instance to populate.
   * @return {module:model/IPReverseDNSLookupResponse} The populated <code>IPReverseDNSLookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('HostName')) {
        obj['HostName'] = ApiClient.convertToType(data['HostName'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if a domain was found, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Host name (fully-qualified) associated with the IP address, if any
   * @member {String} HostName
   */
  exports.prototype['HostName'] = undefined;



  return exports;
}));


