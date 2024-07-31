
const movies = [
    {id:1,title:'Movie 1',genre:'action'},
    {id:2,title:'Movie 2',genre:'comedy'},
    {id:3,title:'Movie 3',genre:'drama'},
    {id:4,title:'Movie 4',genre:'action'},
    {id:5,title:'Movie 5',genre:'comedy'},
];


const movieListContainer = document.querySelector('#movie__list');
const filterRadioButtons = document.getElementsByName('genre');


function renderMovie(selectedGenre){

    console.log(selectedGenre)

    const filterMovie = selectedGenre==='All' ? movies : movies.filter((movie)=>movie.genre===selectedGenre)

    const movieDetailsHtml = filterMovie.map((movie)=>`
    <li>
     <h2><strong>ID: </strong> ${movie.id}</h2>
     <strong>Title: </strong> ${movie.title} <br>
     <strong>Genre: </strong> ${movie.genre}
    </li>
    `)

    movieListContainer.innerHTML = movieDetailsHtml.join(" ")
}

renderMovie('All');

filterRadioButtons.forEach((radioBtn)=>(
    radioBtn.addEventListener('change',function(){
        renderMovie(this.value)
    })
))