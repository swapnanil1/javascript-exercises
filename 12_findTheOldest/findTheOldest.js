const findTheOldest = function (array) {
  const arrLen = array.length;
  let oldest = {};
  let oldestDOB = {};
  let max = 0;
  for (let i = 0; i < arrLen; i++) {
    if (array[i].yearOfDeath == undefined) return array[i];
    else {
      let age = array[i].yearOfDeath - array[i].yearOfBirth;
      if (max < age) {
        max = age;
        oldest = array[i];
      }
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
