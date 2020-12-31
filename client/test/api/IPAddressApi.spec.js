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
    instance = new CloudmersiveValidateApiClient.IPAddressApi();
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

  describe('IPAddressApi', function() {
    describe('iPAddressGeolocateStreetAddress', function() {
      it('should call iPAddressGeolocateStreetAddress successfully', function(done) {
        //uncomment below and update the code to test iPAddressGeolocateStreetAddress
        //instance.iPAddressGeolocateStreetAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressIpIntelligence', function() {
      it('should call iPAddressIpIntelligence successfully', function(done) {
        //uncomment below and update the code to test iPAddressIpIntelligence
        //instance.iPAddressIpIntelligence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressIsBot', function() {
      it('should call iPAddressIsBot successfully', function(done) {
        //uncomment below and update the code to test iPAddressIsBot
        //instance.iPAddressIsBot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressIsThreat', function() {
      it('should call iPAddressIsThreat successfully', function(done) {
        //uncomment below and update the code to test iPAddressIsThreat
        //instance.iPAddressIsThreat(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressIsTorNode', function() {
      it('should call iPAddressIsTorNode successfully', function(done) {
        //uncomment below and update the code to test iPAddressIsTorNode
        //instance.iPAddressIsTorNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressPost', function() {
      it('should call iPAddressPost successfully', function(done) {
        //uncomment below and update the code to test iPAddressPost
        //instance.iPAddressPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('iPAddressReverseDomainLookup', function() {
      it('should call iPAddressReverseDomainLookup successfully', function(done) {
        //uncomment below and update the code to test iPAddressReverseDomainLookup
        //instance.iPAddressReverseDomainLookup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
