import * as _ from 'lodash';

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
export var SubString = function(str1: string, str2: string): number {
  let index = -1;
  _.forEach(str1, (val1, key) => {
    let found = false;
    for (let i = 0; i < str2.length; i++) {
      if (str1[key+i] != str2[i]) {
        found = false;
        break;
      }
      found = true;
    }
    if (found) {
      index = key;
      return false;
    }
  })
  return index
}
