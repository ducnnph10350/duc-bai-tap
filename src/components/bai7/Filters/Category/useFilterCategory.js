import React, { useState } from "react";

const useFilterCategory = () => {
  const [category, setCategory] = useState("places");
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return { onChangeCategory, category };
};

export default useFilterCategory;
