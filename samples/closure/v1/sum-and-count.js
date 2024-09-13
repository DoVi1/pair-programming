function outerWrapper() {
  let numberOfOperationsDone = 0;
  const calculateSumAndReturnTotalCalls = function (a, b) {
    numberOfOperationsDone++;
    const ret = {
      sum: a + b,
      numberOfOperationsDone,
    };
    console.log('Execute returns ', ret);

    return ret;
  };

  return calculateSumAndReturnTotalCalls;
}

window.calculateSumAndReturnTotalCalls = outerWrapper();
