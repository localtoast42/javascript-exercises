const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return 'ERROR'
    }
    if (typeof int1 !== "number" || typeof int2 !== "number") {
        return 'ERROR'
    }
    
    let start = int1 < int2 ? int1 : int2
    let end = int1 < int2 ? int2 : int1
    let answer = 0
    for (i = start; i <= end; i ++){
        answer += i
    }
    return answer
};

// Do not edit below this line
module.exports = sumAll;
