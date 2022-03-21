const circleOperations = require('./Circle.module');

const radius = Number(process.argv[2] || 0);

console.log(`Yarçapı ${radius} olan dairenin alanı ${circleOperations.getArea(radius).toFixed(3)}, çevresi ise ${circleOperations.getPerimeter(radius).toFixed(3)}`);