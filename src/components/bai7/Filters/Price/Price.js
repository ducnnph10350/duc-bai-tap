import { Slider } from "antd";
import React from "react";

const Price = ({ value, onChange }) => {
  return (
    <div>
      <p>Price Range</p>
      <div>
        <div className="slider">
          <Slider
            onChange={onChange}
            value={value}
            range
            min={1000}
            max={5000}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
