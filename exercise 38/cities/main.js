"use strict";
//making function
function describeCities(city, country = "pakistan") {
    console.log(`${city}  is in ${country}`);
}
// calling the function
describeCities("karachi;");
describeCities("lahore");
describeCities("istanbul", "turkey");
