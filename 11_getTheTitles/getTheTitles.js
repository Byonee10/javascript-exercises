const getTheTitles = function(arrayOfObj) {
    return arrayOfObj.reduce(function(array,item){
        array.push(item.title);
        return array;
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;
