import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div className="div-input-search-bai7">
      <SearchOutlined width="200px" className="icon-search-bai7" />
      <input
        value={value}
        onChange={onChange}
        className="input-search-bai7"
        type="text"
        placeholder="Woodland Hills"
      />
    </div>
  );
};

export default Search;
