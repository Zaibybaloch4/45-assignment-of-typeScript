//making function
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //intillization a car object 
    var car = {
        manufaturer: manufacturer,
        model: model
    };
    //add additional option to a car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//calling function to create car object
var myCar = createCar("toyoto", "corrolla", "colour : White", "sunroof : true");
//printing
console.log(myCar);
