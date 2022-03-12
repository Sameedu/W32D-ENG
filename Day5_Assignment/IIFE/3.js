//Sum of all numbers in an array
(function(a)
{
sum = 0
for(i=0;i<a.length;i++)
{
sum = sum+parseInt(a[i])
}
console.log("Sum of all numbers in an array is "+ sum)


})([34,45,"73"])