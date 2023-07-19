function fibonacci(num) {
//
	let a=0 ,b=1;
	if(num <=2)
	{
		return n-1;
	}
	for(let i=0; i<n-2; i++)
		{
			let temp =b;
			b=a+b;
			a=temp;
		}
	return b;
	
}

module.exports = fibonacci;
