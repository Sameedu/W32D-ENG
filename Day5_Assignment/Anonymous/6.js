// Return median of two sorted arrays of the same size

function getMedian(ar1, ar2)
{
	if ((ar1.length != ar2.length))
    {
        console.log("Both arrays in input are of unequal length")
    }
    else if (ar1.length == ar2.length == 0)
    {
        console.log("Empty arrays not allowed")
    }
    else
    {
        let ar3=[]
        let ar4 = ar3.concat(ar1,ar2)
        let sorted=ar4.sort(function(a, b){return a-b})
        let len = sorted.length
        
        let result = 0
        result = Math.ceil(((sorted[len/2] + sorted[(len/2) - 1])/2))
        console.log(`Median of two sorted arrays given is ${result}`)

    }

}

var ar1 = [5,1,8,9];
var ar2 = [3,2,9,23];
getMedian(ar1, ar2);
