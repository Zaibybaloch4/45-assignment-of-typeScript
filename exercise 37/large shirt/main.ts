//making a function
function makeShirt (size : string = "Large" , printedMessage : string = "I Love Typescript"){
      console.log(`creating a ${size} size shirt with the ${printedMessage} print on a shirt`)
}
// calling a function by default values
makeShirt();

// calling a function now with medium size and by default msg.
makeShirt("medium");

// calling a function now with small size
makeShirt("small" , "I Love javascript")