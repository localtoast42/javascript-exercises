const removeFromArray = function(arr, ...valuesToRemove) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (valuesToRemove.includes(arr[i])) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
