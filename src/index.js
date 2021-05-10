const quantifyPerLiter = (km) => (liter) => km / liter;
const spentPerKm = (value) => (km) => value / km;

const r1 = quantifyPerLiter(500)(30);
console.log(r1.toFixed(2));

const r2 = spentPerKm(5.39)(14);
console.log(r2.toFixed(2));
