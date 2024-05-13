
let guestsList : string[] =["safa" , "erum" , "sama"];
 
let unableToCome = guestsList[0]

console.log(unableToCome , "can not come");
guestsList.splice(0,1, "marwa");


 // message 
 console.log("Great news! I found a bigger dinner table!");

 // adding more guest in our list

 guestsList.unshift("shanzay");

 

 guestsList.push("salwa"); 

 let middleIndex: number = Math.floor(guestsList. length / 2);
 guestsList.splice(middleIndex , 0 , "sumaiya");
 console.log("updated list of guests");



 guestsList.forEach( oneguest => console.log( `Assalamalaikum ${oneguest} would you like to have a dinner with me?`))

// for removing guests
 console.log('unfortunately , the new dinner table wont arrive on time, so i can invite only two guest');
 while(guestsList.length > 2){
let removedGuest =guestsList.pop();
console.log(`SORRY , ${removedGuest} I cant invite you in dinner`);
 }

 //two lucky people invites
 console.log("invitation to the last 2 guests");
 guestsList.forEach(lastTwo => console.log (`Hi ${lastTwo} , you are the still invited`));

 //removing last two guests
 guestsList.pop();
 guestsList.pop();


 console.log('empty list' , guestsList);