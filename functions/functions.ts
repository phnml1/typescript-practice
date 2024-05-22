// // function square(num:number) {
// //   // num.toUpperCase(); 안됨
// //   return num*num;
// // }
// // function greet (person: string) {
// //   return `Hi there, ${person}`;
// // }

// const doSomeThing = (person:string, age:number, isFunny: boolean) => {};
// // square(3);
// // // square('asd') 안됨
// // // square(true) 안됨
// // greet('lee');
// doSomeThing('Chicken',15,true);

// function greets(person: string = 'stranger'):string {
//   return `Hi there, ${person}!`;
// }
// greets();

// // Return type annotation
// function square(num:number):number {
//   return num *num;
// }
// const add = (x:number, y:number) : number => {
//   return x+y;
// }

// // Return Type string | number
// function rando(num: number) {
//   if (Math.random()<0.5) {
//     return num.toString();
//   }
//   return num;
// }

// //컨텍스트를 읽어 타입추론함
// const colors = ['red','orange','yellow'];
// // color를 string으로 자동추론
// colors.map(color => {
//   return color.toUpperCase();
//   // return color.toFixed(); 안됨
// })

// //void 타입
// function printTwice(msg:string):void
//  {
//   console.log(msg);
//   console.log(msg);
// }
// // never 타입 반환하면 안됨
// function makeError(msg:string): never {
//   // return 'f'
//   throw new Error(msg);
// }

/*
void와의 차이!
void는 엄밀히 값, undefined상태로 반환
never는 반환하면안됨 반환 자체가 금지
*/

// 연습문제

const twoFer = (you:string = 'you') :string => {
  return `One for ${you}, one for me`;
}

console.log(twoFer());
console.log(twoFer('Elton'));

function isLeapYear (year:number):boolean {
  return (year%4===0 && year%100 !==0) || year % 400 ===0;
}
console.log(2023);

