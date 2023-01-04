import React, { useEffect, useState } from "react";
import "./Bai4.css";
import axios from "axios";
import List from "./listMovie/List";
import { useNavigate } from "react-router-dom";

export default function Bai4() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const getData = async () => {
    const res = await axios.get(
      "https://62a00597a9866630f80561eb.mockapi.io/v1/movies"
    );
    setList(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-bai4">
      <div className="header-search">
        <button className="btn-back" onClick={handleBackPage}>
          {" "}
          Back
        </button>

        <input className="input-search" type="text" placeholder="Search" />
      </div>
      <div className="main-bai4">
        <div className="list-movie">
          <List data={list} />
        </div>
      </div>
    </div>
  );
}
