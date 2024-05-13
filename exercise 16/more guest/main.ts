let guestList : string[] = ["Sama", "Safa" , "Erum"];


console.log( "NEW LIST OF INVITATION:");

for (let j=0; j < guestList.length; j++ ){
    console.log( `Dear ${guestList[j]}: \n you are invited for a dinner! \n`)
} 

console.log("congratulation ! we have find a big round table. ")

guestList.unshift("Maria");
guestList.splice(2, 0, "Dua");
guestList.push("Anum")


for (let i=0; i < guestList.length; i++ ){
    console.log(`Dear ${guestList[i]} \n you are invited for dinner.\n`)
}

