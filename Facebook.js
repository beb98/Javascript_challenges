/*
- 3 / 1 / 2019
- asked by facebook
- solutions by George S. Musk
Given a string and a set of delimiters,
reverse the words in the string while maintaining the relative order of the delimiters.
For example, given "hello/world:here", return "here/world:hello"
*/


var givenString = 'hello/world:here';
var rulesSp = ['/', ':'];
var newArray = Array(rulesSp.length - 1);
var givenStringToArray = [];
var indexes = [];
//for(let getInd = 0; getInd < rulesSp)

for(let y = 0 ; y < rulesSp.length; y++) {    
var getIndexes = givenString.indexOf(rulesSp[y]);
indexes.push(getIndexes);
}

for(let i = 0; i < rulesSp.length; i++) {
    

    
    var ouroutput = givenString.split(rulesSp[i]);
    newArray[i] = ouroutput;
    
    var oursecoutput = newArray[i].toString();
    rulesSp.reverse();
    var ourfinaloutput = oursecoutput.replace(rulesSp[i] , ',');
    
    
    var getSecArr = ourfinaloutput.split(',');

}

var reversed = getSecArr.reverse();
var rev = reversed.toString();
var finalOne = rev.replace(/\,/g,"");
var finalRev = rev.split('');




for (let b = 0 ; b < indexes.length; b++) {
    finalRev.splice(indexes[b], 0, rulesSp[b]);
    var finalRevToString = finalRev.toString();
    var finalR = finalRevToString.replace(/\,/g,"");

}


console.log(finalR);