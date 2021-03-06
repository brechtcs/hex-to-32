/**
 * Poor man's testing framework
 */

var assert = require("assert");
var hexTo32 = require(".");

var value = 0xDEADA5;
var expected = "32w2k";

var hex = value.toString(16);

var encoded = hexTo32.encode(hex);

assert.equal(encoded, expected, "Encoded value is unexpected");

var decoded = hexTo32.decode(encoded);

assert.equal(decoded, hex, "Decoded value didn't match");

console.log("OK");
