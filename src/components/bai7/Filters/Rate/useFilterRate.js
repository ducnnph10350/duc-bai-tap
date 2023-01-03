import React, { useState } from "react";

const useFilterRate = () => {
  const [rate, setRate] = useState("");
  const onChangeRate = (e) => {
    setRate(e.target.value);
  };

  return { onChangeRate, rate };
};

export default useFilterRate;
