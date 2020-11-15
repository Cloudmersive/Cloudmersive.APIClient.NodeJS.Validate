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
    root.CloudmersiveValidateApiClient.PublicHolidayOccurrence = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PublicHolidayOccurrence model module.
   * @module model/PublicHolidayOccurrence
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>PublicHolidayOccurrence</code>.
   * Public holiday occurrence
   * @alias module:model/PublicHolidayOccurrence
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PublicHolidayOccurrence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicHolidayOccurrence} obj Optional instance to populate.
   * @return {module:model/PublicHolidayOccurrence} The populated <code>PublicHolidayOccurrence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EnglishName')) {
        obj['EnglishName'] = ApiClient.convertToType(data['EnglishName'], 'String');
      }
      if (data.hasOwnProperty('LocalName')) {
        obj['LocalName'] = ApiClient.convertToType(data['LocalName'], 'String');
      }
      if (data.hasOwnProperty('OccurrenceDate')) {
        obj['OccurrenceDate'] = ApiClient.convertToType(data['OccurrenceDate'], 'Date');
      }
      if (data.hasOwnProperty('HolidayType')) {
        obj['HolidayType'] = ApiClient.convertToType(data['HolidayType'], 'String');
      }
      if (data.hasOwnProperty('Nationwaide')) {
        obj['Nationwaide'] = ApiClient.convertToType(data['Nationwaide'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of the holiday in English
   * @member {String} EnglishName
   */
  exports.prototype['EnglishName'] = undefined;
  /**
   * Local name of the holiday
   * @member {String} LocalName
   */
  exports.prototype['LocalName'] = undefined;
  /**
   * Date of the holiday (start time)
   * @member {Date} OccurrenceDate
   */
  exports.prototype['OccurrenceDate'] = undefined;
  /**
   * Type of the holiday; possible values are: Public, Bank, School, Authorities, Optional, Observance
   * @member {String} HolidayType
   */
  exports.prototype['HolidayType'] = undefined;
  /**
   * True if the holiday is celebrated in all locales in the country, false otherwise
   * @member {Boolean} Nationwaide
   */
  exports.prototype['Nationwaide'] = undefined;



  return exports;
}));

