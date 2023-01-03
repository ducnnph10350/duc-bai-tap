import React from "react";
import "./Bai7.css";
import ListMonAn from "./ListMonAn/ListMonAn";
import Category from "./Filters/Category/Category";
import useFilterCategory from "./Filters/Category/useFilterCategory";
import useFilterCuisine from "./Filters/Cuisine/useFilterCuisine";
import Cuisine from "./Filters/Cuisine/Cuisine";
import Price from "./Filters/Price/Price";
import useFilterPrice from "./Filters/Price/useFilterPrice";
import Search from "./Filters/Search/Search";
import useFilterSearch from "./Filters/Search/useFilterSearch";
import useFilterRenderData from "./ListMonAn/useFilterRenderData";
import Rate from "./Filters/Rate/Rate";
import useFilterRate from "./Filters/Rate/useFilterRate";
import Back from "./Back/Back";
import useBack from "./Back/useBack";

export default function Bai7() {
  // Các hooks thay đổi output của bộ filter
  const { onChangeCategory, category } = useFilterCategory();
  const { onChangeCuisine, cuisine } = useFilterCuisine();
  const { onChangePrice, price } = useFilterPrice();
  const { onChangeSearchText, searchText } = useFilterSearch();
  const { onChangeRate, rate } = useFilterRate();
  const { handleBackPage } = useBack();
  const { renderData } = useFilterRenderData(
    category,
    cuisine,
    price,
    rate,
    searchText
  );

  return (
    <>
      <div>
        <Back className="btn-back" onClick={handleBackPage}></Back>
      </div>
      <div className="container-bai7">
        <Search value={searchText} onChange={onChangeSearchText} />
        <div className="main-bai7">
          <div className="fillter-bai7">
            <Category onChange={onChangeCategory} />
            <Cuisine value={cuisine} onChange={onChangeCuisine} />
            <Price value={price} onChange={onChangePrice} />
            <Rate value={rate} onChange={onChangeRate} />
          </div>
          <div className="content-bai7">
            <ListMonAn data={renderData}></ListMonAn>
          </div>
        </div>
      </div>
    </>
  );
}
