import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital,
        };

        axios
            .get("http://api.weatherstack.com/current", { params })
            .then((response) => {
                // console.log(response);
                setData(response.data.current);
            });
    }, [country]);
    // console.log(data);

    return (
        <div>
            <h2>Weather in {country.capital}</h2>

            {data ? (
                <>
                    <p>
                        <strong>Temperature:</strong> {data.temperature} celcius
                    </p>
                    <img src={data.weather_icons[0]} alt="Weather icon" />
                    <p>
                        <strong>Wind:</strong> {data.wind_speed} mph, direction{" "}
                        {data.wind_dir}
                    </p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
