import * as _ from 'lodash';

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

var max = function(list): number {
  var cloneList = _.clone(list);
  var max = cloneList.shift();
  _.forEach(cloneList, (key) => {
    max = key > max? key:max
  })
  return max
}

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