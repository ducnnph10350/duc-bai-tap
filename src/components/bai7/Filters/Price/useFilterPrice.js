import React, { useState } from "react";

const useFilterPrice = () => {
  const [price, setPrice] = useState([1000, 5000]);
  const onChangePrice = (e) => {
    setPrice(e);
  };

  return { onChangePrice, price };
};

export default useFilterPrice;
