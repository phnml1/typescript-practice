const getRandomElementT = <T,>(list: T[]): T =>{
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}