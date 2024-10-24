// import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setvisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to ur visited country");
    console.log(country.name.common);
    const newVisitedCountrys = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountrys);
  };
  const handleVisitedFlags = (flag) => {
    console.log(flag.png);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h1>Countries:{countries.length}</h1>
      {/* visited country */}
      <div>
        <h5>Visited Countries :{visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div>
        {visitedFlags.map((flag, idx) => (
          <img key={idx} className="flag_container" src={flag.png}></img>
        ))}
      </div>
      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
