var expect = require('chai').expect;
import {
  SubString
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
});

