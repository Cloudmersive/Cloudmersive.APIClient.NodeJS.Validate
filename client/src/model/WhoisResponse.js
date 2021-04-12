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
    root.CloudmersiveValidateApiClient.WhoisResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WhoisResponse model module.
   * @module model/WhoisResponse
   * @version 1.4.2
   */

  /**
   * Constructs a new <code>WhoisResponse</code>.
   * Result of a WHOIS operation
   * @alias module:model/WhoisResponse
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>WhoisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhoisResponse} obj Optional instance to populate.
   * @return {module:model/WhoisResponse} The populated <code>WhoisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidDomain')) {
        obj['ValidDomain'] = ApiClient.convertToType(data['ValidDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('RegistrantName')) {
        obj['RegistrantName'] = ApiClient.convertToType(data['RegistrantName'], 'String');
      }
      if (data.hasOwnProperty('RegistrantOrganization')) {
        obj['RegistrantOrganization'] = ApiClient.convertToType(data['RegistrantOrganization'], 'String');
      }
      if (data.hasOwnProperty('RegistrantEmail')) {
        obj['RegistrantEmail'] = ApiClient.convertToType(data['RegistrantEmail'], 'String');
      }
      if (data.hasOwnProperty('RegistrantStreetNumber')) {
        obj['RegistrantStreetNumber'] = ApiClient.convertToType(data['RegistrantStreetNumber'], 'String');
      }
      if (data.hasOwnProperty('RegistrantStreet')) {
        obj['RegistrantStreet'] = ApiClient.convertToType(data['RegistrantStreet'], 'String');
      }
      if (data.hasOwnProperty('RegistrantCity')) {
        obj['RegistrantCity'] = ApiClient.convertToType(data['RegistrantCity'], 'String');
      }
      if (data.hasOwnProperty('RegistrantStateOrProvince')) {
        obj['RegistrantStateOrProvince'] = ApiClient.convertToType(data['RegistrantStateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('RegistrantPostalCode')) {
        obj['RegistrantPostalCode'] = ApiClient.convertToType(data['RegistrantPostalCode'], 'String');
      }
      if (data.hasOwnProperty('RegistrantCountry')) {
        obj['RegistrantCountry'] = ApiClient.convertToType(data['RegistrantCountry'], 'String');
      }
      if (data.hasOwnProperty('RegistrantRawAddress')) {
        obj['RegistrantRawAddress'] = ApiClient.convertToType(data['RegistrantRawAddress'], 'String');
      }
      if (data.hasOwnProperty('RegistrantTelephone')) {
        obj['RegistrantTelephone'] = ApiClient.convertToType(data['RegistrantTelephone'], 'String');
      }
      if (data.hasOwnProperty('WhoisServer')) {
        obj['WhoisServer'] = ApiClient.convertToType(data['WhoisServer'], 'String');
      }
      if (data.hasOwnProperty('RawTextRecord')) {
        obj['RawTextRecord'] = ApiClient.convertToType(data['RawTextRecord'], 'String');
      }
      if (data.hasOwnProperty('CreatedDt')) {
        obj['CreatedDt'] = ApiClient.convertToType(data['CreatedDt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * True if the domain is valid, false if it is not
   * @member {Boolean} ValidDomain
   */
  exports.prototype['ValidDomain'] = undefined;
  /**
   * Name of the domain registrant
   * @member {String} RegistrantName
   */
  exports.prototype['RegistrantName'] = undefined;
  /**
   * Organization name of the domain registrant
   * @member {String} RegistrantOrganization
   */
  exports.prototype['RegistrantOrganization'] = undefined;
  /**
   * Email address of the domain registrant
   * @member {String} RegistrantEmail
   */
  exports.prototype['RegistrantEmail'] = undefined;
  /**
   * Street number of the address of the domain registrant, if available
   * @member {String} RegistrantStreetNumber
   */
  exports.prototype['RegistrantStreetNumber'] = undefined;
  /**
   * Street name of the address of the domain registrant, if available
   * @member {String} RegistrantStreet
   */
  exports.prototype['RegistrantStreet'] = undefined;
  /**
   * City of the domain registrant, if available
   * @member {String} RegistrantCity
   */
  exports.prototype['RegistrantCity'] = undefined;
  /**
   * State or Province of the address of the domain registrant, if available
   * @member {String} RegistrantStateOrProvince
   */
  exports.prototype['RegistrantStateOrProvince'] = undefined;
  /**
   * Postal code of the address of the domain registrant, if available
   * @member {String} RegistrantPostalCode
   */
  exports.prototype['RegistrantPostalCode'] = undefined;
  /**
   * Country of the address of the domain registrant, if available
   * @member {String} RegistrantCountry
   */
  exports.prototype['RegistrantCountry'] = undefined;
  /**
   * Raw address string of the domain registrant, if available
   * @member {String} RegistrantRawAddress
   */
  exports.prototype['RegistrantRawAddress'] = undefined;
  /**
   * Telephone number of the address of the domain registrant
   * @member {String} RegistrantTelephone
   */
  exports.prototype['RegistrantTelephone'] = undefined;
  /**
   * Server used to lookup WHOIS information (may change based on lookup).
   * @member {String} WhoisServer
   */
  exports.prototype['WhoisServer'] = undefined;
  /**
   * WHOIS raw text record
   * @member {String} RawTextRecord
   */
  exports.prototype['RawTextRecord'] = undefined;
  /**
   * Creation date for the record
   * @member {Date} CreatedDt
   */
  exports.prototype['CreatedDt'] = undefined;



  return exports;
}));


