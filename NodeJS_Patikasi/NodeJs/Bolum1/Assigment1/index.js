
const getArea = (radius) => {
    const area = Math.PI * (radius ** 2);
    return area;    
}

const radius = Number(process.argv[2]) || 0;

const calculatedArea = getArea(radius).toFixed(3);
console.log(`Yarıçapı ${radius} olan dairenin alanı ${calculatedArea}'dir`);