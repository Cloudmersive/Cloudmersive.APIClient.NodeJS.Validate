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
    instance = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
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

  describe('XxeDetectionRequestItem', function() {
    it('should create an instance of XxeDetectionRequestItem', function() {
      // uncomment below and update the code to test XxeDetectionRequestItem
      //var instane = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.XxeDetectionRequestItem);
    });

    it('should have the property inputText (base name: "InputText")', function() {
      // uncomment below and update the code to test the property inputText
      //var instane = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
      //expect(instance).to.be();
    });

    it('should have the property allowInternetUrls (base name: "AllowInternetUrls")', function() {
      // uncomment below and update the code to test the property allowInternetUrls
      //var instane = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
      //expect(instance).to.be();
    });

    it('should have the property knownSafeUrls (base name: "KnownSafeUrls")', function() {
      // uncomment below and update the code to test the property knownSafeUrls
      //var instane = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
      //expect(instance).to.be();
    });

    it('should have the property knownUnsafeUrls (base name: "KnownUnsafeUrls")', function() {
      // uncomment below and update the code to test the property knownUnsafeUrls
      //var instane = new CloudmersiveValidateApiClient.XxeDetectionRequestItem();
      //expect(instance).to.be();
    });

  });

}));