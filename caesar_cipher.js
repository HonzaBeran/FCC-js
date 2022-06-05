function rot13(str) {
    // 
  }

const lowerShift = (str, numShift) => {
    const maxLower = 122;
    const minLower = 97;
    const strArr = [];
    console.log(strArr);
    let charCode;
    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        // console.log(charCode);
        if (charCode <= maxLower && charCode >= minLower) {
            if (charCode + 13 <= maxLower) {
                strArr.push(String.fromCharCode(charCode + 13));
            } else {
                strArr.push(String.fromCharCode(minLower + (charCode + 13 - maxLower) - 1));
            }
        } else {
            strArr.push(String.fromCharCode(charCode));
        }
    }
    console.log(strArr.join(''));
}

lowerShift("SERR PBQR PNZC".toLowerCase());
  
// rot13("SERR PBQR PNZC");