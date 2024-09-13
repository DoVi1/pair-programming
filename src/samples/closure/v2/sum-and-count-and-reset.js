function getCalculator() {
  let numberOfOperationsDone = 0;
  const calculateSum = function (a, b) {
    numberOfOperationsDone++;
    return a + b;
  };
  const getNumberOfOperationsDone= function () {
    return numberOfOperationsDone
  };
  const resetNumberOfOperationsDone= function () {
    numberOfOperationsDone = 0
    return "Reset done!"
  };

  return {
    calculateSum,
    getNumberOfOperationsDone,
    resetNumberOfOperationsDone
  };
}

window.calculator = getCalculator();
