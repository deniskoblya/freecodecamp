function isPalindrome(x) {
  if (x.split("").reverse().join("").toLowerCase() == x.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
