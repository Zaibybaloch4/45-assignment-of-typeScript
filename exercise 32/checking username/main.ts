let currentUser : string[] = ['Safa' , 'Sama' , 'Erum' , 'Sumaiya' , 'Marwa'];
//array for new user
let newUser : string[] = ['Babul', 'Sama' , 'Shahzaib', 'Shahzain' , 'Erum'];

//loop
newUser.forEach(newOneUser =>{

let ourCondition = currentUser.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())
if (ourCondition){
    console.log(`Sorry ${newOneUser} is already taken.`)

    }else{
        console.log(`This username ${newOneUser} is availabe.`)
    }
})