

const movies  = [
    {id:1,title:'Movie 1',genre:'action'},
    {id:2,title:'Movie 2',genre:'drama'},
    {id:3,title:'Movie 3',genre:'action'},
    {id:4,title:'Movie 4',genre:'comedy'},
    
]


const movieListContainer = document.querySelector('#movieListContainer');
const genreGroups = document.querySelector('#genreGroups');



const movieList = movies.reduce((accumulator,currentMovie)=>{

   

    const listItem = document.createElement('li');
    listItem.textContent = `${currentMovie.title} - ${currentMovie.genre}`;
    movieListContainer.appendChild(listItem);

    return accumulator

},{})


const group = movies.reduce((accumulator,currentMovie)=>{

    if(!accumulator[currentMovie.genre]){
        accumulator[currentMovie.genre]= [currentMovie.title]

    }
    else{
        accumulator[currentMovie.genre].push(currentMovie.title)
    }
    return accumulator
},{});








const genreKeys = Object.keys(group);


const renderMovie = genreKeys.map((genre)=>{
 return   `
    <div>
    <h3><strong>Genre: </strong> ${genre} </h3>
    <p><strong>Movies: </strong>: ${group[genre]}
    </div>
    <hr>
    `
})


genreGroups.innerHTML = renderMovie.join(' ')