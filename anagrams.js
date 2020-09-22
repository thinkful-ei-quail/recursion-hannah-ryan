// 10 Anagrams

function anagram(str, prefix = '') {
  if (str.length === 1) {
    //console.log(str, prefix);
    return [prefix + str];
  }
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    let newPrefix = prefix + str.charAt(i);

    let newString = str.substr(0, i) + str.substr(i + 1);
    // console.log(newString);
    const result = anagram(newString, newPrefix);
    resultArr = [...resultArr, ...result];
  }

  return resultArr;
}

console.log(anagram('east'));

// e + (ast)
// a + (est)
// s + (eat)
// t + (eas)
