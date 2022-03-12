//	Return all the palindromes in an array

var findPalindrome = (a) =>{
    op =[]
for(i=0;i<a.length;i++)

{
  const len = a[i].length;
  let marker="off"

  for (let j = 0; j < Math.floor(len/2); j++) {

    if (a[i][j] !== a[i][len - 1 - j]) {
      marker = "on"
    }
  }
  if (marker=="off"){
      op.push(a[i])
}
  
}
 console.log(op)
}

findPalindrome(["naan","civic","kayak","even", "maker"])