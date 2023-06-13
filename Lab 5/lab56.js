const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (i = 0; i < listOfNeighbors.length; i++) {
  for (j = 1; j < listOfNeighbors[i].length; j++) {
    console.log(listOfNeighbors[i][j]);
  }
}
