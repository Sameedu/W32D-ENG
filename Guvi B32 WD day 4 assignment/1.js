var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


 var obj3 = JSON.stringify(obj1)
 var obj4 = JSON.stringify(obj2)

if(obj3.length == obj4.length && obj3.name === obj4.name && obj3.age === obj4.age){
    console.log("Both objects are similar")    
}


