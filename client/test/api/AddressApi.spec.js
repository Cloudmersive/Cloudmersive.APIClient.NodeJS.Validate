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
    instance = new CloudmersiveValidateApiClient.AddressApi();
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

  describe('AddressApi', function() {
    describe('addressCheckEUMembership', function() {
      it('should call addressCheckEUMembership successfully', function(done) {
        //uncomment below and update the code to test addressCheckEUMembership
        //instance.addressCheckEUMembership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressCountry', function() {
      it('should call addressCountry successfully', function(done) {
        //uncomment below and update the code to test addressCountry
        //instance.addressCountry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressCountryList', function() {
      it('should call addressCountryList successfully', function(done) {
        //uncomment below and update the code to test addressCountryList
        //instance.addressCountryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressGetTimezone', function() {
      it('should call addressGetTimezone successfully', function(done) {
        //uncomment below and update the code to test addressGetTimezone
        //instance.addressGetTimezone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressParseString', function() {
      it('should call addressParseString successfully', function(done) {
        //uncomment below and update the code to test addressParseString
        //instance.addressParseString(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressValidateAddress', function() {
      it('should call addressValidateAddress successfully', function(done) {
        //uncomment below and update the code to test addressValidateAddress
        //instance.addressValidateAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressValidateCity', function() {
      it('should call addressValidateCity successfully', function(done) {
        //uncomment below and update the code to test addressValidateCity
        //instance.addressValidateCity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressValidatePostalCode', function() {
      it('should call addressValidatePostalCode successfully', function(done) {
        //uncomment below and update the code to test addressValidatePostalCode
        //instance.addressValidatePostalCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addressValidateState', function() {
      it('should call addressValidateState successfully', function(done) {
        //uncomment below and update the code to test addressValidateState
        //instance.addressValidateState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
