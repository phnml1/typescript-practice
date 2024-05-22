function calculateTax(price, tax) {
    // 타입 좁히기
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
    }
    return price * tax;
}
console.log(calculateTax(45, .07));
// var stuff = [1, 2, 3, 'das'];
var coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 123 });
