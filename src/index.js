const arrayDay = [6, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arrayHours = [1, 6, 6, 22, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arrayMinutes = [7, 16, 13, 13, 46, 43, 14, 29, 9, 4, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arraySeconds = [53, 32, 17, 55, 13, 12, 2, 3, 49, 48, 42, 41, 33, 4, 7, 52, 5, 36, 43, 23, 49, 32, 28, 50, 25, 28];

const convertDaysInHours = arrayDay.map((hours) => hours * 24);
console.log(convertDaysInHours); // Hours

const convertHoursInMinutes = arrayHours.map((minutes) => minutes * 60);
console.log(convertHoursInMinutes); // Minutes

const convertMinutesInSeconds = arrayMinutes.map((seconds) => seconds * 60);
console.log(convertMinutesInSeconds); // Seconds

const seconds = arraySeconds.reduce((acumulador, item) => acumulador + item);
console.log(seconds);

const allArraySeconds = convertDaysInHours.concat(convertHoursInMinutes, convertMinutesInSeconds);
console.log(allArraySeconds); // All Array together

const totalInSeconds = allArraySeconds.reduce((acumulador, item) => acumulador + item);
console.log(totalInSeconds); // Total in seconds

const sumTotal = (x) => (y) => x + y;
console.log(sumTotal(14964)(782));
