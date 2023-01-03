import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bai3.css";
import NotFound from "./user-bai3/NotFound";
import User from "./user-bai3/User";
export default function Bai3() {
  const [data, setData] = useState();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`https://api.github.com/users/${value}`);
      setData(res.data);
      setStatus(true);
      setValue("");
    } catch (error) {
      console.log("errror");
      setStatus(false);
      setValue("");
    }
  };
  return (
    <>
      <div className="background-bai3">
        <div>
          <button className="btn-back" onClick={handleBackPage}>
            Back
          </button>
        </div>
        <div className="container-bai3">
          <div className="main-bai3">
            <form onSubmit={(e) => getData(e)}>
              <input
                onChange={(e) => handleChange(e)}
                className="input-search-bai3"
                type="text"
                value={value}
                placeholder="Search a github users..."
              />
            </form>
            <div className="div-user-bai3">
              {status ? (
                !!data && Object.keys(data).length > 0 ? (
                  <User user={data} />
                ) : (
                  <div></div>
                )
              ) : (
                <NotFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
