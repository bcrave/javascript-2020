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

// var markBMI = BMI(50, 175);
// var johnBMI = BMI(55, 200);

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
