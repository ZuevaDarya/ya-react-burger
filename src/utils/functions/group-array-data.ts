const groupArrayData = <T>(array: T[], count: number) => {
  const resultArr = [];

  for (let start = 0; start < array.length; start += count) {
    resultArr.push(array.slice(start, start + count));
  }

  return resultArr;
};

export default groupArrayData;
