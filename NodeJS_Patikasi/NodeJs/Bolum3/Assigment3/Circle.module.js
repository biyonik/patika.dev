const getArea = (radius) => {
    return Math.PI * (radius ** 2);
}

const getPerimeter = (radius) => {
    return 2 * Math.PI * radius;
}

module.exports = {
    getArea,
    getPerimeter
}