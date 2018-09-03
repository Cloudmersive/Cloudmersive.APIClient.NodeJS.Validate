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
    root.CloudmersiveValidateApiClient.AddressGetServersResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressGetServersResponse model module.
   * @module model/AddressGetServersResponse
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>AddressGetServersResponse</code>.
   * Result of a partial email address validation
   * @alias module:model/AddressGetServersResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AddressGetServersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressGetServersResponse} obj Optional instance to populate.
   * @return {module:model/AddressGetServersResponse} The populated <code>AddressGetServersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Success')) {
        obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
      }
      if (data.hasOwnProperty('Servers')) {
        obj['Servers'] = ApiClient.convertToType(data['Servers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Success
   */
  exports.prototype['Success'] = undefined;
  /**
   * @member {Array.<String>} Servers
   */
  exports.prototype['Servers'] = undefined;



  return exports;
}));


