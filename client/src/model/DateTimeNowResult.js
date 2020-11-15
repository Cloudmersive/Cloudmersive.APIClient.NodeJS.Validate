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
    root.CloudmersiveValidateApiClient.DateTimeNowResult = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DateTimeNowResult model module.
   * @module model/DateTimeNowResult
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>DateTimeNowResult</code>.
   * Current date and time response
   * @alias module:model/DateTimeNowResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DateTimeNowResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateTimeNowResult} obj Optional instance to populate.
   * @return {module:model/DateTimeNowResult} The populated <code>DateTimeNowResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Now')) {
        obj['Now'] = ApiClient.convertToType(data['Now'], 'Date');
      }
      if (data.hasOwnProperty('NowGmt')) {
        obj['NowGmt'] = ApiClient.convertToType(data['NowGmt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Current date, time, and time zone in standard JSON date format
   * @member {Date} Now
   */
  exports.prototype['Now'] = undefined;
  /**
   * Current GMT-time-zone date, time, and time zone in standard JSON date format
   * @member {Date} NowGmt
   */
  exports.prototype['NowGmt'] = undefined;



  return exports;
}));


