import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((response) => setCountries(response.data));
    }, []);

    return (
        <div>
            {countries.length ? (
                <>
                    <Search country={country} setCountry={setCountry} />
                    {country && (
                        <Countries
                            country={country}
                            countries={countries}
                            setCountry={setCountry}
                        />
                    )}
                </>
            ) : (
                <p>Loading application...</p>
            )}
        </div>
    );
};
export default App;
