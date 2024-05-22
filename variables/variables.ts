const movies = ['Arrival', 'The Thing', 'Aliens',
'Amadeus'];
// 타입에너테이션 안쓰면 any
let foundMovie:string;

for (let movie of movies){
if (movie === 'Amadeus'){
  foundMovie = 'Amadeus';
}
}