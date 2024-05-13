var currentUser = ['Safa', 'Sama', 'Erum', 'Sumaiya', 'Marwa'];
//array for new user
var newUser = ['Babul', 'Sama', 'Shahzaib', 'Shahzain', 'Erum'];
//loop
newUser.forEach(function (newOneUser) {
    var ourCondition = currentUser.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(newOneUser, " is already taken."));
    }
    else {
        console.log("This username ".concat(newOneUser, " is availabe."));
    }
});
