import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ file, setFile ] = useState(null);
  const [ image, setImage ] = useState(null);
  const [ message, setMessage ] = useState('');
  const [ uploading, setUploading ] = useState(false);
  const [ allImages, setAllImages ] = useState([]);


  useEffect(() => {
    // fetch all images from server
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:8080/images');
        setAllImages(res.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);




  // handle file input change

  const handleInputChangeUpload = (e) => {
    setImage(e.target.files[ 0 ]);
  }
  console.log(image)
  // handle form submit
  const handleUpload = async () => {

    if (!image) {
      console.error('No image selected');
      setMessage('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    try {
      setUploading(true);
      const res = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setFile(res.data.url);
      setMessage('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file');
    }
    finally {
      setUploading(false);
      setImage(null);
    }

  }

  console.log(file)

  return (
    <>
      <h1>Image uploader</h1>
      <div>
        <input name='file' type="file" onChange={handleInputChangeUpload} />
        {uploading && <p>Uploading...</p>}
        <button onClick={handleUpload}>upload</button>
      </div>
      {message && <p style={file ? { color: 'green' } : { color: 'red' }}>{message}</p>}
      {file && (
        <div>

          <h2>Uploaded Image:</h2>
          <img src={file} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}

      <div>
        <h2>All Images:</h2>




        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

          {allImages.length === 0 ? (
            <p>No images uploaded yet.</p>
          ) : (
            allImages.map((img) => (
              <div key={img._id} style={{ marginBottom: '20px' }}>
                <img src={img.imageUrl} alt="Uploaded" style={{ height: '300px', width:'300px' }} />
              </div>
            ))
          )}
        </div>

      </div>

    </>
  )
}

export default App
