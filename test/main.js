// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const should = require('chai').should()
    , expect = require('chai').expect
    ;

// -- Local modules
const UMDLib = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('Test UMDLib:', () => {
  // Test the lib:
  describe('Test UMDLib.VERSION and UMDLib.noConflict:', () => {
    it('Expects UMDLib.VERSION to return a string.', () => {
      expect(UMDLib.VERSION).to.be.a('string');
    });
    it('Expects UMDLib.noConflict to return a function.', () => {
      expect(UMDLib.noConflict).to.be.a('function');
    });
  });

  describe('Test UMDLib constructor and methods:', () => {
    const o = UMDLib();

    it('Expects UMDLib() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects this object to own the property "getString" that is a function.', () => {
      expect(o).to.have.property('getString').that.is.a('function');
    });

    it('Expects this object to own the property "getArray" that is a function.', () => {
      expect(o).to.have.property('getArray').that.is.a('function');
    });

    it('Expects "getString" to return the string "I am a string!".', () => {
      expect(o.getString()).to.be.a('string').that.is.equal('I am a string!');
    });

    it('Expects "getArray" to return an array with 3 elements.', () => {
      expect(o.getArray()).to.be.an('array').that.has.lengthOf(3);
    });

    it('Expects the first element to be equal to 1.', () => {
      expect(o.getArray()[0]).to.be.a('number').that.is.equal(1);
    });

    it('Expects the second element to be equal to 2.', () => {
      expect(o.getArray()[1]).to.be.a('number').that.is.equal(2);
    });

    it('Expects the third element to be equal to 3.', () => {
      expect(o.getArray()[2]).to.be.a('number').that.is.equal(3);
    });
  });
});
