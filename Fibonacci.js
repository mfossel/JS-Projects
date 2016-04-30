//memoized Fibonacci finder

   var fibmemo = [0,1]; 
   
     var fib = function (n) { 
		var result = fibmemo[n]; 
		if (typeof result !== 'number') { 
	result = fib(n-1) + fib(n-2); 
    fibmemo[n] = result; 
} 
		return result; 
}; 


var n = prompt("Which the number of the element in the Fibonacci sequence you'd like to see:");

alert(fib(n));
