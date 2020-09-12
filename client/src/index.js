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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressGetServersResponse', 'model/AddressVerifySyntaxOnlyResponse', 'model/CheckResponse', 'model/CountryDetails', 'model/CountryListResult', 'model/FirstNameValidationRequest', 'model/FirstNameValidationResponse', 'model/FullEmailValidationResponse', 'model/FullNameValidationRequest', 'model/FullNameValidationResponse', 'model/GeolocateResponse', 'model/GetGenderRequest', 'model/GetGenderResponse', 'model/GetTimezonesRequest', 'model/GetTimezonesResponse', 'model/IPThreatResponse', 'model/LastNameValidationRequest', 'model/LastNameValidationResponse', 'model/LeadEnrichmentRequest', 'model/LeadEnrichmentResponse', 'model/ParseAddressRequest', 'model/ParseAddressResponse', 'model/PhoneNumberValidateRequest', 'model/PhoneNumberValidationResponse', 'model/Timezone', 'model/TorNodeResponse', 'model/UserAgentValidateRequest', 'model/UserAgentValidateResponse', 'model/ValidateAddressRequest', 'model/ValidateAddressResponse', 'model/ValidateCityRequest', 'model/ValidateCityResponse', 'model/ValidateCountryRequest', 'model/ValidateCountryResponse', 'model/ValidateIdentifierRequest', 'model/ValidateIdentifierResponse', 'model/ValidatePostalCodeRequest', 'model/ValidatePostalCodeResponse', 'model/ValidateStateRequest', 'model/ValidateStateResponse', 'model/ValidateUrlRequestFull', 'model/ValidateUrlRequestSyntaxOnly', 'model/ValidateUrlResponseFull', 'model/ValidateUrlResponseSyntaxOnly', 'model/VatLookupRequest', 'model/VatLookupResponse', 'model/WhoisResponse', 'api/AddressApi', 'api/DomainApi', 'api/EmailApi', 'api/IPAddressApi', 'api/LeadEnrichmentApi', 'api/NameApi', 'api/PhoneNumberApi', 'api/UserAgentApi', 'api/VatApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddressGetServersResponse'), require('./model/AddressVerifySyntaxOnlyResponse'), require('./model/CheckResponse'), require('./model/CountryDetails'), require('./model/CountryListResult'), require('./model/FirstNameValidationRequest'), require('./model/FirstNameValidationResponse'), require('./model/FullEmailValidationResponse'), require('./model/FullNameValidationRequest'), require('./model/FullNameValidationResponse'), require('./model/GeolocateResponse'), require('./model/GetGenderRequest'), require('./model/GetGenderResponse'), require('./model/GetTimezonesRequest'), require('./model/GetTimezonesResponse'), require('./model/IPThreatResponse'), require('./model/LastNameValidationRequest'), require('./model/LastNameValidationResponse'), require('./model/LeadEnrichmentRequest'), require('./model/LeadEnrichmentResponse'), require('./model/ParseAddressRequest'), require('./model/ParseAddressResponse'), require('./model/PhoneNumberValidateRequest'), require('./model/PhoneNumberValidationResponse'), require('./model/Timezone'), require('./model/TorNodeResponse'), require('./model/UserAgentValidateRequest'), require('./model/UserAgentValidateResponse'), require('./model/ValidateAddressRequest'), require('./model/ValidateAddressResponse'), require('./model/ValidateCityRequest'), require('./model/ValidateCityResponse'), require('./model/ValidateCountryRequest'), require('./model/ValidateCountryResponse'), require('./model/ValidateIdentifierRequest'), require('./model/ValidateIdentifierResponse'), require('./model/ValidatePostalCodeRequest'), require('./model/ValidatePostalCodeResponse'), require('./model/ValidateStateRequest'), require('./model/ValidateStateResponse'), require('./model/ValidateUrlRequestFull'), require('./model/ValidateUrlRequestSyntaxOnly'), require('./model/ValidateUrlResponseFull'), require('./model/ValidateUrlResponseSyntaxOnly'), require('./model/VatLookupRequest'), require('./model/VatLookupResponse'), require('./model/WhoisResponse'), require('./api/AddressApi'), require('./api/DomainApi'), require('./api/EmailApi'), require('./api/IPAddressApi'), require('./api/LeadEnrichmentApi'), require('./api/NameApi'), require('./api/PhoneNumberApi'), require('./api/UserAgentApi'), require('./api/VatApi'));
  }
}(function(ApiClient, AddressGetServersResponse, AddressVerifySyntaxOnlyResponse, CheckResponse, CountryDetails, CountryListResult, FirstNameValidationRequest, FirstNameValidationResponse, FullEmailValidationResponse, FullNameValidationRequest, FullNameValidationResponse, GeolocateResponse, GetGenderRequest, GetGenderResponse, GetTimezonesRequest, GetTimezonesResponse, IPThreatResponse, LastNameValidationRequest, LastNameValidationResponse, LeadEnrichmentRequest, LeadEnrichmentResponse, ParseAddressRequest, ParseAddressResponse, PhoneNumberValidateRequest, PhoneNumberValidationResponse, Timezone, TorNodeResponse, UserAgentValidateRequest, UserAgentValidateResponse, ValidateAddressRequest, ValidateAddressResponse, ValidateCityRequest, ValidateCityResponse, ValidateCountryRequest, ValidateCountryResponse, ValidateIdentifierRequest, ValidateIdentifierResponse, ValidatePostalCodeRequest, ValidatePostalCodeResponse, ValidateStateRequest, ValidateStateResponse, ValidateUrlRequestFull, ValidateUrlRequestSyntaxOnly, ValidateUrlResponseFull, ValidateUrlResponseSyntaxOnly, VatLookupRequest, VatLookupResponse, WhoisResponse, AddressApi, DomainApi, EmailApi, IPAddressApi, LeadEnrichmentApi, NameApi, PhoneNumberApi, UserAgentApi, VatApi) {
  'use strict';

  /**
   * The_validation_APIs_help_you_validate_data__Check_if_an_E_mail_address_is_real__Check_if_a_domain_is_real__Check_up_on_an_IP_address_and_even_where_it_is_located__All_this_and_much_more_is_available_in_the_validation_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveValidateApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveValidateApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveValidateApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveValidateApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveValidateApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.9
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddressGetServersResponse model constructor.
     * @property {module:model/AddressGetServersResponse}
     */
    AddressGetServersResponse: AddressGetServersResponse,
    /**
     * The AddressVerifySyntaxOnlyResponse model constructor.
     * @property {module:model/AddressVerifySyntaxOnlyResponse}
     */
    AddressVerifySyntaxOnlyResponse: AddressVerifySyntaxOnlyResponse,
    /**
     * The CheckResponse model constructor.
     * @property {module:model/CheckResponse}
     */
    CheckResponse: CheckResponse,
    /**
     * The CountryDetails model constructor.
     * @property {module:model/CountryDetails}
     */
    CountryDetails: CountryDetails,
    /**
     * The CountryListResult model constructor.
     * @property {module:model/CountryListResult}
     */
    CountryListResult: CountryListResult,
    /**
     * The FirstNameValidationRequest model constructor.
     * @property {module:model/FirstNameValidationRequest}
     */
    FirstNameValidationRequest: FirstNameValidationRequest,
    /**
     * The FirstNameValidationResponse model constructor.
     * @property {module:model/FirstNameValidationResponse}
     */
    FirstNameValidationResponse: FirstNameValidationResponse,
    /**
     * The FullEmailValidationResponse model constructor.
     * @property {module:model/FullEmailValidationResponse}
     */
    FullEmailValidationResponse: FullEmailValidationResponse,
    /**
     * The FullNameValidationRequest model constructor.
     * @property {module:model/FullNameValidationRequest}
     */
    FullNameValidationRequest: FullNameValidationRequest,
    /**
     * The FullNameValidationResponse model constructor.
     * @property {module:model/FullNameValidationResponse}
     */
    FullNameValidationResponse: FullNameValidationResponse,
    /**
     * The GeolocateResponse model constructor.
     * @property {module:model/GeolocateResponse}
     */
    GeolocateResponse: GeolocateResponse,
    /**
     * The GetGenderRequest model constructor.
     * @property {module:model/GetGenderRequest}
     */
    GetGenderRequest: GetGenderRequest,
    /**
     * The GetGenderResponse model constructor.
     * @property {module:model/GetGenderResponse}
     */
    GetGenderResponse: GetGenderResponse,
    /**
     * The GetTimezonesRequest model constructor.
     * @property {module:model/GetTimezonesRequest}
     */
    GetTimezonesRequest: GetTimezonesRequest,
    /**
     * The GetTimezonesResponse model constructor.
     * @property {module:model/GetTimezonesResponse}
     */
    GetTimezonesResponse: GetTimezonesResponse,
    /**
     * The IPThreatResponse model constructor.
     * @property {module:model/IPThreatResponse}
     */
    IPThreatResponse: IPThreatResponse,
    /**
     * The LastNameValidationRequest model constructor.
     * @property {module:model/LastNameValidationRequest}
     */
    LastNameValidationRequest: LastNameValidationRequest,
    /**
     * The LastNameValidationResponse model constructor.
     * @property {module:model/LastNameValidationResponse}
     */
    LastNameValidationResponse: LastNameValidationResponse,
    /**
     * The LeadEnrichmentRequest model constructor.
     * @property {module:model/LeadEnrichmentRequest}
     */
    LeadEnrichmentRequest: LeadEnrichmentRequest,
    /**
     * The LeadEnrichmentResponse model constructor.
     * @property {module:model/LeadEnrichmentResponse}
     */
    LeadEnrichmentResponse: LeadEnrichmentResponse,
    /**
     * The ParseAddressRequest model constructor.
     * @property {module:model/ParseAddressRequest}
     */
    ParseAddressRequest: ParseAddressRequest,
    /**
     * The ParseAddressResponse model constructor.
     * @property {module:model/ParseAddressResponse}
     */
    ParseAddressResponse: ParseAddressResponse,
    /**
     * The PhoneNumberValidateRequest model constructor.
     * @property {module:model/PhoneNumberValidateRequest}
     */
    PhoneNumberValidateRequest: PhoneNumberValidateRequest,
    /**
     * The PhoneNumberValidationResponse model constructor.
     * @property {module:model/PhoneNumberValidationResponse}
     */
    PhoneNumberValidationResponse: PhoneNumberValidationResponse,
    /**
     * The Timezone model constructor.
     * @property {module:model/Timezone}
     */
    Timezone: Timezone,
    /**
     * The TorNodeResponse model constructor.
     * @property {module:model/TorNodeResponse}
     */
    TorNodeResponse: TorNodeResponse,
    /**
     * The UserAgentValidateRequest model constructor.
     * @property {module:model/UserAgentValidateRequest}
     */
    UserAgentValidateRequest: UserAgentValidateRequest,
    /**
     * The UserAgentValidateResponse model constructor.
     * @property {module:model/UserAgentValidateResponse}
     */
    UserAgentValidateResponse: UserAgentValidateResponse,
    /**
     * The ValidateAddressRequest model constructor.
     * @property {module:model/ValidateAddressRequest}
     */
    ValidateAddressRequest: ValidateAddressRequest,
    /**
     * The ValidateAddressResponse model constructor.
     * @property {module:model/ValidateAddressResponse}
     */
    ValidateAddressResponse: ValidateAddressResponse,
    /**
     * The ValidateCityRequest model constructor.
     * @property {module:model/ValidateCityRequest}
     */
    ValidateCityRequest: ValidateCityRequest,
    /**
     * The ValidateCityResponse model constructor.
     * @property {module:model/ValidateCityResponse}
     */
    ValidateCityResponse: ValidateCityResponse,
    /**
     * The ValidateCountryRequest model constructor.
     * @property {module:model/ValidateCountryRequest}
     */
    ValidateCountryRequest: ValidateCountryRequest,
    /**
     * The ValidateCountryResponse model constructor.
     * @property {module:model/ValidateCountryResponse}
     */
    ValidateCountryResponse: ValidateCountryResponse,
    /**
     * The ValidateIdentifierRequest model constructor.
     * @property {module:model/ValidateIdentifierRequest}
     */
    ValidateIdentifierRequest: ValidateIdentifierRequest,
    /**
     * The ValidateIdentifierResponse model constructor.
     * @property {module:model/ValidateIdentifierResponse}
     */
    ValidateIdentifierResponse: ValidateIdentifierResponse,
    /**
     * The ValidatePostalCodeRequest model constructor.
     * @property {module:model/ValidatePostalCodeRequest}
     */
    ValidatePostalCodeRequest: ValidatePostalCodeRequest,
    /**
     * The ValidatePostalCodeResponse model constructor.
     * @property {module:model/ValidatePostalCodeResponse}
     */
    ValidatePostalCodeResponse: ValidatePostalCodeResponse,
    /**
     * The ValidateStateRequest model constructor.
     * @property {module:model/ValidateStateRequest}
     */
    ValidateStateRequest: ValidateStateRequest,
    /**
     * The ValidateStateResponse model constructor.
     * @property {module:model/ValidateStateResponse}
     */
    ValidateStateResponse: ValidateStateResponse,
    /**
     * The ValidateUrlRequestFull model constructor.
     * @property {module:model/ValidateUrlRequestFull}
     */
    ValidateUrlRequestFull: ValidateUrlRequestFull,
    /**
     * The ValidateUrlRequestSyntaxOnly model constructor.
     * @property {module:model/ValidateUrlRequestSyntaxOnly}
     */
    ValidateUrlRequestSyntaxOnly: ValidateUrlRequestSyntaxOnly,
    /**
     * The ValidateUrlResponseFull model constructor.
     * @property {module:model/ValidateUrlResponseFull}
     */
    ValidateUrlResponseFull: ValidateUrlResponseFull,
    /**
     * The ValidateUrlResponseSyntaxOnly model constructor.
     * @property {module:model/ValidateUrlResponseSyntaxOnly}
     */
    ValidateUrlResponseSyntaxOnly: ValidateUrlResponseSyntaxOnly,
    /**
     * The VatLookupRequest model constructor.
     * @property {module:model/VatLookupRequest}
     */
    VatLookupRequest: VatLookupRequest,
    /**
     * The VatLookupResponse model constructor.
     * @property {module:model/VatLookupResponse}
     */
    VatLookupResponse: VatLookupResponse,
    /**
     * The WhoisResponse model constructor.
     * @property {module:model/WhoisResponse}
     */
    WhoisResponse: WhoisResponse,
    /**
     * The AddressApi service constructor.
     * @property {module:api/AddressApi}
     */
    AddressApi: AddressApi,
    /**
     * The DomainApi service constructor.
     * @property {module:api/DomainApi}
     */
    DomainApi: DomainApi,
    /**
     * The EmailApi service constructor.
     * @property {module:api/EmailApi}
     */
    EmailApi: EmailApi,
    /**
     * The IPAddressApi service constructor.
     * @property {module:api/IPAddressApi}
     */
    IPAddressApi: IPAddressApi,
    /**
     * The LeadEnrichmentApi service constructor.
     * @property {module:api/LeadEnrichmentApi}
     */
    LeadEnrichmentApi: LeadEnrichmentApi,
    /**
     * The NameApi service constructor.
     * @property {module:api/NameApi}
     */
    NameApi: NameApi,
    /**
     * The PhoneNumberApi service constructor.
     * @property {module:api/PhoneNumberApi}
     */
    PhoneNumberApi: PhoneNumberApi,
    /**
     * The UserAgentApi service constructor.
     * @property {module:api/UserAgentApi}
     */
    UserAgentApi: UserAgentApi,
    /**
     * The VatApi service constructor.
     * @property {module:api/VatApi}
     */
    VatApi: VatApi
  };

  return exports;
}));
