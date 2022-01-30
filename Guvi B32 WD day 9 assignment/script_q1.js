//Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){    
    var data = JSON.parse(request.response)
    console.log(data)
    data1 = data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name)
    console.log(`countries in Asia region are : 
    ${data1}   \n`)
}