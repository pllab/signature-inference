var foo; 

if (Date.now())
	foo = function() { return 12; }
else 
	foo = function() { return 20; }

foo();