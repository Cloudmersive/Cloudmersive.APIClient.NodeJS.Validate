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
    define(['ApiClient', 'model/CountryListResult', 'model/GetTimezonesRequest', 'model/GetTimezonesResponse', 'model/NormalizeAddressResponse', 'model/ParseAddressRequest', 'model/ParseAddressResponse', 'model/ReverseGeocodeAddressRequest', 'model/ReverseGeocodeAddressResponse', 'model/ValidateAddressRequest', 'model/ValidateAddressResponse', 'model/ValidateCityRequest', 'model/ValidateCityResponse', 'model/ValidateCountryRequest', 'model/ValidateCountryResponse', 'model/ValidatePostalCodeRequest', 'model/ValidatePostalCodeResponse', 'model/ValidateStateRequest', 'model/ValidateStateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryListResult'), require('../model/GetTimezonesRequest'), require('../model/GetTimezonesResponse'), require('../model/NormalizeAddressResponse'), require('../model/ParseAddressRequest'), require('../model/ParseAddressResponse'), require('../model/ReverseGeocodeAddressRequest'), require('../model/ReverseGeocodeAddressResponse'), require('../model/ValidateAddressRequest'), require('../model/ValidateAddressResponse'), require('../model/ValidateCityRequest'), require('../model/ValidateCityResponse'), require('../model/ValidateCountryRequest'), require('../model/ValidateCountryResponse'), require('../model/ValidatePostalCodeRequest'), require('../model/ValidatePostalCodeResponse'), require('../model/ValidateStateRequest'), require('../model/ValidateStateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveValidateApiClient) {
      root.CloudmersiveValidateApiClient = {};
    }
    root.CloudmersiveValidateApiClient.AddressApi = factory(root.CloudmersiveValidateApiClient.ApiClient, root.CloudmersiveValidateApiClient.CountryListResult, root.CloudmersiveValidateApiClient.GetTimezonesRequest, root.CloudmersiveValidateApiClient.GetTimezonesResponse, root.CloudmersiveValidateApiClient.NormalizeAddressResponse, root.CloudmersiveValidateApiClient.ParseAddressRequest, root.CloudmersiveValidateApiClient.ParseAddressResponse, root.CloudmersiveValidateApiClient.ReverseGeocodeAddressRequest, root.CloudmersiveValidateApiClient.ReverseGeocodeAddressResponse, root.CloudmersiveValidateApiClient.ValidateAddressRequest, root.CloudmersiveValidateApiClient.ValidateAddressResponse, root.CloudmersiveValidateApiClient.ValidateCityRequest, root.CloudmersiveValidateApiClient.ValidateCityResponse, root.CloudmersiveValidateApiClient.ValidateCountryRequest, root.CloudmersiveValidateApiClient.ValidateCountryResponse, root.CloudmersiveValidateApiClient.ValidatePostalCodeRequest, root.CloudmersiveValidateApiClient.ValidatePostalCodeResponse, root.CloudmersiveValidateApiClient.ValidateStateRequest, root.CloudmersiveValidateApiClient.ValidateStateResponse);
  }
}(this, function(ApiClient, CountryListResult, GetTimezonesRequest, GetTimezonesResponse, NormalizeAddressResponse, ParseAddressRequest, ParseAddressResponse, ReverseGeocodeAddressRequest, ReverseGeocodeAddressResponse, ValidateAddressRequest, ValidateAddressResponse, ValidateCityRequest, ValidateCityResponse, ValidateCountryRequest, ValidateCountryResponse, ValidatePostalCodeRequest, ValidatePostalCodeResponse, ValidateStateRequest, ValidateStateResponse) {
  'use strict';

  /**
   * Address service.
   * @module api/AddressApi
   * @version 1.4.1
   */

  /**
   * Constructs a new AddressApi. 
   * @alias module:api/AddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addressCheckEUMembership operation.
     * @callback module:api/AddressApi~addressCheckEUMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCountryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a country is a member of the European Union (EU)
     * Checks if the input country is a member of the European Union or not.
     * @param {module:model/ValidateCountryRequest} input Input request
     * @param {module:api/AddressApi~addressCheckEUMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCountryResponse}
     */
    this.addressCheckEUMembership = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressCheckEUMembership");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateCountryResponse;

      return this.apiClient.callApi(
        '/validate/address/country/check-eu-membership', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressCountry operation.
     * @callback module:api/AddressApi~addressCountryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCountryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate and normalize country information, return ISO 3166-1 country codes and country name
     * Validates and normalizes country information, and returns key information about a country, as well as whether it is a member of the European Union.  Also returns distinct time zones in the country.
     * @param {module:model/ValidateCountryRequest} input Input request
     * @param {module:api/AddressApi~addressCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCountryResponse}
     */
    this.addressCountry = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressCountry");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateCountryResponse;

      return this.apiClient.callApi(
        '/validate/address/country', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressCountryList operation.
     * @callback module:api/AddressApi~addressCountryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountryListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of ISO 3166-1 countries
     * Enumerates the list of ISO 3166-1 countries, including name, country codes, and more.
     * @param {module:api/AddressApi~addressCountryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountryListResult}
     */
    this.addressCountryList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = CountryListResult;

      return this.apiClient.callApi(
        '/validate/address/country/list', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressGeocode operation.
     * @callback module:api/AddressApi~addressGeocodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Geocode a street address into latitude and longitude
     * Geocodes a street address into latitude and longitude.
     * @param {module:model/ValidateAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressGeocodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateAddressResponse}
     */
    this.addressGeocode = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressGeocode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/geocode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressGetCountryCurrency operation.
     * @callback module:api/AddressApi~addressGetCountryCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCountryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the currency of the input country
     * Gets the currency information for the input country, including the ISO three-letter country code, currency symbol, and English currency name.
     * @param {module:model/ValidateCountryRequest} input Input request
     * @param {module:api/AddressApi~addressGetCountryCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCountryResponse}
     */
    this.addressGetCountryCurrency = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressGetCountryCurrency");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateCountryResponse;

      return this.apiClient.callApi(
        '/validate/address/country/get-currency', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressGetCountryRegion operation.
     * @callback module:api/AddressApi~addressGetCountryRegionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCountryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the region, subregion and continent of the country
     * Gets the continent information including region and subregion for the input country.
     * @param {module:model/ValidateCountryRequest} input Input request
     * @param {module:api/AddressApi~addressGetCountryRegionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCountryResponse}
     */
    this.addressGetCountryRegion = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressGetCountryRegion");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateCountryResponse;

      return this.apiClient.callApi(
        '/validate/address/country/get-region', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressGetTimezone operation.
     * @callback module:api/AddressApi~addressGetTimezoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTimezonesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets IANA/Olsen time zones for a country
     * Gets the IANA/Olsen time zones for a country.
     * @param {module:model/GetTimezonesRequest} input Input request
     * @param {module:api/AddressApi~addressGetTimezoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTimezonesResponse}
     */
    this.addressGetTimezone = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressGetTimezone");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = GetTimezonesResponse;

      return this.apiClient.callApi(
        '/validate/address/country/get-timezones', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressNormalizeAddress operation.
     * @callback module:api/AddressApi~addressNormalizeAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NormalizeAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Normalize a street address
     * Normalizes an input structured street address is valid or invalid.  If the address is valid, also returns the latitude and longitude of the address.  Supports all major international addresses.
     * @param {module:model/ValidateAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressNormalizeAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NormalizeAddressResponse}
     */
    this.addressNormalizeAddress = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressNormalizeAddress");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = NormalizeAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/street-address/normalize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressParseString operation.
     * @callback module:api/AddressApi~addressParseStringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParseAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse an unstructured input text string into an international, formatted address
     * Uses machine learning and Natural Language Processing (NLP) to handle a wide array of cases, including non-standard and unstructured address strings across a wide array of countries and address formatting norms.
     * @param {module:model/ParseAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressParseStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParseAddressResponse}
     */
    this.addressParseString = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressParseString");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ParseAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/parse', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressReverseGeocodeAddress operation.
     * @callback module:api/AddressApi~addressReverseGeocodeAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReverseGeocodeAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reverse geocode a lattitude and longitude into an address
     * Converts lattitude and longitude coordinates into an address through reverse-geocoding.
     * @param {module:model/ReverseGeocodeAddressRequest} input Input reverse geocoding request
     * @param {module:api/AddressApi~addressReverseGeocodeAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReverseGeocodeAddressResponse}
     */
    this.addressReverseGeocodeAddress = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressReverseGeocodeAddress");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ReverseGeocodeAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/geocode/reverse', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressValidateAddress operation.
     * @callback module:api/AddressApi~addressValidateAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a street address
     * Determines if an input structured street address is valid or invalid.  If the address is valid, also returns the latitude and longitude of the address.  Supports all major international addresses.
     * @param {module:model/ValidateAddressRequest} input Input parse request
     * @param {module:api/AddressApi~addressValidateAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateAddressResponse}
     */
    this.addressValidateAddress = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressValidateAddress");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateAddressResponse;

      return this.apiClient.callApi(
        '/validate/address/street-address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressValidateCity operation.
     * @callback module:api/AddressApi~addressValidateCityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateCityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a City and State/Province combination, get location information about it
     * Checks if the input city and state name or code is valid, and returns information about it such as normalized City name, State name and more.  Supports all major international addresses.
     * @param {module:model/ValidateCityRequest} input Input parse request
     * @param {module:api/AddressApi~addressValidateCityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateCityResponse}
     */
    this.addressValidateCity = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressValidateCity");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateCityResponse;

      return this.apiClient.callApi(
        '/validate/address/city', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressValidatePostalCode operation.
     * @callback module:api/AddressApi~addressValidatePostalCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatePostalCodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a postal code, get location information about it
     * Checks if the input postal code is valid, and returns information about it such as City, State and more.  Supports all major countries.
     * @param {module:model/ValidatePostalCodeRequest} input Input parse request
     * @param {module:api/AddressApi~addressValidatePostalCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatePostalCodeResponse}
     */
    this.addressValidatePostalCode = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressValidatePostalCode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidatePostalCodeResponse;

      return this.apiClient.callApi(
        '/validate/address/postal-code', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addressValidateState operation.
     * @callback module:api/AddressApi~addressValidateStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateStateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a state or province, name or abbreviation, get location information about it
     * Checks if the input state name or code is valid, and returns information about it such as normalized State name and more.  Supports all major countries.
     * @param {module:model/ValidateStateRequest} input Input parse request
     * @param {module:api/AddressApi~addressValidateStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateStateResponse}
     */
    this.addressValidateState = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling addressValidateState");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ValidateStateResponse;

      return this.apiClient.callApi(
        '/validate/address/state', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
