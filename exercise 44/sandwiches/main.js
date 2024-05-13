// making function 
function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwiches with the following items \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n now enjoy sandwich");
}
//call the function 3 time with 3 different number of argument
makeSandwiches('chicken', 'chesse', 'mayo', 'onion');
makeSandwiches("egg", "mayo");
makeSandwiches('chesse', 'bread', 'chicken', 'mayo', 'egg', 'onion', 'carrot', 'cilli', 'butter');
