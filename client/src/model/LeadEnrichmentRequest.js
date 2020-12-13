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
    root.CloudmersiveValidateApiClient.LeadEnrichmentRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LeadEnrichmentRequest model module.
   * @module model/LeadEnrichmentRequest
   * @version 1.3.6
   */

  /**
   * Constructs a new <code>LeadEnrichmentRequest</code>.
   * Input lead contact; fill in known fields to extend them with matched field values
   * @alias module:model/LeadEnrichmentRequest
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>LeadEnrichmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeadEnrichmentRequest} obj Optional instance to populate.
   * @return {module:model/LeadEnrichmentRequest} The populated <code>LeadEnrichmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ContactBusinessEmail')) {
        obj['ContactBusinessEmail'] = ApiClient.convertToType(data['ContactBusinessEmail'], 'String');
      }
      if (data.hasOwnProperty('ContactFirstName')) {
        obj['ContactFirstName'] = ApiClient.convertToType(data['ContactFirstName'], 'String');
      }
      if (data.hasOwnProperty('ContactLastName')) {
        obj['ContactLastName'] = ApiClient.convertToType(data['ContactLastName'], 'String');
      }
      if (data.hasOwnProperty('CompanyName')) {
        obj['CompanyName'] = ApiClient.convertToType(data['CompanyName'], 'String');
      }
      if (data.hasOwnProperty('CompanyDomainName')) {
        obj['CompanyDomainName'] = ApiClient.convertToType(data['CompanyDomainName'], 'String');
      }
      if (data.hasOwnProperty('CompanyHouseNumber')) {
        obj['CompanyHouseNumber'] = ApiClient.convertToType(data['CompanyHouseNumber'], 'String');
      }
      if (data.hasOwnProperty('CompanyStreet')) {
        obj['CompanyStreet'] = ApiClient.convertToType(data['CompanyStreet'], 'String');
      }
      if (data.hasOwnProperty('CompanyCity')) {
        obj['CompanyCity'] = ApiClient.convertToType(data['CompanyCity'], 'String');
      }
      if (data.hasOwnProperty('CompanyStateOrProvince')) {
        obj['CompanyStateOrProvince'] = ApiClient.convertToType(data['CompanyStateOrProvince'], 'String');
      }
      if (data.hasOwnProperty('CompanyPostalCode')) {
        obj['CompanyPostalCode'] = ApiClient.convertToType(data['CompanyPostalCode'], 'String');
      }
      if (data.hasOwnProperty('CompanyCountry')) {
        obj['CompanyCountry'] = ApiClient.convertToType(data['CompanyCountry'], 'String');
      }
      if (data.hasOwnProperty('CompanyCountryCode')) {
        obj['CompanyCountryCode'] = ApiClient.convertToType(data['CompanyCountryCode'], 'String');
      }
      if (data.hasOwnProperty('CompanyTelephone')) {
        obj['CompanyTelephone'] = ApiClient.convertToType(data['CompanyTelephone'], 'String');
      }
      if (data.hasOwnProperty('CompanyVATNumber')) {
        obj['CompanyVATNumber'] = ApiClient.convertToType(data['CompanyVATNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * The person's business email address for the lead
   * @member {String} ContactBusinessEmail
   */
  exports.prototype['ContactBusinessEmail'] = undefined;
  /**
   * The person's first name for the lead
   * @member {String} ContactFirstName
   */
  exports.prototype['ContactFirstName'] = undefined;
  /**
   * The person's last name for the lead
   * @member {String} ContactLastName
   */
  exports.prototype['ContactLastName'] = undefined;
  /**
   * Name of the company for the lead
   * @member {String} CompanyName
   */
  exports.prototype['CompanyName'] = undefined;
  /**
   * Domain name / website for the lead
   * @member {String} CompanyDomainName
   */
  exports.prototype['CompanyDomainName'] = undefined;
  /**
   * House number of the address of the company for the lead
   * @member {String} CompanyHouseNumber
   */
  exports.prototype['CompanyHouseNumber'] = undefined;
  /**
   * Street name of the address of the company for the lead
   * @member {String} CompanyStreet
   */
  exports.prototype['CompanyStreet'] = undefined;
  /**
   * City of the address of the company for the lead
   * @member {String} CompanyCity
   */
  exports.prototype['CompanyCity'] = undefined;
  /**
   * State or Province of the address of the company for the lead
   * @member {String} CompanyStateOrProvince
   */
  exports.prototype['CompanyStateOrProvince'] = undefined;
  /**
   * Postal Code of the address of the company for the lead
   * @member {String} CompanyPostalCode
   */
  exports.prototype['CompanyPostalCode'] = undefined;
  /**
   * Country of the address of the company for the lead
   * @member {String} CompanyCountry
   */
  exports.prototype['CompanyCountry'] = undefined;
  /**
   * Country Code (2-letter ISO 3166-1) of the address of the company for the lead
   * @member {String} CompanyCountryCode
   */
  exports.prototype['CompanyCountryCode'] = undefined;
  /**
   * Telephone of the company office for the lead
   * @member {String} CompanyTelephone
   */
  exports.prototype['CompanyTelephone'] = undefined;
  /**
   * VAT number of the company for the lead
   * @member {String} CompanyVATNumber
   */
  exports.prototype['CompanyVATNumber'] = undefined;



  return exports;
}));


