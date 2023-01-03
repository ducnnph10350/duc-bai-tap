import React, { useEffect, useState } from "react";
import { api } from "../config";

const useFilterRenderData = (category, cuisine, price, rate, searchText) => {
  const [renderData, setData] = useState(api);
  useEffect(() => {
    console.log("category", category);
    console.log("cuisine", cuisine);
    console.log("price", price);
    console.log("searchText", searchText);
    console.log("rate", rate);
    let renderData = [...api];
    // Lọc theo category
    renderData = renderData.filter((a) => a.category === category);
    // Lọc theo cuisine
    renderData = renderData.filter((a) =>
      a.country.some((b) => cuisine.includes(b))
    );
    // Lọc theo price
    renderData = renderData.filter(
      (a) => a.price >= price[0] && a.price <= price[1]
    );
    // loc theo rate
    if (rate !== "") {
      renderData = renderData.filter((a) => a.rate == rate);
    }

    // Lọc theo search text
    if (searchText && searchText !== "")
      renderData = renderData.filter((a) =>
        searchText.toLocaleLowerCase().includes(a.title.toLocaleLowerCase())
      );
    console.log(renderData);
    setData(renderData);
  }, [category, cuisine, price, rate, searchText]);

  return { renderData };
};

export default useFilterRenderData;
