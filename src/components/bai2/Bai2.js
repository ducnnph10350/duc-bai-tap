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
      <div className="App-2">
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

// https://uiverse.io/all?fbclid=IwAR2azh3c7KowpZ65B43pVg9zDTR1UwmRJ61JlTLTvvskinuO6AN9Ndqjnnw

// https://ui-buttons.web.app/?fbclid=IwAR2qBH2ALv7TnHrdudb9SADH8RaRdZ5XPQW-1EolwwH-4cEU8RKVyOmw5bE
// https://kentcdodds.com/blog/usememo-and-usecallback

// https://github.com/webuild-community/advent-of-frontend?fbclid=IwAR0npQecBrTR4gkiJ3OkZ3mX60SjJbTQdZ6q6ltaft8e6jJLPTB8Ra77WR8
