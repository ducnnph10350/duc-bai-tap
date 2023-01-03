import { Radio } from "antd";
import React from "react";

const Category = ({ onChange }) => {
  return (
    <>
      <p>Category</p>
      <div className="type-food">
        <Radio.Group
          className="radio-btn"
          defaultValue="places"
          buttonStyle="solid"
        >
          <Radio.Button onClick={onChange} value="places">
            <i className="fa-solid fa-flag"></i>
            PLACES
          </Radio.Button>
          <Radio.Button onClick={onChange} value="dishes">
            <i className="fa-solid fa-pizza-slice"></i>
            DISHES
          </Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
};

export default Category;
