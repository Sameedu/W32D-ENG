//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){    
    var data = JSON.parse(request.response);
    for (var i = 0; i<data.length;i++){
        console.log(data[i].flag)
    }
}
