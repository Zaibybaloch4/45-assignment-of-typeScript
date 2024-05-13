//making function
function createCar(manufacturer , model , ...options){
    //intillization a car object 
    let car = {
        manufaturer : manufacturer, 
        model: model
    };
    //add additional option to a car object
    options.forEach(option =>{
        let [key , value] = option.split(":")
        car[key.trim()] = value.trim()
    })
    return car;

}
//calling function to create car object
let myCar = createCar("toyoto","corrolla", "colour : White", "sunroof : true");
//printing
console.log(myCar)