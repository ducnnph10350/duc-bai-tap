import React from "react";
import "./List.css";
export default function List(props) {
  return (
    <>
      {props.data.map((list) => (
        <>
          <div className="container-list">
            <img alt="a" width="100%" src={list.poster} />
            <div>
              {list.title}
              <div className="rate">{list.imdb}</div>
            </div>
            <div className="overlay">
              <div className="text">{list.description}</div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
