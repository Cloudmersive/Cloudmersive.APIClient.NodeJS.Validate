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
    instance = new CloudmersiveValidateApiClient.FullNameValidationResponse();
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

  describe('FullNameValidationResponse', function() {
    it('should create an instance of FullNameValidationResponse', function() {
      // uncomment below and update the code to test FullNameValidationResponse
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.FullNameValidationResponse);
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property validationResultFirstName (base name: "ValidationResult_FirstName")', function() {
      // uncomment below and update the code to test the property validationResultFirstName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property validationResultLastName (base name: "ValidationResult_LastName")', function() {
      // uncomment below and update the code to test the property validationResultLastName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "Title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "MiddleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property nickName (base name: "NickName")', function() {
      // uncomment below and update the code to test the property nickName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property suffix (base name: "Suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "DisplayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new CloudmersiveValidateApiClient.FullNameValidationResponse();
      //expect(instance).to.be();
    });

  });

}));
