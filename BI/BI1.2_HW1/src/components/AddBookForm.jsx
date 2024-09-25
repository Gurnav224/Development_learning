import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.table(formData)


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await fetch(`https://book-backend-seven.vercel.app/books`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });

        if(!response.ok){
            throw "Error Failed to fetch"
        }

        const data = await response.json();

        console.log('new book added successfully',data)

    } catch (error) {
        console.error('error ',error)
    }
  }



  return (
    <div>
      <h1>Add New Book</h1>
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
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="publishedYear">Published Year: </label>
          <input
            type="text"
            name="publishedYear"
            id="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre: </label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language: </label>
          <input
            type="text"
            name="language"
            id="language"
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
          <label htmlFor="summary">Summary: </label>
          <input
            type="text"
            name="summary"
            id="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="coverImageUrl">Cover Image Url: </label>
          <input
            type="text"
            name="coverImageUrl"
            id="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
        </div>
        <button>Add New Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
