// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (flair = "*") {
  return function (string) {
    return `You are ${flair}${string}${flair}!`;
  };
};

const Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

function actionApplyer(start, array) {
  if (array.length === 0) {
    return start;
  } else {
    let newNumber = start;
    array.forEach((element) => {
      newNumber = element(newNumber);
    });
    return newNumber;
  }
}
