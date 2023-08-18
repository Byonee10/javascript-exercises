const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arg) {
  let array = [...arg];
	if(array.length==0){
    return 0;
  }
  let sum = 0;
  for(let i = 0;i<array.length;i++){
    sum+=array[i];
  }
  return sum;
};

const multiply = function(arg) {
  let nums = [...arg];
  return nums.reduce((multiplication,num) => multiplication*=num,1);
  
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if(n==1 || n == 0){
    return 1;
  }

  return n*factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
