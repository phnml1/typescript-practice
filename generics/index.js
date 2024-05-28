var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
console.log(merge({ name: 'Colt' }, { num: 9 }));
// function printDoubleLength<T extends Lengthy>(thing:T) :number {
//   return thing.length * 2;
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('asdasd');
// printDoubleLength(234); 오류
function makeEmptyList() {
    return [];
}
var numsList = makeEmptyList();
var bools = makeEmptyList();
var PlayList = /** @class */ (function () {
    function PlayList() {
        this.queue = [];
    }
    PlayList.prototype.add = function (el) {
        this.queue.push(el);
    };
    return PlayList;
}());
var songs = new PlayList();
var videos = new PlayList();
videos.add({ title: 'affa', creator: 'frrff', resolution: 'frrrf' });
