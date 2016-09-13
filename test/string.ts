var expect = require('chai').expect;
import {
  SubString,
  Anagram
} from '../string/string'

describe('String Manipulation', function() {
    it('should implement substr() function', function() {
      let str1 = 'source';
      let str2 = 'target';
      expect(SubString(str1, str2)).to.be.equal(-1);
      str1 = "abcdabcdefg"
      str2 = "bcd"
      expect(SubString(str1, str2)).to.be.equal(1);
    });
    it('should implement Anagram function', function() {
      //let str1 = 'abcd';
      //let str2 = 'dcab';
      //expect(Anagram(str1, str2)).to.be.equal(true);
      //str1 = 'ab';
      //str2 = 'ab';
      //expect(Anagram(str1, str2)).to.be.equal(true);
      let str1 = 'ab';
      let str2 = 'ac';
      expect(Anagram(str1, str2)).to.be.equal(false);
    });
});

