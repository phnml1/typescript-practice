// const stuff: (string | number) [] = [1, 'asd', 'asdaasd',2];

// 길이와 타입이 고정된 배열 타입
const color: [number, number, number] = [255,0,45];

type HTTPResponse = [number, string];
// ['OK',200]은 안됨
const goodRes: HTTPResponse = [200, 'OK']
// goodRes[0] = '200'; 이건 안됨
goodRes.push(123)
goodRes.pop();

const enum OrderStatus {
  PENDINGs,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// enum ArrowKeys {
//   UP = 'up',
//   DOWN = 'down',
//   LEFT = 'left',
//   RIGHT = 'right',
// }
