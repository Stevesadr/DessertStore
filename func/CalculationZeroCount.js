export const zeroPrice = (num) => {
  let zero = false;
  num = num / 0.5;
  if (num % 2 === 0) {
    return (zero = true);
  } else {
    return (zero = false);
  }
};
