const palindromes = function (str) {
    let listedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
    console.log(listedStr);
    let len = Math.floor(listedStr.length/2);
    for(let i = 0; i<len;i++){
        if(listedStr[i] !== listedStr[listedStr.length-i-1]){
            return false;
        }
        
    }
    return true;


};  

// Do not edit below this line
module.exports = palindromes;
