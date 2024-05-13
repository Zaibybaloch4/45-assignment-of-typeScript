//making function 
function showMagicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// using map which modify array
function makeGreat(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
//making array
var magicianName = ["harry potter", "marwa", "safa"];
//making a copy of orginal array through  slice() function
var copyMagicianNames = magicianName.slice();
//modify the array to include "th
var copyGreatMagicians = makeGreat(copyMagicianNames);
//original
console.log("original array \n");
showMagicians(magicianName);
//coppied
console.log("coppied array \n");
showMagicians(copyGreatMagicians);
