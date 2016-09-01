var expect = require('chai').expect;
import {longestCommonSeq, longestIncreasingSeq} from '../dynamic/dynamic'
describe('Dynamic programming', function() {
    it('should return longest common sequence', function() {
      let str1 = 'AGGTAB';
      let str2 = 'GXTXAYB';
      expect(longestCommonSeq(str1, str2)).to.be.equal('GTAB');
      str1 = "ABCDGH"
      str2 = "AEDFHR"
      expect(longestCommonSeq(str1, str2)).to.be.equal('ADH');
    });
    it('should return longest increasing sequence', function() {
      let list = [0, 9, 4, 6, 3, 10, 6, 4, 10, 10];
      expect(longestIncreasingSeq(list)).to.be.equal(4);
      list = [10, 9, 2, 5, 3, 7, 101, 18]
      expect(longestIncreasingSeq(list)).to.be.equal(4);
      list = [10]
      expect(longestIncreasingSeq(list)).to.be.equal(1);
    });
});
