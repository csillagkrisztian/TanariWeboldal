import Home from "./Components/Home";
import CountryDetail from "./Components/CountryList/CountryDetail";
import CountryList from "./Components/CountryList/CountryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from "./Components/useFetch.js";
import VisitedCountries from "./Components/CountryList/VisitedCountries";

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

  const noImg =
    "https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg";

  console.log(countries, "DATABASE");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/visitedcountries"
            element={<VisitedCountries noImg={noImg} />}
          />
          <Route
            path="/countrydetail:name"
            element={<CountryDetail countries={countries} />}
          />
          <Route
            path="/countrylist"
            element={<CountryList countries={countries} noImg={noImg} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
