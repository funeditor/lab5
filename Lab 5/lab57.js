const populations = [15, 78, 68, 88];

const percentageOfWorld1 = function (population) {
  const percent = (population / 7900) * 100;
  return `${percent}%`;
};

let percentageOfWorld2 = [];

let i = 0;
while (i < populations.length) {
  percentageOfWorld2.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentageOfWorld2);
