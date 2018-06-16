// CodeWars Solutions.js

// Make a function that finds the product of 2 numbers
var multiply=function multiply(a, b) {
  return a*b;
    };

multiply(2, 5);


// return masked string, mask a credit card numb with #### but displays last 4 numbers
function maskify(cc) { 
  var str = cc.toString();
    if (str.length <= 4) {  // check to see if input has 4 or less chars
     return str;     // returns the string if there are 4 or less chars
    } else {    // if string has more than 4, all but last 4 chars are replaced with #
     var hashIt = str.replace(/.(?=.{4,}$)/g, '#'); 
     return hashIt;
    };
}

// Check a string to see if the # of X's match the # of O'x.
function XO(str) {
    //code here
    var x= str.match(/x/gi) || []; //checks to see how many x's and flags upper & lower case X
    var o= str.match(/o/gi) || []; //checks to see how many o's and flags upper & lower case o
    return o.length == x.length; // see if the #'s are equal in the string.
}
    // If the string has no X's or O's this will still return true because 0 = 0!!!
    // Another solution...
    function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    }

