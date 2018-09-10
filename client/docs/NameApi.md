# CloudmersiveValidateApiClient.NameApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nameGetGender**](NameApi.md#nameGetGender) | **POST** /validate/name/get-gender | Get the gender of a first name
[**nameValidateFirstName**](NameApi.md#nameValidateFirstName) | **POST** /validate/name/first | Validate a first name
[**nameValidateFullName**](NameApi.md#nameValidateFullName) | **POST** /validate/name/full-name | Parse and validate a full name
[**nameValidateLastName**](NameApi.md#nameValidateLastName) | **POST** /validate/name/last | Validate a last name


<a name="nameGetGender"></a>
# **nameGetGender**
> GetGenderResponse nameGetGender(input)

Get the gender of a first name

Determines the gender of a first name (given name)

### Example
```javascript
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveValidateApiClient.NameApi();

var input = new CloudmersiveValidateApiClient.GetGenderRequest(); // GetGenderRequest | Gender request information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nameGetGender(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**GetGenderRequest**](GetGenderRequest.md)| Gender request information | 

### Return type

[**GetGenderResponse**](GetGenderResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="nameValidateFirstName"></a>
# **nameValidateFirstName**
> FirstNameValidationResponse nameValidateFirstName(input)

Validate a first name

Determines if a string is a valid first name (given name)

### Example
```javascript
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveValidateApiClient.NameApi();

var input = new CloudmersiveValidateApiClient.FirstNameValidationRequest(); // FirstNameValidationRequest | Validation request information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nameValidateFirstName(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**FirstNameValidationRequest**](FirstNameValidationRequest.md)| Validation request information | 

### Return type

[**FirstNameValidationResponse**](FirstNameValidationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="nameValidateFullName"></a>
# **nameValidateFullName**
> FullNameValidationResponse nameValidateFullName(input)

Parse and validate a full name

Parses a full name string (e.g. \&quot;Mr. Jon van der Waal Jr.\&quot;) into its component parts (and returns these component parts), and then validates whether it is a valid name string or not

### Example
```javascript
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveValidateApiClient.NameApi();

var input = new CloudmersiveValidateApiClient.FullNameValidationRequest(); // FullNameValidationRequest | Validation request information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nameValidateFullName(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**FullNameValidationRequest**](FullNameValidationRequest.md)| Validation request information | 

### Return type

[**FullNameValidationResponse**](FullNameValidationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="nameValidateLastName"></a>
# **nameValidateLastName**
> LastNameValidationResponse nameValidateLastName(input)

Validate a last name

Determines if a string is a valid last name (surname)

### Example
```javascript
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveValidateApiClient.NameApi();

var input = new CloudmersiveValidateApiClient.LastNameValidationRequest(); // LastNameValidationRequest | Validation request information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nameValidateLastName(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LastNameValidationRequest**](LastNameValidationRequest.md)| Validation request information | 

### Return type

[**LastNameValidationResponse**](LastNameValidationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

