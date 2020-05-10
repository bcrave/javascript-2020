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

console.log("*** Challenge Four ***");
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

const mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  name: "John",
  mass: "92",
  height: "1.95",
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log("Mark wins(" + mark.bmi + ")");
} else {
  console.log("John wins(" + john.bmi + ")");
}

console.log("*** Challenge Five ***");

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values ****DONE
2. Add a method to calculate the tip ****DONE
3. This method should include a loop to iterate over all the paid bills and do the tip calculations ****DONE
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop. ****DONE
EXTRA AFTER FINISHING: 
Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules ****DONE
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

let johnEatsOut = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  calcTip: function () {
    let percentage;
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = 0.2;
      } else if (this.bills[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips.push(this.bills[i] * percentage);
      this.totals.push(this.bills[i] + this.bills[i] * percentage);
    }
  },
};

johnEatsOut.calcTip();
console.log("John: ");
console.log(johnEatsOut.tips, johnEatsOut.totals);

let markEatsOut = {
  bills: [77, 375, 110, 45],
  tips: [],
  totals: [],
  calcTip: function () {
    let percentage;
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        percentage = 0.2;
      } else if (this.bills[i] < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips.push(this.bills[i] * percentage);
      this.totals.push(this.bills[i] + this.bills[i] * percentage);
    }
  },
};

markEatsOut.calcTip();
console.log("Mark: ");
console.log(markEatsOut.tips, markEatsOut.totals);

function tippingAverage(array) {
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

const johnTipAverage = tippingAverage(johnEatsOut.tips);
const markTipAverage = tippingAverage(markEatsOut.tips);

if (johnTipAverage > markTipAverage) {
  console.log(
    "John's tip average (" +
      johnTipAverage +
      ") is higher than mark's tip average (" +
      markTipAverage +
      ")"
  );
} else {
  console.log(
    "Mark's tip average (" +
      markTipAverage +
      ") is higher than John's tip average (" +
      johnTipAverage +
      ")"
  );
}
