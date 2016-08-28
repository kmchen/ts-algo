var expect = require('chai').expect;
import * as lcs from '../dynamic/dynamic'

describe('Longest common sequence', function() {
  describe('lcs)', function() {
    it('should return -1 when the value is not present', function() {
      str1 = 'AGGTAB';
      str2 = 'GXTXAYB';
      expect(lcs(str1, str2)).to.be.equal('GTAB');
      var str1 = "ABCDGH"
      var str2 = "AEDFHR"
      expect(lcs(str1, str2)).to.be.equal('ADH');
    });
  });
});
