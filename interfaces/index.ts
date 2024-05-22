// 오직 객체에만 적용됨
interface Points {
  x: number;
  y: number;
}

const pt: Points = { x: 123, y: 1234 };

interface Persons {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;

}

const thomas: Persons = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 123213,
  sayHi: () => {
    return 'Hello';
  }
};

thomas.first = "kasjdh";
// thomas.id = 238974; 안됨

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
  // applyDiscount: (discount: number) => number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price:100,
  applyDiscount(discount:number) {
      const newPrice = this.price * (1-discount);
      this.price = newPrice;
      return this.price;
  },
}

interface Dog {
  name: string,
  age: number;
}

interface Dog {
  breed: string;
  bark() : string;
}

const elton: Dog = {
  name:'Elton',
  age: 0.5,
  breed:'Austrian',
  bark() {
    return 'WOOF WOOF';
  }
}

// 인터페이스 확장
interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'Bark!';
  },
  job: 'guide dog',
}

interface Human {
  name: string
}

interface Employee {
  readonly id: number,
  email: string;
}

interface Engineer extends Human, Employee {
  level: string,
  languages:string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 123897,
  email: 'pierre@gmail.com',
  level: 'senior',
  languages: ['JS','Python'],
}

/**
모든 종류의 타입 별칭을 인터페이스로 대체할 수는 없다.
인터페이스는 객체만
 **/

//인터페이스는 이미 열린 인터페이스를 다시 추가할 수 있음( type은 안됨)
/*
type Chicken = {
  breed: string
}
type Chicken = {
  bb: string
} 안됨
*/

// interfaces는 extends 기능있음 타입은 x 대신 &