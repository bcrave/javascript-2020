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

let getAverage = function (...scores) {
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
