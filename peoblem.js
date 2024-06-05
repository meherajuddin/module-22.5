// 1.feet to inche-------------------------------
function feetTOinch(feet) {
  return feet * 12;
}
const inche = feetTOinch(1);
console.log(inche);

// 2.odd Number---------------
for (let i = 19; i <= 53; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 3.centimeter to meter------------------
function cetimeterToMeter(cetimeter) {
  return cetimeter / 100;
}
const meter = cetimeterToMeter(5000);
console.log("meter", meter);

