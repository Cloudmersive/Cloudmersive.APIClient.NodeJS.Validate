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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveValidateApiClient);
  }
}(this, function(expect, CloudmersiveValidateApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ValidatePostalCodeResponse', function() {
    it('should create an instance of ValidatePostalCodeResponse', function() {
      // uncomment below and update the code to test ValidatePostalCodeResponse
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.ValidatePostalCodeResponse);
    });

    it('should have the property validPostalCode (base name: "ValidPostalCode")', function() {
      // uncomment below and update the code to test the property validPostalCode
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property stateOrProvince (base name: "StateOrProvince")', function() {
      // uncomment below and update the code to test the property stateOrProvince
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "Latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "Longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new CloudmersiveValidateApiClient.ValidatePostalCodeResponse();
      //expect(instance).to.be();
    });

  });

}));
