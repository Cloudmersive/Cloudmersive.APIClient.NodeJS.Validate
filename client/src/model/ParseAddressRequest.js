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
    root.CloudmersiveValidateApiClient.ParseAddressRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ParseAddressRequest model module.
   * @module model/ParseAddressRequest
   * @version 1.4.8
   */

  /**
   * Constructs a new <code>ParseAddressRequest</code>.
   * Request to parse an address formatted as a string/free text into a structured address
   * @alias module:model/ParseAddressRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ParseAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParseAddressRequest} obj Optional instance to populate.
   * @return {module:model/ParseAddressRequest} The populated <code>ParseAddressRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AddressString')) {
        obj['AddressString'] = ApiClient.convertToType(data['AddressString'], 'String');
      }
      if (data.hasOwnProperty('CapitalizationMode')) {
        obj['CapitalizationMode'] = ApiClient.convertToType(data['CapitalizationMode'], 'String');
      }
    }
    return obj;
  }

  /**
   * A mailing address or street address formatted as a single text string; this will be parsed into its components
   * @member {String} AddressString
   */
  exports.prototype['AddressString'] = undefined;
  /**
   * Optional; indicates how the parsed output should be capitalized; default is Title Case; possible values are: \"Uppercase\" will set the capitalization to UPPER CASE; \"Lowercase\" will set the capitalization to lower case; \"Titlecase\" will set the capitalization to Title Case; and \"Originalcase\" will preserve the original casing as much as possible
   * @member {String} CapitalizationMode
   */
  exports.prototype['CapitalizationMode'] = undefined;



  return exports;
}));


