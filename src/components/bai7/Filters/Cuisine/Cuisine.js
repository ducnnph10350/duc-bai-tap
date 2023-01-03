import { Checkbox } from "antd";
import React from "react";

const Cuisine = ({ value, onChange }) => {
  return (
    <div className="radio-contry-bai7">
      <p>Cuisine</p>
      <div className="checkBox-bai7">
        <Checkbox.Group
          style={{ width: "100%" }}
          value={value}
          onChange={onChange}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Checkbox value="American">American</Checkbox>
            <Checkbox value="Chinese">Chinese</Checkbox>
            <Checkbox value="Italian">Italian</Checkbox>
          </div>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default Cuisine;
