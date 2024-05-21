function printName(person:{ first:string , last:string}): void {
  console.log(`${person.first} ${person.last}`);
}

printName({first: 'Thomas', last: 'Jenkins'});


type Person = {
  x:number;
  y:number;
}
let coordinate:Person = { x:34, y:2 };

let con = (person:Person) => {console.log(person.x,person.y)};
function randomCoordinate(): Person {
  return  {x: Math.random(), y:Math.random()};
}
// 초과 프로퍼티
// 객체리터럴로 직접 전달할때는 에러
printName({first: 'Mick', last: 'Jagger', age: 473});
const singer = {first: 'Mick', last: 'Jagger', age:473, isAlive: true}
printName(singer);

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {producer:string; writer: string};
}
function calculatePayout (song: Song): number {
  return song.numStreams * 0.0033

}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

type User = {
  readonly id: number,
  username: string;
}

const user: User = {
  id: 12837,
  username:'catgirl'
}
console.log(user.id);
// 재할당 x user.id = 238974; 에러

type Circle = {
  radius: number;
}
type Colorful = {
  color: string;
}
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCirlce = {
  radius: 4,
  color: 'yellow',
}