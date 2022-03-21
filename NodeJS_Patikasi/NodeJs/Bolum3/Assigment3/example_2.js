const {getArea, getPerimeter} = require('./Circle.module');

const radius = Number(process.argv[2] || 0);

console.log(`Yarçapı ${radius} olan dairenin alanı ${getArea(radius).toFixed(3)}, çevresi ise ${getPerimeter(radius).toFixed(3)}`);