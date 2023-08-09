const sumAll = function(start,end) {
    if(start <0 || end <0){
        return "ERROR";
    }
    
    if(typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    
    
    let sum = 0;
    
    
    if(start > end){
        [start,end] = [end,start];
    }
    
    for(i=start;i<=end;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
