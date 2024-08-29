const leapYears = function (checkYear) {
  if (checkYear % 100 !== 0 || checkYear % 400 == 0) {
    if (checkYear % 4 == 0) return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
