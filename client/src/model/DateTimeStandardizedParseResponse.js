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
    root.CloudmersiveValidateApiClient.DateTimeStandardizedParseResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DateTimeStandardizedParseResponse model module.
   * @module model/DateTimeStandardizedParseResponse
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>DateTimeStandardizedParseResponse</code>.
   * Result of performing a date time parsing
   * @alias module:model/DateTimeStandardizedParseResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DateTimeStandardizedParseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateTimeStandardizedParseResponse} obj Optional instance to populate.
   * @return {module:model/DateTimeStandardizedParseResponse} The populated <code>DateTimeStandardizedParseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ParsedDateResult')) {
        obj['ParsedDateResult'] = ApiClient.convertToType(data['ParsedDateResult'], 'Date');
      }
      if (data.hasOwnProperty('Year')) {
        obj['Year'] = ApiClient.convertToType(data['Year'], 'Number');
      }
      if (data.hasOwnProperty('Month')) {
        obj['Month'] = ApiClient.convertToType(data['Month'], 'Number');
      }
      if (data.hasOwnProperty('Day')) {
        obj['Day'] = ApiClient.convertToType(data['Day'], 'Number');
      }
      if (data.hasOwnProperty('Hour')) {
        obj['Hour'] = ApiClient.convertToType(data['Hour'], 'Number');
      }
      if (data.hasOwnProperty('Minute')) {
        obj['Minute'] = ApiClient.convertToType(data['Minute'], 'Number');
      }
      if (data.hasOwnProperty('Second')) {
        obj['Second'] = ApiClient.convertToType(data['Second'], 'Number');
      }
      if (data.hasOwnProperty('DayOfWeek')) {
        obj['DayOfWeek'] = ApiClient.convertToType(data['DayOfWeek'], 'String');
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
   * Result of performing a date time parsing
   * @member {Date} ParsedDateResult
   */
  exports.prototype['ParsedDateResult'] = undefined;
  /**
   * Year of the parsed date time result
   * @member {Number} Year
   */
  exports.prototype['Year'] = undefined;
  /**
   * Month of the parsed date time result
   * @member {Number} Month
   */
  exports.prototype['Month'] = undefined;
  /**
   * Day of the parsed date time result
   * @member {Number} Day
   */
  exports.prototype['Day'] = undefined;
  /**
   * Hour of the parsed date time result (24-hour)
   * @member {Number} Hour
   */
  exports.prototype['Hour'] = undefined;
  /**
   * Minute of the parsed date time result
   * @member {Number} Minute
   */
  exports.prototype['Minute'] = undefined;
  /**
   * Second of the parsed date time result
   * @member {Number} Second
   */
  exports.prototype['Second'] = undefined;
  /**
   * Day of week
   * @member {String} DayOfWeek
   */
  exports.prototype['DayOfWeek'] = undefined;



  return exports;
}));


