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
//calling function

let greatmagicians = makeGreat(magicianName)

showMagicians(greatmagicians)