function sumAll(arr) {
  if (arr[0] > arr[1]) {
    var count = arr[1];
    var sum = count;
    var length = arr[0] - arr[1];
    for (var i = 0; i < length; i++) {
      count++;
      sum += count;
      console.log(count);
    }
  } else {
    var count = arr[0];
    var sum = count;
    var length = arr[1] - arr[0];
    for (var i = 0; i < length; i++) {
      count++;
      sum += count;
      console.log(count);
    }
  }
  return sum;
}

sumAll([1, 4]);
