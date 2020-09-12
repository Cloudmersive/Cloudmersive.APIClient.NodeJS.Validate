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
    root.CloudmersiveValidateApiClient.ValidateStateResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidateStateResponse model module.
   * @module model/ValidateStateResponse
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ValidateStateResponse</code>.
   * Result of validating a state
   * @alias module:model/ValidateStateResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ValidateStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateStateResponse} obj Optional instance to populate.
   * @return {module:model/ValidateStateResponse} The populated <code>ValidateStateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidState')) {
        obj['ValidState'] = ApiClient.convertToType(data['ValidState'], 'Boolean');
      }
      if (data.hasOwnProperty('StateOrProvince')) {
        obj['StateOrProvince'] = ApiClient.convertToType(data['StateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the address is valid, false otherwise
   * @member {Boolean} ValidState
   */
  exports.prototype['ValidState'] = undefined;
  /**
   * If valid; State or province corresponding to the input state name, such as 'CA' or 'California'
   * @member {String} StateOrProvince
   */
  exports.prototype['StateOrProvince'] = undefined;
  /**
   * If the postal code is valid, the degrees latitude of the centroid of the state, null otherwise
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * If the postal code is valid, the degrees longitude of the centroid of the state, null otherwise
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


