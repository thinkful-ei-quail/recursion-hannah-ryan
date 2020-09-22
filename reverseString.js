// 3. Reverse String

const reverseString = (str) => {
  // base case
  if (str === '') {
    return '';
  }
  return reverseString(str.substr(1)) + str.charAt(0);
};

console.log(reverseString('cool'));
