import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(localStorage.getItem("adminToken"));

      const headers = {
        "Content-type": "application/json",
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        headers: headers,
      });

      if (!response.ok) {
        throw new Error("failed to fetch the data");
      }

      const result = response.json();

      console.log("API Result", result);
      setData(result);
    };

    fetchData().catch((err) => setError(err));
  }, [url]);

  return { data, error };
};

export default useFetch;
