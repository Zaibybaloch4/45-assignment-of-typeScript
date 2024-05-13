var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinaryEnding = void 0;
    if (oneNumber === 1) {
        ordinaryEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinaryEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinaryEnding = "rd";
    }
    else {
        ordinaryEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinaryEnding));
}
;
