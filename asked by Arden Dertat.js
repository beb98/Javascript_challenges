/*

Given an integer array, output all distinct pairs that sum up to a specific value k. Consider the fact that the same number can add up to k with its duplicates in the array.

For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3) twice or just once? Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)? Let’s keep the output as short as possible and print each pair only once. So, we will output only one copy of (1, 3). Also note that we shouldn’t output (2, 2) because it’s not a pair of two distinct elements.

Example
f(10, [3, 4, 5, 6, 7]) // [4, 6], [3, 7] 
f(8, [3, 4, 5, 4, 4]) // [3, 5], [4, 4] 
f(10, [3, 5, 6, 8]) //  [5,5]

*/

var specificValue = 8;
var ourArray = [3, 4, 5, 4, 4];
var forGetNum = Array(specificValue);

var isTheNumberHere = specificValue;
var searchForIt = ourArray.indexOf(isTheNumberHere);
if(searchForIt != -1) {
    forGetNum.push([specificValue, 0]);
}


for(let i = 0; i < ourArray.length; i++) {

    var diff = specificValue - i;
    
    var getIndexes = [];
    var indexWinner = ourArray.indexOf(diff);
    
    if(indexWinner != -1) {
        
        var ourFirstWinner = ourArray[indexWinner];
        var theCompelete = specificValue - ourFirstWinner;
        var getTheCompelete = ourArray.indexOf(theCompelete);
        
        if(getTheCompelete != -1) {
            
            forGetNum.push([ourFirstWinner, ourArray[getTheCompelete]]);

        }
        
        
    } 
    
}


var resultArr = [];

for(let x = 0; x < forGetNum.length; x++) {

    if(forGetNum[x] != undefined) {
        
        resultArr.push(forGetNum[x]);
       
    }
    
}

console.log(resultArr);






