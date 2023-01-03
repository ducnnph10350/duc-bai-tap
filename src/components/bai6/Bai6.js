import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchOutlined } from "@ant-design/icons";
import "./Bai6.css";
import ListCountry from "./listCountry/ListCountry";
import DetailContry from "./detailContry/DetailContry";
import { useNavigate } from "react-router-dom";
export default function Bai6() {
  const [mode, setMode] = useState(true);
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const handleClickBoders = async (params) => {
    console.log(params);
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${params}`
    );
    setList(res.data);
    setModal(false);
    setValue(params);
  };
  const handleBtnBack = () => {
    setModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let searchData = [];
    if (value) {
      searchData = await axios.get(
        `https://restcountries.com/v3.1/name/${value}`
      );
    } else {
      searchData = await axios.get("https://restcountries.com/v3.1/all");
    }
    setList(searchData.data);
  };
  const handleClickCoutry = async (params) => {
    setModal(true);
    console.log(params);
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${params}`
    );
    setDetail(res.data);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getData = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setList(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(list);
  }, [list]);
  function handleDarkMode() {
    setMode(!mode);
  }
  return (
    <>
      <div>
        <button className="btn-back" onClick={handleBackPage}>
          Back
        </button>
      </div>
      <div className={mode ? "container-bai6" : "container-bai6-dark"}>
        <div className="header-bai6">
          <div className="content-header">
            <p className="title-bai6">Where in the word?</p>
            <div onClick={handleDarkMode} className="dark-mode">
              <i class="fa-solid fa-moon"></i>
              <span> </span>
              Dark Mode
            </div>
          </div>
        </div>
        <div className="search-fillter">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              value={value}
              onChange={(e) => handleChange(e)}
              className="input-search-bai6"
              type="text"
              placeholder="Search for a country..."
            />
            <SearchOutlined
              onClick={(e) => handleSubmit(e)}
              className="icon-search-bai6"
            />
          </form>
          <select className="select-bai6">
            <option>Fillter by Regio</option>
          </select>
        </div>
        <div className="main-bai6">
          {modal ? (
            <>
              <DetailContry
                onClick={handleBtnBack}
                data={detail}
                onClickBorders={handleClickBoders}
              ></DetailContry>
            </>
          ) : (
            <ListCountry onClick={handleClickCoutry} data={list ? list : []} />
          )}
        </div>
      </div>
    </>
  );
}
