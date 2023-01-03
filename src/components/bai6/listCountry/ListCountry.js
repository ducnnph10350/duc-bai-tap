import React from "react";
import "./ListCountry.css";
export default function ListCountry(props) {
  return (
    <>
      {props.data.map((list) => (
        <div
          onClick={() => props.onClick(list.name.common)}
          className="container-listCountry"
        >
          <img className="img-country" src={list.flags.png} alt="??" />
          <div className="info-bai6">
            <p className="name-country">{list.name.common}</p>
            <p className="info-country">
              Population: <span className="span-info">{list.population}</span>
            </p>
            <p className="info-country">
              Region: <span className="span-info">{list.region}</span>
            </p>
            <p className="info-country">
              Capital: <span className="span-info">{list.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
