// fizz-buzz

const input = [4, 2, 3, 5, 1, 9, 8, 7, 6, 0];

input.map((i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ": fizz buzz");
  } else if (i % 3 === 0) {
    console.log(i + ": fizz");
  } else if (i % 5 === 0) {
    console.log(i + ": buzz");
  } else {
    console.log(i);
  }
});
