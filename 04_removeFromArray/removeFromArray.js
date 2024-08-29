const removeFromArray = function (firstArr, ...extras) {
  let result = [];
  for (const ele of firstArr) {
    if (!extras.includes(ele)) result.push(ele);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
