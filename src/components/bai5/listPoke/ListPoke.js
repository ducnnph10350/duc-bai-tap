import React from "react";
import "./ListPoke.css";
export default function ListPoke(props) {
  return (
    <>
      {props.data.map((list) => (
        <div key={list.id} className="container-listPoke">
          <div className="main-listPoke">
            <img className="image-poke" alt="aa" src={list.image} />
            <div className="div-id-poke">
              <p className="id-poke">#00{list.id}</p>
            </div>
            <p className="name-poke">Name</p>
            <p className="type-poke">Type: {list.type}</p>
          </div>
        </div>
      ))}
    </>
  );
}
