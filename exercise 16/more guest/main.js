var guestList = ["Sama", "Safa", "Erum"];
console.log("NEW LIST OF INVITATION:");
for (var j = 0; j < guestList.length; j++) {
    console.log("Dear ".concat(guestList[j], ": \n you are invited for a dinner! \n"));
}
console.log("congratulation ! we have find a big round table. ");
guestList.unshift("Maria");
guestList.splice(2, 0, "Dua");
guestList.push("Anum");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " \n you are invited for dinner.\n"));
}
