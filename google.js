/*
This problem was asked by Google.
Given a word W and a string S, find all starting indices in S which are anagrams of W.
For example, given that W is "ab", and S is "abxaba", return 0, 3, and 5.
*/





let w = 'ab';
let s = 'abxxxbxaba';
let result1 = [];



function solveThis() {
    
    let arr1 = w.split('');
    let arr2 = s.split('');
    
    let resultElement;
    
    ourFirstLetter = arr1[0];
    ourSecondLetter = arr1[1];
    
    for(let el = 0; el < arr2.length; el++) {
        
        var indexLetter = arr2[el];
        var letterIndex = arr2.indexOf(indexLetter);
        
        if(indexLetter == ourFirstLetter) {
            
            resultElement = letterIndex;
            result1.push(resultElement);
            
            arr2[el] = 'Checked';
            
                if(arr2[letterIndex + 1] == ourSecondLetter) {
                
                   arr2[letterIndex + 1] = 'Something Else';
                }
            
         } else if (indexLetter == ourSecondLetter) {
                
            resultElement = letterIndex;
            result1.push(resultElement);    
         }
      }
    
    }
    

solveThis();
console.log(result1);