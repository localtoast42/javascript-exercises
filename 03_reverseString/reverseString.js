const reverseString = function(string) {
    const arr = string.split("")
    const arr_reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arr_reversed.push(arr[i])
    }
    return arr_reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
