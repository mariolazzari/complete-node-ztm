const { createReadStream } = require("fs");
const { parse } = require("csv-parse");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

createReadStream("./kepler_data.csv")
  .pipe(parse({ comment: "#", columns: true }))
  .on("data", data => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", err => {
    console.log("Error", err);
  })
  .on("end", () => {
    habitablePlanets.forEach(planet => {
      console.log(
        `${planet["kepler_name"]} has a radius of ${planet["koi_prad"]} and an orbital period of ${planet["koi_period"]} days.`
      );
    });

    console.log(`${habitablePlanets.length} habitable planets found!`);
  });
