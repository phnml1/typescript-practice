class Player {
  // public readonly first: string;
  // public readonly last: string;
  // private score: number;
  // 파라미터 단축구문
  constructor(
    public first: string,
    public last: string,
    // protected는 정의된 클래스 혹은 자식 클래스에서 접근
    protected _score: number
  ) {
    // this.first:string = first; this.last:string = last
  }
  private secretMethod(): void {
    console.log("SECRET METHOD!");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999999;
  }
}
const elton = new Player("Elton", "steele", 100);
elton.fullName;
elton.score = 23; //'23'x
// cant elton.secretMethod();

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, Printable {
  constructor(
    public brand: string,
    public color: string
  ) {}
  print() {
    console.log(`${this.color} ${this.brand} Jacket`);
  }
}
const bike1 = new Bike("red");

const Jacket1 = new Jacket("Prada", "black");

// abstract 인스턴스 생성 불가능

/*Employee
-FullTimeEmployee
-PartTimeEmployee
*/


abstract class Employee {
  constructor(
    public first: string,
    public last: string
  ) {}
  // Employee 상속하는 모든 클래스에 getPay 필수 존재해야
  abstract getPay(): number;
  greet() {
    console.log("Hello!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('Betty','White',95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee('Bill','Billerson',24,11000);
console.log(bill.getPay());