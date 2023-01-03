import React, { useState } from "react";

const useFilterCuisine = () => {
  const [cuisine, setCuisine] = useState(["American", "Chinese", "Italian"]);
  const onChangeCuisine = (e) => {
    setCuisine(e);
  };

  return { onChangeCuisine, cuisine };
};

export default useFilterCuisine;
