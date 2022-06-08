/*
How I describe functions?
Example:
---------------------------------------
1 // foo(numer, string) -> array 
2 function foo(num, str) {
3    // something interesting
4    return arr
5 } 
---------------------------------------
This means that function "foo" takes two argument - number and string - and return array.
*/


// rot13(string) -> string
function rot13(str) {
    const isUpper = checkUpper(str);
    let arrLower = lowerShift(str, 13);
    let arrStr = [];
    for (let i = 0; i < arrLower.length; i++) {
        if (isUpper[i]) {
            arrStr.push(arrLower[i].toUpperCase());
        } else {
            arrStr.push(arrLower[i]);
        }
    }
    console.log(arrStr.join('')); // Just for test!
    return arrStr.join('');
}

/* function lowerShift
This function shift all char in string by 
 BTW: This function it can be used for others shift then just 13 positions as rot13 needs.
*/
// lowerShift(string, number) -> string
const lowerShift = (str, numShift) => {
    const maxLower = 122;
    const minLower = 97;
    const strArr = [];
    let charCode;
    for (let i = 0; i < str.length; i++) {
        charCode = str.toLowerCase().charCodeAt(i);
        if (charCode <= maxLower && charCode >= minLower) {
            if (charCode + numShift <= maxLower) {
                strArr.push(String.fromCharCode(charCode + numShift));
            } else {
                strArr.push(String.fromCharCode(minLower + (charCode + numShift - maxLower) - 1));
            }
        } else {
            strArr.push(String.fromCharCode(charCode));
        }
    }
    return strArr.join('');
}


/* function checkUpper
This function takes string and return array of boolean 
*/
// Function "checkUpper(string) -> array
const checkUpper = (str) => {
    let lowerArr = [];
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            lowerArr.push(true);
        } else {
            lowerArr.push(false);
        }
    }
    return lowerArr;
}
  
// Tests
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("Serr + CVMMn!!!");