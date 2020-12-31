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
    instance = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
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

  describe('IPIntelligenceResponse', function() {
    it('should create an instance of IPIntelligenceResponse', function() {
      // uncomment below and update the code to test IPIntelligenceResponse
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.IPIntelligenceResponse);
    });

    it('should have the property isBot (base name: "IsBot")', function() {
      // uncomment below and update the code to test the property isBot
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property isTorNode (base name: "IsTorNode")', function() {
      // uncomment below and update the code to test the property isTorNode
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property isThreat (base name: "IsThreat")', function() {
      // uncomment below and update the code to test the property isThreat
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property isEU (base name: "IsEU")', function() {
      // uncomment below and update the code to test the property isEU
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "Location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "CurrencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyName (base name: "CurrencyName")', function() {
      // uncomment below and update the code to test the property currencyName
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property regionArea (base name: "RegionArea")', function() {
      // uncomment below and update the code to test the property regionArea
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

    it('should have the property subregionArea (base name: "SubregionArea")', function() {
      // uncomment below and update the code to test the property subregionArea
      //var instane = new CloudmersiveValidateApiClient.IPIntelligenceResponse();
      //expect(instance).to.be();
    });

  });

}));
