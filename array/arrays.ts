const activeUsers: string[] = [];
activeUsers.push('Tony');

const ageList: number[] = [12,33,54];

// ageList[0] = 'ddd'; 오류

type Point = {
  x:number,
  y:number
}
const coords: Point[] = [];

coords.push({x:23, y:8});
// 에러 coords.push({x:23, y:'8'});

const board :string[][] = [['X', 'O', 'X'], ['X','O','X'],['X','O','X']];

const demo : number [][][] = [[[1]]];

const ages:number[] = [];

const gameBoard:string[][] = [];

type Product = {
  name: string;
  price: number;
}

function getTotal(products: Product[]) :number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}