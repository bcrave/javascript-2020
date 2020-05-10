console.log("*** Challenge One ***");
/*
BMI = mass / (height * height)
mass in kg, height in meters

1. Store Mark and John's mass and height in variables.
2. Calculate both their BMIs.
3. Determine whose BMI is heigher.
4. Print string to console.

massMark = 50;
massJohn = 55;
heightMark = 175;
heightJohn = 200;
 */

function BMI(mass, height) {
  var result = mass / (height * height);
  return result;
}

var markBMI = BMI(78, 1.69);
var johnBMI = BMI(92, 1.95);

if (markBMI > johnBMI) {
  console.log(
    "Mark's BMI (" + markBMI + ") is higher than John's BMI (" + johnBMI + ")"
  );
} else {
  console.log(
    "John's BMI (" + johnBMI + ") is higher than Mark's BMI (" + markBMI + ")"
  );
}

console.log("*** Challenge Two ***");

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

const getAverage = (...scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  average = sum / scores.length;

  return average;
};

const johnAverage = getAverage(89, 120, 103);
const mikeAverage = getAverage(116, 94, 123);

if (johnAverage > mikeAverage) {
  console.log("John wins with a points average of " + johnAverage);
} else {
  console.log("Mike wins with a points average of " + mikeAverage);
}

console.log("*** Challenge Three ***");

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

function calculateTip(...bills) {
  let tipsAndTotals = {
    tips: [],
    totals: [],
  };

  for (i = 0; i < bills.length; i++) {
    if (bills[i] < 50) {
      tipsAndTotals.tips.push(bills[i] * 0.2);
      tipsAndTotals.totals.push(bills[i] + bills[i] * 0.2);
    } else if (bills[i] < 200) {
      tipsAndTotals.tips.push(bills[i] * 0.15);
      tipsAndTotals.totals.push(bills[i] + bills[i] * 0.15);
    } else {
      tipsAndTotals.tips.push(bills[i] * 0.1);
      tipsAndTotals.totals.push(bills[i] + bills[i] * 0.1);
    }
  }
  return tipsAndTotals;
}

console.log(calculateTip(124, 48, 268));
