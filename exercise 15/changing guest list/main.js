var guestList = ["Sama", "Safa", "Erum"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " \n you are invited for dinner! "));
}
console.log("\"Unfortunately ".concat(guestList[0], " , cant come.\""));
guestList[0] = "Sumaiya";
console.log("NEW LIST OF INVITATION:");
for (var j = 0; j < guestList.length; j++) {
    console.log("Dear ".concat(guestList[j], ": you are invited for a dinner!"));
}
