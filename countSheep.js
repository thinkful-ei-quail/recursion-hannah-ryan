// 1. Counting Sheep

const sheep = (num) => {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(num, 'sheep jumps over the fence');
  return sheep(num - 1);
};

sheep(5);
