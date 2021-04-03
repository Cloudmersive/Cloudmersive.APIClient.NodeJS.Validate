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
    root.CloudmersiveValidateApiClient.LeadEnrichmentResponse = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LeadEnrichmentResponse model module.
   * @module model/LeadEnrichmentResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>LeadEnrichmentResponse</code>.
   * Result of the lead enrichment process
   * @alias module:model/LeadEnrichmentResponse
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>LeadEnrichmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeadEnrichmentResponse} obj Optional instance to populate.
   * @return {module:model/LeadEnrichmentResponse} The populated <code>LeadEnrichmentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('LeadType')) {
        obj['LeadType'] = ApiClient.convertToType(data['LeadType'], 'String');
      }
      if (data.hasOwnProperty('ContactBusinessEmail')) {
        obj['ContactBusinessEmail'] = ApiClient.convertToType(data['ContactBusinessEmail'], 'String');
      }
      if (data.hasOwnProperty('ContactFirstName')) {
        obj['ContactFirstName'] = ApiClient.convertToType(data['ContactFirstName'], 'String');
      }
      if (data.hasOwnProperty('ContactLastName')) {
        obj['ContactLastName'] = ApiClient.convertToType(data['ContactLastName'], 'String');
      }
      if (data.hasOwnProperty('ContactGender')) {
        obj['ContactGender'] = ApiClient.convertToType(data['ContactGender'], 'String');
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
      if (data.hasOwnProperty('EmployeeCount')) {
        obj['EmployeeCount'] = ApiClient.convertToType(data['EmployeeCount'], 'Number');
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
   * The type of the lead; possible types are Junk (a single individual using a disposable/throwaway email address); Individual (a single individual, typically a consumer, not purchasing on behalf of a business); SmallBusiness (a small business, typically with fewer than 100 employees); MediumBusiness (a medium business, larger than 100 employees but fewer than 1000 employees); Enterprise (a large business with greater than 1000 employees); Business (a business customer of unknown size)
   * @member {String} LeadType
   */
  exports.prototype['LeadType'] = undefined;
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
   * Gender for contact name; possible values are Male, Female, and Neutral (can be applied to Male or Female).  Requires ContactFirstName.
   * @member {String} ContactGender
   */
  exports.prototype['ContactGender'] = undefined;
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
   * Country Name of the address of the company for the lead
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
  /**
   * Count of employees at the company (estimated), if available
   * @member {Number} EmployeeCount
   */
  exports.prototype['EmployeeCount'] = undefined;



  return exports;
}));


