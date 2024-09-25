import { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const handleChange = (e) =>{
    const {value,name} = e.target;
    setFormData((prev) => ({...prev,[name]:value}))
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('https://movies-backend-mocha.vercel.app/movies',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });

        if(!response.ok) {
            throw "Failed to add movie"
        }

        const data = await response.json();

        console.log('new movie added successfully',data)

    } catch (error) {
        console.error('error to adding new movie',error)
    }
  }

  return (
    <div>
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input 
          type="text" 
          name="title" 
          id="title" 
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="releaseYear">Release Year:</label>
          <input 
          type="text" 
          name="releaseYear" 
          id="releaseYear" 
            value={formData.releaseYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input 
          type="text" 
          name="genre" 
          id="genre"
          value={formData.genre}
          onChange={handleChange}
           />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input 
          type="text" 
          name="director" 
          id="director" 
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="actors">Actors</label>
          <input 
          type="text" 
          name="actors" 
          id="actors" 
            value={formData.actors}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language: </label>
          <input 
          type="text" 
          name="language" 
          id="langauge"
          value={formData.language}
          onChange={handleChange}
           />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input 
          type="text" 
          name="country" 
          id="country"
          value={formData.country}
          onChange={handleChange}
           />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input 
          type="text"
           name="rating"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="plot">Plot:</label>
            <input 
            type="text" 
            name="plot" 
            id="plot"
            value={formData.plot}
            onChange={handleChange}
             />
        </div>
        <div>
          <label htmlFor="awards">Awards: </label>
          <input 
          type="text" 
          name="awards" 
          id="awards"
          value={formData.awards}
          onChange={handleChange}
           />
        </div>
        <div>
          <label htmlFor="posterUrl">Poster Url: </label>
          <input 
          type="text" 
          name="posterUrl" 
          id="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
           />
        </div>
        <div>
          <label htmlFor="trailerUrl">Trailer Url: </label>
          <input 
          type="text" 
          name="trailerUrl" 
          id="trailerUrl"
          value={formData.trailerUrl}
          onChange={handleChange}
           />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
