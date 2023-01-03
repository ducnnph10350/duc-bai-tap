import React, { useState } from "react";

const useFilterSearch = () => {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return { onChangeSearchText, searchText };
};

export default useFilterSearch;
