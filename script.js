function fibonacci(num) {
// your code here
	let n1 = 0, n2 = 1;
	if(num==1) return n2;
	if(num==2) return n1;
for (let i = 3; i <= num; i++) 
{
    
   let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
	return n2;
 
  
}

module.exports = fibonacci;
