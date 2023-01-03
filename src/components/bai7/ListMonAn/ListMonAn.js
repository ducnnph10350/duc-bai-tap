import React from "react";
import "./ListMonAn.css";
export default function ListMonAn(props) {
  //     image
  //     title: "chinese food",
  //     time: "20-25 min",
  //     detiveryFee: "$6.4",
  //     rate: 2,
  //     price: 1500
  return (
    <>
      {props.data.map((food) => (
        <div className="container-list-mon-an">
          <img className="img-mon-an" src={food.image} alt="" />
          <div className="content-list-bai7">
            <p className="title-bai7">{food.title}</p>
            <p className="rate-bai7">
              <i className="fa-solid fa-star"></i>
              {food.rate}
            </p>
          </div>
          <div className="footer-mon-an-bai7">
            <p className="time-che-bien-bai7">
              {food.time}
              <span className="detivery-fee">
                Detivery Fee {food.detiveryFee}
              </span>
            </p>
            <p className="gia-tien-mon-an">${food.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
