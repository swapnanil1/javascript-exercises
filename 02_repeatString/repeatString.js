const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  fullString = "";
  while (num > 0) {
    fullString = fullString + string;
    num--;
  }
  return fullString;
};
// console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
