// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
inputEl.value = 'Hacked!';

const btn = document.querySelector<HTMLButtonElement>('.btn');


function numberIdentity (item: number): number {
  return item;
}
function stringIdentity (item: string): string {
  return item;
}
function booleanIdentity(item:boolean):boolean{
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

function getRandomElement<T>(list: T[]): T{
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}
console.log(getRandomElement<string>(['a','b','dddc']));
console.log(getRandomElement<number>([5,6,7,1,2,3]))

// 알아서 추론가능
getRandomElement(['tttt','afewqeqwe','frfrfr'])

// [4,5,6,7]
// [true, false, true]
// [{},{},{}]

function merge<T extends object, U extends object>(object1:T, object2:U) {
  return {
    ...object1,
    ...object2,
  }
}

const comboObj = merge({name:'colt'},{pets: ['blue','elton']});
console.log(merge({name: 'Colt'},{num: 9}));

interface Lengthy {
  length: number;
}

// function printDoubleLength<T extends Lengthy>(thing:T) :number {
//   return thing.length * 2;
// }
function printDoubleLength(thing: Lengthy) :number {
  return thing.length * 2;
}

printDoubleLength('asdasd');

// printDoubleLength(234); 오류

function makeEmptyList<T = number>() :T[] {
  return []
}
const numsList = makeEmptyList();
const bools = makeEmptyList<boolean>();

interface Song{
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}
class PlayList<T> {
  public queue: T[] = [];
  add(el:T) {
    this.queue.push(el)
  }
}
const songs = new PlayList<Song>();

const videos = new PlayList<Video>();

videos.add({title:'affa',creator:'frrff',resolution:'frrrf'});