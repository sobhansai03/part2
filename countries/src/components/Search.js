import React from "react";

const Search = ({ country, setCountry }) => {
    return (
        <div>
            <label htmlFor="searchCountry">Find countries: </label>
            <input
                id="searchCountry"
                value={country}
                autoFocus
                autoComplete="off"
                onChange={(event) => setCountry(event.target.value)}
            />
        </div>
    );
};

export default Search;
