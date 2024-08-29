const fibonacci = function (limit) {
  if (limit == 1 || limit == 2) {
    return 1;
  } else if (limit == 0) {
    return 0;
  } else if (limit < 0) {
    return "OOPS";
  } else {
    if (typeof limit == "string") limit = Number(limit);
    previous = 1;
    current = 1;
    let next = 0;
    let count = 3;
    while (count <= limit) {
      next = previous + current;
      previous = current;
      current = next;
      count++;
    }
    return next;
  }
};
// Do not edit below this line
module.exports = fibonacci;
