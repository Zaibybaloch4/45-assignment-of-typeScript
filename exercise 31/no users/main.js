var userName = ["admin", "marwa", "sumaiya", "sama", "erum"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty to find out some user");
}
else {
    for (var i = 0; i < userName.length; i++) {
        if (userName[i] === 'admin') {
            console.log("HELLO ADMIN, WOULD YPU LIKE TO SEE A STATUS REPORT?");
        }
        else {
            console.log("HELLO ".concat(userName[i], " , THANKYOU FOR LOGING IN AGAIN."));
        }
    }
}
;
