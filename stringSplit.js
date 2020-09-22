// 5. String Splitter

const stringSplit1 = (string, limiter) => {
  // base case
  if (!string.includes(limiter)) {
    return string;
  }

  const arr = [];
  let index = string.indexOf(limiter);

  let newString = string.substr(0, index);
  let endOfString = string.substr(index + 1, string.length);
  arr.push(newString);

  console.log(arr);

  return stringSplit1(endOfString, limiter);
};

const stringSplit = (string, limiter) => {
  if (!string.includes(limiter)) return string;
  const x = [string.slice(0, string.indexOf(limiter))];
  const y = string.slice(string.indexOf(limiter) + 1);
  return x.concat(stringSplit(y, limiter));
};

console.log(stringSplit('03/23/234/2352/5252', '/'));
