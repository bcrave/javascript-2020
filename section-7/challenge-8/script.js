/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownElement {
  constructor(name, buildYear, area, numOfTrees) {
    super(name, buildYear);
    this.area = area; // acres
    this.numOfTrees = numOfTrees;
  }

  treeDensity = function () {
    const density = this.numOfTrees / this.area;
    console.log(`${this.name} has a density of ${density} tree(s) per acre.`);
  };

  parkAge = function () {
    return 2020 - this.buildYear;
  };
}

class Street extends TownElement {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Wicker Park", 1870, 80, 500),
  new Park("Rose Park", 1960, 100, 1500),
  new Park("Humboldt Park", 2010, 10, 10),
];

const allStreets = [
  new Street("Milwaukee Ave.", 1830, 20, 4),
  new Street("North Ave.", 1850, 30),
  new Street("Grand Ave.", 1900, 3, 2),
  new Street("Ocean Ave.", 1980, 50, 5),
];

function calc(arr) {
  const sum = arr.reduce((previous, current, index) => previous + current, 0);

  return [sum, Math.round(sum / arr.length)];
}

function parkReport(p) {
  console.log("------PARK REPORT--------");
  // 1. Tree density of each park in town
  allParks.forEach((park) => {
    park.treeDensity();
  });

  // 2. Average age of each town's park
  const ages = p.map((park) => new Date().getFullYear() - park.buildYear);
  const [totalAge, averageAge] = calc(ages);
  console.log(
    `Our ${p.length} parks have an average age of about ${averageAge} years.`
  );

  // 3. Name of park with more than 1000 trees
  const i = p.map((park) => park.numOfTrees).findIndex((el) => el > 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);

  //   p.forEach((park) => {
  //     if (park.numOfTrees > 1000) {
  //       console.log(`${park.name} has ${park.numOfTrees} trees.`);
  //     }
  //   });
}

function streetReport(s) {
  console.log("-----STREET REPORT------");
  // 1. Total and average length of the town's streets.
  const [totalLength, averageLength] = calc(s.map((street) => street.length));
  console.log(
    `Our ${s.length} streets have a total length of about ${totalLength} miles and an average length of about ${averageLength} miles.`
  );

  //   let totalLength = 0;
  //   s.forEach((street) => {
  //     totalLength += street.length;
  //   });
  //   const averageLength = totalLength / s.length;
  //   const result = [totalLength, averageLength];

  //   console.log(
  //     `The total length of the town's streets is ${
  //       result[0]
  //     } miles with an average of ${Math.round(result[1])} miles per street.`
  //   );

  // 2. Size classification of all streets.
  console.log("------STREET CLASSIFICATION REPORT------");
  s.forEach((el) => el.classifyStreet());
}

parkReport(allParks);
streetReport(allStreets);
