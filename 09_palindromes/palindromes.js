const palindromes = function (string) {
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  string = string.toLowerCase();
  let palinCheck = "";
  let strLength = string.length;
  for (let i = strLength - 1; i >= 0; i--) {
    palinCheck = palinCheck + string[i];
  }
  if (palinCheck === string) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
