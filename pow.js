function squareDigits(num) {
  let arr = num.toString().split("");
  let finalDigit = "";
  arr.forEach((item) => {
    finalDigit += Math.pow(item, 2);
  });
  return Number(finalDigit);
}
