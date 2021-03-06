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
    instance = new CloudmersiveValidateApiClient.WhoisResponse();
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

  describe('WhoisResponse', function() {
    it('should create an instance of WhoisResponse', function() {
      // uncomment below and update the code to test WhoisResponse
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.WhoisResponse);
    });

    it('should have the property validDomain (base name: "ValidDomain")', function() {
      // uncomment below and update the code to test the property validDomain
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantName (base name: "RegistrantName")', function() {
      // uncomment below and update the code to test the property registrantName
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantOrganization (base name: "RegistrantOrganization")', function() {
      // uncomment below and update the code to test the property registrantOrganization
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantEmail (base name: "RegistrantEmail")', function() {
      // uncomment below and update the code to test the property registrantEmail
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantStreetNumber (base name: "RegistrantStreetNumber")', function() {
      // uncomment below and update the code to test the property registrantStreetNumber
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantStreet (base name: "RegistrantStreet")', function() {
      // uncomment below and update the code to test the property registrantStreet
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantCity (base name: "RegistrantCity")', function() {
      // uncomment below and update the code to test the property registrantCity
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantStateOrProvince (base name: "RegistrantStateOrProvince")', function() {
      // uncomment below and update the code to test the property registrantStateOrProvince
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantPostalCode (base name: "RegistrantPostalCode")', function() {
      // uncomment below and update the code to test the property registrantPostalCode
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantCountry (base name: "RegistrantCountry")', function() {
      // uncomment below and update the code to test the property registrantCountry
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantRawAddress (base name: "RegistrantRawAddress")', function() {
      // uncomment below and update the code to test the property registrantRawAddress
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property registrantTelephone (base name: "RegistrantTelephone")', function() {
      // uncomment below and update the code to test the property registrantTelephone
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property whoisServer (base name: "WhoisServer")', function() {
      // uncomment below and update the code to test the property whoisServer
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property rawTextRecord (base name: "RawTextRecord")', function() {
      // uncomment below and update the code to test the property rawTextRecord
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdDt (base name: "CreatedDt")', function() {
      // uncomment below and update the code to test the property createdDt
      //var instane = new CloudmersiveValidateApiClient.WhoisResponse();
      //expect(instance).to.be();
    });

  });

}));
