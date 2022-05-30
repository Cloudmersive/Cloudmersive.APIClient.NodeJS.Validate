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
    root.CloudmersiveValidateApiClient.DateTimeNaturalLanguageParseRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DateTimeNaturalLanguageParseRequest model module.
   * @module model/DateTimeNaturalLanguageParseRequest
   * @version 1.4.7
   */

  /**
   * Constructs a new <code>DateTimeNaturalLanguageParseRequest</code>.
   * Input parameter to a date time parsing request
   * @alias module:model/DateTimeNaturalLanguageParseRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DateTimeNaturalLanguageParseRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateTimeNaturalLanguageParseRequest} obj Optional instance to populate.
   * @return {module:model/DateTimeNaturalLanguageParseRequest} The populated <code>DateTimeNaturalLanguageParseRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RawDateTimeInput')) {
        obj['RawDateTimeInput'] = ApiClient.convertToType(data['RawDateTimeInput'], 'String');
      }
    }
    return obj;
  }

  /**
   * Raw string input of a natural language-formatted date and time for parsing
   * @member {String} RawDateTimeInput
   */
  exports.prototype['RawDateTimeInput'] = undefined;



  return exports;
}));


