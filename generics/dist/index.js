// const nums: number[] = [];
var nums = [];
var colors = [];
var inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Hacked!';
var btn = document.querySelector('.btn');
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item:any): any{
//   return item;
// }
// function identity<T>(item: T):T {
//   return item
// }
// identity<number>(7);
// identity<string>('7');
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'dddc']));
console.log(getRandomElement([5, 6, 7, 1, 2, 3]));
// 알아서 추론가능
getRandomElement(['tttt', 'afewqeqwe', 'frfrfr']);
// [4,5,6,7]
// [true, false, true]
// [{},{},{}]
