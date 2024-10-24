// import React from 'react'
import { useState } from "react";
import "./Country.css";
// import "../Countries/";
export default function Country({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}) {
  //   console.log(country);
  const {
    name,
    continents,
    capital,
    flags,
    languages,
    population,
    area,
    cca3,
  } = country;
  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!Visited);
  };
  //   console.log(handleVisitedCountry);

  return (
    // <div className={`country ${Visited && "visited"}`}>
    <div className={`country ${Visited && "visited"}`}>
      <h2 style={{ color: Visited ? "purple" : "white" }}>
        name : {name.common}{" "}
      </h2>
      <img className="pic" src={flags.png} alt="" />
      <p>continents : {continents} </p>
      <p>capital : {capital} </p>
      <p>languages : {area} SQ.m </p>
      <p>population : {population} jon </p>
      <p>
        <small>code : {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(country.flags)}>
        Add Flag
      </button>
      <br />
      <br />

      <button onClick={handleVisited}>{Visited ? "Visited" : "Going"}</button>
      {Visited ? "I have visited the country" : "I wana to visit"}
    </div>
  );
}
