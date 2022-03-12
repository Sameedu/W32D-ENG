//Remove duplicates from an array

function remDuplicates(ar1)
{
    
    let ar2=new Set(ar1)
    let ar3=Array.from(ar2)
    console.log(ar3)

}

var ar1 = [5,"ar1","ar2","ar1",1,8,9,9,7,8];
remDuplicates(ar1)