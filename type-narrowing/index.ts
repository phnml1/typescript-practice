// typeof Guard
function triple(value: number | string) {
  if (typeof value == 'string') {
    return value.repeat(3);
  }
  return value * 3
}

// Truthiness Guard
const el = document.getElementById('idk');
if (el) {
  //HTML Element
  el
} else {
  el
}
const printLetters = (word?: string) => {
  if(word) {
    // if문 없을시 에러
    for(let char of word) {

    }
  } else {
    word
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};

// Equality narrowing
const someFunc = (x: string | number, y: string|boolean) => {
  if (x === y) {
    x.toUpperCase();
    // x,y 모두 string == 시에는 아님
  }
}
someFunc(3,"3");

// in 연산자
interface Movie {
  title: string,
  duration: number
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
  if('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

getRuntime({title: 'Amadeus', duration: 140});
getRuntime({title: 'Amadeus', numEpisodes:80, episodeDuration:30, duration: 140});


function printFullDate(date: string | Date) {
  if(date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString);
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}
function printName(entity: User | Company) {
  if (entity instanceof User) {

    // entity User
  }
  else {
    // entity Company
  }
}

// 타입 명세

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}
// animal is Cat을 통해 animal이 Cat인지 아닌지를 판별한다는 것을 알려줌
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal : Cat|Dog): string {
  if (isCat(animal)) {
    animal
    return "Meow";
  } else {
    animal
    return "woop"
  }
}

// 판별 유니온 타입들의 공통점 차이점을 모를 시
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster"
}

interface Cow {
  name: string;
  wegiht:number;
  age: number;
  kind: "cow"
}

interface Pig {
  name: string;
  wegiht: number;
  age: number;
  kind: "pig"
}
type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimal (animal: FarmAnimal) {
  switch(animal.kind) {
    case"pig":
      return 'Oink';
    case"cow":
      return 'Moooo';
    case"rooster":
      return 'frfrfreee';
    default:
      // 여기 까지 오지말 것 (case 다 처리했는지 확인하는 것)
      const _exhaustiveCheck:never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "stevie Chicks",
  weight:2,
  age: 1.5,
  kind: 'rooster',
};

console.log(getFarmAnimal(stevie));

// 소진검사, never 검사
