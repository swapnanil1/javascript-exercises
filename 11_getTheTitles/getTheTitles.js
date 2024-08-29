const getTheTitles = function (array) {
  let result = [];
  let arrLen = array.length;
  for (let i = 0; i < arrLen; i++) {
    result.push(array[i].title);
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
