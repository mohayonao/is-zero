"use strict";

var assert = require("assert");
var is0 = require("../");

describe("is0", function() {
  describe(".isZero(x: number): boolean", function() {
    it("works", function() {
      assert(is0.isZero( 0) === true);
      assert(is0.isZero(+0) === true);
      assert(is0.isZero(-0) === true);
      assert(is0.isZero("0") === false);
    });
  });
  describe(".isPositiveZero(x: number): boolean", function() {
    it("works", function() {
      assert(is0.isPositiveZero( 0) === true);
      assert(is0.isPositiveZero(+0) === true);
      assert(is0.isPositiveZero(-0) === false);
      assert(is0.isPositiveZero("0") === false);
    });
  });
  describe(".isNegativeZero(x: number): boolean", function() {
    it("works", function() {
      assert(is0.isNegativeZero( 0) === false);
      assert(is0.isNegativeZero(+0) === false);
      assert(is0.isNegativeZero(-0) === true);
      assert(is0.isNegativeZero("0") === false);
    });
  });
});
