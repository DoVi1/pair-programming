function getCalculator() {
  let numberOfOperationsDone = 0;
  const calculateSumAndReturnTotalCalls = function (a, b) {
    numberOfOperationsDone++;
    const ret = {
      sum: a + b,
      numberOfOperationsDone,
    };
    console.log('calculateSumAndReturnTotalCalls returns ', ret);

    return ret;
  };

  return calculateSumAndReturnTotalCalls;
}

window.calculateSumAndReturnTotalCalls = getCalculator();
