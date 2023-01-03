import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bai5.css";
import ListPoke from "./listPoke/ListPoke";
import { useNavigate } from "react-router-dom";

export default function Bai5() {
  const [listPokes, setListPokes] = useState([]);

  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const getData = async () => {
    const res = await axios.get(
      "https://62a00597a9866630f80561eb.mockapi.io/v1/pokedex"
    );
    setListPokes(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <button className="btn-back" onClick={handleBackPage}>
          Back
        </button>
      </div>
      <div className="container-bai5">
        <p className="title-bai5">Pokedex</p>
        <div className="main-bai5">
          <ListPoke data={listPokes}></ListPoke>
        </div>
      </div>
      <div className="container-bai5">
        <p className="title-bai5">Pokedex</p>
        <div className="main-bai5">
          <ListPoke data={listPokes}></ListPoke>
        </div>
      </div>
    </>
  );
}
