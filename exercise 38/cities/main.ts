//making function
function describeCities (city : string ,country : string = "pakistan"){
    console.log(`${city}  is in ${country}`)
}

// calling the function
describeCities("karachi;")
describeCities("lahore")
describeCities("istanbul" , "turkey")