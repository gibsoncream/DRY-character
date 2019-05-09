require('chai').should();

const nonRepeatingCharacter = require('../index.js');

describe('DRY tests', function () {

  it('should return the first non-repeating character', function () {
    nonRepeatingCharacter('abcba').should.eql('c');
    nonRepeatingCharacter('codeworksc').should.eql('d');
    nonRepeatingCharacter('aaassssceeeegggggcqewgkldgmkldfgm').should.eql('q');
    nonRepeatingCharacter('lEo+MaRco=love').should.eql('+');
  });

  it('should take into account the case', function () {
    nonRepeatingCharacter('CoDeworkSc').should.eql('D');
    nonRepeatingCharacter('goodGodE').should.eql('E');
    nonRepeatingCharacter('weHWhou').should.eql('e');
  });

  it('should return empty string where appropriate', function () {
    nonRepeatingCharacter('').should.eql('');
    nonRepeatingCharacter('abba').should.eql('');
    nonRepeatingCharacter('aBbA').should.eql('');
  });

});