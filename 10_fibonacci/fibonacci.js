const fibonacci = function(n) {
    n = parseInt(n);
    if(n>0){
        if(n == 1 || n==2){
            return 1;
        }
    
        return fibonacci(n-1)+fibonacci(n-2);s
    }
    else return "OOPS";
   
};

// Do not edit below this line
module.exports = fibonacci;
