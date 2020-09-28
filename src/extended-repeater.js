const CustomError = require("../extensions/custom-error");

module.exports = function repeater(my_Str, myObj) {
  let i;
  let iMax = 1;
  let bigArr = [];
  let bigArrSep = '+';


  let y;
  let yMax = 1;
  let smallArr = [];
  let smallArrSep = '|';
  let myExtStr = '';

  if (myObj.repeatTimes !== undefined) iMax = myObj.repeatTimes;
  if (myObj.separator !== undefined) bigArrSep = myObj.separator;
  if (myObj.additionRepeatTimes !== undefined) yMax = myObj.additionRepeatTimes;
  if (myObj.additionSeparator !== undefined) smallArrSep = myObj.additionSeparator;
  if (myObj.addition !== undefined) myExtStr = String(myObj.addition);
  
  for (i = 1; i <= iMax; i++) {
    smallArr = [];
    for (y = 1; y <= yMax; y++) {
      smallArr.push(myExtStr);
    }

    bigArr.push(String(my_Str) + smallArr.join(smallArrSep));
  }

  return bigArr.join(bigArrSep);;
};
  