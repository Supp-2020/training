const fs = require("node:fs");
const fileNames = ["hero", "city", "poster", "power"];
const finalData = [];

// Random element selector func
function getRandom(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
// hero element matches with the poster element 
function findMatch(heroName, posterData) {
  return posterData.find(poster => poster.includes(heroName));
}

// iterating through the hero and poster json
const posterData = require("./assets/poster.json");
for (let i = 0; i < posterData.length; i++) {
  const dataSet = {};
  const heroData = require(`./assets/hero.json`);
  const randomHero = getRandom(heroData);
  dataSet["hero"] = randomHero;

  const matchingPoster = findMatch(randomHero, posterData);
  dataSet["poster"] = matchingPoster || "No matching poster";

  // Now iterating for key and values i.e power and city
  fileNames.filter(fileName => fileName !== "hero" && fileName !== "poster")
    .forEach(fileName => {
      const data = require(`./assets/${fileName}.json`);
      dataSet[fileName] = getRandom(data);
    });
  finalData.push(dataSet);
  // single push to the array containing data from each json file randomly
} //loop

// Write into the final json file 
fs.writeFileSync("./data/data.json", JSON.stringify(finalData, null, 2), "utf-8");
console.log("The final json file is created as data.json")
