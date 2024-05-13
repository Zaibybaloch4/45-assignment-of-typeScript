// making function 
function makeSandwiches(...items: string[]){
    console.log("making a sandwiches with the following items \n")
    items.forEach(singleItem =>  console.log(singleItem))
    console.log("\n now enjoy sandwich")

}

//call the function 3 time with 3 different number of argument
makeSandwiches('chicken' , 'chesse' , 'mayo', 'onion')


makeSandwiches("egg", "mayo")

makeSandwiches('chesse', 'bread','chicken', 'mayo', 'egg', 'onion', 'carrot', 'cilli', 'butter')