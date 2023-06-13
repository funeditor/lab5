const populations = [15, 78, 68, 88];

const percentageOfWorld1 = function (population) {
  const percent = (population / 7900) * 100;
  return `${percent}%`;
};
let percentageOfWorld2 = [];
for (let i = 0; i < populations.length; i++) {
  percentageOfWorld2.push(percentageOfWorld1(populations[i]));
}

console.log(percentageOfWorld2);
