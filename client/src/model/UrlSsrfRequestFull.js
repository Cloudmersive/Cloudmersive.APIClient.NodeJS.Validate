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
    root.CloudmersiveValidateApiClient.UrlSsrfRequestFull = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UrlSsrfRequestFull model module.
   * @module model/UrlSsrfRequestFull
   * @version 1.4.7
   */

  /**
   * Constructs a new <code>UrlSsrfRequestFull</code>.
   * Request to determine if a URL is an SSRF threat check
   * @alias module:model/UrlSsrfRequestFull
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UrlSsrfRequestFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlSsrfRequestFull} obj Optional instance to populate.
   * @return {module:model/UrlSsrfRequestFull} The populated <code>UrlSsrfRequestFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('BlockedDomains')) {
        obj['BlockedDomains'] = ApiClient.convertToType(data['BlockedDomains'], ['String']);
      }
    }
    return obj;
  }

  /**
   * URL to validate
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;
  /**
   * Top level domains that you do not want to allow access to, e.g. mydomain.com - will block all subdomains as well
   * @member {Array.<String>} BlockedDomains
   */
  exports.prototype['BlockedDomains'] = undefined;



  return exports;
}));


