let userName : string[] = ['admin' , 'Safa' , 'Sama' , 'Erum'];

for (let i = 0; i < userName.length; i++){
    if (userName[i] === 'admin'){
        console.log("HELLO ADMIN, WOULD YPU LIKE TO SEE A STATUS REPORT?");
    }
    else{
        console.log(`HELLO ${userName[i]} , THANKYOU FOR LOGING IN AGAIN.`)
    }
};
