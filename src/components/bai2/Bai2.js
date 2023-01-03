import React, { useEffect, useState } from "react";
import "./Bai2.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Bai2() {
  const [dadJokes, setDadJokes] = useState([]);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const handleClick = () => {
    setClick(!click);
  };
  const getData = async () => {
    const res = await axios.get(`https://icanhazdadjoke.com/slack`);
    console.log(res);
    if (res.data.attachments) {
      setDadJokes(res.data.attachments);
    } else {
    }
  };
  console.log(dadJokes);
  useEffect(() => {
    getData();
  }, [click]);

  //console.log(dadJokes.persons.attachments[0].fallback);
  return (
    <div className="background-bai2">
      <div>
        <button className="btn-back" onClick={handleBackPage}>
          Back
        </button>
      </div>
      <div className="App">
        <div className="main">
          <div className="main-text">
            <p className="title">Don't laugh challenge</p>
            <p className="joke">{`${
              dadJokes.length > 0 ? dadJokes[0].text : ""
            }`}</p>
            <button className="button-bai2" onClick={handleClick}>
              Get Another Joke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
