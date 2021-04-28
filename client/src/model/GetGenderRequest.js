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
    root.CloudmersiveValidateApiClient.GetGenderRequest = factory(root.CloudmersiveValidateApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetGenderRequest model module.
   * @module model/GetGenderRequest
   * @version 1.4.5
   */

  /**
   * Constructs a new <code>GetGenderRequest</code>.
   * Request to get the gender from a first name
   * @alias module:model/GetGenderRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetGenderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetGenderRequest} obj Optional instance to populate.
   * @return {module:model/GetGenderRequest} The populated <code>GetGenderRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input first name (given name) to get the gender of
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * Optional; the country for this name, possible values are \"US\", \"LY\", \"NI\", \"TT\", \"MK\", \"KZ\", \"BO\", \"UG\", \"TZ\", \"CL\", \"SI\", \"MA\", \"RW\", \"VN\", \"AW\", \"CY\", \"BH\", \"SG\", \"ZA\", \"MU\", \"BR\", \"TN\", \"KH\", \"US\", \"TH\", \"TW\", \"UY\", \"DO\", \"CO\", \"UA\", \"QA\", \"BY\", \"SN\", \"SD\", \"FJ\", \"LB\", \"BE\", \"ML\", \"LV\", \"FR\", \"TM\", \"NG\", \"EC\", \"NO\", \"SL\", \"CR\", \"PA\", \"GE\", \"CH\", \"KR\", \"RS\", \"ZM\", \"FI\", \"BF\", \"MC\", \"AU\", \"GA\", \"LS\", \"RU\", \"IN\", \"SE\", \"LK\", \"BZ\", \"MX\", \"GH\", \"AF\", \"TJ\", \"BN\", \"DZ\", \"CM\", \"GR\", \"MD\", \"HN\", \"AT\", \"NZ\", \"SV\", \"GW\", \"NA\", \"AR\", \"MZ\", \"PK\", \"MN\", \"IQ\", \"BW\", \"VE\", \"PT\", \"BS\", \"AL\", \"TG\", \"ID\", \"ET\", \"CF\", \"JP\", \"BB\", \"PH\", \"CU\", \"BD\", \"AO\", \"SM\", \"LC\", \"ME\", \"RO\",  DANIL\"O\"\", \"ES\", \"EE\", \"IL\", \"ZW\", \"SY\", \"MW\", \"LU\", \"IR\", \"SC\", \"NL\", \"JO\", \"AM\", \"DE\", \"GL\", \"OM\", \"DK\", \"HR\", \"LI\", \"TD\", \"KM\", \"BA\", \"GM\", \"GD\", \"CA\", \"CZ\", \"MR\", \"ST\", \"IS\", \"LR\", \"IE\", \"VC\", \"AE\", \"KG\", \"DJ\", \"TR\", \"KE\", \"NE\", \"UZ\", \"CN\", \"GQ\", \"SK\", \"BJ\", \"MG\", \"BT\", \"EG\", \"PL\", \"IT\", \"SA\", \"MY\", \"CI\", \"AG\", \"AD\", \"KS\", \"HU\", \"CG\", \"KP\", \"DM\", \"GN\", \"GT\", \"NP\", \"JM\", \"LA\", \"GB\", \"BG\", \"HT\", \"PE\", \"AZ\", \"LT\", \"SZ\", \"PY\", \"MT\", \"VA\"
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;



  return exports;
}));


