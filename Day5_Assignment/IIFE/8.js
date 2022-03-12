// Rotate an array by k times

(function rotateArrntimes(ar1,n){
    for(let i=0; i<n; i++){
        ar1.unshift(ar1[ar1.length - 1])
        ar1.pop()
    }
    console.log(ar1)

})([1, 2, 3, 4, 5],2)