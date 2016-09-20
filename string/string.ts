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

// GroupAnagrams([]string): [][]string
// Given an array of strings, group anagrams together.+
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
// [ ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]
// Solution: Sort each string then use hash map

// LongestCommonSubstring(:string, :string): number
// Given two strings, find the longest common substring. Return the length of it.
// Given A="ABCD", B="CBCE", return 2.
// Note: The characters in substring should occur continuously in original string.
// This is different with subsequence.
// Time complexity: O(mn⋅lcs)
export let LongestCommonSubstring = function(str1: string, str2: string): number {
  let max = 0;
  for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        let size = 1;
        let continuous = true;
        for(let k = j+1, t = i+1; t < str1.length && k < str2.length; k++, t++){
          if (str1[t] == str2[k] && continuous) {
            size++;
          } else {
            continuous = false
          }
        }
        max = size > max ? size:max
      }
    }
  }
  return max
}
