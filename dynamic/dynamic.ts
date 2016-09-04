import * as _ from 'lodash';

// Find the longest palindrome subsequence in a given sequence
// Complexity : time & space both => O(n^2)
export var LongestPalindromeSeq = function(list: string[]): number {
  // Create a 2D array
  let map: any[] = [];
  _.forEach(list, (val1, key1) => {
    var row: number[] = []
    _.forEach(list, (val2, key2) => {
      if(key1 == key2) {
        row.push(1) 
      } else {
        row.push(0) 
      }
    });
    map.push(row);
  });

  var maxDist = list.length -1;
  for(let dist = 1; dist <= maxDist; dist++) {
    for(let left = 0; left <= maxDist-dist; left++) {
      let right = left + dist
      // First and last chars are identical
      if (list[left] == list[right] && dist == 1) {
        map[left][right] = 2
      } else if (list[left] == list[right]) {
        map[left][right] = map[left+1][right-1] + 2
      } else {
        map[left][right] = max([map[left][right-1], map[left+1][right]])
      }
    }
    // Uncomment for debug purpose
    //_.forEach(map, (val) => {
      //console.log(val);
    //})
  }
  return map[0][maxDist];
}

// http://algorithm.yuanbin.me/zh-hans/exhaustive_search/palindrome_partitioning.html
// Find the length of the longest subsequence of a given sequence such that
// all elements of the subsequnece are sorted in increasing order
// Complexity: time -> O(nlong(n)), space -> O(n)
export var longestIncreasingSeq = function(str: number[]): number {
  var list: number[] = _.times(str.length, () => {
    return 1; 
  })

  for(let outIdx = 1; outIdx < str.length; outIdx++) {
    for(let inIdx = 0; inIdx < outIdx; inIdx++) {
      if(str[inIdx] < str[outIdx] && list[outIdx] < list[inIdx]+1)
        list[outIdx]++;
    } 
  } 
  return max(list) 
}

// Find the longest subsequence common to all sequences in a set of sequences
// Complexity: time -> O(m x n), space -> O(m x n)
export var longestCommonSeq = function(str1: string, str2: string): string {
  let l1: number = str1.length+1;
  let l2: number = str2.length+1;
  let traceMap: number[][];
  traceMap = _.times(l1, () => {
    return [] 
  });
  for(let row = 0; row < l1; row++) {
    for(let col = 0; col < l2; col++) {
      if(row == 0 || col == 0) {
        traceMap[row][col] = 0; 
      } else if (str1[row-1] == str2[col-1]) {
        traceMap[row][col] = traceMap[row-1][col-1] + 1; 
      } else {
        let top = traceMap[row-1][col];
        let left = traceMap[row][col-1];
        traceMap[row][col] = top > left? top : left
      }
    }
  }
  // Trace back
  let str = '';
  var row = str1.length;
  var col = str2.length;
  for(;row >= 1 && col >= 1;){
    var top = traceMap[row-1][col]
    var left = traceMap[row][col-1]
    if(str1[row-1] == str2[col-1]) {
      str = str1[row-1]+str;
      row--;
      col--;
    } else if (top > left) {
      row--;
    } else {
      col--; 
    }
  }
  return str;
}

var max = function(list): number {
  var cloneList = _.clone(list);
  var max = cloneList.shift();
  _.forEach(cloneList, (key) => {
    max = key > max? key:max
  })
  return max
}
