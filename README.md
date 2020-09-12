# cloudmersive-validate-api-client

CloudmersiveValidateApiClient - JavaScript client for cloudmersive-validate-api-client
The validation APIs help you validate data. Check if an E-mail address is real. Check if a domain is real. Check up on an IP address, and even where it is located. All this and much more is available in the validation API.
[Cloudmersive Validation API](https://www.cloudmersive.com/validate-api) provides data validation capabilities for validating email addresses, phone numbers, IP addresses, and many other types of business data.

- API version: v1
- Package version: 1.2.9


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-validate-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-validate-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-validate-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');

var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveValidateApiClient.AddressApi()

var input = new CloudmersiveValidateApiClient.ValidateCountryRequest(); // {ValidateCountryRequest} Input request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addressCheckEUMembership(input, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveValidateApiClient.AddressApi* | [**addressCheckEUMembership**](docs/AddressApi.md#addressCheckEUMembership) | **POST** /validate/address/country/check-eu-membership | Check if a country is a member of the European Union (EU)
*CloudmersiveValidateApiClient.AddressApi* | [**addressCountry**](docs/AddressApi.md#addressCountry) | **POST** /validate/address/country | Validate and normalize country information, return ISO 3166-1 country codes and country name
*CloudmersiveValidateApiClient.AddressApi* | [**addressCountryList**](docs/AddressApi.md#addressCountryList) | **POST** /validate/address/country/list | Get a list of ISO 3166-1 countries
*CloudmersiveValidateApiClient.AddressApi* | [**addressGetTimezone**](docs/AddressApi.md#addressGetTimezone) | **POST** /validate/address/country/get-timezones | Gets IANA/Olsen time zones for a country
*CloudmersiveValidateApiClient.AddressApi* | [**addressParseString**](docs/AddressApi.md#addressParseString) | **POST** /validate/address/parse | Parse an unstructured input text string into an international, formatted address
*CloudmersiveValidateApiClient.AddressApi* | [**addressValidateAddress**](docs/AddressApi.md#addressValidateAddress) | **POST** /validate/address/street-address | Validate a street address
*CloudmersiveValidateApiClient.AddressApi* | [**addressValidateCity**](docs/AddressApi.md#addressValidateCity) | **POST** /validate/address/city | Validate a City and State/Province combination, get location information about it
*CloudmersiveValidateApiClient.AddressApi* | [**addressValidatePostalCode**](docs/AddressApi.md#addressValidatePostalCode) | **POST** /validate/address/postal-code | Validate a postal code, get location information about it
*CloudmersiveValidateApiClient.AddressApi* | [**addressValidateState**](docs/AddressApi.md#addressValidateState) | **POST** /validate/address/state | Validate a state or province, name or abbreviation, get location information about it
*CloudmersiveValidateApiClient.DomainApi* | [**domainCheck**](docs/DomainApi.md#domainCheck) | **POST** /validate/domain/check | Validate a domain name
*CloudmersiveValidateApiClient.DomainApi* | [**domainPost**](docs/DomainApi.md#domainPost) | **POST** /validate/domain/whois | Get WHOIS information for a domain
*CloudmersiveValidateApiClient.DomainApi* | [**domainUrlFull**](docs/DomainApi.md#domainUrlFull) | **POST** /validate/domain/url/full | Validate a URL fully
*CloudmersiveValidateApiClient.DomainApi* | [**domainUrlSyntaxOnly**](docs/DomainApi.md#domainUrlSyntaxOnly) | **POST** /validate/domain/url/syntax-only | Validate a URL syntactically
*CloudmersiveValidateApiClient.EmailApi* | [**emailAddressGetServers**](docs/EmailApi.md#emailAddressGetServers) | **POST** /validate/email/address/servers | Partially check whether an email address is valid
*CloudmersiveValidateApiClient.EmailApi* | [**emailFullValidation**](docs/EmailApi.md#emailFullValidation) | **POST** /validate/email/address/full | Fully validate an email address
*CloudmersiveValidateApiClient.EmailApi* | [**emailPost**](docs/EmailApi.md#emailPost) | **POST** /validate/email/address/syntaxOnly | Validate email adddress for syntactic correctness only
*CloudmersiveValidateApiClient.IPAddressApi* | [**iPAddressIsThreat**](docs/IPAddressApi.md#iPAddressIsThreat) | **POST** /validate/ip/is-threat | Check if IP address is a known threat
*CloudmersiveValidateApiClient.IPAddressApi* | [**iPAddressIsTorNode**](docs/IPAddressApi.md#iPAddressIsTorNode) | **POST** /validate/ip/is-tor-node | Check if IP address is a Tor node server
*CloudmersiveValidateApiClient.IPAddressApi* | [**iPAddressPost**](docs/IPAddressApi.md#iPAddressPost) | **POST** /validate/ip/geolocate | Geolocate an IP address
*CloudmersiveValidateApiClient.LeadEnrichmentApi* | [**leadEnrichmentEnrichLead**](docs/LeadEnrichmentApi.md#leadEnrichmentEnrichLead) | **POST** /validate/lead-enrichment/lead/enrich | Enrich an input lead with additional fields of data
*CloudmersiveValidateApiClient.NameApi* | [**nameGetGender**](docs/NameApi.md#nameGetGender) | **POST** /validate/name/get-gender | Get the gender of a first name
*CloudmersiveValidateApiClient.NameApi* | [**nameIdentifier**](docs/NameApi.md#nameIdentifier) | **POST** /validate/name/identifier | Validate a code identifier
*CloudmersiveValidateApiClient.NameApi* | [**nameValidateFirstName**](docs/NameApi.md#nameValidateFirstName) | **POST** /validate/name/first | Validate a first name
*CloudmersiveValidateApiClient.NameApi* | [**nameValidateFullName**](docs/NameApi.md#nameValidateFullName) | **POST** /validate/name/full-name | Parse and validate a full name
*CloudmersiveValidateApiClient.NameApi* | [**nameValidateLastName**](docs/NameApi.md#nameValidateLastName) | **POST** /validate/name/last | Validate a last name
*CloudmersiveValidateApiClient.PhoneNumberApi* | [**phoneNumberSyntaxOnly**](docs/PhoneNumberApi.md#phoneNumberSyntaxOnly) | **POST** /validate/phonenumber/basic | Validate phone number (basic)
*CloudmersiveValidateApiClient.UserAgentApi* | [**userAgentParse**](docs/UserAgentApi.md#userAgentParse) | **POST** /validate/useragent/parse | Parse an HTTP User-Agent string, identify robots
*CloudmersiveValidateApiClient.VatApi* | [**vatVatLookup**](docs/VatApi.md#vatVatLookup) | **POST** /validate/vat/lookup | Validate a VAT number


## Documentation for Models

 - [CloudmersiveValidateApiClient.AddressGetServersResponse](docs/AddressGetServersResponse.md)
 - [CloudmersiveValidateApiClient.AddressVerifySyntaxOnlyResponse](docs/AddressVerifySyntaxOnlyResponse.md)
 - [CloudmersiveValidateApiClient.CheckResponse](docs/CheckResponse.md)
 - [CloudmersiveValidateApiClient.CountryDetails](docs/CountryDetails.md)
 - [CloudmersiveValidateApiClient.CountryListResult](docs/CountryListResult.md)
 - [CloudmersiveValidateApiClient.FirstNameValidationRequest](docs/FirstNameValidationRequest.md)
 - [CloudmersiveValidateApiClient.FirstNameValidationResponse](docs/FirstNameValidationResponse.md)
 - [CloudmersiveValidateApiClient.FullEmailValidationResponse](docs/FullEmailValidationResponse.md)
 - [CloudmersiveValidateApiClient.FullNameValidationRequest](docs/FullNameValidationRequest.md)
 - [CloudmersiveValidateApiClient.FullNameValidationResponse](docs/FullNameValidationResponse.md)
 - [CloudmersiveValidateApiClient.GeolocateResponse](docs/GeolocateResponse.md)
 - [CloudmersiveValidateApiClient.GetGenderRequest](docs/GetGenderRequest.md)
 - [CloudmersiveValidateApiClient.GetGenderResponse](docs/GetGenderResponse.md)
 - [CloudmersiveValidateApiClient.GetTimezonesRequest](docs/GetTimezonesRequest.md)
 - [CloudmersiveValidateApiClient.GetTimezonesResponse](docs/GetTimezonesResponse.md)
 - [CloudmersiveValidateApiClient.IPThreatResponse](docs/IPThreatResponse.md)
 - [CloudmersiveValidateApiClient.LastNameValidationRequest](docs/LastNameValidationRequest.md)
 - [CloudmersiveValidateApiClient.LastNameValidationResponse](docs/LastNameValidationResponse.md)
 - [CloudmersiveValidateApiClient.LeadEnrichmentRequest](docs/LeadEnrichmentRequest.md)
 - [CloudmersiveValidateApiClient.LeadEnrichmentResponse](docs/LeadEnrichmentResponse.md)
 - [CloudmersiveValidateApiClient.ParseAddressRequest](docs/ParseAddressRequest.md)
 - [CloudmersiveValidateApiClient.ParseAddressResponse](docs/ParseAddressResponse.md)
 - [CloudmersiveValidateApiClient.PhoneNumberValidateRequest](docs/PhoneNumberValidateRequest.md)
 - [CloudmersiveValidateApiClient.PhoneNumberValidationResponse](docs/PhoneNumberValidationResponse.md)
 - [CloudmersiveValidateApiClient.Timezone](docs/Timezone.md)
 - [CloudmersiveValidateApiClient.TorNodeResponse](docs/TorNodeResponse.md)
 - [CloudmersiveValidateApiClient.UserAgentValidateRequest](docs/UserAgentValidateRequest.md)
 - [CloudmersiveValidateApiClient.UserAgentValidateResponse](docs/UserAgentValidateResponse.md)
 - [CloudmersiveValidateApiClient.ValidateAddressRequest](docs/ValidateAddressRequest.md)
 - [CloudmersiveValidateApiClient.ValidateAddressResponse](docs/ValidateAddressResponse.md)
 - [CloudmersiveValidateApiClient.ValidateCityRequest](docs/ValidateCityRequest.md)
 - [CloudmersiveValidateApiClient.ValidateCityResponse](docs/ValidateCityResponse.md)
 - [CloudmersiveValidateApiClient.ValidateCountryRequest](docs/ValidateCountryRequest.md)
 - [CloudmersiveValidateApiClient.ValidateCountryResponse](docs/ValidateCountryResponse.md)
 - [CloudmersiveValidateApiClient.ValidateIdentifierRequest](docs/ValidateIdentifierRequest.md)
 - [CloudmersiveValidateApiClient.ValidateIdentifierResponse](docs/ValidateIdentifierResponse.md)
 - [CloudmersiveValidateApiClient.ValidatePostalCodeRequest](docs/ValidatePostalCodeRequest.md)
 - [CloudmersiveValidateApiClient.ValidatePostalCodeResponse](docs/ValidatePostalCodeResponse.md)
 - [CloudmersiveValidateApiClient.ValidateStateRequest](docs/ValidateStateRequest.md)
 - [CloudmersiveValidateApiClient.ValidateStateResponse](docs/ValidateStateResponse.md)
 - [CloudmersiveValidateApiClient.ValidateUrlRequestFull](docs/ValidateUrlRequestFull.md)
 - [CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly](docs/ValidateUrlRequestSyntaxOnly.md)
 - [CloudmersiveValidateApiClient.ValidateUrlResponseFull](docs/ValidateUrlResponseFull.md)
 - [CloudmersiveValidateApiClient.ValidateUrlResponseSyntaxOnly](docs/ValidateUrlResponseSyntaxOnly.md)
 - [CloudmersiveValidateApiClient.VatLookupRequest](docs/VatLookupRequest.md)
 - [CloudmersiveValidateApiClient.VatLookupResponse](docs/VatLookupResponse.md)
 - [CloudmersiveValidateApiClient.WhoisResponse](docs/WhoisResponse.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

