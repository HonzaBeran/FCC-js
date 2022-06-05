function rot13(str) {
    const isUpper = checkUpper(str);
    let strLower = str.toLowerCase();
    console.log(lowerShift(strLower, 13));
    /*
    if (strArrLower.length !== strLower.length) {
        console.log("Break!")
        return undefined;
    }
    for (let i = 0; i < strArrLower.length; i++) {
        //
    }
    */
    console.log("OK");
    // return strArrLower;
}

const lowerShift = (str, numShift) => {
    const maxLower = 122;
    const minLower = 97;
    const strArr = [];
    let charCode;
    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        // console.log(charCode);
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

// lowerShift("SERR PBQR PNZC");
  
rot13("SERR PBQR PNZC");