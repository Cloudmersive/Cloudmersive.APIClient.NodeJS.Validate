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
    instance = new CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly();
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

  describe('ValidateUrlRequestSyntaxOnly', function() {
    it('should create an instance of ValidateUrlRequestSyntaxOnly', function() {
      // uncomment below and update the code to test ValidateUrlRequestSyntaxOnly
      //var instane = new CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly();
      //expect(instance).to.be.a(CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly);
    });

    it('should have the property URL (base name: "URL")', function() {
      // uncomment below and update the code to test the property URL
      //var instane = new CloudmersiveValidateApiClient.ValidateUrlRequestSyntaxOnly();
      //expect(instance).to.be();
    });

  });

}));
