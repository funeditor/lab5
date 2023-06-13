// BMI Calculator (LAB 5.8.1)

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  caclBMI: function (BMI) {
    BMI = 78 / (this.height * this.height);
    return BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  caclBMI: function (BMI) {
    BMI = 78 / (this.height * this.height);
    return BMI;
  },
};

if (mark.caclBMI() > mark.caclBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.caclBMI()}) is higher than ${
      john.fullName
    }'s BMI (${john.caclBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.caclBMI()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.caclBMI()})`
  );
}

// Tip Calculator (LAB 5.8.2)

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (i = 0; i < bill.length; i++) {
  bill[i] >= 50 && bill[i] <= 300
    ? tips.push(bill[i] * 0.15)
    : tips.push(bill[i] * 0.2);

  total.push(tips[i] + bill[i]);
}

console.log(tips);
console.log(total);

// Bonus
let sum = 0;
for (i = 0; i < bill.length; i++) {
  sum = sum + bill[i];
}

console.log(sum);
const caclAverage = sum / bill.length;
console.log(caclAverage);
