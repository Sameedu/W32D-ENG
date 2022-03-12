//Print odd numbers in an array
let odd = (a) => {
    for(i=0;i<a.length;i++)
        {
        if ((a[i]%2)==1)
            {
                console.log(a[i] + " is odd")
            }
        }
}

odd([1,3,8]);

