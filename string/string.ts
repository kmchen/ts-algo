import * as _ from 'lodash';

// Implement SubString function that returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Complexity: time -> O(n^2)
// Optimization time -> O(n) using KMP
export var SubString = function(str1: string, str2: string): number {
  let index = -1;
  let dist = str1.length - str2.length + 1
  for (let i = 0; i < dist; i ++) {
    for (let j = 0; j < str2.length; j ++) {
      if (str1[i] != str2[j]) {
        break;
      } 
      return i
    }
  }
  return -1
}

// Anagram(sting, string) bool
// Note : Two strings are anagram if they can be the same after change the order of characters.
// Solution 1 : Hashing
// Solution 2 : Sorting
export var Anagram = function(str1: string, str2: string): boolean {
  let hash = {};
  if(str1.length != str2.length) {
    return false 
  }
  _.forIn(str1, (val, key) => {
    hash[val] = hash[val]? hash[val]+1:1
    hash[str2[key]] = hash[str2[key]]? hash[str2[key]]+1:1
  });
  let result = true;
  _.forIn(hash, (val, idx) => {
    if (val%2 != 0) {
      result = false;
      return false 
    }
  });
  return result;
}
