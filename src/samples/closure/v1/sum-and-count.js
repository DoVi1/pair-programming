function getCalculator() {
  let numberOfOperationsDone = 0;
  const calculateSumAndReturnTotalCalls = function (a, b) {
    numberOfOperationsDone++;
    const ret = {
      sum: a + b,
      numberOfOperationsDone,
    };
    return ret;
  };

  return calculateSumAndReturnTotalCalls;
}

window.calculateSumAndReturnTotalCalls = getCalculator();
