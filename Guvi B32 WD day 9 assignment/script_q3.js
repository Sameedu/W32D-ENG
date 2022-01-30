//Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){    
    var data = JSON.parse(request.response)
    console.log(data)
    data1 = data.forEach((ele)=>console.log(`country: ${ele.name},
    capital: ${ele.capital}
    flag: ${ele.flag} \n`))
}
