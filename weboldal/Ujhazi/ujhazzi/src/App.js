import Home from "./Components/CountryList/Home/Home";
import axios from "axios";
import { useState, useEffect } from "react";
import CountryDetail from "./Components/CountryList/CountryDetail";
import CountryList from "./Components/CountryList/CountryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisitedCountries from "./Components/CountryList/VisitedCountries";
import Teacher from "./Components/CountryList/Teacher/Teacher";

function App() {
  const [database, setDatabase] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://restcountries.com/v3.1/all");
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!database) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  const noImg =
    "https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg";

  return (
    <div>
      <input type="text"></input>
    </div>
  );
}

export default App;
