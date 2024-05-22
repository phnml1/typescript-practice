function calculateTax(price: number | string, tax:number) {
  // 타입 좁히기
  if(typeof price === 'string') {
    price = parseFloat(price.replace('$',''));
  }
  return price * tax;
}

console.log(calculateTax(45,.07));

type Point = {
  lat:number;
  long:number;
}
type Loc = {
  x:number;
  y:number;
}
const stuff: (number | string)[] = [1,2,3,'das'];

const coords:(Point | Loc)[] = [];

coords.push({lat:321.213, long:23.334});
coords.push({x:213,y:123});

let zero: 0 = 0;
let mood: 'happy' | 'sad' = 'happy';
mood = 'sad';

type DayOfWeek = |'Monday'|'Tuesday'|'Wednesday'|'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 0;

// let today:DayOfWeek = 'Wed' 에러

