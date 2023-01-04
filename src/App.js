import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Bai2 from "./components/bai2/Bai2";
import Bai1 from "./components/bai1/Bai1";
import Bai4 from "./components/bai4/Bai4";
import Bai5 from "./components/bai5/Bai5";
import Bai6 from "./components/bai6/Bai6";
import Bai3 from "./components/bai3/Bai3";
import { useNavigate } from "react-router-dom";

const buttons = [
  { id: "1", pathname: "/bai1", title: "Pokedex" },
  { id: "2", pathname: "/bai1", title: "Pokedex" },
  { id: "3", pathname: "/bai1", title: "Pokedex" },
  { id: "4", pathname: "/bai1", title: "Pokedex" },
  { id: "5", pathname: "/bai1", title: "Pokedex" },
  { id: "6", pathname: "/bai1", title: "Pokedex" },
  { id: "7", pathname: "/bai1", title: "Pokedex" },
];

// high order function

// const handleBtnItem = (btn) => (event) => {
//   navigate(btn.pathname)
// }

// buttons.map(btn => (
//   <button onClick={handleBtnItem(btn)}>
//     {btn.title}
//   </button>
// ))

function App() {
  const navigate = useNavigate();
  const handleTodo = () => {
    navigate("/bai1");
  };
  const handleDadJokes = () => {
    navigate("/bai2");
  };
  const handleGithub = () => {
    navigate("/bai3");
  };
  const handleMovies = () => {
    navigate("/bai4");
  };
  const handlePokedex = () => {
    navigate("/bai5");
  };
  const handleQuocGia = () => {
    navigate("/bai6");
  };
  const handleTourApp = () => {
    navigate("/bai7");
  };
  return (
    <>
      <div className="App">
        <button className="btn-btn-router-app" onClick={handleTodo}>
          Todo
        </button>
        <button className="btn-btn-router-app" onClick={handleDadJokes}>
          Dad Jokes
        </button>
        <button className="btn-btn-router-app" onClick={handleGithub}>
          Github
        </button>
        <button className="btn-btn-router-app" onClick={handleMovies}>
          Movies
        </button>
        <button className="btn-btn-router-app" onClick={handlePokedex}>
          Pokedex
        </button>
        <button className="btn-btn-router-app" onClick={handleQuocGia}>
          Quoc gia
        </button>
        <button className="btn-btn-router-app" onClick={handleTourApp}>
          Tour App
        </button>
      </div>
    </>
  );
}

export default App;
