let countDownFrom = (num) => {
  if (num === 0) {
    console.log(num, 'blast off!');
    return;
  }
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);
