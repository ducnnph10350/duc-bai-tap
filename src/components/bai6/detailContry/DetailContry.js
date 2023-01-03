import React from "react";
import "./DetailContry.css";
export default function DetailContry(props) {
  console.log(props.data);
  const convertLanguege = (langueges) => {
    let lan = "";
    Object.keys(langueges).forEach((e) => {
      lan = langueges[e];
    });
    return lan;
  };

  const convertCurrencies = (currencies) => {
    let currenciesName = "";
    Object.keys(currencies).forEach((e) => {
      currenciesName = currencies[e]["name"];
      // Object.keys(currencies[e]).forEach((el) => {
      //   currenciesName = currencies[e][el];
      // });
    });
    console.log(currenciesName);
    return currenciesName;
  };

  return (
    <>
      {props.data.map((list) => (
        <div className="container-contry-detail">
          <button className="btn-btn-back-bai6" onClick={props.onClick}>
            Back
          </button>
          <div className="main-contry-detail">
            <div>
              <img className="img-contry-detail" alt="" src={list.flags.png} />
            </div>
            <div className="div-info-detail">
              <p className="name-contry-detail">{list.name.common}</p>
              <div className="info-contry-detail">
                <div>
                  <p className="info-all-detail">
                    Native Name:
                    <span className="data-detail-info">
                      {list.name.nativeName.common}
                    </span>
                  </p>
                  <p className="info-all-detail">
                    Population:
                    <span className="data-detail-info">{list.population}</span>
                  </p>
                  <p className="info-all-detail">
                    Region:
                    <span className="data-detail-info">{list.region}</span>
                  </p>
                  <p className="info-all-detail">
                    Sub Region:{" "}
                    <span className="data-detail-info">{list.subregion}</span>
                  </p>
                  <p className="info-all-detail">
                    Capital:{" "}
                    <span className="data-detail-info">{list.capital}</span>
                  </p>
                </div>
                <div>
                  <p className="info-all-detail">
                    Top Lever Domain:{" "}
                    <span className="data-detail-info">{list.tld}</span>
                  </p>
                  <p className="info-all-detail">
                    Currencies:{" "}
                    <span className="data-detail-info">
                      {convertCurrencies(list.currencies)}
                    </span>
                  </p>
                  <p className="info-all-detail">
                    Langueges:{" "}
                    <span className="data-detail-info">
                      {convertLanguege(list.languages)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="div-btn-detail">
                <button
                  className="btn-boders-detail"
                  onClick={() => props.onClickBorders(list.borders[0])}
                >
                  {list.borders[0]}
                </button>
                <button
                  className="btn-boders-detail"
                  onClick={() => props.onClickBorders(list.borders[1])}
                >
                  {list.borders[1]}
                </button>
                <button
                  className="btn-boders-detail"
                  onClick={() => props.onClickBorders(list.borders[2])}
                >
                  {list.borders[2]}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
