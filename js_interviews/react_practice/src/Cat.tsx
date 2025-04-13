import { useState } from "react";

type CatType = {
  id: string;
  url: string;
  height: number;
  width: number;
};

const Cat = () => {
  const [limit, setLimit] = useState<number | string>(0);
  const [cats, setCats] = useState<CatType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_BASE_URL,
          },
        }
      );
      const data: CatType[] = await response.json();
      setCats(data);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🐱 Cat Gallery</h1>
      <div style={styles.inputContainer}>
        <input
          type="number"
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Enter number of cats"
          style={styles.input}
        />
        <button onClick={fetchData} style={styles.button}>
          Get Cats
        </button>
      </div>

      {cats.length > 0 && (
        <div style={styles.gallery}>
          {cats.map((cat) => (
            <img
              key={cat.id}
              src={cat.url}
              alt="cat image"
              style={styles.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "200px",
    marginRight: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  image: {
    borderRadius: "10px",
    maxWidth: "300px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default Cat;
