function evenNum(num) {
  return num / 2;
}
function oddNumber(num) {
  return 3 * num + 1;
}
function longestCollatzSequence(limit) {
  let chainLength,
    maxValueObj = {
      maxValue: 1,
      num: 2,
    };
  let num = 2;
  while (num < limit) {
    chainLength = 0;
    let newNum = num;
    while (newNum != 1) {
      chainLength++;
      newNum = newNum % 2 == 0 ? evenNum(newNum) : oddNumber(newNum);
    }
    chainLength++;
    if (chainLength > maxValueObj.maxValue) {
      maxValueObj.maxValue = chainLength;
      maxValueObj.num = num;
    }
    // console.log(maxValueObj);
    num++;
  }
  console.log(maxValueObj.num);
  return maxValueObj.num;
}

longestCollatzSequence(5847);
