// Capitalize all letters of a string

function upperString(string) {
  if (string === '') {
    return '';
  }
  const newChar = string[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration...
  return newChar + upperString(string.slice(1));
}
console.log(upperString('hello'));
