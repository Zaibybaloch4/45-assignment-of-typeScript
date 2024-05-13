var userName = ['admin', 'Safa', 'Sama', 'Erum'];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log("HELLO ADMIN, WOULD YPU LIKE TO SEE A STATUS REPORT?");
    }
    else {
        console.log("HELLO ".concat(userName[i], " , THANKYOU FOR LOGING IN AGAIN."));
    }
}
;
