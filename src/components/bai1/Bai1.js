import React, { useEffect, useState } from "react";
import "./Bai1.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Bai1() {
  const [listTodo, setListTodo] = useState([]);
  const [status, setStatus] = useState(true);
  const [value, setValue] = useState("");
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const handleRightClick = async (e) => {
    e.preventDefault();
    const id = e.target.id;
    await axios.delete(
      `https://62a00597a9866630f80561eb.mockapi.io/v1/todos/${id}`
    );
    // ko phaải gán
    const x = [...listTodo];
    const a = x.filter((item) => item.id !== id);
    setListTodo(a);
  };
  const handleLeftClick = async (id) => {
    console.log(id);
    // const res = await axios.get(
    //   `https://62a00597a9866630f80561eb.mockapi.io/v1/todos/${id}`
    // );
    // const isCompleted = await res.data.isCompleted;
    const isCompleted = listTodo.filter((e) => e.id === id)[0].isCompleted;
    const data = { isCompleted: !isCompleted };

    const res = await axios.put(
      `https://62a00597a9866630f80561eb.mockapi.io/v1/todos/${id}`,
      data
    );

    const x = [...listTodo];
    for (let i = 0; i < listTodo.length; i++) {
      if (x[i].id === id) {
        x[i].isCompleted = res.data.isCompleted;
        break;
      }
    }
    // const updateList = listTodo.map((item) => ({
    //   ...item,
    //   isCompleted: item.id === id ? res.data.isCompleted : item.isCompleted,
    // }));
    setListTodo(x);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setValueInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: value, isCompleted: false };

    const res = await axios.post(
      `https://62a00597a9866630f80561eb.mockapi.io/v1/todos/`,
      data
    );

    // setValueInput("");
    // const x = [...listTodo];

    // x.push(res);
    setListTodo((prev) => {
      return [...prev, res];
    });
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://62a00597a9866630f80561eb.mockapi.io/v1/todos"
      );

      console.log(res.data);
      setListTodo(res.data);
    } catch (err) {
      setListTodo([]);
    }
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
      <div className="container-bai1">
        <div className="main-bai1">
          <p className="title-bai1">todos</p>
          <div className="form-todos">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                value={valueInput}
                onChange={handleChange}
                className="input-todo"
                type="text"
                placeholder="Enter your todo"
              />
            </form>
            {listTodo.map((e) => (
              <div
                key={e.id}
                id={e.id}
                onContextMenu={(e) => handleRightClick(e)}
                onClick={() => handleLeftClick(e.id)}
                className={!e.isCompleted ? "list-todos" : "list-todo-false"}
              >
                {e.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
