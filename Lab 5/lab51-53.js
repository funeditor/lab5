const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 100,
  neighbors: ["Lao", "Campuchia", "China"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    const isIsland = this.neighbors.length === 0 ? true : false;
    console.log(isIsland);
    return isIsland;
  },
};

myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

myCountry.describe();
myCountry.checkIsland();
