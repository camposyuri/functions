const arrayDay = [6, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arrayHours = [1, 6, 6, 22, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arrayMinutes = [7, 16, 13, 13, 46, 43, 14, 29, 9, 4, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arraySeconds = [53, 32, 17, 55, 13, 12, 2, 3, 49, 48, 42, 41, 33, 4, 7, 52, 5, 36, 43, 23, 49, 32, 28, 50, 25, 28];

const sizeArray = (acumulador, item) => acumulador + item;
const twentyFour = (item) => item * 24;
const sixty = (item) => item * 60;

// Passando uma função como parâmetro para outra função
const convertDaysInHours = arrayDay.map(twentyFour);
console.log(convertDaysInHours); // Hours

// Passando uma função como parâmetro para outra função
const convertHoursInMinutes = arrayHours.map(sixty);
console.log(convertHoursInMinutes); // Minutes

// Passando uma função como parâmetro para outra função
const convertMinutesInSeconds = arrayMinutes.map(sixty);
console.log(convertMinutesInSeconds); // Seconds

// Passando uma função como parâmetro para outra função
const seconds = arraySeconds.reduce(sizeArray);
console.log(seconds);

const allArraySeconds = convertDaysInHours.concat(convertHoursInMinutes, convertMinutesInSeconds);
console.log(allArraySeconds); // All Array together

// Passando uma função como parâmetro para outra função
const totalInSeconds = allArraySeconds.reduce(sizeArray);
console.log(totalInSeconds); // Total in seconds

const sumTotal = (x) => (y) => x + y;
console.log(sumTotal(14964)(782));
