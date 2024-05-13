let guestList : string[] = ["Sama", "Safa" , "Erum"];
for ( let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]} \n you are invited for dinner! `);
}
console.log(`"Unfortunately ${guestList[0]} , cant come."`);
guestList[0] = "Sumaiya";
console.log("NEW LIST OF INVITATION:");

for (let j=0; j < guestList.length; j++ ){
    console.log( `Dear ${guestList[j]}: you are invited for a dinner!`)
}