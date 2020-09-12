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
    root.CloudmersiveValidateApiClient.Timezone = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timezone model module.
   * @module model/Timezone
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>Timezone</code>.
   * IANA/Olsen time zone
   * @alias module:model/Timezone
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Timezone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timezone} obj Optional instance to populate.
   * @return {module:model/Timezone} The populated <code>Timezone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('BaseUTCOffset')) {
        obj['BaseUTCOffset'] = ApiClient.convertToType(data['BaseUTCOffset'], 'String');
      }
      if (data.hasOwnProperty('Now')) {
        obj['Now'] = ApiClient.convertToType(data['Now'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Name of the Time Zone
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * UTC offset for this time zone
   * @member {String} BaseUTCOffset
   */
  exports.prototype['BaseUTCOffset'] = undefined;
  /**
   * The current time (Now) in this time zone
   * @member {Date} Now
   */
  exports.prototype['Now'] = undefined;



  return exports;
}));


