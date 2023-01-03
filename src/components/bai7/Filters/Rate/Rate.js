import { StarOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import React from "react";

const Rate = ({ value, onChange }) => {
  return (
    <div>
      <Radio.Group value={value} size="large">
        <Radio.Button onChange={onChange} value="1">
          <StarOutlined /> 1
        </Radio.Button>
        <Radio.Button onChange={onChange} value="2">
          <StarOutlined /> 2
        </Radio.Button>
        <Radio.Button onChange={onChange} value="3">
          <StarOutlined /> 3
        </Radio.Button>
        <Radio.Button onChange={onChange} value="4">
          <StarOutlined /> 4
        </Radio.Button>
        <Radio.Button onChange={onChange} value="5">
          <StarOutlined /> 5
        </Radio.Button>
        <Radio.Button onChange={onChange} value="">
          Cancel
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Rate;
