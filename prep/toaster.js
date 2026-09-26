function sixToast(num) {
  if (num > 6) {
    return num - 6;
  } else if (num < 6) {
    return 6 - num;
  } else {
    return 0;
  }
}
console.log(sixToast(6));
