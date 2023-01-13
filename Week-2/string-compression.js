/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // two pointers initialized to "x" and "y" to the first char of the array of characters "chars" and a var "count" to 1
    let x = 0, y = 0, count = 1;
    // iterate through the array "chars" from the second char
    for (let z = 1; z <= chars.length; z++) {
        // if the current char is strictly equal to prev char, increment of "count" var
        if (z < chars.length && chars[z] === chars[z-1]) {
            count++;
        } 
        // if not, the prev char to be append to the array
        else {
            chars[y] = chars[x];
            y++;
            // if the "count" is < 1, convert the "count" to string and append it to the "chars" array starting from index "y"
            if (count > 1) {
                let countStr = count.toString();
                for (let m = 0; m < countStr.length; m++) {
                    chars[y] = countStr[m];
                    y++;
                }
            }
            // update the pointer "x" to the current index and reset the "count" to 1 
            x = z;
            count = 1;
        }
    }
    // return the new length of the "chars" array of characters
    return y;
};
