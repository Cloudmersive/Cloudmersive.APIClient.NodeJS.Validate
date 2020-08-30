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
    root.CloudmersiveValidateApiClient.UserAgentValidateResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserAgentValidateResponse model module.
   * @module model/UserAgentValidateResponse
   * @version 1.2.7
   */

  /**
   * Constructs a new <code>UserAgentValidateResponse</code>.
   * The result of a User-Agent validation request
   * @alias module:model/UserAgentValidateResponse
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>UserAgentValidateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAgentValidateResponse} obj Optional instance to populate.
   * @return {module:model/UserAgentValidateResponse} The populated <code>UserAgentValidateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('IsBot')) {
        obj['IsBot'] = ApiClient.convertToType(data['IsBot'], 'Boolean');
      }
      if (data.hasOwnProperty('BotName')) {
        obj['BotName'] = ApiClient.convertToType(data['BotName'], 'String');
      }
      if (data.hasOwnProperty('BotURL')) {
        obj['BotURL'] = ApiClient.convertToType(data['BotURL'], 'String');
      }
      if (data.hasOwnProperty('OperatingSystem')) {
        obj['OperatingSystem'] = ApiClient.convertToType(data['OperatingSystem'], 'String');
      }
      if (data.hasOwnProperty('OperatingSystemCPUPlatform')) {
        obj['OperatingSystemCPUPlatform'] = ApiClient.convertToType(data['OperatingSystemCPUPlatform'], 'String');
      }
      if (data.hasOwnProperty('OperatingSystemVersion')) {
        obj['OperatingSystemVersion'] = ApiClient.convertToType(data['OperatingSystemVersion'], 'String');
      }
      if (data.hasOwnProperty('DeviceType')) {
        obj['DeviceType'] = ApiClient.convertToType(data['DeviceType'], 'String');
      }
      if (data.hasOwnProperty('DeviceBrandName')) {
        obj['DeviceBrandName'] = ApiClient.convertToType(data['DeviceBrandName'], 'String');
      }
      if (data.hasOwnProperty('DeviceModel')) {
        obj['DeviceModel'] = ApiClient.convertToType(data['DeviceModel'], 'String');
      }
      if (data.hasOwnProperty('BrowserName')) {
        obj['BrowserName'] = ApiClient.convertToType(data['BrowserName'], 'String');
      }
      if (data.hasOwnProperty('BrowserVersion')) {
        obj['BrowserVersion'] = ApiClient.convertToType(data['BrowserVersion'], 'String');
      }
      if (data.hasOwnProperty('BrowserEngineName')) {
        obj['BrowserEngineName'] = ApiClient.convertToType(data['BrowserEngineName'], 'String');
      }
      if (data.hasOwnProperty('BrowserEngineVersion')) {
        obj['BrowserEngineVersion'] = ApiClient.convertToType(data['BrowserEngineVersion'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * True if the request is a known robot, false otherwise
   * @member {Boolean} IsBot
   */
  exports.prototype['IsBot'] = undefined;
  /**
   * Optional; name of the robot if the request was from a known robot, otherwise null
   * @member {String} BotName
   */
  exports.prototype['BotName'] = undefined;
  /**
   * Optional; if available, the URL to the robot
   * @member {String} BotURL
   */
  exports.prototype['BotURL'] = undefined;
  /**
   * Operating System of the User-Agent (e.g. Windows)
   * @member {String} OperatingSystem
   */
  exports.prototype['OperatingSystem'] = undefined;
  /**
   * The CPU platform of the User-Agent (e.g. x64)
   * @member {String} OperatingSystemCPUPlatform
   */
  exports.prototype['OperatingSystemCPUPlatform'] = undefined;
  /**
   * The version of the operating system of the User-Agent (e.g. \"10\" for Windows 10)
   * @member {String} OperatingSystemVersion
   */
  exports.prototype['OperatingSystemVersion'] = undefined;
  /**
   * Device type of the User-Agent; possible values are \"DESKTOP\", \"SMARTPHONE\", \"TABLET\"
   * @member {String} DeviceType
   */
  exports.prototype['DeviceType'] = undefined;
  /**
   * Brand name of the User-Agent
   * @member {String} DeviceBrandName
   */
  exports.prototype['DeviceBrandName'] = undefined;
  /**
   * Model name or number of the User-Agent
   * @member {String} DeviceModel
   */
  exports.prototype['DeviceModel'] = undefined;
  /**
   * Name of the Browser
   * @member {String} BrowserName
   */
  exports.prototype['BrowserName'] = undefined;
  /**
   * Version of the Browser
   * @member {String} BrowserVersion
   */
  exports.prototype['BrowserVersion'] = undefined;
  /**
   * Name of the Browser Engine
   * @member {String} BrowserEngineName
   */
  exports.prototype['BrowserEngineName'] = undefined;
  /**
   * Version of the Browser Engine
   * @member {String} BrowserEngineVersion
   */
  exports.prototype['BrowserEngineVersion'] = undefined;



  return exports;
}));


