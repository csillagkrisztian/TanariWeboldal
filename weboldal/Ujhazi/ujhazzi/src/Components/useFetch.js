import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [database, setDatabase] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  return { database };
};

export default useFetch;
