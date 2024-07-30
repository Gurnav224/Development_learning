
const movies = [
    {
        id:1,
        title:'The Shawshank Redemption',
        genre:'Drama',
        year:1994
    },
    {
        id:2,
        title:'The GodFather',
        genre:'Crime',
        year:1972
    },
    {
        id:3,
        title:'The Dark Knight',
        genre:'Action',
        year:2008
    },
    {
        id:4,
        title:'Palp Fiction',
        genre:'Crime',
        year:1994
    }
];


const movieList = document.querySelector('#movielist');

const movieListHtml = movies.map((movie)=>`
 <div>
  <h2><strong>ID: </strong>${movie.id}</h2>
  <p><strong>Title: </strong>${movie.title}</p>
  <p><strong>Genre: </strong>${movie.genre}</p>
  <p><strong>Year: </strong>${movie.year}</p>
  <hr>
 </div>
`)


movieList.innerHTML = movieListHtml.join(' ')