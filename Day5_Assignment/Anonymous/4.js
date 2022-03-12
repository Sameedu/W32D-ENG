//	Return all the prime numbers in an array

var findprime = function(a)
{
op =[]
for(i=0;i<a.length;i++)
{
for(j=2;j<a[i];j++)
{
var c=0
if((a[i]%j)== 0)
{
break
}
else
{
c=c+1
}
}
if(c>0)
{
op.push(a[i])
}
}
console.log(op)
}
findprime([13,17,19,21,22])

