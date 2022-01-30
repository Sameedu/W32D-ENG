//Print the country which uses US Dollars as currency
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){    
    var data = JSON.parse(request.response)
    console.log(data)
    data1 = data.filter((ele)=> ele.currencies[0].code === "USD").map((ele)=>ele.name)
    console.log(`countries with currency as US Dollars : 
    ${data1}   \n`)
}