	//Convert all the strings to title caps in a string array
	(function(a){
		var oparray = []
		for(i=0;i<a.length;i++)
		{
			c= a[i].split("")
			c[0]=c[0].toUpperCase();
			c=c.join("")
			oparray.push(c)
		}
			console.log(oparray)
	})(["my","name","is","ram"]);



