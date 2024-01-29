const findTheOldest = function(arr) {
    let ans = arr.reduce((ans, curr) => getAge(curr) > getAge(ans) ? curr : ans, arr[0]);
    return ans
};

const getAge = function(obj) {
    obj.yearOfDeath = obj.yearOfDeath ? obj.yearOfDeath : new Date().getFullYear();
    return obj.yearOfDeath - obj.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
