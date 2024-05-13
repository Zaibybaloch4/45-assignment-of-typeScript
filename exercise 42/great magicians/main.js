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
//calling function
var greatmagicians = makeGreat(magicianName);
showMagicians(greatmagicians);
