//making function 
function showMagicians(magician : string[]){
    magician.forEach(name => console.log(name))
}
// using map which modify array
function makeGreat(magician : string[]){
return magician.map(name => `the great ${name}`)
}
//making array

let magicianName = ["harry potter" , "marwa" , "safa"]

//making a copy of orginal array through  slice() function
let copyMagicianNames = magicianName.slice()

//modify the array to include "th
 let  copyGreatMagicians = makeGreat(copyMagicianNames);

//original
console.log("original array \n")
 showMagicians(magicianName)

 //coppied
 console.log("coppied array \n")

 showMagicians(copyGreatMagicians);
