import Home from "./Components/Home";
import CountryList from "./Components/CountryList/CountryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useFetch from "./Components/useFetch.js";

function App() {
  const { database: countries } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  if (!countries) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  console.log(countries, "DATABASE");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/countrylist" element={<CountryList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
