const convertToCelsius = function(F) {
  let ans = (F-32)*5/9;
  return Math.round(ans*10)/10;
};

const convertToFahrenheit = function(C) {
  let ans = (C*9)/5+32;
  return Math.round(ans*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
